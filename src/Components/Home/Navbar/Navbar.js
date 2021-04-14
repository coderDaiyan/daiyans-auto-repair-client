import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link class="navbar-brand link_style" href="/">
            <h5>Daiyan's Auto Repair</h5>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item me-5">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="/">
                  Our Portfolio
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="/">
                  Our Team
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li class="nav-item me-5">
                <a class="nav-link" href="/">
                  Admin
                </a>
              </li>
              <li class="nav-item me-5">
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
