import { useForm } from 'react-hook-form';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;

  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #94b9ff;
  }
`;

export const Label = styled.label`
  display: block;
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #94b9ff;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #94b9ff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6882b4;
  }

  &:active {
    background-color: #56739e;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const RegisterDemo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Label>Name</Label>
        <Input
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
        <Label>Email</Label>
        <Input
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
        <Label>Password</Label>
        <Input
          type="password"
          placeholder="Your password"
          {...register('password', {
            required: { value: true, message: 'Ingrese una contraseña' },
            minLength: {
              value: 4,
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
        <FormSelect
          {...register('role', {
            required: { value: true, message: 'Seleccione un rol.' },
          })}
        >
          <option value="" disabled selected>
            Selecciona tu rol
          </option>
          <option value="profesor">Soy profesor</option>
          <option value="estudiante">Soy estudiante</option>
        </FormSelect>
        {errors.role && (
          <span style={{ color: 'tomato', fontSize: '14px' }}>
            {errors.role.message}
          </span>
        )}
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default RegisterDemo;
