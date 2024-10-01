import React, { createContext, useState, useEffect } from 'react';
import { login } from '../../../api/authService';

interface AuthContextType {
  user: { id: string; role: string } | null;
  login: (userData: {
    email: string;
    password: string;
  }) => Promise<{ id: string; role: string }>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<{ id: string; role: string } | null>(null);

  const handleLogin = async (userData: { email: string; password: string }) => {
    try {
      const user = await login(userData);
      setUser(user);
      return user;
    } catch (error) {
      console.error('Error durante el login:', error);
      throw error; // Lanza el error para manejarlo en el componente que llama
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login: handleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
