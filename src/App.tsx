// Updated src/App.tsx with theme toggle
import React, { useState, useMemo, useEffect } from 'react';
import DependencyNetwork from './components/DependencyNetwork';
import ThemeToggle from './components/ThemeToggle';
import { frameworks } from './data/frameworks';
import './App.css';

const App: React.FC = () => {
    const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
    const [selectedCategories] = useState<string[]>(
        Array.from(new Set(frameworks.map(f => f.category)))
    );
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize from localStorage or based on user's system preference
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            return savedMode === 'dark';
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    // Save theme preference to localStorage when it changes
    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        // Also update Highcharts theme dynamically if needed
    }, [isDarkMode]);

    // Filter frameworks based on selected categories and search term
    const filteredFrameworks = useMemo(() => {
        if (selectedCategories.length === 0) {
            return [];
        }

        return frameworks.filter(f => {
            const matchesCategory = selectedCategories.includes(f.category);

            return matchesCategory;
        });
    }, [selectedCategories]);

    // When filtering changes, update selectedFramework if it's no longer in filtered list
    React.useEffect(() => {
        if (selectedFramework && !filteredFrameworks.some(f => f.id === selectedFramework)) {
            setSelectedFramework(null);
        }
    }, [filteredFrameworks, selectedFramework]);

    // Handle theme toggle
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
            <DependencyNetwork
                frameworks={filteredFrameworks}
                selectedFramework={selectedFramework}
                onFrameworkSelect={setSelectedFramework}
                isDarkMode={isDarkMode}
            />
        </div>
    );
};

export default App;
