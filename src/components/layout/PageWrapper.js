import React from "react";
import NavBar from "./NavBar";
import PageBuilder from "./PageBuilder";
import SideBar from "./SideBar";
import SearchBar from "../SearchBar";

const PageWrapper = () => {
  return (
    <div className="flex w-full h-full text-black bg-slate-100">
      <SideBar />
      <div className="flex flex-col w-full h-full">
        <NavBar />
        <PageBuilder
          name="Empty Page"
          extras={
            <div className="flex flex-row w-full h-full py-4">
              <SearchBar placeholder="Search by name, email or phone..." />
              <button type="submit" className="btn btn-secondary mx-0">
                Click Me!
              </button>
            </div>
          }
        >
          
        </PageBuilder>
      </div>
    </div>
  );
};

export default PageWrapper;
