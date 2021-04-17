import React from "react";
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
  // const sliderImgs = [Img1, Img2, Img3, Img4, Img5];
  const sliderImgs = [
    {
      img: "https://i.ibb.co/BL68Bcx/img-1.jpg",
    },
    {
      img: "https://i.ibb.co/w0tXdSS/img-2.jpg",
    },
    {
      img: "https://i.ibb.co/RgTKn8P/img-3.jpg",
    },
    {
      img: "https://i.ibb.co/d583Gkg/img-4.jpg",
    },
    {
      img: "https://i.ibb.co/7tMQX6M/img-5.jpg",
    },
  ];

  const handleImage = () => {
    fetch("http://localhost:5000/addSliders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sliderImgs),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("inserted");
        }
      });
  };
  return (
    <section className="container-fluid works_section mt-5" id="works">
      <div className="">
        <button onClick={handleImage} className="btn">
          Add Product
        </button>
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
