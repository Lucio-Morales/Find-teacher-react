import { Outlet } from 'react-router-dom';
import Nav from '../../components/page/Nav';
import { MainPane, SecondaryPane } from '../styles/Page';
import navItems from '../../lib/data/pages/messages';

const Messages = () => {
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

export default Messages;
