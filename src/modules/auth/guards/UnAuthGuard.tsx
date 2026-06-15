import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UnAuthGuard() {
  const { isAuthenticated } = useAuth();

  // Se já estiver logado, manda para o dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  // Se não estiver logado, libera login/register
  return <Outlet />;
}
