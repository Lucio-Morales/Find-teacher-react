import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 2;
  font-weight: 500;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  justify-content: space-between;
  height: 52px;
  nav {
    display: flex;
    font-size: 1.1rem;
    font-weight: 500;
    height: 100%;
    color: ${({ theme }) => theme.greyText};
  }
  .pagePaneHeaderSide {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .pageHeaderDynamicIcon {
    @media (min-width: 1004px) {
      display: none;
    }
  }
`;

const PageNavItem = styled.div`
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.grey065};
  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid white;
      color: white;
    `}
  ${({ active }) =>
    !active &&
    css`
      @media (hover: hover) {
        &:hover {
          background: ${({ theme }) => theme.backgroundGrey};
        }
      }
    `}
`;

export { Box, PageNavItem };
