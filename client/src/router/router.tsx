import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
// import Register from '../pages/Register';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import RegisterDemo from '../pages/Register/demo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Landing /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/register', element: <RegisterDemo /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default router;
