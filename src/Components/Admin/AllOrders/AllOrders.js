import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import PreLoader from "../../../assets/preloader.gif";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import "./AllOrders.css";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://me-auto-repair.onrender.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const changeStatus = (id, e) => {
    const value = e.target.value;
    fetch(`https://me-auto-repair.onrender.com/specificOrder/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          fetch("https://me-auto-repair.onrender.com/updateStatus", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, status: value }),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                swal("YAY!", "Status is Updated", "success");
              }
            });
        }
      });
  };
  return (
    <section className="dashboard row">
      <Dashboard />
      <div className="d-flex">
        <Sidebar />
        <div className="main_content col-md-9 orders_table">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Service</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {orders.length !== 0 ? (
              <tbody>
                {orders.map((order) => (
                  <tr>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>{order.orderData.service}</td>
                    <td>
                      <select
                        id="select_options"
                        onChange={(e) => changeStatus(order._id, e)}
                        className="form-select"
                      >
                        <option
                          selected={order.status === "Pending" ? true : false}
                          value="Pending"
                          className="text-warning"
                        >
                          Pending
                        </option>
                        <option
                          selected={order.status === "Done" ? true : false}
                          value="Done"
                          className="text-success"
                        >
                          Done
                        </option>
                        <option
                          selected={order.status === "Rejected" ? true : false}
                          value="Rejected"
                          className="text-danger"
                        >
                          Rejected
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <img
                style={{
                  marginTop: "-150px",
                  marginLeft: "-50px",
                }}
                className="text-center"
                src={PreLoader}
                alt="loading..."
              />
            )}
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllOrders;
