import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="container mt-5 pt-5 mb-5">
      <h1 className="title-color">Our Services</h1>

      <Row xs={1} md={3} className="g-5">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service> 
        ))}
      </Row>

      <Link to="/addservices">Add a new service</Link>
    </div>
  );
};

export default Services;
