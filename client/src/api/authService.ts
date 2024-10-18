import axios from 'axios';

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginData {
  email: string;
  password: string;
}

interface User {
  id: string;
  role: string;
}

// REGISTER USER
export const registerUser = async (data: RegisterData): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Usuario registrado con éxito:', result);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error;
  }
};

// LOGIN USER
export const loginService = async (userData: {
  email: string;
  password: string;
}): Promise<{
  id: string;
  user: User;
  message: string;
  success: boolean;
}> => {
  const response = await axios.post(
    'http://localhost:3000/user/login',
    userData
  );
  // console.log(response.data);

  const { user } = response.data;

  if (!user || !user.role) {
    throw new Error('La respuesta no contiene un usuario válido.');
  }

  // Almacenar el token y el usuario en localStorage si es necesario
  // localStorage.setItem('token', token);
  // localStorage.setItem('user', JSON.stringify(user));

  return response.data;
};
