import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Serve from "../Serve/Serve";
import Services from "../Services/Services";
import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div className="pt-5 mt-5">
      <TopBanner></TopBanner>
      <Banner></Banner>
      <Serve></Serve>
      <Services></Services>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
