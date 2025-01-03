import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const themeStyles = {
    backgroundColor: isDark ? '#202020' : '#F4F5F0',
    color: isDark ? '#F4F5F0' : '#202020',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
    '--text-color': isDark ? '#F4F5F0' : '#202020'
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? 'dark-theme' : 'light-theme'} style={themeStyles}>
        <style>{`
          .dark-theme * {
            color: var(--text-color) !important;
          }
          .navbar {
            color: var(--text-color) !important;
          }
          .navbar * {
            color: var(--text-color) !important;
          }
        `}</style>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const LightDarkToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="theme-toggle"
      style={{
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: isDark ? '#202020' : '#F4F5F0',
        color: isDark ? '#F4F5F0' : '#202020',
        transition: 'all 0.3s ease'
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default LightDarkToggle;