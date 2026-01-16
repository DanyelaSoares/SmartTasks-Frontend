import { createContext, useContext, useState } from "react";

type User = {
  email: string;
};

type AuthContextData = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("smarttasks:user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  function login(email: string) {
    const userData = { email };
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
