import { useContext } from 'react';
import { createContext, useState, useEffect } from 'react';
 
const ThemeContext = createContext(null);
 
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('oms-theme') || 'dark';
  });
 
  useEffect(() => {
    localStorage.setItem('oms-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
 
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}
 
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
}
 