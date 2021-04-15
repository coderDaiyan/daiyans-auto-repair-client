import React from "react";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard row">
      <div className="header col-12">
        <DashboardHeader />
      </div>
      <div className="d-flex">
        <div className="sidebar col-md-3">
          <Sidebar />
        </div>
        <div className="main_content col-md-9"></div>
      </div>
    </section>
  );
};

export default Dashboard;
