import React from "react";
import "./About.css";
import aboutImg from "../../Images/about.jpg";

const About = () => {
  return (
    <div className="container about-div">
      <h1 className="title-color">Who We Are?</h1>
      <div className="row">
        <div className="col-md-6 col-12 img-div">
          <img src={aboutImg} alt="" className="img-fluid about-img" />
        </div>
        <div className="col-md-6 col-12 text-start ps-5 pe-3">
          <h1 className="about-title pb-3">We Are Travel Experts</h1>
          <p>
            4 Fun Travels is the world’s first Adventure Booking Platform, where you
            can effortlessly book private, group and tailor-made multi-day
            organised tours in 200+ countries around the world. <br />
            Traditionally, booking an organised tour was a tedious and
            time-consuming process. Where will I stay? What activities will I
            do? What meals am I going to have? What operator can I trust?
            TourRadar makes booking multi-day adventures seamless and timely,
            partnering with 2,500+ operators to offer more than 50,000+
            adventures in 200+ countries. Founded in 2010, TourRadar was the
            first to transition multi-day tours to an online marketplace, making
            them the leader in the industry. In 2021, TourRadar further...
          </p>
          <button className="about-btn mt-3">See More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
