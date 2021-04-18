import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    fetch("https://cryptic-retreat-15947.herokuapp.com/makeAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          swal("Congrats!", "We Maked this email an admin", "success");
        }
      });
    e.preventDefault();
  };
  return (
    <section className="dashboard row">
      <Dashboard />
      <div className="d-flex">
        <Sidebar />
        <div className="main_content col-md-9">
          <h1 className="p-3 mb-5">Make Admin</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              class="form-control w-50 ms-3"
              id="email"
              name="email"
              placeholder="name@example.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
            <button type="submit" className="btn m-3 btn-primary">
              Make Admin
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
