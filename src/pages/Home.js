import React from "react";
import "./Home.css";
import { FaHistory, FaAward, FaTools, FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home">

      {/* ---------- HERO SECTION ---------- */}
      <section id="hero" className="hero">
        <div className="heroContent">
          <h1>Hindustan Enterprises</h1>
          <p>Premium Home Appliances | Trusted Since Years</p>

          <span className="sinceBadge">Serving Panipat Since 2003</span>

          <div className="heroButtons">
            <a href="/products" className="cta primary">Explore Products</a>
            <a 
              href="https://www.instagram.com/_hindustanenterprises"
              target="_blank"
              rel="noreferrer"
              className="cta outline"
            >
              Visit Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ---------- WHY WATER PURIFIER ---------- */}
      <section className="campaignSection waterSection">
        <div className="container triple">

          <div className="sideImage">
            <img src="/campaign/water-left.jpeg" alt="Child drinking clean water" />
          </div>

          <div className="text">
            <h2>Why Clean Water is No Longer Optional</h2>
            <p className="lede">Safe water protects your family's health — every drop matters.</p>

            <ul>
              <li>Rising contamination in groundwater</li>
              <li>Higher risk for children and elders</li>
              <li>RO purification removes harmful impurities</li>
            </ul>

            <a href="/products?category=Water%20Purifier" className="cta small">
              Shop Water Purifiers
            </a>
          </div>

          <div className="sideImage">
            <img src="/campaign/water-right.jpeg" alt="Modern water purifier in kitchen" />
          </div>

        </div>
      </section>

      {/* ---------- AIR PURIFIER ---------- */}
      <section className="campaignSection airSection">
        <div className="airContent">
          <h2>The Air Your Child Breathes Matters</h2>
          <p>Indoor pollution increases asthma and allergies. Protect your family.</p>
          <a href="/products?category=Air%20Purifier" className="cta light">
            Explore Air Purifiers
          </a>
        </div>
      </section>

      {/* ---------- SOLAR ---------- */}
      <section className="campaignSection solarSection">
        <div className="container">
          <h2>Go Green with Solar Energy</h2>
          <p>Save electricity. Reduce bills. Build a cleaner future.</p>

          <a href="/solar" className="cta primary">Explore Solar Solutions</a>
        </div>
      </section>

      {/* ---------- CATEGORIES ---------- */}
      <section className="categorySection">
        <h2 className="sectionTitle">Shop By Categories</h2>

        <div className="cards">

          <a className="card" href="/products?category=Water%20Purifier">
            <img src="/category/ro.png" alt="Water Purifier" />
            <h3>Water Purifiers</h3>
          </a>

          <a className="card" href="/products?category=Air%20Purifier">
            <img src="/category/airpurifier.png" alt="Air Purifier" />
            <h3>Air Purifiers</h3>
          </a>

          <a className="card" href="/products?category=Kitchen%20Appliances">
            <img src="/category/kitchen.png" alt="Kitchen" />
            <h3>Kitchen Appliances</h3>
          </a>

          <a className="card" href="/solar">
            <img src="/category/solar.png" alt="Solar" />
            <h3>Solar Solutions</h3>
          </a>

        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="aboutShowcase">
        <h2>About Hindustan Enterprises</h2>
        <p>Serving Panipat since 2003 – Trusted by 7,000+ families</p>

        <div className="aboutGrid">
          <div className="aboutCard"><FaHistory /> 20+ Years Experience</div>
          <div className="aboutCard"><FaAward /> Authorized Brands</div>
          <div className="aboutCard"><FaTools /> Certified Service</div>
          <div className="aboutCard"><FaHandsHelping /> Customer First</div>
        </div>
      </section>

      {/* ---------- FOOTER CTA ---------- */}
      <div className="ctaFooter">
        <h2>Need Help Choosing the Right Product?</h2>
        <a href="tel:9215543200" className="callBtn">Call Now: 9215543200</a>
      </div>

    </div>
  );
}