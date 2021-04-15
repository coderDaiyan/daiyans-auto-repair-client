import React from "react";
// import Swiper core and required components
import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/swiper-bundle.css";
import Img1 from "../../../assets/works/img-1.jpg";
import Img2 from "../../../assets/works/img-2.jpg";
import Img3 from "../../../assets/works/img-3.jpg";
import Img4 from "../../../assets/works/img-4.jpg";
import Img5 from "../../../assets/works/img-5.jpg";
import "./Slider.css";
import "./Works.css";

// install Swiper components
SwiperCore.use([Pagination, Autoplay, A11y]);

const Works = () => {
  const sliderImgs = [Img1, Img2, Img3, Img4, Img5];
  return (
    <section className="works_section mt-5" id="works">
      <div className="container-fluid">
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
            {sliderImgs.map((slider) => (
              <SwiperSlide style={{ background: "#072F4F" }}>
                <img src={slider} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Works;
