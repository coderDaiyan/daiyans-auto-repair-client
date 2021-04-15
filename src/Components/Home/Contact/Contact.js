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
        <form onSubmit={(e) => e.preventDefault()} className="row g-3">
          <div className="col-md-6">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="inputEmail4"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              placeholder="Phone Number"
              className="form-control"
              id="inputPassword4"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="First Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
