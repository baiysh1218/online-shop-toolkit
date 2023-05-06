import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../fire";
import {
  checkAuth,
  logOut,
  registerUserWidthEmailPassword,
  signInGoogle,
  signInUserWidthEmailPassword,
} from "./AuthActions";

const initialState = {
  user: [],
  status: "idle",
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Register User Width Email Password Start
      .addCase(registerUserWidthEmailPassword.pending, state => {
        state.status = "pending";
      })
      .addCase(
        registerUserWidthEmailPassword.fulfilled,
        (state, { payload }) => {
          state.status = "succeeded";
          state.user = payload;
        }
      )
      .addCase(
        registerUserWidthEmailPassword.rejected,
        (state, { payload }) => {
          state.status = "failed";
          state.error = payload;
        }
      )
      // Register User Width Email Password End

      // Sign In User Width Email Password Start
      .addCase(signInUserWidthEmailPassword.pending, state => {
        state.status = "pending";
      })
      .addCase(signInUserWidthEmailPassword.fulfilled, (state, { payload }) => {
        state.state = "succeeded";
        state.user = payload;
      })
      .addCase(signInUserWidthEmailPassword.rejected, (state, { payload }) => {
        state.status = "rejected";
        state.error = payload;
      })
      // Sign In User Width Email Password End
      // Sign In Width Google Start
      .addCase(signInGoogle.pending, state => {
        state.status = "pending";
      })
      .addCase(signInGoogle.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.user = payload;
      })
      .addCase(signInGoogle.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      // Sign In Width Google End
      // Log Out Start
      .addCase(logOut.pending, state => {
        state.status = "pending";
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        localStorage.removeItem("user");
        state.user = payload;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      // Log Out End
      // Check Auth Start
      .addCase(checkAuth.pending, state => {
        state.status = "pending";
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(checkAuth.rejected, (state, { payload }) => {
        state.status = "failed";
        state.isLoggedIn = false;
        state.isLoading = true;
        state.state.error = payload;
      });
    // Check Auth End
  },
});

export const { userEmailPassword, signInWithGoole } = authSlicer.actions;
