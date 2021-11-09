import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../Images/Banner/home-banner-01.jpg";
import banner2 from "../../Images/Banner/home-banner-02.jpg";
import banner3 from "../../Images/Banner/home-banner-03.png";

const Banner = () => {
  return (
    <div className="banner-slide container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 banner-slide"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className="slide-item">
            <h1>Enjoy Vacation With 4 Fun Travels</h1>
            <p>
              Travel to the any corner of the world, without going around in
              circles.
            </p>
            <Button variant="outline-light" className="bottom-margin">
              See More <i className="fas fa-angle-down"></i>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 banner-slide"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption className="slide-item">
            <h1>Adventure Awaits</h1>
            <p>
              No matter who you’re looking to travel with, you can depend on our
              2,500 trusted operators to make sure everything’s taken care of..
            </p>
            <Button variant="outline-light" className="bottom-margin">
              See More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-slide"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption className="slide-item">
            <h1>Sustainable Travel</h1>
            <p>
              See the world with TourRadar. Discover how you can offset your
              adventure's carbon emissions and support the sustainable
              initiatives practiced by our operators worldwide.
            </p>
            <Button variant="outline-light" className="bottom-margin">
              See More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
