import React from "react";

export default function Solar() {
  return (
    <div style={{ padding: 40, minHeight: '60vh' }}>
      <h1>Solar Solutions</h1>
      <p style={{ maxWidth: 820 }}>We provide authorized Havells solar solutions with trusted installation and local support. Contact us for a free site visit and estimation.</p>

      <div style={{ marginTop: 20 }}>
        <a href={`https://wa.me/919254010887?text=${encodeURIComponent('Hello, I am interested in solar solutions. Please contact me with details and a site visit.')}`} target="_blank" rel="noreferrer" style={{ padding: '10px 18px', background: '#0b63d6', color: 'white', borderRadius: 8, textDecoration: 'none' }}>Enquire on WhatsApp</a>
      </div>
    </div>
  );
}
