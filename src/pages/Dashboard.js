import AdminLayout from "../../components/admin/AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-box">
          <h2>Products</h2>
          <p>Manage all products</p>
        </div>

        <div className="stat-box">
          <h2>Brands</h2>
          <p>View by brand</p>
        </div>

        <div className="stat-box">
          <h2>Website</h2>
          <p>Hindustan Enterprises</p>
        </div>
      </div>
    </AdminLayout>
  );
}
