import React from "react";
import { useNavigate } from "react-router-dom";

const brands = [
  { name: "Livpure", logo: "/brands/livpure.png" },
  { name: "Kent", logo: "/brands/kent.png" },
  { name: "V-Guard", logo: "/brands/vguard.png" },
  { name: "Zero B", logo: "/brands/zerob.png" },
  { name: "Haier", logo: "/brands/haier.png" },
  { name: "Eureka Forbes", logo: "/brands/eurekaforbes.png" },
  { name: "Kuhl", logo: "/brands/kuhl.png" },
  { name: "IFB", logo: "/brands/ifb.png" },
];

function Brands() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "70px 10%", background: "#f7f9fc", minHeight: "100vh" }}>
      
      <h1 style={{ 
        textAlign: "center", 
        marginBottom: "50px",
        fontSize: "36px",
        fontWeight: "700",
        color: "#111"
      }}>
        Our Trusted Brands
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "35px"
      }}>
        {brands.map((brand, i) => (
          <div 
            key={i} 
            onClick={() => navigate(`/brands/${encodeURIComponent(brand.name)}`)}
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "160px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "0.3s",
              cursor: "pointer"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 18px 40px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
            }}
          >
            <img 
              src={brand.logo}
              alt={brand.name}
              style={{ 
                maxWidth: "75%", 
                maxHeight: "90px", 
                objectFit: "contain" 
              }}
            />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Brands;