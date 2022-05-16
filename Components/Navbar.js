import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-32 bg-gray-100 p-8  space-x-6">
      <div className="rounded bg-gray-300 grid grid-cols-10 gap-4 items-center justify-center h-[80px] py-4 px-10">
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Home
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Entertainment
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Sports
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Corporate & Business
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Charity
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Political
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Religious
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Traditionl
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Exhibition
        </div>
        <div className="h-[50px] w-full bg-indigo-900 text-gray-100 flex flex-row items-center justify-center">
          Competitions & Promos
        </div>
      </div>
    </div>
  );
};

export default Navbar;
