import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

// 🔐 Interceptor: injeta token em todas as requisições
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const storedUser = localStorage.getItem("smarttasks:user");

  if (storedUser) {
    const { token } = JSON.parse(storedUser);

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

// --------------------
// TIPOS
// --------------------
interface LoginForm {
  email: string;
  senha: string;
}

interface LoginResponse {
  token: string;
  email: string;
}

interface RegisterForm {
  nome: string;
  email: string;
  senha: string;
}

// --------------------
// AUTH
// --------------------
export async function loginUser(
  form: LoginForm
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>(
    "/auth/login",
    form
  );

  return response.data;
}

export async function registerUser(
  form: RegisterForm
) {
  const response = await api.post(
    "/auth/register",
    form
  );

  return response.data;
}
interface Task {
  id: number;
  titulo: string;
  concluida: boolean;
}

export async function listarTarefas(email: string): Promise<Task[]> {
  const response = await api.get<Task[]>(`/tasks/user/${email}`);
  return response.data;
}

export async function criarTarefa(email: string, titulo: string): Promise<Task> {
  const response = await api.post<Task>(`/tasks/user/${email}`, {
    titulo,
  });

  return response.data;
}
export async function concluirTarefa(id: number) {
  const response = await api.put(`/tasks/${id}`);
  return response.data;
}
export async function excluirTarefa(id: number) {
  await api.delete(`/tasks/${id}`);
}
export async function editarTarefa(id: number, titulo: string) {
  const response = await api.put(`/tasks/${id}/titulo`, {
    titulo,
  });

  return response.data;
}

export default api;