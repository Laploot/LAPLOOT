import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import SuccessPopup from "./SuccessPopup"; // ✅ Added
//import "./BuyNow.css";

export default function BuyNow() {
  const location = useLocation();
  const product = location.state || {};

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: `I want to buy ${product.model} (${product.brand}) for ₹${product.price}.`,
  });

  const [showPopup, setShowPopup] = useState(false); // ✅ Added for animation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      message: formData.message,
      model: product.model,
      brand: product.brand,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        setShowPopup(true); // ✅ Show success animation
        setTimeout(() => setShowPopup(false), 3000); // Optional: Auto close
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Error placing order. Please try again later.");
      });
  };

  return (
    <div className="buy-container">
      <h2>
        Just say <span className="highlight">Hello!</span>
      </h2>
      <p>Let us know more about you</p>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={handleChange}
            required
          />
          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">PLACE ORDER</button>
      </form>

      {/* ✅ Show popup if true */}
      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
}






