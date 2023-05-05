import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProducts } from "../../../../redux/product/ProductActions";

const PostProducts = () => {
  // const state = useSelector(state => state.product.productState);

  const [descr, setDescr] = useState("");
  const [img, setimg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const newProduct = {
    descr,
    img,
    name,
    price,
  };

  const clearInputs = () => {
    setDescr("");
    setName("");
    setPrice(0);
    setimg("");
  };

  const handlePostProducts = () => {
    dispatch(createProducts(newProduct));
    clearInputs();
  };

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setDescr(e.target.value);
        }}
        placeholder="description"
      />
      <input
        type="text"
        onChange={e => {
          setimg(e.target.value);
        }}
        placeholder="image"
      />
      <input
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
        placeholder="name"
      />
      <input
        type="text"
        onChange={e => {
          setPrice(+e.target.value);
        }}
        placeholder="price"
      />
      <button onClick={handlePostProducts}>POST PRODUCT</button>
    </div>
  );
};

export default PostProducts;
