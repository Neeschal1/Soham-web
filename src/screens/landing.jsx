import React from "react";
import Hero from "../components/landing/hero";
import Footer from "../constant/footer";
import Moreaboutus from "../components/landing/more_about_us";
import Journey from "../components/landing/journey";
import Download from "../components/landing/download_our_app";
import Faqs from "../components/landing/faqs";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Moreaboutus />
        <Journey />
        <Download />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default Landing;
