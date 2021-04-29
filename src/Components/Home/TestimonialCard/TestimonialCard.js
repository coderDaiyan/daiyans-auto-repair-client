import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  const { img, name, company, review } = testimonial;
  return (
    <div className="testimonial_card_parent container">
      <div className="identity d-flex mb-3">
        <img className="people me-3" src={img} alt="" />
        <div className="mt-4">
          <h3>{name}</h3>
          <h5>{company}</h5>
        </div>
      </div>
      <div className="review text-center">
        <p>{review} </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
