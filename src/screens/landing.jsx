import React from "react";
import Navbar from "../constant/navbar";
import Hero from "../components/hero";
import Footer from "../constant/footer";
import Moreaboutus from "../components/more_about_us";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Moreaboutus />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
