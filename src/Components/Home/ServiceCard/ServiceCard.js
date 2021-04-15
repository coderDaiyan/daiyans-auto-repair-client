import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { icon, title, description } = service;

  const handleClick = () => {
    localStorage.setItem("serviceId", service._id);
  };
  return (
    <>
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        to={`/dashboard/order/${service._id}`}
        onClick={handleClick}
        className="card_parent col-md-3"
      >
        <img src={icon} className="icon mb-3" alt="" />
        <div className="text-center">
          <h5 className="fw-bold">{title}</h5>
          <p>{description}</p>
        </div>
      </Link>
    </>
  );
};

export default ServiceCard;
