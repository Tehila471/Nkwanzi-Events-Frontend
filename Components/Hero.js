/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full space-x-6">
      <div className="rounded  grid grid-cols-2 gap-8 items-center justify-center h-[600px] py-4 px-10">
        <div className="bg-indigo-900 w-full h-full">
          <img
            className="object-cover h-full w-full"
            src="/table.jpg"
            alt="Instagram Icon"
          ></img>
        </div>
        <div className=" grid grid-cols-2 gap-4 ">
          <div className="bg-indigo-900 w-full h-[300px]">
            <img
              className="object-cover h-full w-full"
              src="/guitar.jpg"
              alt="Instagram Icon"
            ></img>
          </div>
          <div className="bg-indigo-900 w-full h-[300px]">
            <img
              className="object-cover h-full w-full"
              src="/girl.jpg"
              alt="Instagram Icon"
            ></img>
          </div>
          <div className="bg-indigo-900 w-full h-[300px]">
            <img
              className="object-cover h-full w-full"
              src="/drum.jpg"
              alt="Instagram Icon"
            ></img>
          </div>
          <div className="bg-indigo-900 w-full h-[300px]">
            <img
              className="object-cover h-full w-full"
              src="/startup.jpg"
              alt="Instagram Icon"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
