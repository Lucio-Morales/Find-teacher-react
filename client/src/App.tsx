import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './components/auth/hooks/AuthContext';

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;
