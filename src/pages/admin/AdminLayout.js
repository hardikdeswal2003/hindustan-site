import { Outlet, Link, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* SIDEBAR */}
      <div style={{
        width: "230px",
        background: "#0b3d91",
        color: "white",
        padding: "20px"
      }}>
        <h2>Hindustan</h2>
        <p style={{ opacity: 0.7 }}>Admin Panel</p>

        <nav style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "20px" }}>
          <Link to="/admin/dashboard" style={link}>Dashboard</Link>
          <Link to="/admin/products" style={link}>Products</Link>
          <Link to="/admin/add-product" style={link}>Add Product</Link>

          <button onClick={logout} style={logoutBtn}>Logout</button>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "30px", background: "#f5f7fb" }}>
        <Outlet />
      </div>
    </div>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px"
};

const logoutBtn = {
  marginTop: "20px",
  background: "#ff4d4d",
  border: "none",
  padding: "10px",
  borderRadius: "6px",
  color: "white",
  cursor: "pointer"
};

export default AdminLayout;
