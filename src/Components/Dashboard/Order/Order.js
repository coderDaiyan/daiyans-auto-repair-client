import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import swal from "sweetalert";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import ProcessPayment from "../Payment/ProcessPayment/ProcessPayment";
import Sidebar from "../Sidebar/Sidebar";
import "./Order.css";

const Order = () => {
  const [orderData, setOrderData] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [service, setService] = useState([]);
  // const id = localStorage.getItem("serviceId");
  let { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const selectedService = service.find((sv) => sv._id === id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    setOrderData(data);
    e.preventDefault();
  };

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      orderData,
      paymentId,
    };

    fetch("http://localhost:5000/placeOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          swal("YAY!", "You Ordered this Service!", "success");
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
        <div className="main_content col-md-9">
          <div className="row form">
            <form
              style={{ display: orderData ? "none" : "block" }}
              onSubmit={handleSubmit(onSubmit)}
              className="row g-3"
            >
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  defaultValue={loggedInUser?.name}
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  defaultValue={loggedInUser?.email}
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  name="service"
                  id="service"
                  placeholder={selectedService?.title}
                  {...register("service", { required: true })}
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  name="notes"
                  id="notes"
                  rows="3"
                  placeholder="Notes"
                  {...register("notes")}
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div
            style={{ display: orderData ? "block" : "none", padding: "20px" }}
            className="col-12"
          >
            <ProcessPayment handlePaymentSuccess={handlePaymentSuccess} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
