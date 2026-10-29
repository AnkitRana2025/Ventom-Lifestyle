import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authAction";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isLoading: false,
  },

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },

    removeUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })

      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;