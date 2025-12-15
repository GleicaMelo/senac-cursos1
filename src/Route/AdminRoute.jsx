import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const auth = localStorage.getItem("adminAuth");

  return auth ? children : <Navigate to="/admin-login" />;
}