import React, { useEffect, useState } from "react";
import PreLoader from "../../../assets/preloader.gif";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-retreat-15947.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="mt-5 container-fluid">
      <h1 className="text-center">Our Services</h1>
      {services.length !== 0 ? (
        <div
          style={{ width: "99vw" }}
          className="row mt-4 d-flex justify-content-center align-items-center"
        >
          {services.map((service) => (
            <ServiceCard service={service} />
          ))}
        </div>
      ) : (
        <div className="mt-4 d-flex justify-content-center align-items-center">
          <img className="text-center" src={PreLoader} alt="loading..." />
        </div>
      )}
    </section>
  );
};

export default Services;
