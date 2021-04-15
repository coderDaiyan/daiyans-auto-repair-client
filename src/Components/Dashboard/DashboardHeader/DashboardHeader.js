import React, { useContext } from "react";
import { UserContext } from "../../../App";

const DashboardHeader = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <>
      <h3 className="mt-4 ms-3 fw-bold">Daiyan's Auto Repair</h3>
      <div
        style={{
          textAlign: "right",
          marginTop: "-30px",
          marginRight: "20px",
        }}
      >
        Welcome, {loggedInUser?.name}
      </div>
    </>
  );
};

export default DashboardHeader;
