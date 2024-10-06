import styled from 'styled-components';

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

const NavLinkItem = styled.div`
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
    .navItemText {
		display: none;
		@media (min-width: 1280px) {
			display: flex;
			white-space: nowrap;
		}
`;

export { Nav, NavLinkItem };
