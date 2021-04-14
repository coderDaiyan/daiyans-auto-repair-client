import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <div className="card_parent col-md-3">
      <img src={icon} className="icon mb-3" alt="" />
      <div className="text-center">
        <h5 className="fw-bold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
