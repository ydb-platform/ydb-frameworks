// src/data/frameworks.ts
import { Framework } from '../types';

export const frameworks: Framework[] = [
    {
        id: 'pgjdbc',
        name: 'pgJDBC',
        releaseDate: new Date(1997, 5, 15),
        description: 'Java database connectivity driver for PostgreSQL',
        dependencies: [],
        category: 'driver',
        url: 'https://jdbc.postgresql.org/'
    },
    {
        id: 'psycopg2',
        name: 'Psycopg2',
        releaseDate: new Date(2001, 0, 15),
        description: 'PostgreSQL adapter for Python',
        dependencies: [],
        category: 'driver',
        url: 'https://www.psycopg.org/'
    },
    {
        id: 'dbapi',
        name: 'DB-API',
        releaseDate: new Date(1996, 0, 1),
        description: 'Python Database API Specification',
        dependencies: [],
        category: 'driver',
        url: 'https://www.python.org/dev/peps/pep-0249/'
    },
    {
        id: 'pgadmin',
        name: 'pgAdmin',
        releaseDate: new Date(2002, 0, 1),
        description: 'Administration and development platform for PostgreSQL',
        dependencies: [],
        category: 'admin',
        url: 'https://www.pgadmin.org/'
    },
    {
        id: 'sqlalchemy',
        name: 'SQLAlchemy',
        releaseDate: new Date(2006, 1, 14),
        description: 'Python SQL toolkit and Object-Relational Mapping',
        dependencies: ['dbapi', 'psycopg2'],
        category: 'orm',
        url: 'https://www.sqlalchemy.org/'
    },
    {
        id: 'hibernate',
        name: 'Hibernate',
        releaseDate: new Date(2001, 9, 1),
        description: 'Java ORM framework',
        dependencies: ['pgjdbc'],
        category: 'orm',
        url: 'https://hibernate.org/'
    },
    {
        id: 'airflow',
        name: 'Apache Airflow',
        releaseDate: new Date(2014, 3, 1),
        description: 'Platform to programmatically author, schedule and monitor workflows',
        dependencies: ['sqlalchemy'],
        category: 'etl',
        url: 'https://airflow.apache.org/'
    },
    {
        id: 'spark',
        name: 'Apache Spark',
        releaseDate: new Date(2014, 5, 1),
        description: 'Unified analytics engine for big data processing',
        dependencies: ['pgjdbc'],
        category: 'analytics',
        url: 'https://spark.apache.org/'
    },
    {
        id: 'prisma',
        name: 'Prisma',
        releaseDate: new Date(2019, 6, 1),
        description: 'Next-generation ORM for Node.js and TypeScript',
        dependencies: [],
        category: 'orm',
        url: 'https://www.prisma.io/'
    },
    {
        id: 'knex',
        name: 'Knex.js',
        releaseDate: new Date(2012, 11, 1),
        description: 'SQL query builder for JavaScript',
        dependencies: [],
        category: 'orm',
        url: 'http://knexjs.org/'
    },
    {
        id: 'dbt',
        name: 'dbt',
        releaseDate: new Date(2016, 11, 1),
        description: 'Data transformation tool that enables data analysts to transform data in their warehouse',
        dependencies: ['sqlalchemy'],
        category: 'etl',
        url: 'https://www.getdbt.com/'
    },
    {
        id: 'sequelize',
        name: 'Sequelize',
        releaseDate: new Date(2011, 0, 1),
        description: 'Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server',
        dependencies: [],
        category: 'orm',
        url: 'https://sequelize.org/'
    },
    {
        id: 'typeorm',
        name: 'TypeORM',
        releaseDate: new Date(2016, 7, 1),
        description: 'ORM for TypeScript and JavaScript',
        dependencies: [],
        category: 'orm',
        url: 'https://typeorm.io/'
    },
    {
        id: 'pgbouncer',
        name: 'PgBouncer',
        releaseDate: new Date(2007, 0, 1),
        description: 'Lightweight connection pooler for PostgreSQL',
        dependencies: [],
        category: 'admin',
        url: 'https://www.pgbouncer.org/'
    },
    {
        id: 'metabase',
        name: 'Metabase',
        releaseDate: new Date(2015, 9, 21),
        description: 'The simplest way to get business intelligence and analytics to everyone',
        dependencies: ['pgjdbc'],
        category: 'analytics',
        url: 'https://www.metabase.com/'
    },
    {
        id: 'dbeaver',
        name: 'DBeaver',
        releaseDate: new Date(2010, 5, 1),
        description: 'Universal database tool for developers and database administrators',
        dependencies: ['pgjdbc'],
        category: 'admin',
        url: 'https://dbeaver.io/'
    },
    {
        id: 'node-postgres',
        name: 'node-postgres',
        releaseDate: new Date(2010, 6, 1),
        description: 'Non-blocking PostgreSQL client for Node.js',
        dependencies: [],
        category: 'driver',
        url: 'https://node-postgres.com/'
    },
    {
        id: 'postgrest',
        name: 'PostgREST',
        releaseDate: new Date(2015, 2, 17),
        description: 'REST API for any PostgreSQL database',
        dependencies: [],
        category: 'admin',
        url: 'https://postgrest.org/'
    },
// Continuing src/data/frameworks.ts
    {
        id: 'hasura',
        name: 'Hasura',
        releaseDate: new Date(2018, 6, 10),
        description: 'Instant GraphQL APIs on PostgreSQL',
        dependencies: [],
        category: 'admin',
        url: 'https://hasura.io/'
    },
    {
        id: 'supabase',
        name: 'Supabase',
        releaseDate: new Date(2020, 6, 1),
        description: 'Open source Firebase alternative with PostgreSQL',
        dependencies: ['postgrest'],
        category: 'admin',
        url: 'https://supabase.io/'
    },
    {
        id: 'liquibase',
        name: 'Liquibase',
        releaseDate: new Date(2006, 11, 1),
        description: 'Database schema change management',
        dependencies: ['pgjdbc'],
        category: 'admin',
        url: 'https://www.liquibase.org/'
    },
    {
        id: 'flyway',
        name: 'Flyway',
        releaseDate: new Date(2010, 5, 1),
        description: 'Database migrations made easy',
        dependencies: ['pgjdbc'],
        category: 'admin',
        url: 'https://flywaydb.org/'
    },
    {
        id: 'npgsql',
        name: 'Npgsql',
        releaseDate: new Date(2002, 0, 1),
        description: '.NET data provider for PostgreSQL',
        dependencies: [],
        category: 'driver',
        url: 'https://www.npgsql.org/'
    },
    {
        id: 'entity-framework',
        name: 'Entity Framework',
        releaseDate: new Date(2008, 7, 11),
        description: 'Object-database mapper for .NET',
        dependencies: ['npgsql'],
        category: 'orm',
        url: 'https://docs.microsoft.com/en-us/ef/'
    },
    {
        id: 'sqlx',
        name: 'SQLx',
        releaseDate: new Date(2019, 5, 1),
        description: 'Rust SQL toolkit with compile-time checked queries',
        dependencies: [],
        category: 'orm',
        url: 'https://github.com/launchbadge/sqlx'
    },
    {
        id: 'redash',
        name: 'Redash',
        releaseDate: new Date(2013, 10, 1),
        description: 'Make Your Company Data Driven',
        dependencies: ['psycopg2'],
        category: 'analytics',
        url: 'https://redash.io/'
    },
    {
        id: 'prefect',
        name: 'Prefect',
        releaseDate: new Date(2018, 11, 1),
        description: 'The easiest way to automate your data',
        dependencies: ['sqlalchemy'],
        category: 'etl',
        url: 'https://www.prefect.io/'
    },
    {
        id: 'dagster',
        name: 'Dagster',
        releaseDate: new Date(2018, 10, 1),
        description: 'Data orchestrator for machine learning, analytics, and ETL',
        dependencies: ['sqlalchemy'],
        category: 'etl',
        url: 'https://dagster.io/'
    }
];
