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

// REGISTER USER
export const registerUser = async (data: RegisterData): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Convertimos los datos del formulario a JSON
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Usuario registrado con éxito:', result);
    // Aquí puedes manejar la respuesta según tus necesidades
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    throw error; // Re-lanzamos el error para manejarlo en el componente
  }
};

// LOGIN USER
export const login = async (userData: {
  email: string;
  password: string;
}): Promise<{ id: string; role: string }> => {
  const response = await axios.post(
    'http://localhost:3000/user/login',
    userData
  );
  const { user, token } = response.data;

  if (!user || !user.role) {
    throw new Error('La respuesta no contiene un usuario válido.');
  }

  // Almacenar el token y el usuario en localStorage si es necesario
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));

  return user; // Retorna el usuario
};
