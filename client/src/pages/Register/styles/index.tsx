import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  // background-color: #f2f2f2;
  padding: 20px; /* Padding to avoid content touching the screen edges on mobile */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; /* Maximum width for larger screens */
  padding: 25px;
  background-color: #fff;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: 1px solid #e0e0e0;

  input,
  select {
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 15px;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      outline: none;
      border-color: #94b9ff;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #333;
  }

  button {
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    background-color: #94b9ff;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #6882b4;
      transform: translateY(-2px);
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    }

    &:active {
      background-color: #56739e;
      transform: translateY(0);
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  .redirect-text {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #666;

    span {
      cursor: pointer;
      color: #94b9ff;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;

      &:hover {
        color: #6882b4;
      }
    }
  }

  @media (max-width: 768px) {
    /* Ajustes para pantallas medianas */
    padding: 20px;

    input,
    select,
    button {
      padding: 10px 12px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    /* Ajustes para pantallas pequeñas */
    padding: 15px;

    input,
    select,
    button {
      padding: 8px 10px;
      font-size: 13px;
    }

    label {
      font-size: 13px;
    }

    button {
      font-size: 15px;
    }

    .redirect-text {
      font-size: 13px;
    }
  }
`;

export { FormWrapper, Form };
