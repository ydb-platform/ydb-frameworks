// src/data/types.ts
export type Database =
    | 'ydb';

export type FrameworkCategory =
    | 'Standard API'
    | 'Driver'
    | 'Migration'
    | 'ORM'
    | 'Admin'
    | 'ETL'
    | 'BI'
    | 'Logging'
    | 'Visualization'
    | 'Query Builder'
    | 'Connection Pool'
    | 'Server-side feature'
    | 'Apps with abstract storage'
    | 'Message broker';

export type ProgrammingLanguage =
    | 'JavaScript'
    | 'TypeScript'
    | 'Python'
    | 'Java'
    | 'Go'
    | 'C#'
    | 'C'
    | 'C++'
    | 'Ruby'
    | 'PHP'
    | 'Rust'
    | 'Kotlin'
    | 'Swift'
    | 'Scala'
    | 'YAML'
    | 'Dart'
    | 'SQL'
    | 'XML'
    | 'JSON'
    | 'Erlang'
    | 'Elixir'
    | 'Haskell';
    
export type ContributorsType =
    | 'open-source'
    | 'student'
    | 'staff'
    | 'freelance';

export interface Framework {
    id: string;
    name: string;
    category: FrameworkCategory;
    language: ProgrammingLanguage;
    releaseDate: string; // ISO date string
    description: string;
    authors?: string[];
    version?: string;
    repository?: string;
    website?: string;
    // Информация о реализации для конкретной БД
    implementation?: {
        name?: string; // Название конкретной реализации (например, "Hibernate YDB Dialect")
        description?: string; // Описание реализации
        releaseDate?: string; // ISO date string
        repository?: string; // Репозиторий реализации
        version?: string;
        authors?: string[]; // Авторы реализации
        contributorsType?: ContributorsType[]; // Тип контрибьюторов реализации
    };
}

export interface Dependency {
    source: string; // Framework ID
    target: string; // Framework ID
    description?: string;
}

export interface TimelineData {
    database: Database;
    displayName: string;
    frameworks: Framework[];
    dependencies: Dependency[];
}
