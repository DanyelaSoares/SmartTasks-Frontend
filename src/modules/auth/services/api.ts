interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

interface LoginForm {
  email: string;
  password: string;
}

// REGISTER (mock)
export async function registerUser(form: RegisterForm) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (form.email === "erro@teste.com") {
        reject(new Error("Esse e-mail já está em uso"));
      } else {
        resolve({ id: 1, ...form });
      }
    }, 1000);
  });
}

// LOGIN (mock)
export async function loginUser(form: LoginForm) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        form.email === "novo123@teste.com" &&
        form.password === "41785"
      ) {
        resolve({
          token: "fake-jwt-token",
          user: { email: form.email },
        });
      } else {
        reject(new Error("Email ou senha inválidos"));
      }
    }, 1000);
  });
}
