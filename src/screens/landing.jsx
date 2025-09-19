import React from "react";
import Hero from "../components/landing/hero";
import Footer from "../constant/footer";
import Moreaboutus from "../components/landing/more_about_us";
import Journey from "../components/landing/journey";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Moreaboutus />
        <Journey />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
