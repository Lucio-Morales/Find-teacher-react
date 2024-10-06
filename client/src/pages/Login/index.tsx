import React, { useEffect } from 'react';
import { LoginData } from '../../api/authService';
import { Form, FormWrapper } from '../Register/styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../../hooks/useAuth';

const Login: React.FC = () => {
  const { login, role } = useAuth();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log('Login exitoso');
      alert('Login exitoso');
      reset();
    },
    onError: (error) => {
      console.error('Error in login:', error);
      alert('Error in login :(');
    },
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  useEffect(() => {
    if (role) {
      navigate(`/${role}-dashboard`);
    }
  }, [role, navigate]);

  const handleLogin = handleSubmit(() => {
    // mutation.mutate(data);
    navigate('/teacher-dashboard');
  });
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

        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Logueando...' : 'Submit'}
        </button>
      </Form>
    </FormWrapper>
  );
};

export default Login;
