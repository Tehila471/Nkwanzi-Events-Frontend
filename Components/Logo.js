/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="bg-gray-100 h-[160px]">
      <img
        className="h-[160px] w-full object-cover"
        src="/Logo.png"
        alt="Logo Image"
      ></img>
    </div>
  );
};

export default Logo;
