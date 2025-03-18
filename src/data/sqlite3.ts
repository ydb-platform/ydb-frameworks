import { TimelineData } from './types';
import { common } from './common';

const sqlite3Data: TimelineData = {
    database: 'sqlite3',
    displayName: 'SQLite3',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'SQLite JDBC Driver',
                releaseDate: '2000-01-01',
                description: 'SQLite implementation of JDBC',
                repository: 'https://github.com/xerial/sqlite-jdbc',
                authors: ['Taro L. Saito'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sqlite3',
                releaseDate: '2000-01-01',
                description: 'SQLite implementation of database/sql',
                repository: 'https://github.com/mattn/go-sqlite3',
                authors: ['Yasuhiro Matsumoto'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'sqlite3',
                releaseDate: '2000-01-01',
                description: 'SQLite implementation of DB-API',
                repository: 'https://github.com/python/cpython/tree/main/Modules/_sqlite',
                authors: ['Python Software Foundation'],
                contributorsType: ['open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM SQLite Driver',
                releaseDate: '2016-01-01',
                description: 'SQLite driver implementation of GORM',
                repository: 'https://github.com/go-gorm/sqlite',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate SQLite Dialect',
                releaseDate: '2005-01-01',
                description: 'SQLite dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'SQLite SQLAlchemy Dialect',
                releaseDate: '2006-01-01',
                description: 'SQLAlchemy dialect for SQLite',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway SQLite Support',
                releaseDate: '2012-01-01',
                description: 'SQLite support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-sqlite',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase SQLite Support',
                releaseDate: '2013-01-01',
                description: 'SQLite support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-sqlite',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver SQLite Support',
                releaseDate: '2010-01-01',
                description: 'SQLite support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip SQLite Support',
                releaseDate: '2010-01-01',
                description: 'SQLite support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // SQLite-specific frameworks
        {
            id: 'db-browser',
            name: 'DB Browser for SQLite',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2003-01-01',
            description: 'Visual database browser for SQLite',
            authors: ['DB Browser for SQLite Team'],
            implementation: {
                releaseDate: '2003-01-01',
                authors: ['DB Browser for SQLite Team'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'sqlite-cli',
            name: 'SQLite Command Line Tool',
            category: 'Admin',
            language: 'C',
            releaseDate: '2000-01-01',
            description: 'Command-line interface for SQLite',
            authors: ['SQLite Team'],
            implementation: {
                releaseDate: '2000-01-01',
                authors: ['SQLite Team'],
                contributorsType: ['open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'SQLite Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for SQLite',
                repository: 'https://github.com/apache/spark/tree/master/sql/core/src/main/scala/org/apache/spark/sql/jdbc',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'SQLite Flink Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Flink connector for SQLite',
                repository: 'https://github.com/apache/flink/tree/master/flink-connectors/flink-jdbc',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana SQLite Plugin',
                releaseDate: '2015-01-01',
                description: 'Grafana data source plugin for SQLite',
                repository: 'https://github.com/grafana/grafana-sqlite-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'SQLite Superset Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Superset support for SQLite',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma SQLite Adapter',
                releaseDate: '2019-01-01',
                description: 'SQLite adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM SQLite Driver',
                releaseDate: '2016-01-01',
                description: 'SQLite driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize SQLite Dialect',
                releaseDate: '2010-01-01',
                description: 'SQLite dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core SQLite Provider',
                releaseDate: '2016-06-27',
                description: 'SQLite provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel SQLite Driver',
                releaseDate: '2015-01-01',
                description: 'SQLite driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx SQLite Driver',
                releaseDate: '2019-01-01',
                description: 'SQLite driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ SQLite Support',
                releaseDate: '2009-01-01',
                description: 'SQLite support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose SQLite Driver',
                releaseDate: '2013-05-01',
                description: 'SQLite driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic SQLite Dialect',
                releaseDate: '2011-01-01',
                description: 'SQLite dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM SQLite Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with SQLite',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma SQLite Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with SQLite',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel SQLite Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with SQLite',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate SQLite Driver',
                releaseDate: '2013-01-01',
                description: 'SQLite driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js SQLite Driver',
                releaseDate: '2012-01-01',
                description: 'SQLite driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default sqlite3Data; 