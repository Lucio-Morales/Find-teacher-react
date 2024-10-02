import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { AuthProvider } from './context/AuthContext';

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
