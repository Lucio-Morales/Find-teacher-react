import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import RegisterForm from '../pages/Register';
import ProtectedRoute from '../components/auth/hooks/ProtectedRoute';
import TeacherDashboard from '../pages/TeacherDashboard';
import StudentDashboard from '../pages/StudentDashboard';

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
          <ProtectedRoute requiredRole="teacher">
            <TeacherDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/student-dashboard',
        element: (
          <ProtectedRoute requiredRole="student">
            <StudentDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
