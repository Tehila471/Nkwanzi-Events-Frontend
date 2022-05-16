import React from "react";

const Hero = () => {
  return (
    <div className="w-full space-x-6">
      <div className="rounded  grid grid-cols-2 gap-8 items-center justify-center h-[600px] py-4 px-10">
        <div className="bg-indigo-900 w-full h-full"></div>
        <div className=" grid grid-cols-2 gap-4 ">
          <div className="bg-indigo-900 w-full h-[300px]"></div>
          <div className="bg-indigo-900 w-full h-[300px]"></div>
          <div className="bg-indigo-900 w-full h-[300px]"></div>
          <div className="bg-indigo-900 w-full h-[300px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
