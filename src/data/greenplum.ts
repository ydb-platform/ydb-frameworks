import { TimelineData } from './types';
import { common } from './common';

const greenplumData: TimelineData = {
    database: 'greenplum',
    displayName: 'Greenplum',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Greenplum JDBC Driver',
                releaseDate: '2005-01-01',
                description: 'Greenplum implementation of JDBC',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Greenplum Go Driver',
                releaseDate: '2005-01-01',
                description: 'Greenplum implementation of database/sql',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'psycopg2',
                releaseDate: '2005-01-01',
                description: 'Greenplum implementation of DB-API',
                repository: 'https://github.com/psycopg/psycopg2',
                authors: ['Federico Di Gregorio'],
                contributorsType: ['open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Greenplum Driver',
                releaseDate: '2018-01-01',
                description: 'Greenplum driver implementation of GORM',
                repository: 'https://github.com/go-gorm/postgres',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Greenplum Dialect',
                releaseDate: '2010-01-01',
                description: 'Greenplum dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Greenplum SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for Greenplum',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Greenplum Support',
                releaseDate: '2015-01-01',
                description: 'Greenplum support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-postgresql',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Greenplum Support',
                releaseDate: '2016-01-01',
                description: 'Greenplum support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-postgresql',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Greenplum Support',
                releaseDate: '2015-01-01',
                description: 'Greenplum support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Greenplum Support',
                releaseDate: '2015-01-01',
                description: 'Greenplum support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Greenplum-specific frameworks
        {
            id: 'gpadmin',
            name: 'GPAdmin',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2005-01-01',
            description: 'Greenplum administration tool',
            authors: ['Pivotal'],
            implementation: {
                releaseDate: '2005-01-01',
                authors: ['Pivotal'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'gpcc',
            name: 'GPCC',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-01-01',
            description: 'Greenplum Command Center',
            authors: ['Pivotal'],
            implementation: {
                releaseDate: '2010-01-01',
                authors: ['Pivotal'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Greenplum Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for Greenplum',
                repository: 'https://github.com/pivotal/gp-spark-connector',
                authors: ['Pivotal'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Greenplum Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for Greenplum',
                repository: 'https://github.com/pivotal/gp-flink-connector',
                authors: ['Pivotal'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Greenplum Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for Greenplum',
                repository: 'https://github.com/grafana/grafana-postgresql-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Greenplum Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Greenplum',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma Greenplum Adapter',
                releaseDate: '2019-01-01',
                description: 'Greenplum adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Greenplum Driver',
                releaseDate: '2016-01-01',
                description: 'Greenplum driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Greenplum Dialect',
                releaseDate: '2010-01-01',
                description: 'Greenplum dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Greenplum Provider',
                releaseDate: '2016-06-27',
                description: 'Greenplum provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel Greenplum Driver',
                releaseDate: '2015-01-01',
                description: 'Greenplum driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx Greenplum Driver',
                releaseDate: '2019-01-01',
                description: 'Greenplum driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ Greenplum Support',
                releaseDate: '2009-01-01',
                description: 'Greenplum support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose Greenplum Driver',
                releaseDate: '2013-05-01',
                description: 'Greenplum driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Greenplum Dialect',
                releaseDate: '2011-01-01',
                description: 'Greenplum dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Greenplum Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with Greenplum',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma Greenplum Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with Greenplum',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel Greenplum Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with Greenplum',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate Greenplum Driver',
                releaseDate: '2013-01-01',
                description: 'Greenplum driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js Greenplum Driver',
                releaseDate: '2012-01-01',
                description: 'Greenplum driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default greenplumData; 