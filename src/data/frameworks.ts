// src/data/frameworks.ts
import { Framework } from '../types';

export const frameworks: Framework[] = [
    {
        id: 'pgjdbc',
        name: 'pgJDBC',
        releaseDate: new Date(1997, 5, 15), // PostgreSQL support date
        frameworkReleaseDate: new Date(1997, 5, 15), // Framework initial release
        description: 'Java database connectivity driver for PostgreSQL',
        dependencies: [],
        category: 'driver',
        language: 'Java',
        url: 'https://jdbc.postgresql.org/'
    },
    {
        id: 'psycopg2',
        name: 'Psycopg2',
        releaseDate: new Date(2001, 0, 15), // PostgreSQL support date
        frameworkReleaseDate: new Date(2001, 0, 15), // Framework initial release
        description: 'PostgreSQL adapter for Python',
        dependencies: [],
        category: 'driver',
        language: 'Python',
        url: 'https://www.psycopg.org/'
    },
    {
        id: 'dbapi',
        name: 'DB-API',
        releaseDate: new Date(1996, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(1995, 0, 1), // Framework initial release
        description: 'Python Database API Specification',
        dependencies: [],
        category: 'driver',
        language: 'Python',
        url: 'https://www.python.org/dev/peps/pep-0249/'
    },
    {
        id: 'pgadmin',
        name: 'pgAdmin',
        releaseDate: new Date(2002, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2002, 0, 1), // Framework initial release
        description: 'Administration and development platform for PostgreSQL',
        dependencies: [],
        category: 'admin',
        language: 'Python',
        url: 'https://www.pgadmin.org/'
    },
    {
        id: 'sqlalchemy',
        name: 'SQLAlchemy',
        releaseDate: new Date(2006, 1, 14), // PostgreSQL support date
        frameworkReleaseDate: new Date(2006, 1, 14), // Framework initial release
        description: 'Python SQL toolkit and Object-Relational Mapping',
        dependencies: ['dbapi', 'psycopg2'],
        category: 'orm',
        language: 'Python',
        url: 'https://www.sqlalchemy.org/'
    },
    {
        id: 'hibernate',
        name: 'Hibernate',
        releaseDate: new Date(2002, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2001, 9, 1), // Framework initial release
        description: 'Java ORM framework',
        dependencies: ['pgjdbc'],
        category: 'orm',
        language: 'Java',
        url: 'https://hibernate.org/'
    },
    {
        id: 'airflow',
        name: 'Apache Airflow',
        releaseDate: new Date(2014, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2014, 3, 1), // Framework initial release
        description: 'Platform to programmatically author, schedule and monitor workflows',
        dependencies: ['sqlalchemy'],
        category: 'etl',
        language: 'Python',
        url: 'https://airflow.apache.org/'
    },
    {
        id: 'spark',
        name: 'Apache Spark',
        releaseDate: new Date(2014, 11, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2014, 5, 1), // Framework initial release
        description: 'Unified analytics engine for big data processing',
        dependencies: ['pgjdbc'],
        category: 'analytics',
        language: 'Scala',
        url: 'https://spark.apache.org/'
    },
    {
        id: 'prisma',
        name: 'Prisma',
        releaseDate: new Date(2019, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2019, 6, 1), // Framework initial release
        description: 'Next-generation ORM for Node.js and TypeScript',
        dependencies: [],
        category: 'orm',
        language: 'TypeScript',
        url: 'https://www.prisma.io/'
    },
    {
        id: 'knex',
        name: 'Knex.js',
        releaseDate: new Date(2013, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2012, 11, 1), // Framework initial release
        description: 'SQL query builder for JavaScript',
        dependencies: [],
        category: 'orm',
        language: 'JavaScript',
        url: 'http://knexjs.org/'
    },
    {
        id: 'dbt',
        name: 'dbt',
        releaseDate: new Date(2016, 11, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 11, 1), // Framework initial release
        description: 'Data transformation tool that enables data analysts to transform data in their warehouse',
        dependencies: ['sqlalchemy'],
        category: 'etl',
        language: 'Python',
        url: 'https://www.getdbt.com/'
    },
    {
        id: 'sequelize',
        name: 'Sequelize',
        releaseDate: new Date(2011, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2011, 0, 1), // Framework initial release
        description: 'Promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server',
        dependencies: [],
        category: 'orm',
        language: 'JavaScript',
        url: 'https://sequelize.org/'
    },
    {
        id: 'typeorm',
        name: 'TypeORM',
        releaseDate: new Date(2016, 7, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 7, 1), // Framework initial release
        description: 'ORM for TypeScript and JavaScript',
        dependencies: [],
        category: 'orm',
        language: 'TypeScript',
        url: 'https://typeorm.io/'
    },
    {
        id: 'pgbouncer',
        name: 'PgBouncer',
        releaseDate: new Date(2007, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2007, 0, 1), // Framework initial release
        description: 'Lightweight connection pooler for PostgreSQL',
        dependencies: [],
        category: 'admin',
        language: 'C',
        url: 'https://www.pgbouncer.org/'
    },
    {
        id: 'metabase',
        name: 'Metabase',
        releaseDate: new Date(2015, 9, 21), // PostgreSQL support date
        frameworkReleaseDate: new Date(2015, 9, 21), // Framework initial release
        description: 'The simplest way to get business intelligence and analytics to everyone',
        dependencies: ['pgjdbc'],
        category: 'analytics',
        language: 'Clojure',
        url: 'https://www.metabase.com/'
    },
    {
        id: 'dbeaver',
        name: 'DBeaver',
        releaseDate: new Date(2010, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2010, 5, 1), // Framework initial release
        description: 'Universal database tool for developers and database administrators',
        dependencies: ['pgjdbc'],
        category: 'admin',
        language: 'Java',
        url: 'https://dbeaver.io/'
    },
    {
        id: 'node-postgres',
        name: 'node-postgres',
        releaseDate: new Date(2010, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2010, 6, 1), // Framework initial release
        description: 'Non-blocking PostgreSQL client for Node.js',
        dependencies: [],
        category: 'driver',
        language: 'JavaScript',
        url: 'https://node-postgres.com/'
    },
    {
        id: 'postgrest',
        name: 'PostgREST',
        releaseDate: new Date(2015, 2, 17), // PostgreSQL support date
        frameworkReleaseDate: new Date(2015, 2, 17), // Framework initial release
        description: 'REST API for any PostgreSQL database',
        dependencies: [],
        category: 'admin',
        language: 'Haskell',
        url: 'https://postgrest.org/'
    },
    {
        id: 'hasura',
        name: 'Hasura',
        releaseDate: new Date(2018, 6, 10), // PostgreSQL support date
        frameworkReleaseDate: new Date(2018, 6, 10), // Framework initial release
        description: 'Instant GraphQL APIs on PostgreSQL',
        dependencies: [],
        category: 'admin',
        language: 'Haskell',
        url: 'https://hasura.io/'
    },
    {
        id: 'supabase',
        name: 'Supabase',
        releaseDate: new Date(2020, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2020, 6, 1), // Framework initial release
        description: 'Open source Firebase alternative with PostgreSQL',
        dependencies: ['postgrest'],
        category: 'admin',
        language: 'TypeScript',
        url: 'https://supabase.io/'
    },
    {
        id: 'liquibase',
        name: 'Liquibase',
        releaseDate: new Date(2007, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2006, 11, 1), // Framework initial release
        description: 'Database schema change management',
        dependencies: ['pgjdbc'],
        category: 'admin',
        language: 'Java',
        url: 'https://www.liquibase.org/'
    },
    {
        id: 'flyway',
        name: 'Flyway',
        releaseDate: new Date(2010, 8, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2010, 5, 1), // Framework initial release
        description: 'Database migrations made easy',
        dependencies: ['pgjdbc'],
        category: 'admin',
        language: 'Java',
        url: 'https://flywaydb.org/'
    },
    {
        id: 'npgsql',
        name: 'Npgsql',
        releaseDate: new Date(2002, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2002, 0, 1), // Framework initial release
        description: '.NET data provider for PostgreSQL',
        dependencies: [],
        category: 'driver',
        language: 'C#',
        url: 'https://www.npgsql.org/'
    },
    {
        id: 'entity-framework',
        name: 'Entity Framework',
        releaseDate: new Date(2011, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2008, 7, 11), // Framework initial release
        description: 'Object-database mapper for .NET',
        dependencies: ['npgsql'],
        category: 'orm',
        language: 'C#',
        url: 'https://docs.microsoft.com/en-us/ef/'
    },
    {
        id: 'sqlx',
        name: 'SQLx',
        releaseDate: new Date(2019, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2019, 5, 1), // Framework initial release
        description: 'Rust SQL toolkit with compile-time checked queries',
        dependencies: [],
        category: 'orm',
        language: 'Rust',
        url: 'https://github.com/launchbadge/sqlx'
    },
    {
        id: 'redash',
        name: 'Redash',
        releaseDate: new Date(2013, 10, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2013, 10, 1), // Framework initial release
        description: 'Make Your Company Data Driven',
        dependencies: ['psycopg2'],
        category: 'analytics',
        language: 'Python',
        url: 'https://redash.io/'
    },
    {
        id: 'prefect',
        name: 'Prefect',
        releaseDate: new Date(2018, 11, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2018, 11, 1), // Framework initial release
        description: 'The easiest way to automate your data',
        dependencies: ['sqlalchemy'],
        category: 'etl',
        language: 'Python',
        url: 'https://www.prefect.io/'
    },
    {
        id: 'dagster',
        name: 'Dagster',
        releaseDate: new Date(2018, 10, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2018, 10, 1), // Framework initial release
        description: 'Data orchestrator for machine learning, analytics, and ETL',
        dependencies: ['sqlalchemy'],
        category: 'etl',
        language: 'Python',
        url: 'https://dagster.io/'
    },
    {
        id: 'pg-promise',
        name: 'pg-promise',
        releaseDate: new Date(2015, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2015, 5, 1), // Framework initial release
        description: 'PostgreSQL interface for Node.js',
        dependencies: [],
        category: 'driver',
        language: 'TypeScript',
        url: 'https://github.com/vitaly-t/pg-promise'
    },
    {
        id: 'jooq',
        name: 'jOOQ',
        releaseDate: new Date(2011, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2011, 2, 1), // Framework initial release
        description: 'Generate typesafe SQL for Java',
        dependencies: ['pgjdbc'],
        category: 'orm',
        language: 'Java',
        url: 'https://www.jooq.org/'
    },
    {
        id: 'gorm',
        name: 'GORM',
        releaseDate: new Date(2014, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2013, 10, 25), // Framework initial release
        description: 'The fantastic ORM library for Golang',
        dependencies: [],
        category: 'orm',
        language: 'Go',
        url: 'https://gorm.io/'
    },
    {
        id: 'pgx',
        name: 'pgx',
        releaseDate: new Date(2014, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2014, 3, 1), // Framework initial release
        description: 'PostgreSQL driver and toolkit for Go',
        dependencies: [],
        category: 'driver',
        language: 'Go',
        url: 'https://github.com/jackc/pgx'
    },
    {
        id: 'ruby-pg',
        name: 'ruby-pg',
        releaseDate: new Date(2008, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2008, 0, 1), // Framework initial release
        description: 'Ruby interface to PostgreSQL',
        dependencies: [],
        category: 'driver',
        language: 'Ruby',
        url: 'https://github.com/ged/ruby-pg'
    },
    {
        id: 'activerecord',
        name: 'ActiveRecord',
        releaseDate: new Date(2005, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2004, 11, 1), // Framework initial release
        description: 'ORM framework in Rails',
        dependencies: ['ruby-pg'],
        category: 'orm',
        language: 'Ruby',
        url: 'https://guides.rubyonrails.org/active_record_basics.html'
    },
    {
        id: 'diesel',
        name: 'Diesel',
        releaseDate: new Date(2016, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 5, 1), // Framework initial release
        description: 'Safe, extensible ORM and Query Builder for Rust',
        dependencies: [],
        category: 'orm',
        language: 'Rust',
        url: 'https://diesel.rs/'
    },
    {
        id: 'kysely',
        name: 'Kysely',
        releaseDate: new Date(2021, 9, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2021, 9, 1), // Framework initial release
        description: 'Type-safe SQL query builder for TypeScript',
        dependencies: [],
        category: 'orm',
        language: 'TypeScript',
        url: 'https://github.com/koskimas/kysely'
    },
    {
        id: 'pandas',
        name: 'pandas',
        releaseDate: new Date(2009, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2008, 12, 1), // Framework initial release
        description: 'Python Data Analysis Library',
        dependencies: ['psycopg2'],
        category: 'analytics',
        language: 'Python',
        url: 'https://pandas.pydata.org/'
    },
    {
        id: 'python-postgres',
        name: 'python-postgres',
        releaseDate: new Date(1997, 8, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(1997, 8, 1), // Framework initial release
        description: 'Legacy Python Interface to PostgreSQL',
        dependencies: [],
        category: 'driver',
        language: 'Python',
        url: 'https://github.com/psycopg/psycopg'
    },
    {
        id: 'php-pgsql',
        name: 'PHP PostgreSQL Extension',
        releaseDate: new Date(2000, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2000, 0, 1), // Framework initial release
        description: 'PHP extension for PostgreSQL',
        dependencies: [],
        category: 'driver',
        language: 'PHP',
        url: 'https://www.php.net/manual/en/book.pgsql.php'
    },
    {
        id: 'laravel',
        name: 'Laravel',
        releaseDate: new Date(2011, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2011, 5, 1), // Framework initial release
        description: 'PHP web application framework with expressive, elegant syntax',
        dependencies: ['php-pgsql'],
        category: 'orm',
        language: 'PHP',
        url: 'https://laravel.com/'
    },
    {
        id: 'pyramid',
        name: 'Pyramid',
        releaseDate: new Date(2011, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2010, 11, 1), // Framework initial release
        description: 'Python web framework to create web applications with minimal complexity',
        dependencies: ['sqlalchemy'],
        category: 'admin',
        language: 'Python',
        url: 'https://trypyramid.com/'
    },
    {
        id: 'django',
        name: 'Django',
        releaseDate: new Date(2005, 8, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2005, 6, 1), // Framework initial release
        description: 'High-level Python web framework that encourages rapid development',
        dependencies: ['psycopg2'],
        category: 'orm',
        language: 'Python',
        url: 'https://www.djangoproject.com/'
    },
    {
        id: 'pony-orm',
        name: 'Pony ORM',
        releaseDate: new Date(2013, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2013, 5, 1), // Framework initial release
        description: 'Python ORM with beautiful query syntax',
        dependencies: ['python-postgres'],
        category: 'orm',
        language: 'Python',
        url: 'https://ponyorm.org/'
    },
    {
        id: 'doctrine',
        name: 'Doctrine',
        releaseDate: new Date(2007, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2006, 0, 1), // Framework initial release
        description: 'Object-relational mapper for PHP',
        dependencies: ['php-pgsql'],
        category: 'orm',
        language: 'PHP',
        url: 'https://www.doctrine-project.org/'
    },
    {
        id: 'propel',
        name: 'Propel',
        releaseDate: new Date(2006, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2005, 10, 1), // Framework initial release
        description: 'Object-relational mapping (ORM) for PHP',
        dependencies: ['php-pgsql'],
        category: 'orm',
        language: 'PHP',
        url: 'http://propelorm.org/'
    },
    {
        id: 'symfony',
        name: 'Symfony',
        releaseDate: new Date(2006, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2005, 9, 1), // Framework initial release
        description: 'PHP framework for web and console applications',
        dependencies: ['doctrine'],
        category: 'admin',
        language: 'PHP',
        url: 'https://symfony.com/'
    },
    {
        id: 'sqlboiler',
        name: 'SQLBoiler',
        releaseDate: new Date(2016, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 6, 1), // Framework initial release
        description: 'Generate a Go ORM tailored to your database schema',
        dependencies: ['pgx'],
        category: 'orm',
        language: 'Go',
        url: 'https://github.com/volatiletech/sqlboiler'
    },
    {
        id: 'pgloader',
        name: 'pgloader',
        releaseDate: new Date(2013, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2013, 3, 1), // Framework initial release
        description: 'Data loading tool for PostgreSQL',
        dependencies: [],
        category: 'etl',
        language: 'Common Lisp',
        url: 'https://github.com/dimitri/pgloader'
    },
    {
        id: 'peewee',
        name: 'Peewee',
        releaseDate: new Date(2010, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2010, 1, 1), // Framework initial release
        description: 'Small, expressive ORM for Python',
        dependencies: ['psycopg2'],
        category: 'orm',
        language: 'Python',
        url: 'http://docs.peewee-orm.com/'
    },
    {
        id: 'tortoise-orm',
        name: 'Tortoise ORM',
        releaseDate: new Date(2018, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2018, 5, 1), // Framework initial release
        description: 'Easy async ORM for Python, built with relations in mind',
        dependencies: ['psycopg2'],
        category: 'orm',
        language: 'Python',
        url: 'https://tortoise-orm.readthedocs.io/'
    },
    {
        id: 'ecto',
        name: 'Ecto',
        releaseDate: new Date(2014, 8, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2014, 6, 1), // Framework initial release
        description: 'Database wrapper and language integrated query for Elixir',
        dependencies: [],
        category: 'orm',
        language: 'Elixir',
        url: 'https://hexdocs.pm/ecto/Ecto.html'
    },
    {
        id: 'postgresql-async',
        name: 'postgresql-async',
        releaseDate: new Date(2015, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2015, 2, 1), // Framework initial release
        description: 'Async, Netty based, database drivers for PostgreSQL and MySQL',
        dependencies: [],
        category: 'driver',
        language: 'Java',
        url: 'https://github.com/jasync-sql/jasync-sql'
    },
    {
        id: 'quill',
        name: 'Quill',
        releaseDate: new Date(2016, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 1, 1), // Framework initial release
        description: 'Compile-time SQL query language for Scala',
        dependencies: [],
        category: 'orm',
        language: 'Scala',
        url: 'https://getquill.io/'
    },
    {
        id: 'slick',
        name: 'Slick',
        releaseDate: new Date(2012, 4, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2012, 0, 1), // Framework initial release
        description: 'Functional Relational Mapping for Scala',
        dependencies: [],
        category: 'orm',
        language: 'Scala',
        url: 'https://scala-slick.org/'
    },
    {
        id: 'dapper',
        name: 'Dapper',
        releaseDate: new Date(2011, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2011, 3, 1), // Framework initial release
        description: 'Simple object mapper for .NET',
        dependencies: ['npgsql'],
        category: 'orm',
        language: 'C#',
        url: 'https://github.com/DapperLib/Dapper'
    },
    {
        id: 'rust-postgres',
        name: 'rust-postgres',
        releaseDate: new Date(2012, 7, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2012, 7, 1), // Framework initial release
        description: 'Native PostgreSQL driver for Rust',
        dependencies: [],
        category: 'driver',
        language: 'Rust',
        url: 'https://github.com/sfackler/rust-postgres'
    },
    {
        id: 'marten',
        name: 'Marten',
        releaseDate: new Date(2016, 1, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 1, 1), // Framework initial release
        description: 'Document DB and Event Store for PostgreSQL',
        dependencies: ['npgsql'],
        category: 'orm',
        language: 'C#',
        url: 'https://martendb.io/'
    },
    {
        id: 'datagrip',
        name: 'DataGrip',
        releaseDate: new Date(2015, 11, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2015, 11, 1), // Framework initial release
        description: 'Database IDE for PostgreSQL and other databases',
        dependencies: [],
        category: 'admin',
        language: 'Java',
        url: 'https://www.jetbrains.com/datagrip/'
    },
    {
        id: 'aiven',
        name: 'Aiven for PostgreSQL',
        releaseDate: new Date(2016, 9, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 9, 1), // Framework initial release
        description: 'Fully managed PostgreSQL service',
        dependencies: [],
        category: 'admin',
        language: 'Multiple',
        url: 'https://aiven.io/postgresql'
    },
    {
        id: 'timescaledb',
        name: 'TimescaleDB',
        releaseDate: new Date(2017, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2017, 3, 1), // Framework initial release
        description: 'Open-source time-series database for PostgreSQL',
        dependencies: [],
        category: 'analytics',
        language: 'C',
        url: 'https://www.timescale.com/'
    },
    {
        id: 'pgtune',
        name: 'pgtune',
        releaseDate: new Date(2008, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2008, 5, 1), // Framework initial release
        description: 'PostgreSQL configuration tuning tool',
        dependencies: [],
        category: 'admin',
        language: 'Ruby',
        url: 'https://pgtune.leopard.in.ua/'
    },
    {
        id: 'pgbadger',
        name: 'pgBadger',
        releaseDate: new Date(2012, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2012, 3, 1), // Framework initial release
        description: 'PostgreSQL log analyzer',
        dependencies: [],
        category: 'admin',
        language: 'Perl',
        url: 'https://pgbadger.darold.net/'
    },
    {
        id: 'sqlc',
        name: 'sqlc',
        releaseDate: new Date(2019, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2019, 2, 1), // Framework initial release
        description: 'Generate type-safe code from SQL',
        dependencies: [],
        category: 'orm',
        language: 'Go',
        url: 'https://sqlc.dev/'
    },
    {
        id: 'pgpool',
        name: 'Pgpool-II',
        releaseDate: new Date(2003, 9, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2003, 9, 1), // Framework initial release
        description: 'Connection pooling and query load balancing',
        dependencies: [],
        category: 'admin',
        language: 'C',
        url: 'https://www.pgpool.net/'
    },
    {
        id: 'pg_dump',
        name: 'pg_dump',
        releaseDate: new Date(1996, 8, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(1996, 8, 1), // Framework initial release
        description: 'Built-in PostgreSQL backup tool',
        dependencies: [],
        category: 'admin',
        language: 'C',
        url: 'https://www.postgresql.org/docs/current/app-pgdump.html'
    },
    {
        id: 'pg_activity',
        name: 'pg_activity',
        releaseDate: new Date(2013, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2013, 2, 1), // Framework initial release
        description: 'Top-like application for PostgreSQL server activity monitoring',
        dependencies: ['psycopg2'],
        category: 'admin',
        language: 'Python',
        url: 'https://github.com/dalibo/pg_activity'
    },
    {
        id: 'pgcli',
        name: 'pgcli',
        releaseDate: new Date(2015, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2015, 0, 1), // Framework initial release
        description: 'Command line interface for PostgreSQL with auto-completion and syntax highlighting',
        dependencies: ['psycopg2'],
        category: 'admin',
        language: 'Python',
        url: 'https://www.pgcli.com/'
    },
    {
        id: 'pgdash',
        name: 'PGDash',
        releaseDate: new Date(2018, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2018, 6, 1), // Framework initial release
        description: 'PostgreSQL monitoring tool',
        dependencies: [],
        category: 'admin',
        language: 'Go',
        url: 'https://pgdash.io/'
    },
    {
        id: 'superset',
        name: 'Apache Superset',
        releaseDate: new Date(2016, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2015, 10, 1), // Framework initial release
        description: 'Data exploration and visualization platform',
        dependencies: ['sqlalchemy'],
        category: 'analytics',
        language: 'Python',
        url: 'https://superset.apache.org/'
    },
    {
        id: 'grafana',
        name: 'Grafana',
        releaseDate: new Date(2015, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2014, 6, 1), // Framework initial release
        description: 'Observability and data visualization platform',
        dependencies: [],
        category: 'analytics',
        language: 'Go',
        url: 'https://grafana.com/'
    },
    {
        id: 'pgweb',
        name: 'pgweb',
        releaseDate: new Date(2014, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2014, 5, 1), // Framework initial release
        description: 'Web-based PostgreSQL database browser',
        dependencies: [],
        category: 'admin',
        language: 'Go',
        url: 'https://github.com/sosedoff/pgweb'
    },
    {
        id: 'postgrex',
        name: 'Postgrex',
        releaseDate: new Date(2013, 1, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2013, 1, 1), // Framework initial release
        description: 'PostgreSQL driver for Elixir',
        dependencies: [],
        category: 'driver',
        language: 'Elixir',
        url: 'https://github.com/elixir-ecto/postgrex'
    },
    {
        id: 'pg-admin4',
        name: 'pgAdmin 4',
        releaseDate: new Date(2016, 8, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 8, 1), // Framework initial release
        description: 'Modern PostgreSQL administration and development platform',
        dependencies: ['pgadmin'],
        category: 'admin',
        language: 'Python',
        url: 'https://www.pgadmin.org/'
    },
    {
        id: 'prisma2',
        name: 'Prisma 2',
        releaseDate: new Date(2020, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2020, 5, 1), // Framework initial release
        description: 'Next-generation ORM with type-safety, migrations and real-time capabilities',
        dependencies: ['prisma'],
        category: 'orm',
        language: 'TypeScript',
        url: 'https://www.prisma.io/'
    },
    {
        id: 'mongodb-bi-connector',
        name: 'MongoDB BI Connector',
        releaseDate: new Date(2016, 9, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 5, 1), // Framework initial release
        description: 'Connector for using SQL tools with MongoDB',
        dependencies: [],
        category: 'driver',
        language: 'Multiple',
        url: 'https://www.mongodb.com/products/bi-connector'
    },
    {
        id: 'micronaut-data',
        name: 'Micronaut Data',
        releaseDate: new Date(2019, 8, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2019, 6, 1), // Framework initial release
        description: 'Database access toolkit for Micronaut',
        dependencies: ['pgjdbc'],
        category: 'orm',
        language: 'Java',
        url: 'https://micronaut-projects.github.io/micronaut-data/latest/guide/'
    },
    {
        id: 'vertx-pg-client',
        name: 'Vert.x PostgreSQL Client',
        releaseDate: new Date(2017, 3, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2017, 3, 1), // Framework initial release
        description: 'Reactive PostgreSQL client for Vert.x',
        dependencies: [],
        category: 'driver',
        language: 'Java',
        url: 'https://vertx.io/docs/vertx-pg-client/java/'
    },
    {
        id: 'r2dbc-postgresql',
        name: 'R2DBC PostgreSQL',
        releaseDate: new Date(2018, 11, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2018, 11, 1), // Framework initial release
        description: 'Reactive Relational Database Connectivity for PostgreSQL',
        dependencies: [],
        category: 'driver',
        language: 'Java',
        url: 'https://github.com/r2dbc/r2dbc-postgresql'
    },
    {
        id: 'spring-data-r2dbc',
        name: 'Spring Data R2DBC',
        releaseDate: new Date(2019, 4, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2019, 2, 1), // Framework initial release
        description: 'Reactive Spring Data for R2DBC',
        dependencies: ['r2dbc-postgresql'],
        category: 'orm',
        language: 'Java',
        url: 'https://spring.io/projects/spring-data-r2dbc'
    },
    {
        id: 'postgres-operator',
        name: 'Postgres Operator',
        releaseDate: new Date(2017, 10, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2017, 10, 1), // Framework initial release
        description: 'Kubernetes operator for PostgreSQL',
        dependencies: [],
        category: 'admin',
        language: 'Go',
        url: 'https://github.com/zalando/postgres-operator'
    },
    {
        id: 'postgraphile',
        name: 'PostGraphile',
        releaseDate: new Date(2016, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 6, 1), // Framework initial release
        description: 'Instant GraphQL API for PostgreSQL database',
        dependencies: ['node-postgres'],
        category: 'admin',
        language: 'TypeScript',
        url: 'https://www.graphile.org/postgraphile/'
    },
    {
        id: 'sequelize-typescript',
        name: 'Sequelize TypeScript',
        releaseDate: new Date(2017, 2, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2017, 2, 1), // Framework initial release
        description: 'Decorators and types for Sequelize',
        dependencies: ['sequelize'],
        category: 'orm',
        language: 'TypeScript',
        url: 'https://github.com/RobinBuschmann/sequelize-typescript'
    },
    {
        id: 'drizzle-orm',
        name: 'Drizzle ORM',
        releaseDate: new Date(2022, 5, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2022, 5, 1), // Framework initial release
        description: 'TypeScript ORM with maximum type safety',
        dependencies: [],
        category: 'orm',
        language: 'TypeScript',
        url: 'https://github.com/drizzle-team/drizzle-orm'
    },
    {
        id: 'bun-postgres',
        name: 'Bun PostgreSQL',
        releaseDate: new Date(2022, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2022, 6, 1), // Framework initial release
        description: 'PostgreSQL client for Bun JavaScript runtime',
        dependencies: [],
        category: 'driver',
        language: 'JavaScript',
        url: 'https://github.com/oven-sh/bun'
    },
    {
        id: 'dbmate',
        name: 'dbmate',
        releaseDate: new Date(2017, 0, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 11, 1), // Framework initial release
        description: 'Database migration tool',
        dependencies: [],
        category: 'admin',
        language: 'Go',
        url: 'https://github.com/amacneil/dbmate'
    },
    {
        id: 'postgresql-embedded',
        name: 'Embedded PostgreSQL Server',
        releaseDate: new Date(2015, 7, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2015, 7, 1), // Framework initial release
        description: 'Embedded PostgreSQL server for Java integration testing',
        dependencies: [],
        category: 'admin',
        language: 'Java',
        url: 'https://github.com/yandex-qatools/postgresql-embedded'
    },
    {
        id: 'alembic',
        name: 'Alembic',
        releaseDate: new Date(2012, 4, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2012, 4, 1), // Framework initial release
        description: 'Database migration tool for SQLAlchemy',
        dependencies: ['sqlalchemy'],
        category: 'admin',
        language: 'Python',
        url: 'https://alembic.sqlalchemy.org/'
    },
    {
        id: 'pgjdbc-ng',
        name: 'pgjdbc-ng',
        releaseDate: new Date(2013, 6, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2013, 6, 1), // Framework initial release
        description: 'New generation PostgreSQL JDBC driver',
        dependencies: [],
        category: 'driver',
        language: 'Java',
        url: 'https://impossibl.github.io/pgjdbc-ng/'
    },
    {
        id: 'sqitch',
        name: 'Sqitch',
        releaseDate: new Date(2012, 7, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2012, 7, 1), // Framework initial release
        description: 'Database change management application',
        dependencies: [],
        category: 'admin',
        language: 'Perl',
        url: 'https://sqitch.org/'
    },
    {
        id: 'golang-migrate',
        name: 'golang-migrate',
        releaseDate: new Date(2016, 7, 1), // PostgreSQL support date
        frameworkReleaseDate: new Date(2016, 7, 1), // Framework initial release
        description: 'Database migrations written in Go',
        dependencies: [],
        category: 'admin',
        language: 'Go',
        url: 'https://github.com/golang-migrate/migrate'
    }
];
