import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const AddService = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (e) => {
    const image = e.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "43aa64a3bebdc7db4aab6b62b6d8d331");
    imageData.append("image", image);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { serviceName, servicePrice, serviceDescription } = data;
    const serviceData = {
      title: serviceName,
      price: servicePrice,
      description: serviceDescription,
      icon: imageUrl,
    };
    fetch("https://cryptic-retreat-15947.herokuapp.com/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result && imageUrl) {
          swal("Congrats!", "Your Service is added", "success");
        }
      });
  };
  return (
    <>
      <section className="dashboard row">
        <Dashboard />
        <div className="d-flex">
          <Sidebar />
          <div className="main_content col-md-9">
            <div className="form">
              <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                <div className="col-md-6">
                  <input
                    className="form-control"
                    name="serviceName"
                    id="serviceName"
                    placeholder="Service Name"
                    {...register("serviceName", { required: true })}
                  />
                  {errors.serviceName && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    name="servicePrice"
                    className="form-control"
                    id="servicePrice"
                    placeholder="Service Price"
                    {...register("servicePrice", { required: true })}
                  />
                  {errors.servicePrice && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="col-md-6 w-100">
                  <textarea
                    class="form-control"
                    id="serviceDescription"
                    name="serviceDescription"
                    placeholder="Service Description"
                    rows="3"
                    {...register("serviceDescription", { required: true })}
                  ></textarea>
                  {errors.serviceDescription && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      name="serviceImg"
                      className="form-control"
                      type="file"
                      id="serviceImg"
                      onChange={handleImageUpload}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Add Service
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddService;
