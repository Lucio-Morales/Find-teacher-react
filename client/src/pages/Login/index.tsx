import React, { useEffect } from 'react';
import { LoginData } from '../../api/authService';
import { Form, FormWrapper } from '../Register/styles';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const { login, role } = useAuth();

  useEffect(() => {
    if (role) {
      navigate(`/${role}-dashboard`);
    }
  }, [role, navigate]);

  const handleLogin = handleSubmit(
    async (data: { email: string; password: string }) => {
      try {
        await login(data);
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
      }
    }
  );
  return (
    <FormWrapper>
      <Form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Your email"
          {...register('email', {
            required: { value: true, message: 'Ingrese un email por favor.' },
            pattern: {
              value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
              message: 'Correo invalido',
            },
          })}
          style={{ marginBottom: errors.email ? '2px' : '10px' }}
        />
        {errors.email && (
          <span style={{ color: 'tomato', fontSize: '14px' }}>
            {errors.email.message}
          </span>
        )}

        <label>Password</label>
        <input
          type="password"
          placeholder="Your password"
          {...register('password', {
            required: {
              value: true,
              message: 'Ingrese una contraseña por favor.',
            },
            pattern: {
              value: /^(?=.*\d)/,
              message: 'La contraseña debe contener al menos un numero.',
            },
          })}
          style={{ marginBottom: errors.password ? '2px' : '10px' }}
        />
        {errors.password && (
          <span style={{ color: 'tomato', fontSize: '14px' }}>
            {errors.password.message}
          </span>
        )}

        <button>Login</button>
      </Form>
    </FormWrapper>
  );
};

export default Login;
