import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="dashboard row">
      <div className="header col-12">
        <DashboardHeader />
      </div>
      <div className="d-flex">
        <div className="sidebar col-md-3">
          <Sidebar />
        </div>
        <div className="main_content form col-md-9">
          <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div class="col-md-6">
              <input
                type="text"
                placeholder="Your Name"
                class="form-control"
                id="name"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="col-md-6">
              <input
                type="text"
                placeholder="Company Name"
                class="form-control"
                id="company"
                name="company"
                {...register("company", { required: true })}
              />
              {errors.company && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="col-12">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  rows="3"
                  id="description"
                  name="description"
                  {...register("description", { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
