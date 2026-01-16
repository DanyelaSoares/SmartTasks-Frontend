import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../modules/auth/context/AuthContext";

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth();

  // Se NÃO estiver logado, redireciona para login
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Se estiver logado, libera acesso
  return <Outlet />;
}
