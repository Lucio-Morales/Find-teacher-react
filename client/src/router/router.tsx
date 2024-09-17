import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Landing from '../pages/Landing';
import Register from '../pages/Register';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Landing /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default router;
