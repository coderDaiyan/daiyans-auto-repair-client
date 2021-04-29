import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./Preloader.css";

const Preloader = () => {
  return (
    <section className="preloader_container d-flex justify-content-center align-items-center">
      <div className="">
        {/* <img src={Loader} alt="" /> */}
        <HashLoader color={"#FDCB6E"} size={100} />
      </div>
    </section>
  );
};

export default Preloader;
