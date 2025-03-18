import { TimelineData } from './types';
import { common } from './common';

const yugabytedbData: TimelineData = {
    database: 'yugabytedb',
    displayName: 'YugabyteDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'YugabyteDB JDBC Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of JDBC',
                repository: 'https://github.com/yugabyte/yugabyte-db',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'YugabyteDB Go Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of database/sql',
                repository: 'https://github.com/yugabyte/yugabyte-db',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'yugabytedb',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of DB-API',
                repository: 'https://github.com/yugabyte/yugabyte-db',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM YugabyteDB Driver',
                releaseDate: '2019-01-01',
                description: 'YugabyteDB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/postgres',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate YugabyteDB Dialect',
                releaseDate: '2018-01-01',
                description: 'YugabyteDB dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'YugabyteDB SQLAlchemy Dialect',
                releaseDate: '2018-01-01',
                description: 'SQLAlchemy dialect for YugabyteDB',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway YugabyteDB Support',
                releaseDate: '2019-01-01',
                description: 'YugabyteDB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-postgresql',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase YugabyteDB Support',
                releaseDate: '2020-01-01',
                description: 'YugabyteDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-postgresql',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver YugabyteDB Support',
                releaseDate: '2018-01-01',
                description: 'YugabyteDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip YugabyteDB Support',
                releaseDate: '2018-01-01',
                description: 'YugabyteDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // YugabyteDB-specific frameworks
        {
            id: 'yugabytedb-admin',
            name: 'YugabyteDB Admin',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-01-01',
            description: 'Web-based administration interface for YugabyteDB',
            authors: ['Yugabyte'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Yugabyte'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'yugabytedb-cli',
            name: 'YugabyteDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2017-01-01',
            description: 'Command-line interface for YugabyteDB',
            authors: ['Yugabyte'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Yugabyte'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'YugabyteDB Spark Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Spark connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yb-spark-connector',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'YugabyteDB Flink Connector',
                releaseDate: '2020-01-01',
                description: 'Apache Flink connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yb-flink-connector',
                authors: ['Yugabyte'],
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
                name: 'Grafana YugabyteDB Plugin',
                releaseDate: '2019-01-01',
                description: 'Grafana data source plugin for YugabyteDB',
                repository: 'https://github.com/grafana/grafana-postgresql-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'YugabyteDB Superset Connector',
                releaseDate: '2020-01-01',
                description: 'Apache Superset support for YugabyteDB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma YugabyteDB Adapter',
                releaseDate: '2019-01-01',
                description: 'YugabyteDB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM YugabyteDB Driver',
                releaseDate: '2016-01-01',
                description: 'YugabyteDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize YugabyteDB Dialect',
                releaseDate: '2010-01-01',
                description: 'YugabyteDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core YugabyteDB Provider',
                releaseDate: '2016-06-27',
                description: 'YugabyteDB provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel YugabyteDB Driver',
                releaseDate: '2015-01-01',
                description: 'YugabyteDB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx YugabyteDB Driver',
                releaseDate: '2019-01-01',
                description: 'YugabyteDB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ YugabyteDB Support',
                releaseDate: '2009-01-01',
                description: 'YugabyteDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose YugabyteDB Driver',
                releaseDate: '2013-05-01',
                description: 'YugabyteDB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic YugabyteDB Dialect',
                releaseDate: '2011-01-01',
                description: 'YugabyteDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM YugabyteDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with YugabyteDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma YugabyteDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with YugabyteDB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel YugabyteDB Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with YugabyteDB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate YugabyteDB Driver',
                releaseDate: '2013-01-01',
                description: 'YugabyteDB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js YugabyteDB Driver',
                releaseDate: '2012-01-01',
                description: 'YugabyteDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default yugabytedbData; 