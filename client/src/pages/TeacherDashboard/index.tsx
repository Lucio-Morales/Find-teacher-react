import { Outlet } from 'react-router-dom';
import { MainPane, SecondaryPane } from '../styles/Page';
import Nav from '../../components/page/Nav';
import { navItems } from '../../lib/data/pages/teacherDashboard';

const TeacherDashboard = () => {
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

export default TeacherDashboard;
