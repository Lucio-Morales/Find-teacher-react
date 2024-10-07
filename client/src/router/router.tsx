import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import RegisterForm from '../pages/Register';
import TeacherDashboard from '../pages/TeacherDashboard';
import StudentDashboard from '../pages/StudentDashboard';
import ProtectedRoute from '../components/ProtectedRoute';
import Publications from '../pages/TeacherDashboard/pages/Publications';
import YourStudents from '../pages/TeacherDashboard/pages/YourStudents';
import Forum from '../pages/TeacherDashboard/pages/Foro';
import Explore from '../pages/Explore';
import Popular from '../pages/Explore/pages/Popular';
import EducationalNews from '../pages/Explore/pages/EducationalNews';
import TopEducators from '../pages/Explore/pages/TopEducators';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Landing /> },
      { path: '/register', element: <RegisterForm /> },
      { path: '/login', element: <Login /> },
      {
        path: '/teacher-dashboard',
        // element: (

        element: <TeacherDashboard />,
        //   <ProtectedRoute allowedRoles={['teacher']}>
        //   </ProtectedRoute>
        // ),
        children: [
          {
            path: '',
            element: <Publications />,
            index: true,
          },
          {
            path: 'publications',
            element: <Publications />,
          },
          {
            path: 'your_students',
            element: <YourStudents />,
          },
          {
            path: 'forum',
            element: <Forum />,
          },
        ],
      },
      {
        path: 'explore',
        element: <Explore />,
        children: [
          {
            path: '',
            element: <Popular />,
            index: true,
          },
          {
            path: 'popular',
            element: <Popular />,
          },
          {
            path: 'educational_news',
            element: <EducationalNews />,
          },
          {
            path: 'top_educators',
            element: <TopEducators />,
          },
        ],
      },
      {
        path: '/student-dashboard',
        element: (
          <ProtectedRoute allowedRoles={['student']}>
            <StudentDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
