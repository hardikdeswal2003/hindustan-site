import { Navigate } from "react-router-dom";

function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  // If not logged in → send to admin login
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // If logged in → allow access
  return children;
}

export default ProtectedAdminRoute;
