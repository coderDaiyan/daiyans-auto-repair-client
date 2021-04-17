import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Testimonial />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
