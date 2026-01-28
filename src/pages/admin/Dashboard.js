export default function Dashboard() {
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        <div style={box}>
          <h2>Products</h2>
          <p>Manage all products</p>
        </div>

        <div style={box}>
          <h2>Brands</h2>
          <p>View by brand</p>
        </div>

        <div style={box}>
          <h2>Website</h2>
          <p>Hindustan Enterprises</p>
        </div>
      </div>
    </>
  );
}

const box = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  width: "250px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
};
