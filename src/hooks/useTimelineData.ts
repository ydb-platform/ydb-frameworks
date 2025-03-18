// src/hooks/useTimelineData.ts
import { useMemo } from 'react';
import { Database, FrameworkCategory, ProgrammingLanguage, ContributorsType } from '../data/types';
import databaseData from '../data/index';

export const useTimelineData = (selectedDb: Database) => {
    return useMemo(() => {
        const data = databaseData[selectedDb];

        // Extract unique categories from frameworks
        const categoriesFromFrameworks = Array.from(
            new Set(data.frameworks.map(f => f.category))
        ) as FrameworkCategory[];
        
        // Всегда включаем категорию "Server-side feature" в список категорий
        const frameworkCategories = Array.from(
            new Set(['Server-side feature', ...categoriesFromFrameworks])
        ) as FrameworkCategory[];

        // Extract unique programming languages from frameworks
        const languages = Array.from(
            new Set(data.frameworks.map(f => f.language))
        ) as ProgrammingLanguage[];

        // Extract unique contributor types from frameworks
        const contributorsTypes = Array.from(
            new Set(data.frameworks.flatMap(f => f.implementation?.contributorsType || []))
        ) as ContributorsType[];

        // List of available databases
        const databases = Object.keys(databaseData) as Database[];

        return {
            frameworks: data.frameworks,
            dependencies: data.dependencies,
            frameworkCategories,
            languages,
            contributorsTypes,
            databases,
        };
    }, [selectedDb]);
};
