import React from "react";
import { useNavigate } from "react-router-dom";
import { postProductPath, readProductsPath } from "../../../helpers/const";
import "./styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div onClick={() => navigate("/products")}>READ</div>
          <div onClick={() => navigate("/createProduct")}>POST</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
