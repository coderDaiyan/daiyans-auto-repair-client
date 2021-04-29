import React from "react";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = (props) => {
  return (
    <>
      <Header />
      <Services services={props.services} />
      <Testimonial />
      <About />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
