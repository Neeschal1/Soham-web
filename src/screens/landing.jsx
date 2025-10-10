import React from "react";
import Hero from "../components/landing/hero";
import Footer from "../constant/footer";
import Moreaboutus from "../components/landing/more_about_us";
import Journey from "../components/landing/journey";
import Download from "../components/landing/download_our_app";
import Faqs from "../components/landing/faqs";
import Instructors from "../components/landing/instructors";
import Reflection from "../components/landing/reflection";
import Userreview from "../components/landing/user_review";

const Landing = () => {
  return (
    <>
      <div>
        <Hero />
        <Moreaboutus />
        <div className="flex flex-col gap-10">
          <Journey />
          <Download />
          <Reflection />
          <Instructors />
          <Faqs />
          <Userreview />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Landing;
