import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

// Get theme from URL query parameter
const getThemeFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get('theme');
  if (theme === 'light' || theme === 'dark') {
    return theme;
  }
  return null;
};

export const ThemeProvider = ({ children }) => {
  const [resolvedTheme, setResolvedTheme] = useState('dark');
  
  useEffect(() => {
    const urlTheme = getThemeFromUrl();
    
    if (urlTheme) {
      // Explicit theme from URL query parameter
      setResolvedTheme(urlTheme);
    } else {
      // Always use system theme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
      
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

