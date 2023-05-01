import { configureStore } from "@reduxjs/toolkit";
import { authSlicer } from "../auth/AuthSlicer";

export const store = configureStore({
  reducer: { auth: authSlicer.reducer },
});
