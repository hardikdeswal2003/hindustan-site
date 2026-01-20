import React from "react";

function About() {
  return (
    <div style={{ background: "#f4f7fb" }}>

      {/* ===== HERO SECTION ===== */}
      <div style={{
        background: "linear-gradient(135deg, #0d6efd, #0a3d91)",
        color: "white",
        padding: "90px 12%",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "44px", marginBottom: "10px" }}>Hindustan Enterprises</h1>
        <p style={{ fontSize: "18px", opacity: 0.95 }}>
          Trusted Home Appliances Store Since 2003
        </p>
        <p style={{ marginTop: "12px", fontSize: "15px", opacity: 0.9 }}>
          Proudly serving 7,000+ happy customers in Panipat & nearby areas
        </p>
      </div>

      {/* ===== CONTENT ===== */}
      <div style={{ padding: "70px 12%", color: "#333" }}>

        {/* ABOUT */}
        <section style={card}>
          <h2>About Hindustan Enterprises</h2>
          <p>
            Hindustan Enterprises is a trusted home appliances store proudly serving Panipat
            and nearby areas since <b>2003</b>. What started as a small family initiative has
            today grown into a reliable destination for quality home appliances and genuine service.
            Over the years, we have been fortunate to serve <b>7,000+ happy customers</b>, and many
            of them continue to stay connected with us like family.
          </p>
          <p>
            We deal in a wide range of home appliances including Water Purifiers, RO Systems,
            Air Purifiers, Chimneys, Cooktops, Fans, Air Coolers, Water Heaters, Room Heaters,
            Washing Machines, Water Softeners, and Kitchen Appliances. Our focus has always been
            to help customers choose the right product according to their needs, budget, and
            long-term use.
          </p>
        </section>

        {/* STATS */}
        <section style={statsWrap}>
          <div style={statBox}><h1>2003</h1><p>Established</p></div>
          <div style={statBox}><h1>7000+</h1><p>Happy Customers</p></div>
          <div style={statBox}><h1>20+</h1><p>Years Experience</p></div>
          <div style={statBox}><h1>15+</h1><p>Authorized Brands</p></div>
        </section>

        {/* BRANDS */}
        <section style={card}>
          <h2>Our Brand Associations</h2>

          <div style={brandBox}>
            <p><b>Authorized Distributors</b></p>
            <p>Livpure, Kent, Kuhl, Haier, V-Guard, Zero B, Aquaguard, Eureka Forbes</p>
          </div>

          <div style={brandBox}>
            <p><b>Authorized Dealers</b></p>
            <p>Daikin, Godrej, LG, IFB, Havells</p>
          </div>

          <div style={brandBox}>
            <p><b>Authorized Service Partner</b></p>
            <p>IFB, Livpure, Kent, Zero B</p>
          </div>

          <p style={{ marginTop: "15px" }}>
            Because we work directly with authorized brands, our customers always receive
            100% genuine products, official warranty, and reliable after-sales service support.
          </p>
        </section>

        {/* STORY */}
        <section style={card}>
          <h2>Our Story</h2>
          <p>
            Hindustan Enterprises was founded in 2003 by <b>Mr Krishan Deswal</b> with a simple goal —
            to create a place where people could get honest advice, good products, and dependable service.
          </p>
          <p>
            Today, while Mr Krishan Deswal is successfully running his real estate business
            <b> “Hindustan Properties”</b>, Hindustan Enterprises is being handled by his younger brother
            <b> Sushil Deswal</b>, who continues to carry forward the same values of trust, dedication,
            and customer satisfaction.
          </p>
        </section>

        {/* OWNER */}
        <section style={ownerCard}>
          <h2>About the Owner</h2>
          <p>
            Hindustan Enterprises is currently managed by <b>Mr Sushil Deswal</b>, who is deeply involved
            in daily operations, customer support, and service coordination. With years of experience
            in home appliances, he personally ensures that every customer receives the right guidance
            and proper service.
          </p>
          <p style={{ fontSize: "17px", marginTop: "10px" }}>
            📞 <b>Contact:</b> 9215543200
          </p>
        </section>

        {/* SHOWROOM */}
        <section style={card}>
          <h2>Our Showrooms</h2>
          <p>
            We welcome you to visit our showrooms in Panipat where you can explore products,
            get live demonstrations, and speak directly with our team.
          </p>

          <p><b>Main Branch:</b> 140-L, Near Dyal Chowk, Model Town, Panipat</p>
          <p><b>Branch:</b> VPO Atawla, Near Main Chowk, Panipat</p>

          <div style={{ marginTop: "15px" }}>
            📍 <a href="https://www.google.com/maps/place/Livpure+Exclusive+Brand+Outlet+-+Hindustan+Enterprises,+No+140%2FL,+Delhi+-+Panipat+Expy,+Model+Town,+Panipat,+Haryana+132103/data=!4m2!3m1!1s0x390ddbb38ad5ff6b:0xe4a59f9896c01781"
              target="_blank" rel="noreferrer">Open on Google Maps</a><br/>

            📸 <a href="https://www.instagram.com/_hindustanenterprises"
              target="_blank" rel="noreferrer">Visit Instagram Page</a>
          </div>
        </section>

      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "35px",
  borderRadius: "18px",
  marginBottom: "35px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  lineHeight: "1.9"
};

const ownerCard = {
  ...card,
  borderLeft: "6px solid #0d6efd"
};

const statsWrap = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "20px",
  marginBottom: "45px"
};

const statBox = {
  background: "white",
  borderRadius: "18px",
  padding: "30px",
  textAlign: "center",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
};

const brandBox = {
  background: "#f4f7fb",
  padding: "16px 20px",
  borderRadius: "10px",
  marginTop: "12px"
};

export default About;