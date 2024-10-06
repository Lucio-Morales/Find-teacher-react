import { Nav, NavLinkItem } from './styles/Navbar';

const Navbar = () => {
  return (
    <Nav>
      <NavLinkItem>
        <div className="navItemText">Home</div>
      </NavLinkItem>
      <NavLinkItem>
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
