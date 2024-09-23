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
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #94b9ff;
  }
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
  const { register, handleSubmit } = useForm();

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your name" {...register('name')} />
        <Input type="email" placeholder="Your email" {...register('email')} />
        <Input
          type="password"
          placeholder="Your password"
          {...register('password')}
        />
        <FormSelect {...register('role')}>
          <option value="" disabled selected>
            Selecciona tu rol
          </option>
          <option value="profesor">Soy profesor</option>
          <option value="estudiante">Soy estudiante</option>
        </FormSelect>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

export default RegisterDemo;
