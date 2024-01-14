import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import PreLoader from "../../../assets/preloader.gif";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonial.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://me-auto-repair.onrender.com/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="testimonial_section mt-5 container">
      <h1 className="fw-bold text-center mb-5">Testimonials</h1>
      {testimonials.length !== 0 ? (
        <div className="">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            navigation
            centeredSlides
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {testimonials.map((testimonial) => (
              <>
                <SwiperSlide>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
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
