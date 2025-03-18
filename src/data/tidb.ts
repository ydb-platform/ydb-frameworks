import { TimelineData } from './types';
import { common } from './common';

const tidbData: TimelineData = {
    database: 'tidb',
    displayName: 'TiDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'TiDB JDBC Driver',
                releaseDate: '2015-01-01',
                description: 'TiDB implementation of JDBC',
                repository: 'https://github.com/pingcap/tidb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'TiDB Go Driver',
                releaseDate: '2015-01-01',
                description: 'TiDB implementation of database/sql',
                repository: 'https://github.com/pingcap/tidb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'TiDB Python Driver',
                releaseDate: '2015-01-01',
                description: 'TiDB implementation of DB-API',
                repository: 'https://github.com/pingcap/tidb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM TiDB Driver',
                releaseDate: '2018-01-01',
                description: 'TiDB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/mysql',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate TiDB Dialect',
                releaseDate: '2017-01-01',
                description: 'TiDB dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'TiDB SQLAlchemy Dialect',
                releaseDate: '2017-01-01',
                description: 'SQLAlchemy dialect for TiDB',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway TiDB Support',
                releaseDate: '2018-01-01',
                description: 'TiDB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-mysql',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase TiDB Support',
                releaseDate: '2019-01-01',
                description: 'TiDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-mysql',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver TiDB Support',
                releaseDate: '2017-01-01',
                description: 'TiDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip TiDB Support',
                releaseDate: '2017-01-01',
                description: 'TiDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // TiDB-specific frameworks
        {
            id: 'tidb-dashboard',
            name: 'TiDB Dashboard',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2019-01-01',
            description: 'Web-based administration interface for TiDB',
            authors: ['PingCAP'],
            implementation: {
                releaseDate: '2019-01-01',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'tiup',
            name: 'TiUP',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2020-01-01',
            description: 'TiDB component manager and deployment tool',
            authors: ['PingCAP'],
            implementation: {
                releaseDate: '2020-01-01',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'TiDB Spark Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Spark connector for TiDB',
                repository: 'https://github.com/pingcap/tispark',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'TiDB Flink Connector',
                releaseDate: '2020-01-01',
                description: 'Apache Flink connector for TiDB',
                repository: 'https://github.com/pingcap/tiflink',
                authors: ['PingCAP'],
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
                name: 'Grafana TiDB Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for TiDB',
                repository: 'https://github.com/grafana/grafana-mysql-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'TiDB Superset Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Superset support for TiDB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma TiDB Adapter',
                releaseDate: '2019-01-01',
                description: 'TiDB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM TiDB Driver',
                releaseDate: '2016-01-01',
                description: 'TiDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize TiDB Dialect',
                releaseDate: '2010-01-01',
                description: 'TiDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core TiDB Provider',
                releaseDate: '2016-06-27',
                description: 'TiDB provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel TiDB Driver',
                releaseDate: '2015-01-01',
                description: 'TiDB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx TiDB Driver',
                releaseDate: '2019-01-01',
                description: 'TiDB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ TiDB Support',
                releaseDate: '2009-01-01',
                description: 'TiDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose TiDB Driver',
                releaseDate: '2013-05-01',
                description: 'TiDB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic TiDB Dialect',
                releaseDate: '2011-01-01',
                description: 'TiDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM TiDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with TiDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma TiDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with TiDB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel TiDB Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with TiDB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate TiDB Driver',
                releaseDate: '2013-01-01',
                description: 'TiDB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js TiDB Driver',
                releaseDate: '2012-01-01',
                description: 'TiDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default tidbData; 