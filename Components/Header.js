import React from "react";
import Search from "./Search";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-white">
      <Search />
      <Banner />
      <Navbar />
    </div>
  );
};

export default Header;
