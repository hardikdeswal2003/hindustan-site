import { useNavigate } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div
          className="stat-box"
          onClick={() => navigate("/admin/products")}
        >
          <h2>Products</h2>
          <p>Manage all products</p>
        </div>

        <div
          className="stat-box"
          onClick={() => navigate("/admin/products")}
        >
          <h2>Brands</h2>
          <p>View by brand</p>
        </div>

        <div
          className="stat-box"
          onClick={() => window.open("/", "_blank")}
        >
          <h2>Website</h2>
          <p>Hindustan Enterprises</p>
        </div>
      </div>
    </div>
  );
}
