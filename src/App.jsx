// src/App.jsx
import React, { useState, useEffect } from "react";
import { product } from "./products";
import ProductCard from "./components/ProductCard";
import Chatbot from "./components/Chatbot";
import Reviews from "./components/Reviews";
import TrustBanner from "./components/TrustBanner";
import "./App.css";

function App() {
  const [lang, setLang] = useState("fr");

  // Charger la langue sauvegardée
  useEffect(() => {
    const saved = localStorage.getItem("lang") || "fr";
    setLang(saved);
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = saved;
  }, []);

  const toggleLang = () => {
    const newLang = lang === "fr" ? "ar" : "fr";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  // Traductions
  const t = {
    fr: {
      title: "Itel Ecouteurs Buds Neo - Black",
      order: "Commander sur WhatsApp",
      price: "Prix :",
      features: "✨ Caractéristiques",
      details: "📦 Informations",
      reviews: "⭐ Avis des clients",
      trust_shipping: "LIVRAISON GRATUITE",
      trust_payment: "PAIEMENT EN LIGNE",
      trust_support: "SUPPORT CLIENT",
      trust_safe: "100% SÉCURISÉ",
      trust_returns: "RETOURS FACILES",
      footer: "© 2025 Crea.webdesign. Tous droits réservés.",
      price: "Prix :",
      features: "Caractéristiques",
      details: "Informations",
      order: "Commander sur WhatsApp",
      charging_case: "Boîtier :",
      noise_reduction: "Réduction bruit :",
      earbud: "Écouteur :",
      bt_distance: "Distance BT :",
      port: "Port :",
      driver: "Pilote :",
      battery: "Autonomie :",
      charges: "Recharges :",
      weight: "Poids :",
      color: "Couleur :",
      yes: "Oui"
    },
    ar: {
      title: "إيتل سماعات أذن بادز نيو - أسود",
      order: "اطلب عبر واتساب",
      price: "السعر :",
      features: "✨ المميزات",
      details: "📦 المعلومات",
      reviews: "⭐ تقييمات العملاء",
      trust_shipping: "توصيل مجاني",
      trust_payment: "دفع إلكتروني",
      trust_support: "دعم العملاء",
      trust_safe: "100% آمن",
      trust_returns: "إرجاع سهل",
      footer: "© 2025 Crea.webdesign. جميع الحقوق محفوظة.",
      price: "السعر :",
      features: "المميزات",
      details: "المعلومات",
      order: "اطلب عبر واتساب",
      charging_case: "العلبة الشاحنة :",
      noise_reduction: "تقليل الضوضاء :",
      earbud: "السماعة :",
      bt_distance: "مسافة البلوتوث :",
      port: "المنفذ :",
      driver: "السماعة الداخلية :",
      battery: "البطارية :",
      charges: "الشحنات :",
      weight: "الوزن :",
      color: "اللون :",
      yes: "نعم"
    },
  };

  return (
    <div className="app">
      <header className="header">
        <img src="/logo1.png" alt="Logo" className="logo" />
        <button className="lang-toggle" onClick={toggleLang}>
          {lang === "fr" ? "العربية" : "FR"}
        </button>
      </header>

      <ProductCard product={product} lang={lang} t={t[lang]} />
      <Reviews lang={lang} t={t[lang]} />
      <TrustBanner lang={lang} t={t[lang]} />

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.png" alt="Logo" className="footer-logo-img" />
            <p>Technologie. Qualité. Confiance.</p>
          </div>
          <div className="footer-links">
            <h4>{lang === "fr" ? "Informations" : "المعلومات"}</h4>
            <ul>
              <li><a href="#shipping">{lang === "fr" ? "Livraison rapide" : "توصيل سريع"}</a></li>
              <li><a href="#guarantee">{lang === "fr" ? "Garantie 30 jours" : "ضمان 30 يوما"}</a></li>
              <li><a href="#support">{lang === "fr" ? "Support 24/7" : "دعم 24/7"}</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>{lang === "fr" ? "Contact" : "اتصل بنا"}</h4>
            <a
              href="https://wa.me/+212611728567 "
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp"
            >
              💬 {lang === "fr" ? "Discuter sur WhatsApp" : "دردشة على واتساب"}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t[lang].footer}</p>
        </div>
      </footer>

      <Chatbot lang={lang} t={t[lang]} />
    </div>
  );
}

export default App;