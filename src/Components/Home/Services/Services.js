import React from "react";
import Ignition from "../../../assets/icons/ignition.svg";
import OilTank from "../../../assets/icons/oil-tank.svg";
import Wheel from "../../../assets/icons/wheel.svg";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const servicesData = [
    {
      icon: Wheel,
      title: "Break Repair",
      description:
        "Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne vim enim eu, his rebum iriure eripuit graecis et.eripuit graecis et.",
    },
    {
      icon: OilTank,
      title: "Oil & Filters",
      description:
        "Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne vim enim eu, his rebum iriure eripuit graecis et.eripuit graecis et.",
    },
    {
      icon: Ignition,
      title: "Ignition Test",
      description:
        "Alterum accommodare duo cu. Ius labore luptatum efficiendi ex, ne vim enim eu, his rebum iriure eripuit graecis et.eripuit graecis et.",
    },
  ];
  return (
    <section className="mt-5">
      <h1 className="text-center">Our Services</h1>
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
