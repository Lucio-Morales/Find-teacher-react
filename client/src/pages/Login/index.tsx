import React from 'react'; 
import { LoginData, loginUser } from '../../api/api';
import { Form, FormWrapper } from '../Register/styles';
import { useForm } from 'react-hook-form';

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();

  const onSubmit = handleSubmit(async (data) => {
    const isLoginSuccessful = await loginUser(data);

    if (isLoginSuccessful) {
      alert('login exitoso :D');
    } else {
      alert('Login failer. Please check your credentials and try again.');
    }
  });
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
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
