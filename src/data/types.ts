// src/data/types.ts
export type Database =
    | 'postgresql'
    | 'mysql'
    | 'mongodb'
    | 'ydb'
    | 'cassandra'
    | 'oracle'
    | 'spanner'
    | 'yugabyte'
    | 'cockroach'
    | 'tidb'
    | 'cosmosdb'
    | 'dynamodb'
    | 'sqlite3'
    | 'firebase'
    | 'db2';

export type FrameworkCategory =
    | 'ORM'
    | 'Migration'
    | 'Driver'
    | 'Standard'  // Категория для стандартов API
    | 'ETL'
    | 'BI'
    | 'Visualization'
    | 'Admin'
    | 'Query Builder'
    | 'Connection Pool'
    | 'Server-side feature'
    | 'Apps with abstract storage'
    | 'Logging'
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
    | 'JSON';

export type ContributorsType =
    | 'open-source'
    | 'student'
    | 'staff';

export interface Framework {
    id: string;
    name: string;
    category: FrameworkCategory;
    language: ProgrammingLanguage;
    releaseDate: string; // ISO date string
    dbSupportDate?: string; // ISO date string, if different from releaseDate
    endSupportDate?: string; // ISO date string, optional
    description: string;
    authors?: string[];
    version?: string;
    repository?: string;
    website?: string;
    url?: string; // URL фреймворка, где лежит код
    dbImplementationName?: string; // Название конкретной реализации для выбранной БД
    contributorsType?: ContributorsType[]; // Новое поле - тип контрибьюторов
}

export interface Dependency {
    source: string; // Framework ID
    target: string; // Framework ID
    description?: string;
}

export interface TimelineData {
    database: Database;
    frameworks: Framework[];
    dependencies: Dependency[];
}
