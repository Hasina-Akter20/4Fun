import React, { useEffect, useState } from "react";
import "./ServiceDetails.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { _id } = useParams();
  const [serviceDetails, setServiceDetails] = useState({});

  // load single data
  useEffect(() => {
    fetch(`http://localhost:5000/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);
  return (
    <div>
      <div className="service-detail">
        <div className="col-md-6 col-sm-12 text-start service-tags">
          <h6 className="fw-bolder">{serviceDetails?.title}</h6>
          <p className="text-muted fw-bolder">{serviceDetails?.details}</p>
          <Link to="/myorders">
            <button className="book-now-btn fw-bolder rounded-2">
              Book Now
            </button>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="serviceDetail-img" src={serviceDetails?.img} alt="" />
        </div>
      </div>
    </div>
  );
};
export default ServiceDetails;
