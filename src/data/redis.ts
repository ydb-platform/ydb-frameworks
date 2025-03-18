import { TimelineData } from './types';
import { common } from './common';

const redisData: TimelineData = {
    database: 'redis',
    displayName: 'Redis',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Redis JDBC Driver',
                releaseDate: '2016-01-01',
                description: 'Redis implementation of JDBC',
                repository: 'https://github.com/redis/jedis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Redis Go Driver',
                releaseDate: '2016-01-01',
                description: 'Redis implementation of database/sql',
                repository: 'https://github.com/redis/go-redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'redis-py',
                releaseDate: '2010-01-01',
                description: 'Redis implementation of DB-API',
                repository: 'https://github.com/redis/redis-py',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Redis Driver',
                releaseDate: '2016-01-01',
                description: 'Redis driver implementation of GORM',
                repository: 'https://github.com/go-gorm/redis',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM Redis',
                releaseDate: '2011-01-01',
                description: 'Redis implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Redis SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for Redis',
                repository: 'https://github.com/redis/redis-sqlalchemy',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma Redis Adapter',
                releaseDate: '2019-01-01',
                description: 'Redis adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Redis Driver',
                releaseDate: '2016-01-01',
                description: 'Redis driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Redis Dialect',
                releaseDate: '2010-01-01',
                description: 'Redis dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Redis Provider',
                releaseDate: '2016-06-27',
                description: 'Redis provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel Redis Driver',
                releaseDate: '2015-01-01',
                description: 'Redis driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx Redis Driver',
                releaseDate: '2019-01-01',
                description: 'Redis driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ Redis Support',
                releaseDate: '2009-01-01',
                description: 'Redis support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Redis Support',
                releaseDate: '2018-01-01',
                description: 'Redis support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-redis',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Redis Support',
                releaseDate: '2019-01-01',
                description: 'Redis support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-redis',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose Redis Driver',
                releaseDate: '2013-05-01',
                description: 'Redis driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Redis Dialect',
                releaseDate: '2011-01-01',
                description: 'Redis dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Redis Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with Redis',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma Redis Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with Redis',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel Redis Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with Redis',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate Redis Driver',
                releaseDate: '2013-01-01',
                description: 'Redis driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js Redis Driver',
                releaseDate: '2012-01-01',
                description: 'Redis driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Redis Support',
                releaseDate: '2016-01-01',
                description: 'Redis support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Redis Support',
                releaseDate: '2016-01-01',
                description: 'Redis support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Redis-specific frameworks
        {
            id: 'redis-cli',
            name: 'Redis CLI',
            category: 'Admin',
            language: 'C',
            releaseDate: '2009-01-01',
            description: 'Command-line interface for Redis',
            authors: ['Redis'],
            implementation: {
                releaseDate: '2009-01-01',
                authors: ['Redis'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'redis-insight',
            name: 'RedisInsight',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2019-01-01',
            description: 'GUI for Redis',
            authors: ['Redis'],
            implementation: {
                releaseDate: '2019-01-01',
                authors: ['Redis'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Redis Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for Redis',
                repository: 'https://github.com/redis/redis-spark',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Redis Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for Redis',
                repository: 'https://github.com/redis/redis-flink',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'Redis Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for Redis',
                repository: 'https://github.com/apache/airflow',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'Redis NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for Redis',
                repository: 'https://github.com/apache/nifi',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Redis Kafka Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Kafka connector for Redis',
                repository: 'https://github.com/apache/kafka',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'Redis Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for Redis',
                repository: 'https://github.com/apache/beam',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'Redis dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'Redis adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'Redis Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for Redis',
                repository: 'https://github.com/fivetran',
                authors: ['Fivetran'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'Redis Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for Redis',
                repository: 'https://github.com/stitchdata',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'Redis Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for Redis',
                repository: 'https://github.com/Talend',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Redis Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for Redis',
                repository: 'https://github.com/grafana/grafana-redis-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Redis Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Redis',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Redis Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for Redis',
                repository: 'https://github.com/tableau',
                authors: ['Salesforce'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'Redis Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for Redis',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'Redis Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for Redis',
                repository: 'https://github.com/looker',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'Redis Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for Redis',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Metabase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'Redis Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for Redis',
                repository: 'https://github.com/getredash/redash',
                authors: ['Redash'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'Redis Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for Redis',
                repository: 'https://github.com/mode',
                authors: ['Mode'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'Redis Sisense Connector',
                releaseDate: '2004-01-01',
                description: 'Sisense connector for Redis',
                repository: 'https://github.com/sisense',
                authors: ['Sisense'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Redis Qlik Connector',
                releaseDate: '1993-01-01',
                description: 'Qlik connector for Redis',
                repository: 'https://github.com/qlik-oss',
                authors: ['Qlik'],
                contributorsType: ['staff']
            }
        }
    ],
    dependencies: []
};

export default redisData; 