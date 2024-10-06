import { Outlet } from 'react-router-dom';
import Layout from './components/layout';
import GlobalStyle from './styles/styled-components/GlobalStyles';
import ThemeProvider from './styles/theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Layout>
        <Outlet />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
