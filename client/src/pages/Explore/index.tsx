import { Outlet } from 'react-router-dom';
import Nav from '../../components/page/Nav';
import { navItems } from '../../lib/data/pages/explore';
import { MainPane, SecondaryPane } from '../styles/Page';

const Explore = () => {
  return (
    <>
      <MainPane>
        <Nav items={navItems} />
        <Outlet />
      </MainPane>
      <SecondaryPane>Secondary pane</SecondaryPane>
    </>
  );
};

export default Explore;
