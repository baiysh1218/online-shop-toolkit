import React from "react";
import classes from "./pageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1>404</h1>
        <p>PAGE NOT FOUND</p>
      </div>
    </div>
  );
};

export default PageNotFound;
