import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import "./admin.css";

export default function AdminLayout({ children }) {
  return (
    <div className="admin-wrapper">
      <AdminSidebar />
      <div className="admin-main">
        <AdminTopbar />
        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  );
}
