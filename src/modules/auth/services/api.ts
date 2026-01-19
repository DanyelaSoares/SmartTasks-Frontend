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
  password: string;
}

// --------------------
// AUTH
// --------------------
export async function loginUser(form: LoginForm) {
  return new Promise<{
    token: string;
    email: string;
  }>((resolve, reject) => {
    setTimeout(() => {
      if (
        form.email === "novo123@teste.com" &&
        form.password === "41785"
      ) {
        resolve({
          token: "fake-jwt-token",
          email: form.email,
        });
      } else {
        reject(new Error("Email ou senha inválidos"));
      }
    }, 1000);
  });
}

export default api;
