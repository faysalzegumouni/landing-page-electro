// src/components/TrustBanner.jsx
import React from "react";


const TrustBanner = () => {
  const features = [
    {
      icon: "🚚",
      title: "FREE SHIPPING",
      desc: "maroc Delivery",
    },
    {
      icon: "💳",
      title: "ONLINE PAYMENT",
      desc: "Payment methods",
    },
    {
      icon: "🛎️",
      title: "CUSTOMER SUPPORT",
      desc: "+212 611-728567",
      subdesc: "From 10 AM - 06 PM",
    },
    {
      icon: "🔒",
      title: "100% SAFE",
      desc: "View our benefits",
    },
    {
      icon: "🔄",
      title: "EASY RETURNS",
      desc: "Track or cancel orders",
    },
  ];

  return (
    <section className="trust-banner">
      <div className="trust-grid">
        {features.map((item, index) => (
          <div key={index} className="trust-item">
            <div className="trust-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            {item.subdesc && <small>{item.subdesc}</small>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBanner;