import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/context/AuthContext";
import {
  listarTarefas,
  criarTarefa,
  concluirTarefa,
  excluirTarefa,
} from "../../auth/services/api";

interface Task {
  id: number;
  titulo: string;
  concluida: boolean;
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const [tarefas, setTarefas] = useState<Task[]>([]);
  const [titulo, setTitulo] = useState("");
  const [error, setError] = useState("");

  async function carregarTarefas() {
    if (!user?.email) return;

    try {
      const data = await listarTarefas(user.email);
      setTarefas(data);
    } catch {
      setError("Erro ao carregar tarefas.");
    }
  }

  useEffect(() => {
    carregarTarefas();
  }, [user?.email]);

  async function handleAdicionarTarefa(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!titulo.trim()) {
      setError("Digite o título da tarefa.");
      return;
    }

    if (!user?.email) {
      setError("Usuário não encontrado.");
      return;
    }

    try {
      const novaTarefa = await criarTarefa(user.email, titulo);
      setTarefas([...tarefas, novaTarefa]);
      setTitulo("");
    } catch {
      setError("Erro ao criar tarefa.");
    }
  }

  async function handleConcluirTarefa(id: number) {
    setError("");

    try {
      const tarefaAtualizada = await concluirTarefa(id);

      setTarefas(
        tarefas.map((tarefa) => (tarefa.id === id ? tarefaAtualizada : tarefa)),
      );
    } catch {
      setError("Erro ao concluir tarefa.");
    }
  }

  async function handleExcluirTarefa(id: number) {
    setError("");

    try {
      await excluirTarefa(id);

      setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    } catch {
      setError("Erro ao excluir tarefa.");
    }
  }

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

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleAdicionarTarefa} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Digite uma nova tarefa"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="flex-1 border rounded px-3 py-2"
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Adicionar
          </button>
        </form>

        <h2 className="text-xl font-semibold mb-3">Minhas tarefas</h2>

        {tarefas.length === 0 ? (
          <p className="text-gray-500">Nenhuma tarefa cadastrada.</p>
        ) : (
          <ul className="space-y-2">
            {tarefas.map((tarefa) => (
              <li
                key={tarefa.id}
                className="border rounded px-3 py-2 flex justify-between items-center"
              >
                <div>
                  <span
                    className={
                      tarefa.concluida
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }
                  >
                    {tarefa.titulo}
                  </span>

                  <span className="ml-3 text-sm text-gray-500">
                    {tarefa.concluida ? "Concluída" : "Pendente"}
                  </span>
                </div>

                <div className="flex gap-2">
                  {!tarefa.concluida && (
                    <button
                      onClick={() => handleConcluirTarefa(tarefa.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition text-sm"
                    >
                      Concluir
                    </button>
                  )}

                  <button
                    onClick={() => handleExcluirTarefa(tarefa.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition text-sm"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
