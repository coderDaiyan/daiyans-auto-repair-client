import React from "react";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <section className="main_header container-fluid">
      <div className="content">
        <h1 className="text-uppercase fw-bold d-inline big_text text-white">
          Caring for Your Car <br /> The Way You Could
        </h1>
      </div>
      <div className="d-flex justify-content-center buttons">
        <button id="first" className="btn me-3">
          Contact
        </button>
        <button id="second" className="btn">
          Appointment
        </button>
      </div>
    </section>
  );
};

export default HeaderMain;
