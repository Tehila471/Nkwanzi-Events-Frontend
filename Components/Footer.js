/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[190px] bg-gray-700 mt-8 p-10 grid md:grid-cols-2 border-b-2 border-gray-500">
        <div className=" bg-gray-700 ">
          <div className="text-lg text-gray-100">
            JOIN OUR FREE WEEKLY NEWSLETTER
          </div>
          <div className="text-md text-gray-100">
            Step your social game up, Join for free with 700k others
          </div>
          <div className="w-[180px] bg-gray-200 rounded py-2 px-6 text-gray-900 hover:bg-gray-600 mt-6 ">
            Click to Subscribe
          </div>
        </div>
        <div className="bg-gray-700">
          <div className="text-lg text-gray-100">FAQ</div>
          <div className="text-LG text-gray-100">About Us</div>
          <div className="text-LG text-gray-100">Terms & Conditions</div>
          <div className="text-LG text-gray-100">Privacy Policy</div>
        </div>
      </div>
      <div className="w-full h-[60px] bg-gray-500 p-4 flex flex-row items-center justify-between">
        <div className="text-md text-gray-100 text-center ml-7">
          @2022 Nkwanzi Events
        </div>
        <div className="grid grid-cols-3 p-4">
          <img
            className="object-cover h-[64px]"
            src="/icons-instagram.png"
            alt="Instagram Icon"
          ></img>

          <img
            className="object-cover h-[64px]"
            src="/icons8-facebook.png"
            alt="Facebook Icon"
          ></img>
          <img
            className="object-cover h-[64px]"
            src="/icons-linkedin.png"
            alt="Linkedin Icon"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
