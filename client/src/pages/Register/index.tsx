import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormWrapper } from './styles';
import { registerUser, RegisterData } from '../../api/authService';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

const RegisterForm: React.FC = () => {
  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      console.log('User registered successfully:');
      alert('Usuario registrado con exito :D');
      reset();
    },
    onError: (error) => {
      console.error('Error registering user:', error);
      alert('Error al registrar usuario :(');
    },
  });
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Your name"
          {...register('name', {
            required: { value: true, message: 'Nombre es requerido.' },
            minLength: {
              value: 3,
              message: 'Debe tener al menos 3 caracteres.',
            },
          })}
          style={{ marginBottom: errors.name ? '2px' : '10px' }}
        />
        {errors.name && (
          <span style={{ color: 'tomato', fontSize: '14px' }}>
            {errors.name.message}
          </span>
        )}
        <label>Email</label>
        <input
          type="email"
          placeholder="Your email"
          {...register('email', {
            required: { value: true, message: 'Email es requerido.' },
            pattern: {
              value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
              message: 'Email invalido',
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
            required: { value: true, message: 'Ingrese una contraseña' },
            minLength: {
              value: 6,
              message: 'Contraseña demasiado corta',
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
        <label htmlFor="role">Role</label>
        <select
          defaultValue=""
          {...register('role', {
            required: { value: true, message: 'Seleccione un rol.' },
          })}
        >
          <option value="" disabled>
            Selecciona tu rol
          </option>
          <option value="profesor">Soy profesor</option>
          <option value="estudiante">Soy estudiante</option>
        </select>

        {errors.role && (
          <span style={{ color: 'tomato', fontSize: '14px' }}>
            {errors.role.message}
          </span>
        )}
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? 'Registrando...' : 'Submit'}
        </button>

        <div className="redirect-text">
          ¿Ya tienes una cuenta?{' '}
          <span
            onClick={() => {
              navigate('/login');
            }}
          >
            Ingresar
          </span>
        </div>
      </Form>
    </FormWrapper>
  );
};

export default RegisterForm;
