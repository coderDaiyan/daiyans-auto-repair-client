import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";
import "./OrderList.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      `https://cryptic-retreat-15947.herokuapp.com/orders?email=${loggedInUser?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  });
  return (
    <section className="dashboard row">
      <div className="header col-12">
        <DashboardHeader />
      </div>
      <div className="d-flex">
        <div className="sidebar col-md-3">
          <Sidebar />
        </div>
        <div className="main_content col-md-9">
          <h3 className="p-4">Order Lists</h3>
          <div className="row">
            {orders.map((order) => (
              <div className="col-md-4 orders">
                <h3>{order?.orderData?.service}</h3>
                <h5>Name: {order.name}</h5>
                <div
                  className={`alert ${
                    order.status === "Rejected"
                      ? "alert-danger"
                      : order.status === "Done"
                      ? "alert-success"
                      : "alert-warning"
                  } mt-4`}
                  role="alert"
                >
                  {order.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
