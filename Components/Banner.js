/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Logo from "./Logo";

const Banner = () => {
  return (
    <div className="bg-gray-100 h-[180px] w-full flex flex-row space-x-8">
      <div className="h-[160px] w-[8px]"></div>
      <div className="rounded text-gray-100 items-center h-[160px] w-10/12 bg-gray-300">
        <img
          className="h-[160px] w-full object-cover"
          src="/Banner.png"
          alt="Banner Image"
        ></img>
      </div>
      <div className="w-2/12">
        <Logo />
      </div>
      <div className="h-[160px] w-[8px]"></div>
    </div>
  );
};

export default Banner;
