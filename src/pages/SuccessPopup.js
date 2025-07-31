import React from "react";
import "./BuyNow.css";

export default function SuccessPopup({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <div className="checkmark-circle">
          <div className="checkmark">&#10003;</div>
        </div>
        <h2>Order Confirmed!</h2>
        <p>Thank you for your order. We'll contact you shortly.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
