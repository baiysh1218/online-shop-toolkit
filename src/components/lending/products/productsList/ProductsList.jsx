import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../redux/product/ProductActions";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const state = useSelector(state => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  // console.log(state.product.products);

  return (
    <>
      {state.products?.map(product => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </>
  );
};

export default ProductsList;
