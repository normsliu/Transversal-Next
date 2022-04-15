import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Authors from "./Authors";


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Authors/>
      <Footer />
    </>
  );
};

export default Layout;
