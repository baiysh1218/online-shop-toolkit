import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/lending/navbar/Navbar";
import PostProducts from "./components/lending/products/postProduct/PostProducts";
import { checkAuth } from "./redux/auth/AuthActions";
import { increment, signInWithGoole } from "./redux/auth/AuthSlicer";
import { state, store } from "./redux/store/store";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      {/* <PostProducts /> */}
    </div>
  );
};

export default App;
