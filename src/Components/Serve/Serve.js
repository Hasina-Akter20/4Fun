import React from "react";
import "./Serve.css";
import icon1 from "../../Images/icon/world.png";
import icon2 from "../../Images/icon/baag.png";
import icon3 from "../../Images/icon/book.png";

const Serve = () => {
  return (
    <div className="container mt-5 pt-5 mb-4">
      <div className="row">
        <div className="col-12 col-md-3 col-lg-3 about-top">
          <small>WHAT WE SERVE</small>
          <h1>Top Values For You</h1>
          <p className="text-color">
            Try a variety of benefits when using our services.
          </p>
        </div>
        {/* icons part  */}
        <div className="col-12 col-md-3 col-lg-3 icon-dev ">
          <img src={icon1} alt="" className="about-icon img-fuild" />
          <h3>Lots of Choises</h3>
          <p className="text-color">
            Total 460+ destinations that we work with.
          </p>
        </div>
        <div className="col-12 col-md-3 col-lg-3 icon-dev down">
          <img src={icon2} alt="" className="about-icon img-fuild" />
          <h3>Best Tour Guide</h3>
          <p className="text-color">
            Our tour guide with 15+ years of experience.{" "}
          </p>
        </div>
        <div className="col-12 col-md-3 col-lg-3 icon-dev">
          <img src={icon3} alt="" className="about-icon img-fuild" />
          <h3>Easy Booking</h3>
          <p className="text-color">
            With an easy and fast ticket purchase process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Serve;
