import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="mt-5">
      <div className="text-center fw-bold mb-5">
        <p>Contact</p>
        <h2>Let us Help to Reach You 🙂</h2>
      </div>
      <div className="form">
        <form onSubmit={(e) => e.preventDefault()} class="row g-3">
          <div class="col-md-6">
            <input
              type="email"
              placeholder="Email"
              class="form-control"
              id="inputEmail4"
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              placeholder="Phone Number"
              class="form-control"
              id="inputPassword4"
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="First Name"
              required
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Last Name"
              required
            />
          </div>
          <div class="mb-3">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
