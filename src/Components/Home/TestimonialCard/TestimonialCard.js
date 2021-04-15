import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  const { img, name, designation, review } = testimonial;
  return (
    <div className="testimonial_card_parent col-md-3">
      <div className="identity d-flex mb-3">
        <img className="people me-3" src={img} alt="" />
        <div className="">
          <h5>{name}</h5>
          <p>{designation}</p>
        </div>
      </div>
      <div className="review">
        <p>{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
