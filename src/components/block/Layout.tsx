import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sider } from "./Sider";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Footer />
      <Outlet />
      <Sider />
    </div>
  );
};
export default Layout;
