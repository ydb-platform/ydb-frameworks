import { TimelineData } from './types';
import { common } from './common';

const mongodbData: TimelineData = {
    database: 'mongodb',
    displayName: 'MongoDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'MongoDB JDBC Driver',
                releaseDate: '2016-01-01',
                description: 'MongoDB implementation of JDBC',
                repository: 'https://github.com/mongodb/mongo-jdbc-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'MongoDB Go Driver',
                releaseDate: '2016-01-01',
                description: 'MongoDB implementation of database/sql',
                repository: 'https://github.com/mongodb/mongo-go-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'PyMongo',
                releaseDate: '2009-01-01',
                description: 'MongoDB implementation of DB-API',
                repository: 'https://github.com/mongodb/mongo-python-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM MongoDB Driver',
                releaseDate: '2016-01-01',
                description: 'MongoDB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/mongodb',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM MongoDB',
                releaseDate: '2011-01-01',
                description: 'MongoDB implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'MongoDB SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for MongoDB',
                repository: 'https://github.com/mongodb/mongo-sqlalchemy',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway MongoDB Support',
                releaseDate: '2018-01-01',
                description: 'MongoDB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-mongodb',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase MongoDB Support',
                releaseDate: '2019-01-01',
                description: 'MongoDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-mongodb',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver MongoDB Support',
                releaseDate: '2016-01-01',
                description: 'MongoDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip MongoDB Support',
                releaseDate: '2016-01-01',
                description: 'MongoDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // MongoDB-specific frameworks
        {
            id: 'mongoose',
            name: 'Mongoose',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2010-01-01',
            description: 'MongoDB object modeling tool designed to work in an asynchronous environment',
            authors: ['Valeri Karpov'],
            repository: 'https://github.com/Automattic/mongoose',
            implementation: {
                releaseDate: '2010-01-01',
                authors: ['Valeri Karpov'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'mongodb-compass',
            name: 'MongoDB Compass',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2016-01-01',
            description: 'The GUI for MongoDB',
            authors: ['MongoDB'],
            implementation: {
                releaseDate: '2016-01-01',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'mongodb-shell',
            name: 'MongoDB Shell',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2016-01-01',
            description: 'Command-line interface for MongoDB',
            authors: ['MongoDB'],
            implementation: {
                releaseDate: '2016-01-01',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'MongoDB Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-spark',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'MongoDB Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-flink',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'MongoDB Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for MongoDB',
                repository: 'https://github.com/apache/airflow',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'MongoDB NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for MongoDB',
                repository: 'https://github.com/apache/nifi',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'MongoDB Kafka Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Kafka connector for MongoDB',
                repository: 'https://github.com/apache/kafka',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'MongoDB Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for MongoDB',
                repository: 'https://github.com/apache/beam',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'MongoDB dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'MongoDB adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'MongoDB Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for MongoDB',
                repository: 'https://github.com/fivetran',
                authors: ['Fivetran'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'MongoDB Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for MongoDB',
                repository: 'https://github.com/stitchdata',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'MongoDB Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for MongoDB',
                repository: 'https://github.com/Talend',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana MongoDB Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for MongoDB',
                repository: 'https://github.com/grafana/grafana-mongodb-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'MongoDB Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for MongoDB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'MongoDB Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for MongoDB',
                repository: 'https://github.com/tableau',
                authors: ['Salesforce'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'MongoDB Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for MongoDB',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'MongoDB Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for MongoDB',
                repository: 'https://github.com/looker',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'MongoDB Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for MongoDB',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Metabase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'MongoDB Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for MongoDB',
                repository: 'https://github.com/getredash/redash',
                authors: ['Redash'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'MongoDB Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for MongoDB',
                repository: 'https://github.com/mode',
                authors: ['Mode'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'MongoDB Sisense Connector',
                releaseDate: '2004-01-01',
                description: 'Sisense connector for MongoDB',
                repository: 'https://github.com/sisense',
                authors: ['Sisense'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'MongoDB Qlik Connector',
                releaseDate: '1993-01-01',
                description: 'Qlik connector for MongoDB',
                repository: 'https://github.com/qlik-oss',
                authors: ['Qlik'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma MongoDB Adapter',
                releaseDate: '2019-01-01',
                description: 'MongoDB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM MongoDB Driver',
                releaseDate: '2016-01-01',
                description: 'MongoDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize MongoDB Dialect',
                releaseDate: '2010-01-01',
                description: 'MongoDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core MongoDB Provider',
                releaseDate: '2016-06-27',
                description: 'MongoDB provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel MongoDB Driver',
                releaseDate: '2015-01-01',
                description: 'MongoDB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx MongoDB Driver',
                releaseDate: '2019-01-01',
                description: 'MongoDB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ MongoDB Support',
                releaseDate: '2009-01-01',
                description: 'MongoDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose MongoDB Driver',
                releaseDate: '2013-05-01',
                description: 'MongoDB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic MongoDB Dialect',
                releaseDate: '2011-01-01',
                description: 'MongoDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM MongoDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with MongoDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma MongoDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with MongoDB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel MongoDB Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with MongoDB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate MongoDB Driver',
                releaseDate: '2013-01-01',
                description: 'MongoDB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js MongoDB Driver',
                releaseDate: '2012-01-01',
                description: 'MongoDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default mongodbData; 