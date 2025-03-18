// src/data/types.ts
export type Database = 
    | 'ydb' 
    | 'postgresql' 
    | 'mysql' 
    | 'mssql' 
    | 'oracle'
    | 'mongodb'
    | 'dynamodb'
    | 'greenplum'
    | 'vertica'
    | 'tidb'
    | 'cosmosdb'
    | 'bigtable'
    | 'spanner'
    | 'sqlite3'
    | 'yugabytedb'
    | 'cockroachdb'
    | 'redis'
    | 'cassandra';

export type FrameworkCategory = 
    | 'Server-side feature'
    | 'Standard API'
    | 'Driver'
    | 'ORM'
    | 'Migration'
    | 'Connection Pool'
    | 'Query Builder'
    | 'Admin'
    | 'BI'
    | 'Visualization'
    | 'ETL'
    | 'Apps with abstract storage'
    | 'Logging'
    | 'Message broker';

export type ProgrammingLanguage = 
    | 'Java'
    | 'Go'
    | 'Python'
    | 'C#'
    | 'C++'
    | 'C'
    | 'Rust'
    | 'JavaScript'
    | 'TypeScript'
    | 'PHP'
    | 'Scala'
    | 'Ruby'
    | 'Erlang'
    | 'Elixir'
    | 'Haskell'
    | 'Kotlin'
    | 'Swift'
    | 'SQL'
    | 'YAML'
    | 'Dart'
    | 'JSON'
    | 'XML'
    | 'Clojure';

export type ContributorType = 
    | 'staff'
    | 'student'
    | 'freelance'
    | 'open-source';

export interface Implementation {
    name?: string;
    releaseDate: string;
    description?: string;
    repository?: string;
    authors?: string[];
    contributorsType?: ContributorType[];
}

export interface Framework {
    id: string;
    name: string;
    category: FrameworkCategory;
    language: ProgrammingLanguage;
    releaseDate: string;
    description: string;
    authors: string[];
    repository?: string;
    implementation?: Implementation;
}

export interface Dependency {
    source: string;
    target: string;
    type: string;
    description?: string;
}

export interface TimelineData {
    database: Database;
    displayName: string;
    frameworks: Framework[];
    dependencies: Dependency[];
}
