// src/hooks/useTimelineData.ts
import { useState, useEffect } from 'react';
import { databases, Framework, ContributorType, FrameworkCategory, ProgrammingLanguage, Database } from '../data';

export const useTimelineData = (selectedDb: Database) => {
    const [selectedContributors, setSelectedContributors] = useState<ContributorType[]>([]);
    const [data, setData] = useState(databases[selectedDb]);

    useEffect(() => {
        setData(databases[selectedDb]);
    }, [selectedDb]);

    // Extract unique contributor types from frameworks
    const contributorsTypes = Array.from(
        new Set(data.frameworks.flatMap((f: Framework) => f.implementation?.contributorsType || []))
    ) as ContributorType[];

    // Extract unique categories from frameworks
    const frameworkCategories = Array.from(
        new Set(data.frameworks.map((f: Framework) => f.category))
    ) as FrameworkCategory[];

    // Extract unique programming languages from frameworks
    const languages = Array.from(
        new Set(data.frameworks.map((f: Framework) => f.language))
    ) as ProgrammingLanguage[];

    // List of available databases
    const availableDatabases = Object.keys(databases) as Database[];

    return {
        data,
        selectedContributors,
        setSelectedContributors,
        contributorsTypes,
        frameworkCategories,
        languages,
        availableDatabases
    };
};
