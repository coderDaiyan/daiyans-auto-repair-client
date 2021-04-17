import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import DashboardHeader from "../../Dashboard/DashboardHeader/DashboardHeader";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import "./AllOrders.css";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const changeStatus = (id, e) => {
    const value = e.target.value;
    fetch(`http://localhost:5000/specificOrder/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          fetch("http://localhost:5000/updateStatus", {
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
      <div className="header col-12">
        <DashboardHeader />
      </div>
      <div className="d-flex">
        <div className="sidebar col-md-3">
          <Sidebar />
        </div>
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
            <tbody>
              {/* <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <select className="form-select w-75" name="" id="">
                    <option value="Pending">Pending</option>
                  </select>
                </td>
              </tr> */}
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
                      <option value="Pending">Pending</option>
                      <option value="Done">Done</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllOrders;
