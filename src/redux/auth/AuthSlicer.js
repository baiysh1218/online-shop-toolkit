import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    postProduct: (state, { payload }) => {},
  },
});

export const { postProduct } = authSlicer.actions;
