import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/lending/homePage/HomePage";
import EditProducts from "../components/lending/products/editProducts/EditProducts";
import PostProducts from "../components/lending/products/postProduct/PostProducts";
import ProductsList from "../components/lending/products/productsList/ProductsList";
import {
  editProductsPath,
  homePage,
  postProductPath,
  readProductsPath,
} from "../helpers/const";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: readProductsPath, element: <ProductsList />, id: 1 },
    { link: homePage, element: <HomePage />, id: 2 },
  ];
  const PRIVATE_ROUTES = [
    { link: postProductPath, element: <PostProducts />, id: 1 },
    { link: `${editProductsPath}/:id`, element: <EditProducts />, id: 2 },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map(route => (
        <Route path={route.link} element={route.element} key={route.id} />
      ))}
      {PRIVATE_ROUTES.map(route => (
        <Route path={route.link} element={route.element} key={route.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
