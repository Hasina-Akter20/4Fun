import React from "react";
import "./TopBanner.css";
import banner from "../../Images/home-page-banner.png";
import {  Form, FormControl } from "react-bootstrap";
import loc from "../../Images/icon/location.png";

const TopBanner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 top-banner-dev p-5">
          <h1 className="pb-3 top-banner-title">We Take Care Of Your Trip</h1>
          <p className="pb-3 text-color">
            Traveling is fun and exciting. Of course we don't want to have any
            trouble for schedules, hotel bookings, purchasing tickets etc. We
            are the ones who will take care of all your needs.
          </p>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Input Location"
              className="me-2 search-box text-end"
              aria-label="Search"
            />
            <img src={loc} alt="" className="location" />
            <button className="top-banner-button">Search</button>
          </Form>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <img src={banner} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
