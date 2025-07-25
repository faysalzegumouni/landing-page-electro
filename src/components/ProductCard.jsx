// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, t = {} }) => {
  const [mainImage, setMainImage] = React.useState(product.images?.[0] || "");

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  if (!product) return null;

  return (
    <div className="product-page">
      {/* Titre du produit */}
      <h1 className="product-title">{product.name}</h1>

      <div className="product-layout">
        {/* COLONNE GAUCHE : Images + Vidéo */}
        <div className="product-images">
          {/* Image principale */}
          <img src={mainImage} alt={product.name} className="main-img" />

          {/* Miniatures */}
          <div className="thumbnails">
            {product.images.map((image, index) => (
              <img
                key={`${product.id}-thumb-${index}`}
                src={image}
                alt={`Vue ${index + 1}`}
                className={`thumbnail ${mainImage === image ? "active" : ""}`}
                onClick={() => handleThumbnailClick(image)}
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && handleThumbnailClick(image)}
              />
            ))}
          </div>

          {/* Vidéo du produit */}
          <video
            src="/product-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="main-video"
            aria-label={`Vidéo du produit : ${product.name}`}
          ></video>
        </div>

        {/* COLONNE DROITE : Informations */}
        <div className="product-details">
          {/* Description */}
          <p className="description">{product.description}</p>

          {/* Prix */}
          <p className="price">
            <strong>{t.price || "Prix :"}</strong> ${product.price.toFixed(2)}
          </p>

          {/* Caractéristiques et Informations */}
          <div className="features-section">
            {/* Caractéristiques */}
            <div className="product-features">
              <h3>✨ {t.features || "Caractéristiques"}</h3>
              <ul>
                <li><strong>{t.charging_case || "Boîtier :"}</strong> 400 mAh</li>
                <li><strong>{t.noise_reduction || "Réduction bruit :"}</strong> {t.yes || "Oui"}</li>
                <li><strong>{t.earbud || "Écouteur :"}</strong> 25 mAh</li>
                <li><strong>{t.bt_distance || "Distance BT :"}</strong> 10 m</li>
                <li><strong>{t.port || "Port :"}</strong> Type-C</li>
                <li><strong>{t.driver || "Pilote :"}</strong> 14mm Bass Boost</li>
                <li><strong>{t.battery || "Autonomie :"}</strong> 5h lecture</li>
                <li><strong>{t.charges || "Recharges :"}</strong> +5 via boîtier</li>
              </ul>
            </div>

            {/* Informations produit */}
            <div className="product-meta">
              <h3>📦 {t.details || "Informations"}</h3>
              <ul>
                <li><strong>SKU :</strong> IT879EA1GGJ8QNAFAMZ</li>
                <li><strong>{t.weight || "Poids :"}</strong> 1 kg</li>
                <li><strong>{t.color || "Couleur :"}</strong> Noir</li>
              </ul>
            </div>
          </div>

          {/* Bouton Commander sur WhatsApp */}
          <a
            href={product.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-order"
            aria-label={t.order || "Commander sur WhatsApp"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="whatsapp-icon"
            >
              <path d="M17.49 15.26c-.35-.18-2.15-1.05-2.48-1.17-.33-.12-.57-.18-.81.18-.24.35-.94 1.17-1.15 1.39-.2.2-.41.25-.76.12-1.95-.73-3.23-2.98-3.37-3.21-.14-.24-.57-1.05-.57-1.95s.51-1.5.73-1.72c.2-.2.41-.25.57-.4.15-.15.3-.4.45-.6.15-.2.08-.37-.02-.52-.1-.15-.81-1.95-.88-2.65-.07-.7-.51-1.17-.55-1.24-.1-.15-.3-.22-.6-.07-.28.14-1.17.57-1.78 1.78-.1.2-.37.1-.94.4-.57.3-.98.49-1.2.57-.24.08-.5.02-.74-.24-.24-.25-.94-1.11-1.43-2.2C3.14 1.4 4.18.8 5.4.8c.55 0 1.1.2 1.5.5.4.3.94.87 1.05 1 .1.14.74.99.94 1.24.2.25.41.3.56.3.15 0 .25-.1.35-.17.1-.07.2-.2.3-.3.1-.1.15-.15.25-.15.09 0 .25.1.5.2.24.1.5.2.56.25.06.05.1.15.15.25.05.1.05.25 0 .4-.05.14-.2.4-.3.6-.1.2-.15.3 0 .45.14.15.18.28.35.45.17.17.3.3.45.45.14.15.3.2.45.25.14.05.3 0 .5-.1.2-.1.94-.35 1.8-1.5.09-.14.25-.2.4-.2.14 0 .3.05.45.2.14.14.6.58.72.7.12.12.2.18.35.18.14 0 .24-.08.4-.25.14-.17.3-.5.45-.7.14-.2.3-.3.55-.45.24-.14.49-.2.73-.1.25.1.99.45 1.34 1.1.35.6.52 1.2.77 1.8.24.6.12 1.17-.02 1.4-.14.25-.25.3-.35.45-.1.14-.02.23.08.33.08.08.18.2.28.3.1.1.3.45.35.6.05.14.1.3 0 .45-.08.14-.3.35-.6.65-.3.3-1.1.55-2.05.55-.8 0-1.5-.3-2.1-.9z"/>
            </svg>
            {t.order || "Commander sur WhatsApp"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;