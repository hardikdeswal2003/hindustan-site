import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const categories = [
  "All",
  "Water Purifier",
  "Chimney",
  "Cooktop & Hobtop",
  "Air Cooler",
  "Water Heater",
  "Room Heater",
  "Fans",
  "Air Purifier",
  "Kitchen Appliances",
  "Appliances",
  "Water Softner",
  "Washing Machine"
];

function normalizeCategory(input) {
  if (!input) return "All";
  const map = {
    ro: "Water Purifier",
    "water purifier": "Water Purifier",
    "water purifiers": "Water Purifier",
    "air purifier": "Air Purifier",
    cooler: "Air Cooler",
    fans: "Fans",
    "washing machine": "Washing Machine",
    softener: "Water Softner",
    softner: "Water Softner",
    kitchen: "Kitchen Appliances",
    chimney: "Chimney"
  };

  const key = input.toString().trim().toLowerCase();
  return map[key] || input;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();
  const navigate = useNavigate();
  const query = useQuery();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  // sync category from URL
  useEffect(() => {
    const q = query.get("category");
    if (q) setSelectedCategory(normalizeCategory(decodeURIComponent(q)));
  }, [location.search]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) => p.category && p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  function handleCategoryClick(cat) {
    setSelectedCategory(cat);
    navigate(`/products?category=${encodeURIComponent(cat)}`);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Our Products</h2>

      <div style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "1px solid #007bff",
              cursor: "pointer",
              background: selectedCategory === cat ? "#007bff" : "white",
              color: selectedCategory === cat ? "white" : "#007bff"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: "20px"
        }}
      >
        {filteredProducts.map((p) => (
          <div
            key={p._id}
            onClick={() => (window.location.href = `/product/${p._id}`)}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              cursor: "pointer",
              transition: "0.2s",
              background: "white"
            }}
          >
            <img src={p.images?.[0]} alt={p.name} style={{ width: "100%", height: "200px", objectFit: "contain" }} />

            <h4>{p.name}</h4>
            <p>
              <b>Brand:</b> {p.brand}
            </p>
            <p>
              <b>Category:</b> {p.category}
            </p>

            <a
              onClick={(e) => e.stopPropagation()}
              href={`https://wa.me/919254010887?text=Hello, I am interested in *${p.name}* (%0ACategory: ${p.category}%0ABrand: ${p.brand}). Please share best price and details.`}
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  marginTop: "10px",
                  background: "#25D366",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  width: "100%",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Enquire on WhatsApp
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;