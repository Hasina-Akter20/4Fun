import React from "react";
import "./Footer.css";
import footer from "../../Images/4Fun-logo.png";
import facebook from "../../Images/facebook.png";
import twitter from "../../Images/twitter.png";
import instagramtter from "../../Images/instagram.png";

const Footer = () => {
  return (
    <div className="bg-dark pb-3 footer-part">
      <div className="d-flex justify-content-center pt-4">
        <div className="footer-img">
          <img className="img-fluid" src={footer} alt="" />
        </div>
        <h1 className="text-secondary">Fun Travels</h1>
      </div>
      <p className="footer-text">
      4 Fun Travels always make their customer happy by providing as many choises as possible.
      </p>

      <div className="pb-2">
        <a href="https://www.facebook.com/">
          <img className="icon-img1 me-2" src={facebook} alt="" />
        </a>
        <a href="https://twitter.com/">
          <img className="icon-img2 me-2" src={twitter} alt="" />
        </a>
        <a href="https://www.instagram.com/">
          <img className="icon-img3" src={instagramtter} alt="" />
        </a>
      </div>
      <small className="footer-text ">Copyright © 2021 || 4 Fun Travels</small>
    </div>
  );
};

export default Footer;
