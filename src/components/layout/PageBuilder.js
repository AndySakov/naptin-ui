import React from "react";

const PageBuilder = ({ name = "Empty Page", extras = <></>, children }) => {
  return (
    <>
      <div className="flex justify-between h-24 px-10 bg-white mx-8 mb-0.5 w-auto">
        <h1 className="my-6 text-3xl text-left text-bold text-gray-700 mr-4">
          {name}
        </h1>
        <div className="flex h-full">{extras}</div>
      </div>
      <div className="flex flex-col h-auto min-h-[48rem] px-10 py-6 bg-white mx-8 mb-0.5 w-auto">
        {children}
      </div>
    </>
  );
};

export default PageBuilder;
