import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Authors from "./Authors";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
      <Authors />
      <Footer />
    </>
  );
};

export default Layout;
