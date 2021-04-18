import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navbar.css";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <nav
        style={{ background: "#072F4F" }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <Link className="navbar-brand link_style text-white" to="/">
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
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link style={{ color: "white" }} className="nav-link" to="/">
                  Our Portfolio
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link style={{ color: "white" }} className="nav-link" to="/">
                  Our Team
                </Link>
              </li>

              {loggedInUser.email ? (
                <li className="nav-item me-5 mt-2">
                  <h5 className="text-white">Hello, {loggedInUser.name}</h5>
                </li>
              ) : (
                <li className="nav-item me-5">
                  <Link
                    style={{ color: "white" }}
                    className="nav-link"
                    to="/login"
                  >
                    <button className="btn text-white">Login</button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
