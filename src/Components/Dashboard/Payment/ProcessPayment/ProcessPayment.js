import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SimpleCardForm from "../SimpleCardForm/SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51HZNkQBEspuFA8V0SJHuv7yto9ESLRDjC4nh8hJyPhFQJMFjG7zCwnadzx0GcsYnY0BJHetUlxz3e7EspZuIkuvQ00uENxpGaP"
);

const ProcessPayment = ({ handlePaymentSuccess }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm
        handlePaymentSuccess={handlePaymentSuccess}
      ></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;
