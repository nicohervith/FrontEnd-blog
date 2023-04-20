import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";


const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
