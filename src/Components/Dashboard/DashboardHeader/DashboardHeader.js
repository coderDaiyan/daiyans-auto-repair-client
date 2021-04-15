import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const DashboardHeader = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        <h3 className="mt-4 ms-3 fw-bold">Daiyan's Auto Repair</h3>
        <div className="right-align">Hello, {loggedInUser?.name}</div>
      </Link>
    </>
  );
};

export default DashboardHeader;
