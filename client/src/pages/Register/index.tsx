import React, { useState } from 'react';
import {
  Form,
  FormButton,
  FormContainer,
  FormInput,
  FormSelect,
} from './styles';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ name: '', email: '', password: '', role: '' });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <FormSelect
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Selecciona tu rol
          </option>
          <option value="profesor">Soy profesor</option>
          <option value="estudiante">Soy estudiante</option>
        </FormSelect>

        <FormButton type="submit">Register</FormButton>
      </Form>
    </FormContainer>
  );
};

export default Register;
