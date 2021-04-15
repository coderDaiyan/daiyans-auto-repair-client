import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="mt-5">
      <h1 className="text-center">Our Services</h1>
      <div
        style={{ width: "99vw" }}
        className="row mt-4 d-flex justify-content-center align-items-center"
      >
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
