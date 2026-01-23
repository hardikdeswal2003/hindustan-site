import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ServiceSupport from "./ServiceSupport";
import "./navbar.css";

function Navbar() {
  const [openService, setOpenService] = useState(false);
  const [search, setSearch] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search/${search}`);
    setSearch("");
    setOpenMenu(false);
  }

  return (
    <>
      <div className="navbar">

        {/* LEFT LOGO */}
        <Link to="/" className="logo">
          <img src="/images/logo.jpeg" alt="Hindustan Enterprises" />
          <b>Hindustan Enterprises</b>
        </Link>

        {/* SEARCH */}
        <form onSubmit={handleSearch} className="nav-search">
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>
          ☰
        </div>

        {/* MENU */}
        <div className={`nav-right ${openMenu ? "show" : ""}`}>
          <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
          <Link to="/brands" onClick={() => setOpenMenu(false)}>Brands</Link>
          <Link to="/about" onClick={() => setOpenMenu(false)}>About</Link>

          <button
            onClick={() => {
              setOpenService(true);
              setOpenMenu(false);
            }}
          >
            Service Support
          </button>

          <a
            href="https://wa.me/918930002480"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {openService && <ServiceSupport close={() => setOpenService(false)} />}
    </>
  );
}

export default Navbar;
