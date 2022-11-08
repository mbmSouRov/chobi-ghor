import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/SharedPages/Footer";
import Header from "../Components/SharedPages/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
