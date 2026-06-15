import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./modules/auth/pages/Login";
import Register from "./modules/auth/pages/Register";
import Dashboard from "./modules/dashboard/pages/Dashboard";
import PrivateRoute from "./app/routes/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTAS PÚBLICAS */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ROTAS PRIVADAS */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
