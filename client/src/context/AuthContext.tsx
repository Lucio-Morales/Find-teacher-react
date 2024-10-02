import { createContext, useState, ReactNode } from 'react';

interface LoginData {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  role: string | null;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  const login = async (data: LoginData) => {
    const response = await loginUser(data);
    if (response.success) {
      setIsAuthenticated(true);
      setRole(response.role!);
    } else {
      console.error(response.message);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
