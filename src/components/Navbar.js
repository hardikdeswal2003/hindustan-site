import { Link } from "react-router-dom";
import { useState } from "react";
import ServiceSupport from "./ServiceSupport";

function Navbar() {
  const [openService, setOpenService] = useState(false);

  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 25px",
        background: "#0b3d91",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}>
        
        {/* LOGO */}
        <Link to="/" style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "10px", 
          color: "white", 
          textDecoration: "none",
          minWidth: "260px"
        }}>
          <img 
            src="/images/logo.jpeg" 
            alt="Hindustan Enterprises"
            style={{ height: "38px" }}
          />
          <b style={{ fontSize: "18px" }}>Hindustan Enterprises</b>
        </Link>

        {/* CENTER SPACE */}
        <div style={{ flex: 1 }}></div>

        {/* MENU */}
        <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
          <Link to="/" style={link}>Home</Link>
          <Link to="/brands" style={link}>Brands</Link>
          <Link to="/about" style={link}>About</Link>

          <button 
            onClick={() => setOpenService(true)}
            style={{
              background: "#ffcc00",
              border: "none",
              padding: "7px 16px",
              borderRadius: "20px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Service Support
          </button>

          <a 
            href="https://wa.me/919254010887"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#25D366",
              padding: "7px 14px",
              borderRadius: "20px",
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "14px"
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* SERVICE POPUP */}
      {openService && <ServiceSupport close={() => setOpenService(false)} />}
    </>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500"
};

export default Navbar;