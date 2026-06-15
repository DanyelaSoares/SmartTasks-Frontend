import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "../modules/auth/layouts/AuthLayout.tsx";
import Login from "../modules/auth/pages/Login";
import Register from "../modules/auth/pages/Register";
import Dashboard from "../modules/dashboard/pages/Dashboard";

import PrivateRoute from "./routes/PrivateRoute";
import UnAuthGuard from "../modules/auth/guards/UnAuthGuard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas (apenas não autenticados) */}
        <Route element={<UnAuthGuard />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        {/* Rotas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
