import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Bem-vinda ao SmartTasks 👋
        </h1>

        <p className="text-gray-700 mb-4">
          Logada como: <strong>{user?.email}</strong>
        </p>

        <p className="text-gray-700 mb-6">
          Aqui você poderá gerenciar suas tarefas, organizar seu dia e
          acompanhar seu progresso.
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
