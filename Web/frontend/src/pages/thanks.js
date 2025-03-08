import React from "react";

export default function ThankYou() {
  return (
    <div className="thank-you-page">
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been successfully placed. We will prepare it for you shortly.</p>
      <button onClick={() => window.location.href = "/"}>Back to Menu</button>
    </div>
  );
}