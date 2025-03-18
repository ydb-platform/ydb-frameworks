import { TimelineData } from './types';
import { common } from './common';

const cockroachdbData: TimelineData = {
    database: 'cockroachdb',
    displayName: 'CockroachDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'CockroachDB JDBC Driver',
                releaseDate: '2015-01-01',
                description: 'CockroachDB implementation of JDBC',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'CockroachDB Go Driver',
                releaseDate: '2015-01-01',
                description: 'CockroachDB implementation of database/sql',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'cockroachdb',
                releaseDate: '2015-01-01',
                description: 'CockroachDB implementation of DB-API',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM CockroachDB Driver',
                releaseDate: '2015-01-01',
                description: 'CockroachDB driver implementation of GORM',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate CockroachDB Dialect',
                releaseDate: '2015-01-01',
                description: 'CockroachDB dialect for Hibernate',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'CockroachDB SQLAlchemy Dialect',
                releaseDate: '2015-01-01',
                description: 'SQLAlchemy dialect for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway CockroachDB Support',
                releaseDate: '2015-01-01',
                description: 'CockroachDB support for Flyway',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase CockroachDB Support',
                releaseDate: '2015-01-01',
                description: 'CockroachDB support for Liquibase',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver CockroachDB Support',
                releaseDate: '2015-01-01',
                description: 'CockroachDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip CockroachDB Support',
                releaseDate: '2015-01-01',
                description: 'CockroachDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // CockroachDB-specific frameworks
        {
            id: 'cockroachdb-admin',
            name: 'CockroachDB Admin',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Web-based administration interface for CockroachDB',
            authors: ['Cockroach Labs'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'cockroachdb-cli',
            name: 'CockroachDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2015-01-01',
            description: 'Command-line interface for CockroachDB',
            authors: ['Cockroach Labs'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'CockroachDB Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'CockroachDB Flink Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Flink connector for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'CockroachDB Grafana Plugin',
                releaseDate: '2015-01-01',
                description: 'Grafana data source plugin for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'CockroachDB Superset Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Superset support for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma CockroachDB Adapter',
                releaseDate: '2019-01-01',
                description: 'CockroachDB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM CockroachDB Driver',
                releaseDate: '2016-01-01',
                description: 'CockroachDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize CockroachDB Dialect',
                releaseDate: '2010-01-01',
                description: 'CockroachDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core CockroachDB Provider',
                releaseDate: '2016-06-27',
                description: 'CockroachDB provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel CockroachDB Driver',
                releaseDate: '2015-01-01',
                description: 'CockroachDB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx CockroachDB Driver',
                releaseDate: '2019-01-01',
                description: 'CockroachDB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ CockroachDB Support',
                releaseDate: '2009-01-01',
                description: 'CockroachDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose CockroachDB Driver',
                releaseDate: '2013-05-01',
                description: 'CockroachDB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic CockroachDB Dialect',
                releaseDate: '2011-01-01',
                description: 'CockroachDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM CockroachDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with CockroachDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma CockroachDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with CockroachDB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel CockroachDB Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with CockroachDB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate CockroachDB Driver',
                releaseDate: '2013-01-01',
                description: 'CockroachDB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js CockroachDB Driver',
                releaseDate: '2012-01-01',
                description: 'CockroachDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default cockroachdbData; 