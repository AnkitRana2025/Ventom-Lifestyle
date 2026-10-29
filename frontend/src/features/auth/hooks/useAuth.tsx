import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "./hook";

import { addUser } from "../authSlice";

export type LoginCredentials = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterCredentials = {
  fullName: string;
  email: string;
  password: string;
};

type StoredUser = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const USERS_KEY = "velmont_users";
const SESSION_KEY = "velmont_session";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  // =========================
  // LOGIN
  // =========================

  const login = async (data: LoginCredentials) => {
    setLoginError("");

    try {
      const storedUsers = localStorage.getItem(USERS_KEY);

      const users: StoredUser[] = storedUsers
        ? JSON.parse(storedUsers)
        : [];

      const user = users.find(
        (storedUser) =>
          storedUser.email.toLowerCase() ===
          data.email.toLowerCase().trim()
      );

      if (!user) {
        setLoginError("No account found with this email.");
        return false;
      }

      if (user.password !== data.password) {
        setLoginError("Incorrect password.");
        return false;
      }

      // Session
      const session = {
        userId: user.id,
        email: user.email,
        isAuthenticated: true,
      };

      const sessionData = JSON.stringify(session);

      if (data.rememberMe) {
        localStorage.setItem(SESSION_KEY, sessionData);
        sessionStorage.removeItem(SESSION_KEY);
      } else {
        sessionStorage.setItem(SESSION_KEY, sessionData);
        localStorage.removeItem(SESSION_KEY);
      }

      // 🔥 Redux update
      dispatch(
        addUser({
          id: user.id,
          name: user.name,
          email: user.email,
        })
      );

      navigate("/home");

      return true;
    } catch (error) {
      console.error("Login error:", error);

      setLoginError(
        "Something went wrong while logging in. Please try again."
      );

      return false;
    }
  };

  // =========================
  // REGISTER
  // =========================

  const register = async (data: RegisterCredentials) => {
    setRegisterError("");

    try {
      const storedUsers = localStorage.getItem(USERS_KEY);

      const users: StoredUser[] = storedUsers
        ? JSON.parse(storedUsers)
        : [];

      const normalizedEmail = data.email
        .toLowerCase()
        .trim();

      // Check duplicate email
      const existingUser = users.find(
        (user) => user.email === normalizedEmail
      );

      if (existingUser) {
        setRegisterError(
          "An account with this email already exists."
        );

        return false;
      }

      // Create user
      const newUser: StoredUser = {
        id: crypto.randomUUID(),
        name: data.fullName.trim(),
        email: normalizedEmail,
        password: data.password,
      };

      // Save user
      localStorage.setItem(
        USERS_KEY,
        JSON.stringify([...users, newUser])
      );

      console.log("Account created:", {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      });

      navigate("/login");

      return true;
    } catch (error) {
      console.error("Registration error:", error);

      setRegisterError(
        "Something went wrong while creating your account."
      );

      return false;
    }
  };

  useEffect(() => {
  const localSession = localStorage.getItem("velmont_session");
  const sessionSession = sessionStorage.getItem("velmont_session");

  const sessionData = localSession || sessionSession;

  if (!sessionData) return;

  try {
    const session = JSON.parse(sessionData);

    if (!session.isAuthenticated) return;

    const storedUsers = localStorage.getItem("velmont_users");

    const users: StoredUser[] = storedUsers
      ? JSON.parse(storedUsers)
      : [];

    const user = users.find(
      (storedUser) => storedUser.id === session.userId
    );

    if (!user) return;

    dispatch(
      addUser({
        id: user.id,
        name: user.name,
        email: user.email,
      })
    );
  } catch (error) {
    console.error("Session restore error:", error);
  }
}, [dispatch]);

  return {
    login,
    register,
    loginError,
    registerError,
  };
};



export default useAuth;