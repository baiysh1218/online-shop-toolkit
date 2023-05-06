import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../redux/product/ProductActions";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const { products } = useSelector(state => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      {products?.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </>
  );
};

export default ProductsList;
