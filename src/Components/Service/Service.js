import React from "react";
import { Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { title, img, price, details, _id } = props.service;
  return (
    <div>
      <Col className="card-background ">
        <Card className="card-background">
          <Card.Img variant="top" className="card-img" src={img} />
          <Card.Body className="card-body">
            <Card.Title>{title}</Card.Title>
            <Card.Text className="card-text text-color">{details}</Card.Text>
            <NavLink to={`/details/${_id}`}>
              <button className="service-button">Visit</button>
            </NavLink>
          </Card.Body>
          <p className="price-box">{price}</p>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
