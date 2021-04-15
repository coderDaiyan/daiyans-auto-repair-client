import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav
        style={{ background: "#072F4F" }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand link_style text-white" href="/">
            <h5>Daiyan's Auto Repair</h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <a
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a style={{ color: "white" }} className="nav-link" href="/">
                  Our Portfolio
                </a>
              </li>
              <li className="nav-item me-5">
                <a style={{ color: "white" }} className="nav-link" href="/">
                  Our Team
                </a>
              </li>
              <li className="nav-item me-5">
                <a style={{ color: "white" }} className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item me-5">
                <a style={{ color: "white" }} className="nav-link" href="/">
                  Admin
                </a>
              </li>
              <li className="nav-item me-5">
                <button className="btn btn-primary">Login</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
