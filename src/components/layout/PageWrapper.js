import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const PageWrapper = () => {
  return (
    <div className="flex w-full h-full text-black bg-slate-100">
      <SideBar />
      <div className="flex flex-col w-full h-full">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default PageWrapper;
