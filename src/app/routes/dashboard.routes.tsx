import { Routes, Route } from "react-router-dom";

export function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<h1>Dashboard</h1>} />
    </Routes>
  );
}
