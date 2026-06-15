import { createContext, useContext, useEffect, useState } from "react";

type User = {
  email: string;
  token: string;
};

type AuthContextData = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // 🔁 Restaura login ao abrir o app
  useEffect(() => {
    const storedUser = localStorage.getItem("smarttasks:user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(email: string, token: string) {
    const userData: User = { email, token };

    setUser(userData);

    localStorage.setItem("smarttasks:user", JSON.stringify(userData));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("smarttasks:user");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
