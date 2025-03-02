import React from 'react';

interface ThemeToggleProps {
    isDarkMode: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
    return (
        <button
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={onToggle}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;
