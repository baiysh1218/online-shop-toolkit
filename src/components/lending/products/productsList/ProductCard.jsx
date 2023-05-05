import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editProductsPath } from "../../../../helpers/const";
import { deleteProduct } from "../../../../redux/product/ProductActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <img src={product.img} alt="image is not defined" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
      <button onClick={() => dispatch(deleteProduct(product.id))}>
        Delete
      </button>
      <button onClick={() => navigate(`${editProductsPath}/${product.id}`)}>
        Edit
      </button>
    </div>
  );
};

export default ProductCard;
