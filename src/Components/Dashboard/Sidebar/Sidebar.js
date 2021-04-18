import {
  faCar,
  faCommentAlt,
  faPlus,
  faThList,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="sidebar col-md-3">
      <ul>
        {!loggedInUser.isAdmin && (
          <>
            {" "}
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
            </Link>{" "}
          </>
        )}
        {loggedInUser.isAdmin && (
          <>
            {" "}
            <Link to="/dashboard/makeAdmin">
              <li className="sidebar_link">
                <FontAwesomeIcon icon={faUserShield} />
                Make Admin
              </li>
            </Link>
            <Link to="/dashboard/addService">
              <li className="sidebar_link">
                <FontAwesomeIcon icon={faPlus} />
                Add Service
              </li>
            </Link>
            <Link to="/dashboard/allOrders">
              <li className="sidebar_link">
                <FontAwesomeIcon icon={faThList} />
                All Orders
              </li>
            </Link>
            <Link to="/dashboard/manageServices">
              <li className="sidebar_link">
                <FontAwesomeIcon icon={faThList} />
                Manage Services
              </li>
            </Link>{" "}
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
