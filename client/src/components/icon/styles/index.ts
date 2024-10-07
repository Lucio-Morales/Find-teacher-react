import styled, { css } from 'styled-components';

const HoverButton = styled.button`
  all: unset;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
`;

const SmallHoverButton = styled.button`
  all: unset;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
`;

const IconBox = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  max-width: ${(props) => props.size};
  max-height: ${(props) => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.mainPurple};
    `}
`;

export { HoverButton, SmallHoverButton, IconBox };
