// src/App.tsx
import React, { useState, useEffect } from 'react';
import Timeline from './components/Timeline/Timeline';
import LanguageFilter from './components/LanguageFilter/LanguageFilter';
import ContributorsFilter from './components/ContributorsFilter/ContributorsFilter';
import DatabaseSelector from './components/DatabaseSelector/DatabaseSelector';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import ReportMistakeButton from './components/ReportMistakeButton/ReportMistakeButton';
import { useQueryParams } from './hooks/useQueryParams';
import { useTimelineData } from './hooks/useTimelineData';
import { Database, FrameworkCategory, ProgrammingLanguage, ContributorType, Framework, Dependency } from './data/types';
import './styles/layout.css';

const App: React.FC = () => {
    const { getQueryParam, setQueryParam } = useQueryParams();
    const [selectedDb, setSelectedDb] = useState<Database>((getQueryParam('db') as Database) || 'ydb');
    const [selectedCategories, setSelectedCategories] = useState<FrameworkCategory[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<ProgrammingLanguage[]>([]);
    const [selectedContributorsTypes, setSelectedContributorsTypes] = useState<ContributorType[]>([]);
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(localStorage.getItem('theme') === 'dark');
    const [showDependencies, setShowDependencies] = useState<boolean>(true);

    const { data, frameworkCategories, languages, contributorsTypes, availableDatabases } = useTimelineData(selectedDb);

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

    // Initialize all contributor types as selected
    useEffect(() => {
        if (contributorsTypes.length > 0 && selectedContributorsTypes.length === 0) {
            setSelectedContributorsTypes(contributorsTypes);
        }
    }, [contributorsTypes, selectedContributorsTypes]);

    // Handle database change
    const handleDbChange = (db: Database) => {
        setSelectedDb(db);
        setQueryParam('db', db);
    };

    // Handle language toggle
    const handleLanguageToggle = (language: ProgrammingLanguage) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter(l => l !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    };

    // Handle select all languages
    const handleSelectAllLanguages = () => {
        setSelectedLanguages([...languages]);
    };

    // Handle contributor type toggle
    const handleContributorTypeToggle = (contributors: ContributorType[]) => {
        setSelectedContributorsTypes(contributors);
    };

    // Handle theme toggle
    const handleThemeToggle = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    };

    // Функция для переключения отображения зависимостей
    const toggleDependencies = () => {
        const newValue = !showDependencies;
        setShowDependencies(newValue);
    };

    // Set initial theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    const filteredFrameworks = data.frameworks.filter((framework: Framework) => {
        // Проверка по категории и языку
        const categoryMatch = selectedCategories.includes(framework.category);
        const languageMatch = selectedLanguages.includes(framework.language);

        // Проверка по типу контрибьюторов
        // Если типы контрибьюторов не указаны или список выбранных типов пуст, пропускаем фильтрацию
        let contributorMatch = true;
        if (framework.implementation?.contributorsType && selectedContributorsTypes.length > 0) {
            contributorMatch = framework.implementation?.contributorsType.some((type: ContributorType) =>
                selectedContributorsTypes.includes(type)
            );
        }

        return categoryMatch && languageMatch && contributorMatch;
    });

    const filteredDependencies = data.dependencies.filter((dep: Dependency) =>
        filteredFrameworks.some((f: Framework) => f.id === dep.source || f.id === dep.target)
    );

    return (
        <div className="app">
            <header>
                <h1>Database Frameworks Timeline</h1>
                <div className="controls">
                    <div className="control-group">
                        <DatabaseSelector
                            databases={availableDatabases}
                            selectedDb={selectedDb}
                            onDbChange={handleDbChange}
                        />
                        <ReportMistakeButton selectedDb={selectedDb} />
                    </div>
                    <ThemeToggle isDarkTheme={isDarkTheme} onToggle={handleThemeToggle} />
                </div>
            </header>

            <div className="main-content">
                <div className="sidebar">
                    <div className="filter-section">
                        <div className="filter-header">Settings</div>
                        <div className="filter-content">
                            <label className="checkbox-label">
                                <input
                                    type="checkbox"
                                    checked={showDependencies}
                                    onChange={toggleDependencies}
                                />
                                <span>Показать зависимости</span>
                            </label>
                        </div>
                    </div>

                    <LanguageFilter
                        languages={languages}
                        selectedLanguages={selectedLanguages}
                        onToggle={handleLanguageToggle}
                        onSelectAll={handleSelectAllLanguages}
                    />

                    {/* Отображаем фильтр контрибьюторов только если есть данные */}
                    {contributorsTypes.length > 0 && (
                        <ContributorsFilter
                            availableContributors={contributorsTypes}
                            selectedContributors={selectedContributorsTypes}
                            onContributorsChange={handleContributorTypeToggle}
                        />
                    )}
                </div>

                {/* Таймлайн в основной области */}
                <div className="timeline-container">
                    <Timeline
                        frameworks={filteredFrameworks}
                        dependencies={filteredDependencies}
                        selectedDb={selectedDb}
                        showDependencies={showDependencies}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
