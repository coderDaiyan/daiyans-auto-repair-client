import { faCar, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <ul>
      {/* <li className="sidebar_link">
        <FontAwesomeIcon icon={faShoppingCart} />
        Order
      </li> */}
      <Link to="/dashboard/orders">
        <li className="sidebar_link">
          <FontAwesomeIcon icon={faCar} />
          Orders List
        </li>
      </Link>
      <Link to="/dashboard/review">
        <li className="sidebar_link">
          <FontAwesomeIcon icon={faCommentAlt} />
          Review
        </li>
      </Link>
    </ul>
  );
};

export default Sidebar;
