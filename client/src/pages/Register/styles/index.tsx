import styled from 'styled-components';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  // background-color: #999999;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 25px;
  // background-color: #cccccc;
  // box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.5);
  // border-radius: 12px;
  border: 1px solid #e0e0e0;

  input,
  select {
    background-color: white;
    width: 100%;
    padding: 12px 15px;
    margin-bottom: 15px;
    // border: 1px solid #ccc;
    // border-radius: 8px;
    font-size: 15px;
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus {
      outline: none;
      border-color: silver;
      background: white;
      // box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  label {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
    color: silver;
  }

  button {
    width: 100%;
    padding: 12px;
    margin-top: 20px;
    background-color: black;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid silver;
    // border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: grey;
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
      color: silver;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;

      &:hover {
        color: grey;
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
