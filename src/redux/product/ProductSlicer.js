import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

import { db } from "../../fire";
import { productGetProducts } from "../../helpers/const";
import {
  createProducts,
  deleteProduct,
  editProduct,
  getProduct,
} from "./ProductActions";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // Get Products start
      .addCase(getProduct.pending, state => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = payload;
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      // Get Products end

      // Create Products start
      .addCase(createProducts.pending, state => {
        state.status = "loading";
      })
      .addCase(createProducts.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products.push(payload);
      })
      .addCase(createProducts.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      // Create Products end

      // Delete Products start
      .addCase(deleteProduct.pending, state => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.products = state.products.filter(
          product => product.id !== payload
        );
      })
      .addCase(deleteProduct.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      })
      // Delete Products end

      // Edit Product start
      .addCase(editProduct.pending, state => {
        state.status = "pending";
      })
      .addCase(editProduct.fulfilled, (state, { payload }) => {
        const index = state.products.findIndex(
          product => product.id === payload.id
        );
        console.log(payload);
        state.products[index] = payload.updateProduct;
        state.status = "succeeded";
      })
      .addCase(editProduct.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload;
      });
    // Edit Product end
  },
});

export default productSlice.reducer;
