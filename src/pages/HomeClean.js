import React from "react";
import "./Home.css";
import { FaHistory, FaAward, FaTools, FaHandsHelping } from "react-icons/fa";

export default function HomeClean() {
  const waLink =
    "https://wa.me/919254010887?text=" +
    encodeURIComponent(
      "Hello, I would like a kitchen consultation. Please contact me to plan a modular kitchen."
    );

  return (
    <div className="home">
      <section id="hero">
        <div className="hero">
          <h1>Hindustan Enterprises</h1>
          <p>Premium Home Appliances | Trusted Since Years</p>
          <span className="sinceBadge">Serving Panipat Since 2003</span>
          <a href="/products">
            <button className="heroBtn">Explore Products</button>
          </a>
        </div>
      </section>

      <section className="campaignSection waterSection">
        <div className="container split triple">
          <div className="sideImage left">
            <img src="/campaign/water-left.jpeg" alt="Child drinking clean water" />
          </div>

          <div className="text">
            <h2>Why Clean Water is No Longer Optional</h2>
            <p className="lede">Safe water protects your family's health — every drop matters.</p>
            <ul className="points">
              <li>
                <strong>Rising contamination:</strong> Groundwater and municipal supplies face growing pollutants.
              </li>
              <li>
                <strong>Health risks:</strong> Children and elders are most vulnerable to water-borne illnesses.
              </li>
              <li>
                <strong>RO + Purification:</strong> Multi-stage purification removes dissolved solids, bacteria and odors.
              </li>
            </ul>
            <a href="/products?category=Water%20Purifier" className="cta small">
              Shop Water Purifiers
            </a>
          </div>

          <div className="sideImage right">
            <img src="/campaign/water-right.jpeg" alt="Modern water purifier in kitchen" />
          </div>
        </div>
      </section>

      <section className="campaignSection airSection">
        <div className="airContent">
          <h2>The Air Your Child Breathes Matters</h2>
          <p className="lede">
            Indoor pollution can be invisible but its impact is real — reduce risks of asthma, allergies and long-term harm.
          </p>
          <a href="/products?category=Air%20Purifier" className="cta light">
            Explore Air Purifiers
          </a>
        </div>
      </section>

      <section className="campaignSection solarSection">
        <div className="container">
          <div className="solarHeader">
            <h2>Go Green — Power Your Home with Solar</h2>
            <p className="lede">
              Cut bills, increase independence and choose a cleaner future with trusted solar solutions.
            </p>
          </div>

          <div className="features">
            <div className="card featureCard">
              <h4>Save on Electricity</h4>
              <p>Lower monthly bills with efficient photovoltaic systems sized for your home.</p>
            </div>
            <div className="card featureCard">
              <h4>Trusted Installation</h4>
              <p>Havells-authorized products with certified installation and local support.</p>
            </div>
            <div className="card featureCard">
              <h4>Eco-friendly Future</h4>
              <p>Reduce carbon footprint and invest in long-term energy resilience.</p>
            </div>
          </div>

          <div className="solarCta">
            <p className="highlight">
              Purchase Havells Solar Solutions from Hindustan Enterprises at best price with trusted installation support.
            </p>
            <a href="/solar" className="cta primary">
              Enquire Solar Solutions
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="categorySection">
        <div className="categoryInner">
          <h2 className="sectionTitle">Shop By Categories</h2>
          <p className="sectionSubtitle">Curated categories — premium picks and trusted brands to outfit your home.</p>

          <div className="cards">
            <a className="card" href="/products?category=Water%20Purifier">
              <img src="/category/ro.png" alt="Water Purifier" />
              <h3>Water Purifiers</h3>
              <p>Livpure • Kent • Zero B</p>
            </a>

            <a className="card" href="/products?category=Air%20Purifier">
              <img src="/category/airpurifier.png" alt="Air Purifier" />
              <h3>Air Purifiers</h3>
              <p>Kent • Eureka Forbes</p>
            </a>

            <a className="card" href="/products?category=Fans">
              <img src="/category/fans.png" alt="Fans" />
              <h3>Fans</h3>
              <p>V-Guard • Kuhl</p>
            </a>

            <a className="card" href="/products?category=Air%20Cooler">
              <img src="/category/cooler.jpeg" alt="Air Cooler" />
              <h3>Air Coolers</h3>
              <p>Livpure • V-Guard</p>
            </a>

            <a className="card" href="/products?category=Water%20Heater">
              <img src="/category/heater.png" alt="Heater" />
              <h3>Water Heaters & Room Heaters</h3>
              <p>V-Guard • Haier</p>
            </a>

            <a className="card" href="/products?category=Kitchen%20Appliances">
              <img src="/category/kitchen.png" alt="Kitchen Appliances" />
              <h3>Kitchen Appliances</h3>
              <p>Chimney • Cooktops</p>
            </a>

            <a className="card" href="/products?category=Water%20Softner">
              <img src="/category/softner.png" alt="Water Softener" />
              <h3>Water Softeners</h3>
              <p>Kent • ZeroB • Aquaguard</p>
            </a>

            <a className="card" href="/solar">
              <img src="/category/solar.png" alt="Solar Havells" />
              <h3>Solar Solutions</h3>
              <p>Havells Authorized Solar</p>
            </a>

            <a className="card" href="/products?category=Washing%20Machine">
              <img src="/category/washingmachine.png" alt="IFB Washing Machine" />
              <h3>Washing Machines</h3>
              <p>IFB Top Load Series</p>
            </a>
          </div>
        </div>
      </section>

      <section className="kitchenSection">
        <div className="kitchenOverlay" aria-hidden="true"></div>
        <div className="kitchenInner container">
          <div className="kitchenLeft">
            <h2>Design Your Dream Kitchen With Us</h2>
            <p className="lede">
              We design and deliver complete modular kitchen solutions — from chimneys and cooktops to built-in ovens and premium appliances. Let our experts plan a kitchen that looks beautiful and works perfectly for your home.
            </p>

            <ul className="kitchenList">
              <li>Chimney</li>
              <li>Hob / Cooktop</li>
              <li>Water Purifier</li>
              <li>Utensil Cleaner / Dishwasher</li>
              <li>In-built OTG</li>
              <li>Air Fryer</li>
              <li>Coffee Machine</li>
              <li>All premium kitchen appliances</li>
            </ul>

            <a className="cta kitchenCta" href={waLink} target="_blank" rel="noreferrer">
              Get Kitchen Consultation
            </a>
          </div>

          <div className="kitchenRight">
            <div className="kitchenCards">
              <div className="kitchenCard">
                <span className="kitchenIcon">🌀</span>
                <span>Chimney</span>
              </div>
              <div className="kitchenCard">
                <span className="kitchenIcon">🍳</span>
                <span>Hob / Cooktop</span>
              </div>
              <div className="kitchenCard">
                <span className="kitchenIcon">💧</span>
                <span>Water Purifier</span>
              </div>
              <div className="kitchenCard">
                <span className="kitchenIcon">🧼</span>
                <span>Dishwasher</span>
              </div>
              <div className="kitchenCard">
                <span className="kitchenIcon">🔥</span>
                <span>In-built OTG</span>
              </div>
              <div className="kitchenCard">
                <span className="kitchenIcon">🍟</span>
                <span>Air Fryer</span>
              </div>
              <div className="kitchenCard">
                <span className="kitchenIcon">☕</span>
                <span>Coffee Machine</span>
              </div>
              <div className="kitchenCard">
                <span className="kitchenIcon">✨</span>
                <span>Premium Appliances</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="aboutShowcase">
        <div className="container">
          <div className="aboutHead">
            <h2>About Hindustan Enterprises</h2>
            <p className="aboutIntro">Serving Panipat since 2003 – Trusted by 7,000+ happy families</p>
          </div>

          <div className="aboutGrid">
            <div className="aboutCard">
              <div className="iconWrap">
                <FaHistory />
              </div>
              <h4>Our Experience</h4>
              <p>Over two decades of local expertise in supplying, installing and supporting home appliances.</p>
            </div>

            <div className="aboutCard">
              <div className="iconWrap">
                <FaAward />
              </div>
              <h4>Authorized Brands</h4>
              <p>Genuine products from Livpure, Kent, V-Guard, Havells and other trusted manufacturers.</p>
            </div>

            <div className="aboutCard">
              <div className="iconWrap">
                <FaTools />
              </div>
              <h4>Service Support</h4>
              <p>Certified technicians, fast response and warranty-backed installations across Panipat.</p>
            </div>

            <div className="aboutCard">
              <div className="iconWrap">
                <FaHandsHelping />
              </div>
              <h4>Customer Commitment</h4>
              <p>Transparent pricing, demo &amp; walk-through, and after-sales assistance you can rely on.</p>
            </div>
          </div>

          <div className="brandStrip">
            <img src="/brands/livpure.png" alt="Livpure" />
            <img src="/brands/kent.png" alt="Kent" />
            <img src="/brands/zerob.png" alt="ZeroB" />
            <img src="/brands/aquaguard.png" alt="Aquaguard" />
            <img src="/brands/vguard.png" alt="V-Guard" />
            <img src="/brands/haier.png" alt="Haier" />
          </div>

          <div className="aboutContactBox">
            <h3>Visit Our Showrooms</h3>
            <p>
              <b>Main Branch:</b> 140-L, Near Dyal Chowk, Model Town, Panipat
            </p>
            <p>
              <b>Branch:</b> VPO Atawla, Near Main Chowk, Panipat
            </p>

            <div className="contactLinks">
              <a
                href="https://www.google.com/maps/place/Livpure+Exclusive+Brand+Outlet+-+Hindustan+Enterprises,+No+140%2FL,+Delhi+-+Panipat+Expy,+Model+Town,+Panipat,+Haryana+132103/"
                target="_blank"
                rel="noreferrer"
                className="mapBtn"
              >
                📍 Open in Google Maps
              </a>

              <a
                href="https://www.instagram.com/_hindustanenterprises"
                target="_blank"
                rel="noreferrer"
                className="instaBtn"
              >
                📸 Visit Instagram
              </a>
            </div>
          </div>

          <div className="aboutFooter">
            <a href="/products" className="cta primary">
              Explore Our Products
            </a>
          </div>
        </div>
      </section>

      <div className="ctaFooter">
        <h2>Need Help Choosing the Right Product?</h2>
        <p>Call us for expert guidance and best deals.</p>
        <a href="tel:9215543200" className="callBtn">
          Call Now: 9215543200
        </a>
      </div>
    </div>
  );
}
