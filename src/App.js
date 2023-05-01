import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/lending/navbar/Navbar";
import { increment } from "./redux/auth/AuthSlicer";
import { state, store } from "./redux/store/store";

const App = () => {
  const state = useSelector(state => state.auth);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
