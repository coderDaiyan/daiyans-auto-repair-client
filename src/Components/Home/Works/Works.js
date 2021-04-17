import React, { useEffect, useState } from "react";
// import Swiper core and required components
import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/swiper-bundle.css";
import "./Slider.css";
import "./Works.css";

// install Swiper components
SwiperCore.use([Pagination, Autoplay, A11y]);

const Works = () => {
  const [sliderImg, setSliderImg] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/sliders")
      .then((res) => res.json())
      .then((slider) => {
        setSliderImg(slider);
      });
  });
  return (
    <section className="container-fluid works_section mt-5" id="works">
      <div className="">
        <h1 className="works-title text-center text-white">Our Works</h1>
        <div className="row justify-content-center works-slider">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides
            autoplay
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {sliderImg.map((slider) => (
              <SwiperSlide style={{ background: "#072F4F" }}>
                <img src={slider.img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
