import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  all: unset;
  display: flex;
  width: 100%;
  position: relative;
  @media (min-width: 431px) {
    flex-direction: column;
    width: fit-content;
  }
  @media (min-width: 1280px) {
    padding-right: 0;
    min-width: 250px;
  }
`;

interface NavLinkItemProps {
  active: string | boolean | undefined;
  onClick: () => void;
}
const NavLinkItem = styled.div.withConfig({
  shouldForwardProp: (prop) => 'active' !== prop,
})<NavLinkItemProps>`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.grey065};
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  justify-content: center;
  @media (min-width: 431px) {
    justify-content: unset;
  }
  @media (min-width: 1280px) {
    padding: 0 0.5rem;
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.text};
    `}
  @media (hover: hover) {
    &:hover {
      @media (min-width: 431px) {
        background: ${({ theme }) => theme.grey07};
      }
    }
  }
  //   .navItemIcon {
  //     width: 45px;
  //     height: 45px;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //   }
  //   .navItemArrowIcon {
  //     display: none;
  //     @media (min-width: 1280px) {
  //       width: 45px;
  //       height: 45px;
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //     }
  //   }
  .navItemText {
    display: none;
    @media (min-width: 1280px) {
      display: flex;
      white-space: nowrap;
    }
  }
`;

const Navbar = () => {
  const { pathname } = useLocation();

  const pageName = useMemo(() => {
    if (pathname) return pathname.split('/')[1];
    else return '';
  }, [pathname]);

  const scrollTop = useCallback(
    () =>
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        // behavior: width > 431 ? 'instant' : 'smooth',
      }),
    []
  );

  return (
    <Nav>
      <NavLinkItem>
        <div className="navItemText">Home</div>
      </NavLinkItem>
      <NavLinkItem>
        <div className="navItemText">Home</div>
      </NavLinkItem>
      <NavLinkItem>
        <div className="navItemText">Home</div>
      </NavLinkItem>
    </Nav>
  );
};
