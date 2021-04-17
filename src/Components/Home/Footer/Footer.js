import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterBG from "../../../assets/footer_bg.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="text-center text-white container">
        <h3>Daiyan's Auto Repair</h3>
        <p className="smal_title">
          Need a special repair service? We are happy to fulfil every request.
        </p>
      </div>
      <div className="d-flex icons justify-content-center align-items-center position-relative">
        <a href="https://facebook.com" target="blank_">
          <FontAwesomeIcon id="facebook" icon={faFacebook} />
        </a>
        <a href="https://instagram.com" target="blank_">
          <FontAwesomeIcon id="insta" icon={faInstagram} />
        </a>
        <a href="https://twitter.com" target="blank_">
          <FontAwesomeIcon id="twitter" icon={faTwitter} />
        </a>
      </div>
      <p className="copyright">
        &copy; Copyright 2021. Developer Daiyan.All Rights Reserved{" "}
      </p>
      <img src={FooterBG} alt="" />
    </footer>
  );
};

export default Footer;
