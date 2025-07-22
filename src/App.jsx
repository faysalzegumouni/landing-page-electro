
// src/App.jsx
import React from "react";
import { product } from "./products";
import ProductCard from "./components/ProductCard";
import Chatbot from "./components/Chatbot";
import Reviews from "./components/Reviews";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header avec logo */}
      <header className="header">
        <img src="/logo1.png" alt="Logo MonEntreprise" className="logo" />
      </header>
       
      

      {/* Carte produit */}
      <ProductCard product={product} />
      <Reviews />
      <footer className="footer">
  <div className="footer-content">
    <div className="footer-logo">
      <img src="/logo.png" alt="Logo MonEntreprise" className="footer-logo-img" />
      <p>Technologie. Qualité. Confiance.</p>
    </div>

    <div className="footer-links">
      <h4>Informations</h4>
      <ul>
        <li><a href="#shipping">Livraison rapide</a></li>
        <li><a href="#guarantee">Garantie 30 jours</a></li>
        <li><a href="#support">Support 24/7</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact</h4>
      <a
        href="https://wa.me/+212611728567 "
        target="_blank"
        rel="noopener noreferrer"
        className="footer-whatsapp"
      >
        💬 Discuter sur WhatsApp
      </a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 Crea.webdesign . Tous droits réservés.</p>
  </div>
</footer>

<Chatbot />
    </div>
  );
}

export default App;