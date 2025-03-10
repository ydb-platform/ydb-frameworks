// src/hooks/useTimelineData.ts
import { useMemo } from 'react';
import { Database, Framework, FrameworkCategory, ProgrammingLanguage, Dependency } from '../data/types';
import databaseData from '../data/index';

export const useTimelineData = (selectedDb: Database) => {
    return useMemo(() => {
        const data = databaseData[selectedDb];

        // Extract unique categories from frameworks
        const frameworkCategories = Array.from(
            new Set(data.frameworks.map(f => f.category))
        ) as FrameworkCategory[];

        // Extract unique programming languages from frameworks
        const languages = Array.from(
            new Set(data.frameworks.map(f => f.language))
        ) as ProgrammingLanguage[];

        // List of available databases
        const databases = Object.keys(databaseData) as Database[];

        return {
            frameworks: data.frameworks,
            dependencies: data.dependencies,
            frameworkCategories,
            languages,
            databases,
        };
    }, [selectedDb]);
};
