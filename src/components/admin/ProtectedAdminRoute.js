import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // If wrapped as layout
  if (children) {
    return children;
  }

  // If used as <Route element={<ProtectedAdminRoute />}>
  return <Outlet />;
}
