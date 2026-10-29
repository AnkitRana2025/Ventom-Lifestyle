import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../app/config/axiosInstance";

type LoginCredentials = {
  email: string;
  password: string;
};

type RegisterCredentials = {
  fullName: string;
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials: LoginCredentials, thunkApi) => {
    try {
      console.log("LOGIN REQUEST:", credentials);

      const res = await axiosInstance.post(
        "/auth/login",
        credentials
      );

      console.log("LOGIN RESPONSE:", res);

      return res.data;
    } catch (error: any) {
      console.log("LOGIN ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);

      return thunkApi.rejectWithValue(
        error.response?.data?.message ||
          "Login failed"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (credentials: RegisterCredentials, thunkApi) => {
    try {
      console.log("REGISTER REQUEST:", credentials);

      const res = await axiosInstance.post(
        "/auth/register",
        credentials
      );

      console.log("REGISTER RESPONSE:", res);

      return res.data;
    } catch (error: any) {
      console.log("REGISTER ERROR:", error);
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);

      return thunkApi.rejectWithValue(
        error.response?.data?.message ||
          "Registration failed"
      );
    }
  }
);