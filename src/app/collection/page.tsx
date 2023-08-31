import Navbar from "@/components/navbar";
import React from "react";

const Collection = () => {
  return (
    <div>
      <Navbar />
      <div className="content flex flex-col p-12 gap-4">
        <div className="banner w-full h-40 rounded-md bg-slate-500 p-4">
          <h1 className="text-white text-xl"> Hello world ini banner</h1>
        </div>
        <div className="w-full h-40 rounded-md bg-slate-500 p-4">
          <h1>testing</h1>
        </div>
      </div>
    </div>
  );
};

export default Collection;
