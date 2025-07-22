// src/components/Chatbot.jsx
import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Bonjour ! 👋 Je suis ici pour vous aider." },
    { sender: "bot", text: "Souhaitez-vous des infos sur le produit ou commander ?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Ajouter le message utilisateur
    setMessages([...messages, { sender: "user", text: input }]);

    // Réponse automatique
    setTimeout(() => {
      let reply = "Merci pour votre message ! Pour commander, cliquez sur le bouton ci-dessous.";
      if (input.toLowerCase().includes("prix")) {
        reply = "Le prix est de $70.00. Livraison rapide incluse !";
      } else if (input.toLowerCase().includes("livraison")) {
        reply = "Livraison en 24-48h partout au Maroc.";
      } else if (input.toLowerCase().includes("garantie")) {
        reply = "Oui, ce produit bénéficie d'une garantie de 30 jours.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 600);

    setInput("");
  };

  return (
    <div className="chatbot">
      {/* Bouton flottant */}
      <button className="chatbot-toggle" onClick={toggleChat}>
        💬 Aide
      </button>

      {/* Fenêtre du chat */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Assistance</span>
            <button onClick={toggleChat} className="close-btn">&times;</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div className="quick-actions">
              <button
                onClick={() =>
                  window.open("https://wa.me/+212611728567 ", "_blank")
                }
              >
                📲 Commander sur WhatsApp
              </button>
            </div>
          </div>

          <form onSubmit={handleSend} className="chatbot-input">
            <input
              type="text"
              placeholder="Écrivez un message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">➤</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;