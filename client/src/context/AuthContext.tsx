import { createContext, useState, ReactNode } from 'react';
import { loginUser } from '../api/authService';

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
    console.log(response.user.role);
    const userRole = response.user.role;

    if (response.success) {
      setIsAuthenticated(true);
      setRole(userRole);
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
