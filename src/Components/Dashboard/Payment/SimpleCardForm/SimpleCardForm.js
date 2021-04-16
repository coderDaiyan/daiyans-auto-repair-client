import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../../App";
import "./SimpleCardForm.css";

const SimpleCardForm = ({ handlePaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      console.log("paymentSuccess");
      handlePaymentSuccess(paymentMethod.id);

      setPaymentError(null);
    }
  };

  return (
    <div>
      <div className="payment_form">
        <CardElement />
      </div>
      <button onClick={handlePayment} className="btn btn-primary mb-2">
        Pay
      </button>
      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Your payment was successful.</p>
      )}
    </div>
  );
};

export default SimpleCardForm;
