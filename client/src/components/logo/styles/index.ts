import styled from 'styled-components';

type Props = {
  justify: 'center' | 'flex-end' | 'flex-start' | undefined;
  size: string | undefined;
};

const Educapp = styled.div<Props>`
  font-size: ${({ size }) => (size ? size : '1.7rem')};
  padding-top: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  font-family: 'Black Ops One', system-ui;
  font-weight: 400;
  font-style: normal;
  .full {
    display: none;
    @media (min-width: 1280px) {
      padding-right: 1rem;
      cursor: pointer;
      display: unset;
    }
  }
  .small {
    font-size: 2.8rem;
    cursor: pointer;
    @media (min-width: 1280px) {
      display: none;
    }
  }
`;

export { Educapp };
