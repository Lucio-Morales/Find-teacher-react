import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 20px;
  // background-color: #f8f8f8;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 10px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  // color: #060215;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  // color: #333;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.4rem;
  color: white;
  background-color: black;
  border: 1px solid white;
  // border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: grey;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
`;

export const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  // border-radius: 10px;
`;
