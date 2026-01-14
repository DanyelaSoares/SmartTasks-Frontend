import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function UnAuthGuard() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default UnAuthGuard;
