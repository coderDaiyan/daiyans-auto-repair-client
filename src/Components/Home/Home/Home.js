import React from "react";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Works from "../Works/Works";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Testimonial />
      <Works />
      <Contact />
    </>
  );
};

export default Home;
