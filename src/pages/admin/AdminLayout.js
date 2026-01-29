import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "../../components/admin/admin.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }

  return (
    <div className="admin-container">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div>
          <div className="brand">Hindustan</div>
          <div className="subtitle">Admin Panel</div>

          <nav className="admin-nav">
            <NavLink to="/admin/dashboard">Dashboard</NavLink>
            <NavLink to="/admin/products">Products</NavLink>
            <NavLink to="/admin/add-product">Add Product</NavLink>
          </nav>
        </div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </aside>

      {/* MAIN AREA */}
      <main className="admin-main">

        <div className="admin-topbar">
          <b>Admin Panel</b>
          <span>Hindustan Enterprises</span>
        </div>

        <div className="admin-content">
          <Outlet />
        </div>

      </main>

    </div>
  );
}
