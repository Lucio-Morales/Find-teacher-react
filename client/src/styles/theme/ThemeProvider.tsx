import { useState, useCallback } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import { ThemeContext } from './index';

const ThemeProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SCThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
