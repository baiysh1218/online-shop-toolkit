import { async } from "@firebase/util";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../fire";
import {
  collectionName,
  productCreateProduct,
  productDeleteProduct,
  productGetProducts,
  productsEditProduct,
} from "../../helpers/const";

export const getProduct = createAsyncThunk(
  productGetProducts,
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const createProducts = createAsyncThunk(
  productCreateProduct,
  async (newProduct, { rejectWithValue }) => {
    try {
      await addDoc(collection(db, collectionName), newProduct);
      getProduct();
      return newProduct;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  productDeleteProduct,
  async (id, { rejectWithValue }) => {
    try {
      const userDoc = doc(db, collectionName, id);
      await deleteDoc(userDoc);
      return id;
    } catch (err) {
      return rejectWithValue(err.code);
    }
  }
);

export const editProduct = createAsyncThunk(
  productsEditProduct,
  async ({ collection, id, updateProduct }, { rejectWithValue }) => {
    try {
      await updateDoc(doc(collection(db, collection), id), updateProduct);
      return { id, updateProduct };
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
