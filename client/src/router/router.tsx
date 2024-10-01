import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import RegisterForm from '../pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Landing /> },
      { path: '/register', element: <RegisterForm /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default router;
