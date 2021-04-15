import { faCar, faCommentAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <ul>
      {/* <li className="sidebar_link">
        <FontAwesomeIcon icon={faShoppingCart} />
        Order
      </li> */}
      <li className="sidebar_link">
        <FontAwesomeIcon icon={faCar} />
        Orders List
      </li>
      <li className="sidebar_link">
        <FontAwesomeIcon icon={faCommentAlt} />
        Review
      </li>
    </ul>
  );
};

export default Sidebar;
