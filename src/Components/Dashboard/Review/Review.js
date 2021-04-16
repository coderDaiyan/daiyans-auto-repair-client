import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { UserContext } from "../../../App";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //   const [imageUrl, setImageUrl] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);
  const handleUploadFile = (e) => {
    const image = e.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "a65bfe7d9250b3bf1ebe781e931b3a9d");
    imageData.append("image", image);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onSubmit = (data) => {
    const { company, description, name } = data;
    const reviewData = {
      name: name,
      company: company,
      review: description,
      img: imageURL,
    };
    fetch("http://localhost:5000/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result && imageURL) {
          swal("YAY!", "Review Added!", "success");
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
        <div className="main_content form col-md-9">
          <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
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
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="profileImg" className="form-label">
                  Add Photo
                </label>
                <input
                  onChange={handleUploadFile}
                  name="profileImg"
                  className="form-control"
                  type="file"
                  id="profileImg"
                />
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
