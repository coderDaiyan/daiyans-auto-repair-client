import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      icon: "https://i.ibb.co/5FQvQCX/wheel.png",
      title: "Break Repair",
      description:
        "Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne vim enim eu, his rebum iriure eripuit graecis et.eripuit graecis et.",
    },
    {
      icon: "https://i.ibb.co/FKJjc0M/oil-tank.png",
      title: "Oil & Filters",
      description:
        "Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne vim enim eu, his rebum iriure eripuit graecis et.eripuit graecis et.",
    },
    {
      icon: "https://i.ibb.co/gmh7Dw7/ignition.png",
      title: "Ignition Test",
      description:
        "Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne vim enim eu, his rebum iriure eripuit graecis et.eripuit graecis et.",
    },
    {
      icon: "https://i.ibb.co/8P6XJ9W/freezer.png",
      title: "A/C Recharge",
      description:
        "Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne vim enim eu, his rebum iriure eripuit graecis et.eripuit graecis et.",
    },
  ];

  const addServicehandle = () => {
    fetch("http://localhost:5000/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(servicesData),
    });
  };

  return (
    <section className="mt-5">
      <h1 className="text-center">Our Services</h1>
      <button onClick={addServicehandle} className="btn">
        Add Service
      </button>
      <div
        style={{ width: "99vw" }}
        className="row mt-4 d-flex justify-content-center align-items-center"
      >
        {servicesData.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
