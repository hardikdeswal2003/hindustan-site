import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    fetch(`https://hindustan-site.onrender.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log("Fetch error:", err));
  }, [id]);

  if (!product) return <h2 style={{ padding: "40px" }}>Loading...</h2>;

  return (
    <div style={{ padding: "40px", maxWidth: "1100px", margin: "auto" }}>
      
      <h1>{product.name}</h1>
      <p><b>Brand:</b> {product.brand}</p>
      <p><b>Category:</b> {product.category}</p>

      {/* ✅ IMAGES */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "20px" }}>
        {product.images?.map((img, i) => (
          <img 
            key={i}
            src={img}
            alt=""
            onClick={() => setActiveImage(img)}
            style={{ 
              width: "220px",
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px"
            }}
          />
        ))}
      </div>

      {/* ✅ DESCRIPTION */}
      <div style={{ marginTop: "30px" }}>
        <h3>Description</h3>

        <ul style={{ lineHeight: "1.9", fontSize: "16px" }}>
          {(product.description || "")
            .split(".")
            .filter(line => line.trim().length > 5)
            .map((point, i) => (
              <li key={i}>{point.trim()}.</li>
            ))}
        </ul>
      </div>

      {/* ✅ WHATSAPP */}
      <a 
        href={`https://wa.me/919254010887?text=Hello, I am interested in *${product.name}* (%0ACategory: ${product.category}%0ABrand: ${product.brand}). Please share best price and details.`}
        target="_blank"
        rel="noreferrer"
      >
        <button style={{
          marginTop: "30px",
          background: "#25D366",
          color: "white",
          border: "none",
          padding: "14px 30px",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer"
        }}>
          Enquire on WhatsApp
        </button>
      </a>

      {/* ✅ IMAGE POPUP */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <img 
            src={activeImage}
            alt=""
            style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "10px", background: "#fff", padding: "10px" }}
          />
        </div>
      )}

    </div>
  );
}

export default ProductDetail;