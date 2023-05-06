import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../../fire";
import {
  userCheckAuth,
  userRegisterType,
  userSignInGoogle,
  userSignInType,
  userSignOutType,
} from "../../helpers/const";

export const registerUserWidthEmailPassword = createAsyncThunk(
  userRegisterType,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      localStorage.setItem("user", JSON.stringify(userCredential.user.email));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const signInUserWidthEmailPassword = createAsyncThunk(
  userSignInType,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      localStorage.setItem("user", JSON.stringify(userCredential.user.email));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const signInGoogle = createAsyncThunk(
  userSignInGoogle,
  async ({ rejectWithValue }) => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      localStorage.setItem("user", JSON.stringify(userCredential.user.email));
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  userSignOutType,
  async ({ rejectWithValue }) => {
    try {
      signOut(auth);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const checkAuth = createAsyncThunk(
  userCheckAuth,
  async (_, { rejectWithValue }) => {
    try {
      return new Promise(resolve => {
        onAuthStateChanged(auth, user => {
          resolve(user);
        });
      });
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
