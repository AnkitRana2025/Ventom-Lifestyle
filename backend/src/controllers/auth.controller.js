import { userModel } from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken, createRefreshToken, readRefreshToken } from "../utils/auth.utils.js";

export const registerUser = async (req, res) => {
  try {
    console.log("regiter controller called");
    const { username, email, password } = req.body;
    const isUserAlreadyExsist = await userModel.findOne({ email });

    if (isUserAlreadyExsist) {
      return res.status(400).json({
        message: "User Already Exsist",
        error: [
          {
            field: "error",
            message: "User is already exsist with this email address",
          },
        ],
      });
    }
    const user = await userModel.create({
      username,
      email,
      passwordHash: await bcrypt.hash(password, 12),
    });
    const accessToken = createAccessToken({
      userId: user._id,
      role: user.role,
    });

    const refreshToken = createRefreshToken({
      userId: user._id,
      role: user.role,
    });

    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    await userModel.findByIdAndUpdate(user._id, {
      refreshToken,
    });

    res.status(201).json({
      message: "User registerd",
      data: {
        user: {
          email: user.email,
          username: user.username,
          id: user._id,
        },
        accessToken,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "User registration failed some issues",
      error: error,
    });
  }
};


export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPassword = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!isPassword) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const payload = {
      userId: user._id,
      role: user.role,
    };

    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    // Save refresh token in database
    user.refreshToken = refreshToken;
    await user.save();

    // Send refresh token through an HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    return res.status(200).json({
      message: "User logged in successfully",
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      },
      accessToken,
    });
  } catch (error) {
    console.error("Login error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const refreshController = async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token is required",
      });
    }

    // 1. Verify refresh token signature and expiry
    const decoded = readRefreshToken(refreshToken);

    const { userId } = decoded;

    // 2. Find user in database
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(401).json({
        message: "Invalid refresh token",
      });
    }

    // 3. Compare token with the stored token
    if (refreshToken !== user.refreshToken) {
      return res.status(401).json({
        message: "Refresh token mismatch",
      });
    }

    // 4. Create new tokens using the current user's data
    const payload = {
      userId: user._id,
      role: user.role,
    };

    const newAccessToken = createAccessToken(payload);
    const newRefreshToken = createRefreshToken(payload);

    // 5. Save the rotated refresh token
    user.refreshToken = newRefreshToken;
    await user.save();

    // 6. Set the new refresh token cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    // 7. Send response
    return res.status(200).json({
      message: "Tokens rotated successfully",
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    // Invalid, expired, or otherwise rejected token
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError" ||
      error.name === "NotBeforeError"
    ) {
      return res.status(401).json({
        message: "Invalid or expired refresh token",
      });
    }

    console.error("Refresh token error:", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
