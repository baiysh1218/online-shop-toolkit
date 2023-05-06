import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProducts } from "../../../../redux/product/ProductActions";

const PostProducts = () => {
  // const state = useSelector(state => state.product.productState);

  const [descr, setDescr] = useState("");
  const [img, setimg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  const newProduct = {
    descr,
    img,
    name,
    price,
    type,
  };

  const clearInputs = () => {
    setDescr("");
    setName("");
    setimg("");
    setPrice(0);
  };

  const handlePostProducts = () => {
    dispatch(createProducts(newProduct));
    clearInputs();
  };

  return (
    <div>
      <input
        type="text"
        value={descr}
        onChange={e => {
          setDescr(e.target.value);
        }}
        placeholder="description"
      />
      <input
        type="text"
        value={img}
        onChange={e => {
          setimg(e.target.value);
        }}
        placeholder="image"
      />
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
        placeholder="name"
      />
      <input
        type="text"
        value={price}
        onChange={e => {
          setPrice(+e.target.value);
        }}
        placeholder="price"
      />
      <input type="text" value={type} onChange={e => setType(e.target.value)} />
      <button onClick={handlePostProducts}>POST PRODUCT</button>
    </div>
  );
};

export default PostProducts;
