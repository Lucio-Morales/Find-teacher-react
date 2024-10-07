import { useLocation, useNavigate } from 'react-router-dom';
import { Nav, NavLinkItem } from './styles/Navbar';
import { useCallback, useMemo } from 'react';

const Navbar = () => {
  const navigate = useNavigate();

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
      <NavLinkItem
        onClick={() =>
          pageName === '/teacher-dashboard'
            ? scrollTop()
            : navigate('/teacher-dashboard')
        }
      >
        <div className="navItemText">Public</div>
      </NavLinkItem>
      <NavLinkItem onClick={() => navigate('/explore')}>
        <div className="navItemText">Explore</div>
      </NavLinkItem>
      <NavLinkItem>
        <div className="navItemText">Messages</div>
      </NavLinkItem>
      <NavLinkItem>
        <div className="navItemText">Settings</div>
      </NavLinkItem>
    </Nav>
  );
};

export default Navbar;
