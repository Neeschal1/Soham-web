import React from "react";
import happyfamily from "../assets/images/aboutus.jpg";
import Navbar from "../constant/navbar";
import Fonts from "../utils/fontsconfig";
import Users from "../assets/images/users.png";
import Aboutushero from "../components/aboutus/hero";
import Ourteams from "../components/aboutus/ourteams";
import Sadacreatives from "../components/aboutus/sadacreatives";

const Aboutus = () => {
  return (
    <div>
      <Aboutushero />
      <Sadacreatives />
      <Ourteams />
    </div>
  );
};

export default Aboutus;
