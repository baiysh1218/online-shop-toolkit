import {
  configureStore,
  createSerializableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import { authSlicer } from "../auth/AuthSlicer";
import ProductSlicer from "../product/ProductSlicer";
import {
  createProducts,
  getProduct,
  deleteProduct,
} from "../product/ProductActions";

const store = configureStore({
  reducer: { auth: authSlicer.reducer, product: ProductSlicer },
  extraReducer: {
    createProducts,
    getProduct,
    deleteProduct,
  },
});

export default store;
