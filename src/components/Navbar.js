import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ServiceSupport from "./ServiceSupport";

function Navbar() {
  const [openService, setOpenService] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search/${search}`);
    setSearch("");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 25px",
          background: "#0b3d91",
          color: "white",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          gap: "18px"
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "white",
            textDecoration: "none",
            minWidth: "260px"
          }}
        >
          <img src="/images/logo.jpeg" alt="Hindustan Enterprises" style={{ height: "38px" }} />
          <b style={{ fontSize: "18px" }}>Hindustan Enterprises</b>
        </Link>

        {/* SEARCH BAR */}
        <form
          onSubmit={handleSearch}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "420px",
              padding: "9px 16px",
              borderRadius: "22px",
              border: "none",
              outline: "none",
              fontSize: "14px"
            }}
          />
        </form>

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
            href="https://wa.me/918930002480"
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
