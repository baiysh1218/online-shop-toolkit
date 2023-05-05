import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/lending/navbar/Navbar";
import PostProducts from "./components/lending/products/postProduct/PostProducts";
import { increment, signInWithGoole } from "./redux/auth/AuthSlicer";
import { state, store } from "./redux/store/store";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  // const state = useSelector(state => state.auth);
  // console.log(state);

  // const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <MainRoutes />
      {/* <button
        onClick={() => {
          dispatch(signInWithGoole());
        }}>
        Google
      </button> */}
      {/* <PostProducts /> */}
    </div>
  );
};

export default App;
