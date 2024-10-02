import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import RegisterForm from '../pages/Register';
import TeacherDashboard from '../pages/TeacherDashboard';
import StudentDashboard from '../pages/StudentDashboard';
import ProtectedRoute from '../components/ProtectedRoute';

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
        element: (
          <ProtectedRoute allowedRoles={['teacher']}>
            <TeacherDashboard />
          </ProtectedRoute>
        ),
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
