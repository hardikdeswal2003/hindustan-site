import React, { useEffect, useRef, useState } from "react";

const services = [
  "Water Purifier",
  "Washing Machine",
  "Fan",
  "Chimney & Cooktop",
  "Air Cooler",
  "Water Softener"
];

export default function ServiceSupport({ close }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ product: "", type: "", brand: "", warranty: "" });
  const modalRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    function onClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        close();
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [close]);

  function goWhatsApp(custom = false) {
    let text = custom
      ? `Hello Hindustan Enterprises,%0A%0AI want to book a service.%0A%0AProduct: ${data.product}%0ABrand: Other (Please mention brand name)%0A%0ACustomer Name:%0AMobile Number:%0AAddress:%0A%0APlease contact me.`
      : `Hello Hindustan Enterprises,%0A%0AI want to book a service.%0A%0AProduct: ${data.product}%0A${data.type ? "Type: " + data.type + "%0A" : ""}${data.brand ? "Brand: " + data.brand + "%0A" : ""}${data.warranty ? "Warranty: " + data.warranty + "%0A" : ""}%0AName:%0AMobile:%0AAddress:%0A%0APlease contact me.`;

    window.open(`https://wa.me/919254010887?text=${text}`, "_blank");
    close();
  }

  function select(value, key, nextStep, other = false) {
    setData({ ...data, [key]: value });
    other ? goWhatsApp(true) : setStep(nextStep);
  }

  return (
    <div style={overlay}>
      <div ref={modalRef} style={box} role="dialog" aria-modal="true">
        <h2>Service Support</h2>

        {step === 1 && services.map((s) => (
          <button key={s} style={btn} onClick={() => select(s, "product", 2)}>{s}</button>
        ))}

        {step === 2 && data.product === "Water Purifier" && (
          <>
            {["Livpure", "Kent", "Zero B", "Aquaguard"].map((b) => (
              <button key={b} style={btn} onClick={() => select(b, "brand", 3)}>{b}</button>
            ))}
            <button style={btnAlt} onClick={() => goWhatsApp(true)}>Other Brand</button>
          </>
        )}

        {step === 2 && data.product === "Washing Machine" && (
          <>
            {["Top Load", "Front Load", "Semi Automatic"].map((t) => (
              <button key={t} style={btn} onClick={() => select(t, "type", 3)}>{t}</button>
            ))}
          </>
        )}

        {step === 3 && data.product === "Washing Machine" && (
          <>
            <button style={btn} onClick={() => select("IFB", "brand", 4)}>IFB</button>
            <button style={btnAlt} onClick={() => goWhatsApp(true)}>Other Brand</button>
          </>
        )}

        {step === 2 && data.product === "Fan" && (
          <>
            <button style={btn} onClick={() => select("Kuhl", "brand", 3)}>Kuhl</button>
            <button style={btnAlt} onClick={() => goWhatsApp(true)}>Other Brand</button>
          </>
        )}

        {step === 2 && data.product === "Chimney & Cooktop" && (
          <>
            <button style={btn} onClick={() => select("Chimney", "type", 3)}>Chimney</button>
            <button style={btn} onClick={() => select("Cooktop", "type", 3)}>Cooktop</button>
          </>
        )}

        {step === 3 && data.product === "Chimney & Cooktop" && (
          <>
            <button style={btn} onClick={() => select("Livpure", "brand", 4)}>Livpure</button>
            <button style={btnAlt} onClick={() => goWhatsApp(true)}>Other Brand</button>
          </>
        )}

        {step === 2 && data.product === "Air Cooler" && (
          <>
            <button style={btn} onClick={() => select("Livpure", "brand", 3)}>Livpure</button>
            <button style={btn} onClick={() => select("V-Guard", "brand", 3)}>V-Guard</button>
            <button style={btnAlt} onClick={() => goWhatsApp(true)}>Other Brand</button>
          </>
        )}

        {step === 2 && data.product === "Water Softener" && (
          <>
            {["Kent", "Zero B", "Aquaguard"].map((b) => (
              <button key={b} style={btn} onClick={() => select(b, "brand", 99)}>{b}</button>
            ))}
            <button style={btnAlt} onClick={() => goWhatsApp(true)}>Other Brand</button>
          </>
        )}

        {(step === 3 || step === 4) && data.product !== "Water Softener" && (
          <>
            <button style={btn} onClick={() => select("In Warranty", "warranty", 99)}>In Warranty</button>
            <button style={btn} onClick={() => select("Out of Warranty", "warranty", 99)}>Out of Warranty</button>
          </>
        )}

        {step === 99 && goWhatsApp(false)}

        <button onClick={close} style={closeBtn}>Close</button>
      </div>
    </div>
  );
}

/* STYLES */

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999
};

const box = {
  background: "white",
  padding: "28px",
  borderRadius: "12px",
  width: "360px",
  textAlign: "center",
  zIndex: 10000
};

const btn = {
  width: "100%",
  padding: "12px",
  margin: "8px 0",
  border: "1px solid #0b3d91",
  borderRadius: "8px",
  background: "white",
  cursor: "pointer"
};

const btnAlt = { ...btn, background: "#ffe9e9", border: "1px solid #ff4d4d" };

const closeBtn = { marginTop: "12px", background: "none", border: "none", cursor: "pointer", color: "#777" };