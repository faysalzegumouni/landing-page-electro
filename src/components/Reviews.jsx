// src/components/Reviews.jsx
import React from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Karim M.",
      location: "Casablanca",
      rating: 5,
      date: "2 jours ago",
      text: "Produit de très haute qualité ! Son puissant, batterie longue durée. Livraison en 24h, excellent service.",
      avatar: "K",
    },
    {
      id: 2,
      name: "Sara E.",
      location: "Rabat",
      rating: 5,
      date: "1 semaine ago",
      text: "J'adore ces écouteurs ! Le design est élégant, la connexion Bluetooth est stable. Je recommande vivement.",
      avatar: "S",
    },
    {
      id: 3,
      name: "Youssef T.",
      location: "Marrakech",
      rating: 4,
      date: "2 semaines ago",
      text: "Très bon rapport qualité-prix. Un petit point négatif : le boîtier met un peu de temps à charger.",
      avatar: "Y",
    },
  ];

  // Générer les étoiles
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className="star">
        {i < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <section className="reviews-section">
      <h2>⭐ Avis des clients</h2>
      <p className="reviews-subtitle">Ce produit a été acheté et testé par de nos clients</p>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="avatar">{review.avatar}</div>
              <div className="reviewer-info">
                <strong>{review.name}</strong>
                <span>{review.location} • {review.date}</span>
              </div>
              <div className="rating">{renderStars(review.rating)}</div>
            </div>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;