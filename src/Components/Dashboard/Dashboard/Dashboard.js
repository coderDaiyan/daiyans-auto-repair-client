import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard row">
        <div className="header col-12">
          <DashboardHeader />
        </div>
        {/* <Sidebar /> */}
        {/* <div className="d-flex">
          
          <div className="main_content col-md-9"></div>
        </div> */}
      </section>
    </>
  );
};

export default Dashboard;
