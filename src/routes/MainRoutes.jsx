import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../components/lending/auth/Auth";
import HomePage from "../components/lending/homePage/HomePage";
import PageNotFound from "../components/lending/pageNotFound/PageNotFound";
import EditProducts from "../components/lending/products/editProducts/EditProducts";
import PostProducts from "../components/lending/products/postProduct/PostProducts";
import ProductsList from "../components/lending/products/productsList/ProductsList";
import {
  admin,
  authPath,
  editProductsPath,
  homePage,
  pageNotFound,
  postProductPath,
  readProductsPath,
} from "../helpers/const";

const MainRoutes = () => {
  const { email } = JSON.parse(localStorage.getItem("user"));
  const PUBLIC_ROUTES = [
    { link: readProductsPath, element: <ProductsList />, id: 1 },
    { link: homePage, element: <HomePage />, id: 2 },
    { link: authPath, element: <Auth />, id: 3 },
    { link: pageNotFound, element: <PageNotFound />, id: 4 },
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
      {email === admin
        ? PRIVATE_ROUTES.map(route => (
            <Route path={route.link} element={route.element} key={route.id} />
          ))
        : ""}
    </Routes>
  );
};

export default MainRoutes;
