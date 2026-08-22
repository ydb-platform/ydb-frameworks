import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// Get theme from URL query parameter
const getThemeFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get('theme');
  if (theme === 'light' || theme === 'dark') {
    return theme;
  }
  return null;
};

const getInitialTheme = () => {
  return getThemeFromUrl() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
};

export const ThemeProvider = ({ children }) => {
  const [resolvedTheme, setResolvedTheme] = useState(getInitialTheme);
  
  useEffect(() => {
    const urlTheme = getThemeFromUrl();
    
    if (!urlTheme) {
      // Always use system theme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e) => setResolvedTheme(e.matches ? 'dark' : 'light');
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }
  }, []);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);
  
  return (
    <ThemeContext.Provider value={{ resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
