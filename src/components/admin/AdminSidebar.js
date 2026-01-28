import { Link, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }

  return (
    <div className="admin-sidebar">
      <h2>Hindustan</h2>

      <Link to="/admin/dashboard">Dashboard</Link>
      <Link to="/admin/products">Products</Link>
      <Link to="/admin/add-product">Add Product</Link>

      <button onClick={logout} className="logout-btn">Logout</button>
    </div>
  );
}
