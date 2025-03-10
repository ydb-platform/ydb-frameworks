// src/App.tsx
import React, { useState, useEffect } from 'react';
import Timeline from './components/Timeline/Timeline';
import LanguageFilter from './components/LanguageFilter/LanguageFilter';
import DatabaseSelector from './components/DatabaseSelector/DatabaseSelector';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { useQueryParams } from './hooks/useQueryParams';
import { useTimelineData } from './hooks/useTimelineData';
import { Database, FrameworkCategory, ProgrammingLanguage } from './data/types';

const App: React.FC = () => {
    const { getQueryParam, setQueryParam } = useQueryParams();
    const [selectedDb, setSelectedDb] = useState<Database>((getQueryParam('db') as Database) || 'postgresql');
    const [selectedCategories, setSelectedCategories] = useState<FrameworkCategory[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<ProgrammingLanguage[]>([]);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(localStorage.getItem('theme') === 'dark');

    const { frameworks, frameworkCategories, languages, dependencies, databases } = useTimelineData(selectedDb);

    // Initialize all categories as selected
    useEffect(() => {
        if (frameworkCategories.length > 0 && selectedCategories.length === 0) {
            setSelectedCategories(frameworkCategories);
        }
    }, [frameworkCategories, selectedCategories]);

    // Initialize all languages as selected
    useEffect(() => {
        if (languages.length > 0 && selectedLanguages.length === 0) {
            setSelectedLanguages(languages);
        }
    }, [languages, selectedLanguages]);

    // Handle database change
    const handleDbChange = (db: Database) => {
        setSelectedDb(db);
        setQueryParam('db', db);
    };

    // Handle category toggle
    const handleCategoryToggle = (category: FrameworkCategory) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(c => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Handle language toggle
    const handleLanguageToggle = (language: ProgrammingLanguage) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter(l => l !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    };

    // Handle theme toggle
    const handleThemeToggle = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    };

    // Set initial theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    const filteredFrameworks = frameworks.filter(framework =>
        selectedCategories.includes(framework.category) &&
        selectedLanguages.includes(framework.language)
    );

    const filteredDependencies = dependencies.filter(dep =>
        filteredFrameworks.some(f => f.id === dep.source || f.id === dep.target)
    );

    return (
        <div className="app">
            <header>
                <h1>Database Frameworks Timeline</h1>
                <div className="controls">
                    <DatabaseSelector
                        databases={databases}
                        selectedDb={selectedDb}
                        onDbChange={handleDbChange}
                    />
                    <ThemeToggle isDarkTheme={isDarkTheme} onToggle={handleThemeToggle} />
                </div>
            </header>

            <div className="filters">
                <LanguageFilter
                    languages={languages}
                    selectedLanguages={selectedLanguages}
                    onToggle={handleLanguageToggle}
                />
            </div>

            <Timeline
                frameworks={filteredFrameworks}
                dependencies={filteredDependencies}
                selectedDb={selectedDb}
            />
        </div>
    );
};

export default App;
