import {
  faCar,
  faCommentAlt,
  faPlus,
  faThList,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedAdmin, setSelectedAdmin] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/admins")
      .then((res) => res.json())
      .then((admin) => setSelectedAdmin(admin));
  }, []);

  let mainAdmin;
  if (selectedAdmin.length > 0) {
    mainAdmin = selectedAdmin.find(
      (admin) => admin?.email === loggedInUser?.email
    );
  }
  console.log(mainAdmin);
  return (
    <ul>
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
      {mainAdmin && (
        <>
          {" "}
          <Link to="/dashboard/makeAdmin">
            <li className="sidebar_link">
              <FontAwesomeIcon icon={faUserShield} />
              Make Admin
            </li>
          </Link>
          <Link to="/dashboard/makeAdmin">
            <li className="sidebar_link">
              <FontAwesomeIcon icon={faPlus} />
              Add Service
            </li>
          </Link>
          <Link to="/dashboard/makeAdmin">
            <li className="sidebar_link">
              <FontAwesomeIcon icon={faThList} />
              Order List
            </li>
          </Link>{" "}
        </>
      )}
    </ul>
  );
};

export default Sidebar;
