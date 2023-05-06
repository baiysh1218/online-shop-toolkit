import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editProduct } from "../../../../redux/product/ProductActions";
import { collectionName } from "../../../../helpers/const";

const EditProducts = () => {
  const [name, setName] = useState("");
  const [descr, setDescr] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  const updateProduct = {
    descr,
    img,
    name,
    price,
  };

  const handleEdit = () => {
    dispatch(
      editProduct({
        id,
        updateProduct,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="text"
        onChange={e => setDescr(e.target.value)}
        placeholder="description"
      />
      <input
        type="text"
        onChange={e => setImg(e.target.value)}
        placeholder="image"
      />
      <input
        type="text"
        onChange={e => setPrice(e.target.value)}
        placeholder="price"
      />
      <input type="text" onChange={e => setType(e.target.value)} />
      <button onClick={handleEdit}>Edit Product</button>
    </div>
  );
};

export default EditProducts;
