import { useLocation, useNavigate } from 'react-router-dom';
import { Nav, NavLinkItem } from './styles/Navbar';
import { useCallback, useMemo } from 'react';
import Icon from '../../icon/Icon';
import { HiHome } from 'react-icons/hi';
import { navIconSize } from './utils';
import { IoCompassSharp } from 'react-icons/io5';
import { IoIosMail, IoMdSettings } from 'react-icons/io';
import ResponsiveLogo from '../../logo/ResponsiveLogo';

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
      <ResponsiveLogo justify="flex-end" />
      <br />
      <NavLinkItem
        onClick={() =>
          pageName === '/teacher-dashboard'
            ? scrollTop()
            : navigate('/teacher-dashboard')
        }
        active={pageName === 'teacher-dashboard' ? 'true' : ''}
      >
        <div className="navItemIcon">
          <Icon size={`${navIconSize}rem`} icon={HiHome} />
        </div>
        <div className="navItemText">Public</div>
      </NavLinkItem>
      <NavLinkItem
        onClick={() => navigate('/explore')}
        active={pageName === 'explore' || pathname === '/' ? 'true' : ''}
      >
        <div className="navItemIcon">
          <Icon size={`${navIconSize}rem`} icon={IoCompassSharp} />
        </div>
        <div className="navItemText">Explore</div>
      </NavLinkItem>
      <NavLinkItem
        onClick={() => navigate('/messages')}
        active={pathname === '/messages' ? 'true' : ''}
      >
        <div className="navItemIcon">
          <Icon size={`${navIconSize}rem`} icon={IoIosMail} />
        </div>
        <div className="navItemText">Messages</div>
      </NavLinkItem>
      <NavLinkItem
        onClick={() => navigate('/settings')}
        active={pathname === '/settings' ? 'true' : ''}
      >
        <div className="navItemIcon">
          <Icon
            size={`${navIconSize - 0.2}rem`}
            icon={IoMdSettings}
            // disableHover={true}
          />
        </div>
        <div className="navItemText">Settings</div>
      </NavLinkItem>
    </Nav>
  );
};

export default Navbar;
