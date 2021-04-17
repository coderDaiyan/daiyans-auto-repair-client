import React from "react";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <h1 className="fw-bold">404</h1>
      <h3>Not Found</h3>
      <button onClick={() => window.history.back()} className="btn btn-primary">
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
