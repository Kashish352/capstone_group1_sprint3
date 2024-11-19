import React from "react";
import "./ThankYouPage.css";

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="thank-you-animation">
          <div className="checkmark">
            <div className="checkmark-circle"></div>
            <div className="checkmark-stem"></div>
            <div className="checkmark-kick"></div>
          </div>
        </div>
        <h1>Thank You!</h1>
        <p>Your order has been placed successfully. We appreciate your purchase!</p>
        <button
          className="back-to-home"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
