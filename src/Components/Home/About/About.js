import React from "react";
import image from "../../../assets/image.jpg";
import "./About.css";

const Works = () => {
  return (
    <section className="container-fluid works_section mt-5" id="works">
      <div className="">
        <div className="row p-5">
          <div className="col-md-4">
            <img src={image} className="w-100 rounded img" alt="..." />
          </div>
          <div className="col-md-8">
            <h1 className="fw-bold mt-5" style={{ fontSize: "3rem" }}>
              CERTIFIED REPAIR SHOP
            </h1>
            <p className="detail lh-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto consequatur voluptates error voluptatem labore. In
              laborum adipisci qui, numquam corrupti id quasi debitis nihil,
              dolorum tempore ratione et? Cumque, qui! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Cumque, qui! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Cumque, qui! Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Cumque, qui! Lorem,
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <br />
            <button
              style={{ background: "var(--gradient-color)", color: "white" }}
              className="btn btn-lg learn-more-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
