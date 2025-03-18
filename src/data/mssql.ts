// src/data/mssql.ts
import { TimelineData } from './types';
import { common } from './common';

const mssqlData: TimelineData = {
    database: 'mssql',
    displayName: 'MS SQL Server',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'JDBC SQL Server',
                releaseDate: '2000-01-01',
                description: 'Microsoft SQL Server implementation of JDBC',
                repository: 'https://github.com/microsoft/mssql-jdbc',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for SQL Server',
                releaseDate: '2011-03-01',
                description: 'SQL Server implementation of database/sql',
                repository: 'https://github.com/denisenkom/go-mssqldb',
                authors: ['Alex Denisenko'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'pyodbc',
                releaseDate: '2000-01-01',
                description: 'SQL Server implementation of DB-API',
                repository: 'https://github.com/mkleehammer/pyodbc',
                authors: ['Michael Kleehammer'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'System.Data.SqlClient',
                releaseDate: '2000-01-01',
                description: 'SQL Server implementation of ADO.NET',
                repository: 'https://github.com/dotnet/corefx',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for SQL Server',
                releaseDate: '2013-01-01',
                description: 'SQL Server driver implementation of GORM',
                repository: 'https://github.com/go-gorm/sqlserver',
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper SQL Server',
                releaseDate: '2011-01-01',
                description: 'SQL Server implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate SQL Server Dialect',
                releaseDate: '2001-12-01',
                description: 'SQL Server Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Hibernate Team'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'SQL Server SQLAlchemy Dialect',
                releaseDate: '2006-02-01',
                description: 'SQLAlchemy dialect for SQL Server',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy Team'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma SQL Server Adapter',
                releaseDate: '2019-01-01',
                description: 'SQL Server adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM SQL Server Driver',
                releaseDate: '2016-01-01',
                description: 'SQL Server driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize SQL Server Dialect',
                releaseDate: '2010-01-01',
                description: 'SQL Server dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core SQL Server Provider',
                releaseDate: '2016-06-27',
                description: 'SQL Server provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel SQL Server Driver',
                releaseDate: '2015-01-01',
                description: 'SQL Server driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx SQL Server Driver',
                releaseDate: '2019-01-01',
                description: 'SQL Server driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ SQL Server Support',
                releaseDate: '2009-01-01',
                description: 'SQL Server support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway SQL Server Support',
                releaseDate: '2010-06-01',
                description: 'SQL Server support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase SQL Server Support',
                releaseDate: '2006-12-01',
                description: 'SQL Server support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose SQL Server Driver',
                releaseDate: '2013-05-01',
                description: 'SQL Server driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic SQL Server Dialect',
                releaseDate: '2011-01-01',
                description: 'SQL Server dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM SQL Server Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with SQL Server',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma SQL Server Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with SQL Server',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel SQL Server Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with SQL Server',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate SQL Server Driver',
                releaseDate: '2013-01-01',
                description: 'SQL Server driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js SQL Server Driver',
                releaseDate: '2012-01-01',
                description: 'SQL Server driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver SQL Server Support',
                releaseDate: '2010-06-01',
                description: 'SQL Server support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip SQL Server Support',
                releaseDate: '2015-12-01',
                description: 'SQL Server support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // MS SQL Server-specific frameworks
        {
            id: 'ssms',
            name: 'SQL Server Management Studio',
            category: 'Admin',
            language: 'C#',
            releaseDate: '2005-01-01',
            description: 'Integrated environment for managing SQL Server infrastructure',
            authors: ['Microsoft'],
            implementation: {
                releaseDate: '2005-01-01',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'SQL Server Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for SQL Server',
                repository: 'https://github.com/apache/spark',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'SQL Server Flink Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Flink connector for SQL Server',
                repository: 'https://github.com/apache/flink',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'SQL Server dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'SQL Server adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'SQL Server Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for SQL Server',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Grafana Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'SQL Server Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for SQL Server',
                repository: 'https://github.com/apache/superset',
                authors: ['Airbnb', 'Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default mssqlData;