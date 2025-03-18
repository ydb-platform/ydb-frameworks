import { Framework } from './types';

export const common: Record<string, Framework> = {
    // Standard APIs
    jdbc: {
        id: 'jdbc',
        name: 'JDBC',
        category: 'Standard API',
        language: 'Java',
        releaseDate: '1997-02-19',
        description: 'Java Database Connectivity API',
        authors: ['Sun Microsystems']
    },
    'database-sql': {
        id: 'database-sql',
        name: 'database/sql',
        category: 'Standard API',
        language: 'Go',
        releaseDate: '2011-03-01',
        description: 'Go standard database interface',
        authors: ['Go Team']
    },
    dbapi: {
        id: 'dbapi',
        name: 'DB-API',
        category: 'Standard API',
        language: 'Python',
        releaseDate: '1996-10-01',
        description: 'Python Database API Specification (PEP 249)',
        authors: ['Python DB-SIG']
    },
    'ado-net': {
        id: 'ado-net',
        name: 'ADO.NET',
        category: 'Standard API',
        language: 'C#',
        releaseDate: '2000-01-01',
        description: 'Microsoft ADO.NET data provider',
        authors: ['Microsoft']
    },

    // ORMs
    gorm: {
        id: 'gorm',
        name: 'GORM',
        category: 'ORM',
        language: 'Go',
        releaseDate: '2013-01-01',
        description: 'The fantastic ORM library for Golang, aims to be developer friendly',
        authors: ['Jinzhu Zhang'],
        repository: 'https://github.com/go-gorm/gorm'
    },
    dapper: {
        id: 'dapper',
        name: 'Dapper',
        category: 'ORM',
        language: 'C#',
        releaseDate: '2011-01-01',
        description: 'A simple object mapper for .NET',
        authors: ['Stack Overflow'],
        repository: 'https://github.com/StackExchange/Dapper'
    },
    hibernate: {
        id: 'hibernate',
        name: 'Hibernate',
        category: 'ORM',
        language: 'Java',
        releaseDate: '2001-12-01',
        description: 'Object-relational mapping (ORM) tool for the Java programming language',
        authors: ['Gavin King', 'Red Hat'],
        repository: 'https://github.com/hibernate/hibernate-orm'
    },
    sqlalchemy: {
        id: 'sqlalchemy',
        name: 'SQLAlchemy',
        category: 'ORM',
        language: 'Python',
        releaseDate: '2006-02-01',
        description: 'The Python SQL Toolkit and ORM',
        authors: ['Michael Bayer'],
        repository: 'https://github.com/sqlalchemy/sqlalchemy'
    },
    prisma: {
        id: 'prisma',
        name: 'Prisma',
        category: 'ORM',
        language: 'TypeScript',
        releaseDate: '2019-01-01',
        description: 'Next-generation Node.js and TypeScript ORM',
        authors: ['Prisma'],
        repository: 'https://github.com/prisma/prisma'
    },
    typeorm: {
        id: 'typeorm',
        name: 'TypeORM',
        category: 'ORM',
        language: 'TypeScript',
        releaseDate: '2016-01-01',
        description: 'ORM for TypeScript and JavaScript',
        authors: ['TypeORM'],
        repository: 'https://github.com/typeorm/typeorm'
    },
    sequelize: {
        id: 'sequelize',
        name: 'Sequelize',
        category: 'ORM',
        language: 'JavaScript',
        releaseDate: '2010-01-01',
        description: 'Feature-rich ORM for Node.js',
        authors: ['Sequelize'],
        repository: 'https://github.com/sequelize/sequelize'
    },
    mongoose: {
        id: 'mongoose',
        name: 'Mongoose',
        category: 'ORM',
        language: 'JavaScript',
        releaseDate: '2010-01-01',
        description: 'MongoDB object modeling tool',
        authors: ['Automattic'],
        repository: 'https://github.com/Automattic/mongoose'
    },
    'entity-framework-core': {
        id: 'entity-framework-core',
        name: 'Entity Framework Core',
        category: 'ORM',
        language: 'C#',
        releaseDate: '2016-06-27',
        description: 'Modern object-database mapper for .NET',
        authors: ['Microsoft'],
        repository: 'https://github.com/dotnet/efcore'
    },
    room: {
        id: 'room',
        name: 'Room',
        category: 'ORM',
        language: 'Kotlin',
        releaseDate: '2017-10-25',
        description: 'SQLite object mapping library for Android',
        authors: ['Google'],
        repository: 'https://github.com/android/architecture-components-samples'
    },
    diesel: {
        id: 'diesel',
        name: 'Diesel',
        category: 'ORM',
        language: 'Rust',
        releaseDate: '2015-01-01',
        description: 'A safe, extensible ORM and Query Builder for Rust',
        authors: ['Diesel'],
        repository: 'https://github.com/diesel-rs/diesel'
    },
    'prisma-rust': {
        id: 'prisma-rust',
        name: 'Prisma Client Rust',
        category: 'ORM',
        language: 'Rust',
        releaseDate: '2021-01-01',
        description: 'Prisma Client for Rust',
        authors: ['Prisma'],
        repository: 'https://github.com/Brendonovich/prisma-client-rust'
    },
    sqlx: {
        id: 'sqlx',
        name: 'SQLx',
        category: 'ORM',
        language: 'Rust',
        releaseDate: '2019-01-01',
        description: 'The Rust SQL Toolkit',
        authors: ['SQLx'],
        repository: 'https://github.com/launchbadge/sqlx'
    },
    jooq: {
        id: 'jooq',
        name: 'jOOQ',
        category: 'ORM',
        language: 'Java',
        releaseDate: '2009-01-01',
        description: 'Type-safe SQL query builder and execution library',
        authors: ['Lukas Eder'],
        repository: 'https://github.com/jOOQ/jOOQ'
    },

    // Migration tools
    flyway: {
        id: 'flyway',
        name: 'Flyway',
        category: 'Migration',
        language: 'Java',
        releaseDate: '2010-06-01',
        description: 'Database migration tool',
        authors: ['Redgate'],
        repository: 'https://github.com/flyway/flyway'
    },
    liquibase: {
        id: 'liquibase',
        name: 'Liquibase',
        category: 'Migration',
        language: 'Java',
        releaseDate: '2006-12-01',
        description: 'Database schema change management',
        authors: ['Liquibase'],
        repository: 'https://github.com/liquibase/liquibase'
    },
    goose: {
        id: 'goose',
        name: 'goose',
        category: 'Migration',
        language: 'Go',
        releaseDate: '2013-05-01',
        description: 'Database migration tool for Go',
        authors: ['liamstask', 'pressly'],
        repository: 'https://github.com/pressly/goose'
    },
    alembic: {
        id: 'alembic',
        name: 'Alembic',
        category: 'Migration',
        language: 'Python',
        releaseDate: '2011-01-01',
        description: 'Database migration tool for SQLAlchemy',
        authors: ['SQLAlchemy'],
        repository: 'https://github.com/sqlalchemy/alembic'
    },
    'typeorm-migrations': {
        id: 'typeorm-migrations',
        name: 'TypeORM Migrations',
        category: 'Migration',
        language: 'TypeScript',
        releaseDate: '2016-01-01',
        description: 'Migration system for TypeORM',
        authors: ['TypeORM'],
        repository: 'https://github.com/typeorm/typeorm'
    },
    'prisma-migrate': {
        id: 'prisma-migrate',
        name: 'Prisma Migrate',
        category: 'Migration',
        language: 'TypeScript',
        releaseDate: '2019-01-01',
        description: 'Database migration tool for Prisma',
        authors: ['Prisma'],
        repository: 'https://github.com/prisma/prisma'
    },
    'room-migrations': {
        id: 'room-migrations',
        name: 'Room Migrations',
        category: 'Migration',
        language: 'Kotlin',
        releaseDate: '2017-10-25',
        description: 'Migration system for Room',
        authors: ['Google'],
        repository: 'https://github.com/android/architecture-components-samples'
    },
    'diesel-migrations': {
        id: 'diesel-migrations',
        name: 'Diesel Migrations',
        category: 'Migration',
        language: 'Rust',
        releaseDate: '2015-01-01',
        description: 'Migration system for Diesel',
        authors: ['Diesel'],
        repository: 'https://github.com/diesel-rs/diesel'
    },
    'db-migrate': {
        id: 'db-migrate',
        name: 'db-migrate',
        category: 'Migration',
        language: 'JavaScript',
        releaseDate: '2013-01-01',
        description: 'Database migration framework for Node.js',
        authors: ['db-migrate'],
        repository: 'https://github.com/db-migrate/node-db-migrate'
    },
    knex: {
        id: 'knex',
        name: 'Knex.js',
        category: 'Migration',
        language: 'JavaScript',
        releaseDate: '2012-01-01',
        description: 'SQL query builder and migration tool',
        authors: ['Knex.js'],
        repository: 'https://github.com/knex/knex'
    },

    // Admin tools
    dbeaver: {
        id: 'dbeaver',
        name: 'DBeaver',
        category: 'Admin',
        language: 'Java',
        releaseDate: '2010-06-01',
        description: 'Universal database tool',
        authors: ['Serge Rider'],
        repository: 'https://github.com/dbeaver/dbeaver'
    },
    datagrip: {
        id: 'datagrip',
        name: 'DataGrip',
        category: 'Admin',
        language: 'Java',
        releaseDate: '2015-12-01',
        description: 'Database IDE by JetBrains',
        authors: ['JetBrains'],
        repository: 'https://github.com/JetBrains/intellij-community'
    },

    // ETL Tools
    spark: {
        id: 'spark',
        name: 'Apache Spark',
        category: 'ETL',
        language: 'Scala',
        releaseDate: '2014-02-01',
        description: 'Unified analytics engine for large-scale data processing',
        authors: ['Apache'],
        repository: 'https://github.com/apache/spark'
    },
    flink: {
        id: 'flink',
        name: 'Apache Flink',
        category: 'ETL',
        language: 'Java',
        releaseDate: '2014-12-01',
        description: 'Stateful computations over unbounded and bounded data streams',
        authors: ['Apache'],
        repository: 'https://github.com/apache/flink'
    },
    airflow: {
        id: 'airflow',
        name: 'Apache Airflow',
        category: 'ETL',
        language: 'Python',
        releaseDate: '2015-06-01',
        description: 'Platform to programmatically author, schedule, and monitor workflows',
        authors: ['Apache'],
        repository: 'https://github.com/apache/airflow'
    },
    nifi: {
        id: 'nifi',
        name: 'Apache NiFi',
        category: 'ETL',
        language: 'Java',
        releaseDate: '2014-07-01',
        description: 'Data flow automation tool',
        authors: ['Apache'],
        repository: 'https://github.com/apache/nifi'
    },
    kafka: {
        id: 'kafka',
        name: 'Apache Kafka',
        category: 'ETL',
        language: 'Scala',
        releaseDate: '2011-01-01',
        description: 'Distributed event streaming platform',
        authors: ['Apache'],
        repository: 'https://github.com/apache/kafka'
    },
    beam: {
        id: 'beam',
        name: 'Apache Beam',
        category: 'ETL',
        language: 'Java',
        releaseDate: '2016-06-01',
        description: 'Unified programming model for batch and streaming data processing',
        authors: ['Apache'],
        repository: 'https://github.com/apache/beam'
    },
    dbt: {
        id: 'dbt',
        name: 'dbt',
        category: 'ETL',
        language: 'SQL',
        releaseDate: '2016-01-01',
        description: 'Data build tool for analytics engineering',
        authors: ['dbt Labs'],
        repository: 'https://github.com/dbt-labs/dbt-core'
    },
    fivetran: {
        id: 'fivetran',
        name: 'Fivetran',
        category: 'ETL',
        language: 'Python',
        releaseDate: '2013-01-01',
        description: 'Automated data integration platform',
        authors: ['Fivetran'],
        repository: 'https://github.com/fivetran'
    },
    stitch: {
        id: 'stitch',
        name: 'Stitch',
        category: 'ETL',
        language: 'Ruby',
        releaseDate: '2016-01-01',
        description: 'Simple, powerful ETL service',
        authors: ['Talend'],
        repository: 'https://github.com/stitchdata'
    },
    talend: {
        id: 'talend',
        name: 'Talend',
        category: 'ETL',
        language: 'Java',
        releaseDate: '2005-01-01',
        description: 'Open source data integration platform',
        authors: ['Talend'],
        repository: 'https://github.com/Talend'
    },

    // BI tools
    grafana: {
        id: 'grafana',
        name: 'Grafana',
        category: 'BI',
        language: 'TypeScript',
        releaseDate: '2014-01-01',
        description: 'Open source analytics and visualization platform',
        authors: ['Grafana Labs'],
        repository: 'https://github.com/grafana/grafana'
    },
    superset: {
        id: 'superset',
        name: 'Apache Superset',
        category: 'BI',
        language: 'Python',
        releaseDate: '2017-05-01',
        description: 'Modern data exploration and visualization platform',
        authors: ['Apache'],
        repository: 'https://github.com/apache/superset'
    },
    tableau: {
        id: 'tableau',
        name: 'Tableau',
        category: 'BI',
        language: 'TypeScript',
        releaseDate: '2003-01-01',
        description: 'Data visualization and business intelligence platform',
        authors: ['Salesforce'],
        repository: 'https://github.com/tableau'
    },
    powerbi: {
        id: 'powerbi',
        name: 'Power BI',
        category: 'BI',
        language: 'TypeScript',
        releaseDate: '2015-07-01',
        description: 'Business analytics service by Microsoft',
        authors: ['Microsoft'],
        repository: 'https://github.com/microsoft/PowerBI-Icons'
    },
    looker: {
        id: 'looker',
        name: 'Looker',
        category: 'BI',
        language: 'Ruby',
        releaseDate: '2012-01-01',
        description: 'Business intelligence and data analytics platform',
        authors: ['Google'],
        repository: 'https://github.com/looker'
    },
    metabase: {
        id: 'metabase',
        name: 'Metabase',
        category: 'BI',
        language: 'Clojure',
        releaseDate: '2015-01-01',
        description: 'Open source business intelligence tool',
        authors: ['Metabase'],
        repository: 'https://github.com/metabase/metabase'
    },
    redash: {
        id: 'redash',
        name: 'Redash',
        category: 'BI',
        language: 'Python',
        releaseDate: '2013-01-01',
        description: 'Query and visualize your data',
        authors: ['Redash'],
        repository: 'https://github.com/getredash/redash'
    },
    mode: {
        id: 'mode',
        name: 'Mode',
        category: 'BI',
        language: 'Python',
        releaseDate: '2013-01-01',
        description: 'Analytics platform for data teams',
        authors: ['Mode'],
        repository: 'https://github.com/mode'
    },
    sisense: {
        id: 'sisense',
        name: 'Sisense',
        category: 'BI',
        language: 'JavaScript',
        releaseDate: '2004-01-01',
        description: 'Business intelligence software',
        authors: ['Sisense'],
        repository: 'https://github.com/sisense'
    },
    qlik: {
        id: 'qlik',
        name: 'Qlik',
        category: 'BI',
        language: 'JavaScript',
        releaseDate: '1993-01-01',
        description: 'Data analytics and business intelligence platform',
        authors: ['Qlik'],
        repository: 'https://github.com/qlik-oss'
    }
}; 