// Updated src/App.tsx with theme toggle
import React, { useState, useMemo, useEffect } from 'react';
import TimelineChart from './components/TimelineChart';
import DependencyNetwork from './components/DependencyNetwork';
import FrameworkInfo from './components/FrameworkInfo';
import CategoryFilter from './components/CategoryFilter';
import Search from './components/Search';
import TimelineStats from './components/TimelineStats';
import CompareButton from './components/CompareButton';
import ExportButton from './components/ExportButton';
import ThemeToggle from './components/ThemeToggle';
import FrameworkComparison from './components/FrameworkComparison';
import { frameworks } from './data/frameworks';
import './App.css';

const App: React.FC = () => {
    const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        Array.from(new Set(frameworks.map(f => f.category)))
    );
    const [searchTerm, setSearchTerm] = useState('');
    const [showComparison, setShowComparison] = useState(false);
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
            const matchesSearch = searchTerm === '' ||
                f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                f.description.toLowerCase().includes(searchTerm.toLowerCase());

            return matchesCategory && matchesSearch;
        });
    }, [selectedCategories, searchTerm]);

    // When filtering changes, update selectedFramework if it's no longer in filtered list
    React.useEffect(() => {
        if (selectedFramework && !filteredFrameworks.some(f => f.id === selectedFramework)) {
            setSelectedFramework(null);
        }
    }, [filteredFrameworks, selectedFramework]);

    // Find the selected framework object
    const selectedFrameworkObj = selectedFramework
        ? frameworks.find(f => f.id === selectedFramework)
        : null;

    // Handle opening and closing the comparison modal
    const openComparisonModal = () => {
        setShowComparison(true);
    };

    const closeComparisonModal = () => {
        setShowComparison(false);
    };

    // Handle theme toggle
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />

            <header>
                <h1>PostgreSQL Frameworks Timeline</h1>
                <p>The evolution of tools and frameworks for working with PostgreSQL</p>
            </header>

            <div className="main-content">
                <div className="toolbar">
                    <div className="toolbar-left">
                        <Search onSearch={setSearchTerm} />
                        <CompareButton
                            onClick={openComparisonModal}
                            disabled={filteredFrameworks.length < 2}
                        />
                        <ExportButton frameworks={filteredFrameworks} />
                    </div>
                    <div className="filters-container">
                        <CategoryFilter
                            frameworks={frameworks}
                            selectedCategories={selectedCategories}
                            onCategoryChange={setSelectedCategories}
                        />
                    </div>
                </div>

                {filteredFrameworks.length > 0 && (
                    <TimelineStats frameworks={filteredFrameworks} />
                )}

                <div className="chart-container">
                    {filteredFrameworks.length > 0 ? (
                        <TimelineChart
                            frameworks={filteredFrameworks}
                            onFrameworkSelect={setSelectedFramework}
                            selectedFramework={selectedFramework}
                            isDarkMode={isDarkMode}
                        />
                    ) : (
                        <div className="no-results">
                            <p>No frameworks match your current filters. Try adjusting your search criteria.</p>
                        </div>
                    )}
                </div>

                <div className="info-network-container">
                    {selectedFrameworkObj && (
                        <FrameworkInfo framework={selectedFrameworkObj} />
                    )}
                    {filteredFrameworks.length > 0 ? (
                        <DependencyNetwork
                            frameworks={filteredFrameworks}
                            selectedFramework={selectedFramework}
                            onFrameworkSelect={setSelectedFramework}
                            isDarkMode={isDarkMode}
                        />
                    ) : (
                        <div className="dependency-network empty">
                            <p>No frameworks to display in the dependency network.</p>
                        </div>
                    )}
                </div>
            </div>

            <footer>
                <p>Data sourced from official documentation, GitHub repositories, and release notes.</p>
                <p>&copy; {new Date().getFullYear()} PostgreSQL Frameworks Timeline</p>
            </footer>

            {/* Comparison Modal */}
            {showComparison && (
                <>
                    <div className="overlay" onClick={closeComparisonModal}></div>
                    <FrameworkComparison
                        frameworks={filteredFrameworks}
                        onClose={closeComparisonModal}
                    />
                </>
            )}
        </div>
    );
};

export default App;
