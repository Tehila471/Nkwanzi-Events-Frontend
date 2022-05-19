import React from "react";
import Header from "../components/Header";
import Hero from "Hero";
import Events from "../Components/Events";
import Footer from "../Components/Footer";

const landingpage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Events />
      <Footer />
    </div>
  );
};

export default landingpage;
