import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BrandProducts() {
  const { brandName } = useParams();
  const decodedName = decodeURIComponent(brandName);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(p =>
          p.brand?.toLowerCase().includes(decodedName.toLowerCase())
        );
        setProducts(filtered);
      })
      .catch(err => console.log(err));
  }, [decodedName]);

  return (
    <div style={{ padding: "50px 8%", background: "#f7f9fc", minHeight: "100vh" }}>
      
      <h1 style={{ marginBottom: "30px" }}>
        {decodedName} Products
      </h1>

      {products.length === 0 && <p>No products found.</p>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))",
        gap: "25px"
      }}>
        {products.map(p => (
          <Link 
            key={p._id}
            to={`/product/${p._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={{
              background: "white",
              padding: "18px",
              borderRadius: "14px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
            }}>
              <img 
                src={p.images?.[0]}
                alt={p.name}
                style={{ width: "100%", height: "220px", objectFit: "contain" }}
              />
              <h4>{p.name}</h4>
              <p>{p.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BrandProducts;