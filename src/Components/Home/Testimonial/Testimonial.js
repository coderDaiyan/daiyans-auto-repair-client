import React, { useEffect, useState } from "react";
import PreLoader from "../../../assets/preloader.gif";
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
    <section className="testimonial_section mt-5 container">
      <h1 className="fw-bold text-center mb-5">Testimonials</h1>
      {testimonials.length !== 0 ? (
        <div className="row d-flex justify-content-center align-items-center">
          <div className="row justify-content-center">
            {testimonials.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-4 d-flex justify-content-center align-items-center">
          <img className="text-center" src={PreLoader} alt="loading..." />
        </div>
      )}
    </section>
  );
};

export default Testimonial;
