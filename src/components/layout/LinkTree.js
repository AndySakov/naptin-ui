import React from "react";
import { Link } from "react-router-dom";

const LinkTree = () => {
  return (
    <div className="flex w-full h-screen bg-purple-300 justify-center items-center">
      <div className="flex flex-col w-4/12 h-5/6 p-6 items-center bg-white rounded-3xl shadow-xl backdrop-blur-lg">
        <h2 className="font-bold text-2xl text-green-400 mb-3">Link Tree</h2>
        <div className="flex flex-col w-full h-full px-6 py-2 items-center">
          <Link to="/dashboard" className="btn btn-tertiary w-2/3 h-12 text-bold text-lg">Empty Page</Link>
          <Link to="/dashboard/manage/organizations" className="btn btn-tertiary w-2/3 h-12 text-bold text-lg">Manage Organizations</Link>
          <Link to="/dashboard/manage/reports" className="btn btn-tertiary w-2/3 h-12 text-bold text-lg">Manage Reports</Link>
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
