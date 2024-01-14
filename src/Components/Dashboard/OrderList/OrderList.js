import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import "./OrderList.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(
      `https://me-auto-repair.onrender.com/orders?email=${loggedInUser?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  });
  return (
    <section className="dashboard row">
      <Dashboard />
      <div className="d-flex">
        <Sidebar />
        <div className="main_content col-md-9">
          <h3 className="p-4">Order Lists</h3>
          {orders.length > 0 ? (
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
          ) : (
            <div className="container">
              <h2>No Orders !</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderList;
