import React from "react";
import { useNavigate } from "react-router-dom";
import {
  authPath,
  postProductPath,
  readProductsPath,
} from "../../../helpers/const";
import "./styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div onClick={() => navigate(readProductsPath)}>READ</div>
          <div onClick={() => navigate(postProductPath)}>POST</div>
          <div onClick={() => navigate(authPath)}>AUTH</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
