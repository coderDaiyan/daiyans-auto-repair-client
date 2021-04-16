import React, { useEffect, useState } from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="testimonial_section mt-5">
      <h1 className="fw-bold text-center mb-5">Testimonials</h1>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="row justify-content-center works-slider">
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
