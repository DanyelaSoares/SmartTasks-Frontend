import { Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";

export function AuthRoutes() {
  return (
    <Route element={<AuthLayout />}>
      <Route path="/" element={<Login />} />
    </Route>
  );
}
