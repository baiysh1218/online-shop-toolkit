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

  const { id } = useParams();

  const dispatch = useDispatch();

  const updateProduct = {
    name,
    descr,
    price,
    img,
  };

  const handleEdit = () => {
    console.log(updateProduct, id, collectionName);
    dispatch(
      editProduct({
        collection: collectionName,
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
      <button onClick={handleEdit}>Edit Product</button>
    </div>
  );
};

export default EditProducts;
