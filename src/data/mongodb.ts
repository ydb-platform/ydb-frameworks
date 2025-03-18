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
                releaseDate: '2011-01-01',
                description: 'MongoDB implementation of JDBC',
                repository: 'https://github.com/mongodb/mongo-jdbc-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for MongoDB',
                releaseDate: '2011-03-01',
                description: 'MongoDB implementation of database/sql',
                repository: 'https://github.com/mongodb/mongo-go-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'pymongo',
                releaseDate: '2009-01-01',
                description: 'MongoDB implementation of DB-API',
                repository: 'https://github.com/mongodb/mongo-python-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'MongoDB.Driver',
                releaseDate: '2012-01-01',
                description: 'MongoDB implementation of ADO.NET',
                repository: 'https://github.com/mongodb/mongo-csharp-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for MongoDB',
                releaseDate: '2013-01-01',
                description: 'MongoDB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/mongodb',
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper MongoDB',
                releaseDate: '2011-01-01',
                description: 'MongoDB implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate MongoDB Dialect',
                releaseDate: '2011-12-01',
                description: 'MongoDB Dialect for Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Hibernate Team'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'MongoDB SQLAlchemy Dialect',
                releaseDate: '2012-02-01',
                description: 'SQLAlchemy dialect for MongoDB',
                repository: 'https://github.com/mongodb/mongo-sqlalchemy',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
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
                repository: 'https://github.com/mongodb/mongo-csharp-driver',
                authors: ['MongoDB'],
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
            ...common.flyway,
            implementation: {
                name: 'Flyway MongoDB Support',
                releaseDate: '2010-06-01',
                description: 'MongoDB support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase MongoDB Support',
                releaseDate: '2006-12-01',
                description: 'MongoDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
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
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver MongoDB Support',
                releaseDate: '2010-06-01',
                description: 'MongoDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip MongoDB Support',
                releaseDate: '2015-12-01',
                description: 'MongoDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // MongoDB-specific frameworks
        {
            id: 'mongodbcompass',
            name: 'MongoDB Compass',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2015-01-01',
            description: 'GUI for MongoDB',
            authors: ['MongoDB'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'MongoDB Spark Connector',
                releaseDate: '2014-05-30',
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
                releaseDate: '2011-01-01',
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
                repository: 'https://github.com/mongodb/mongo-airflow',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'MongoDB NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for MongoDB',
                repository: 'https://github.com/mongodb/mongo-nifi',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'MongoDB Kafka Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Kafka connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-kafka',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'MongoDB Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for MongoDB',
                repository: 'https://github.com/mongodb/mongo-beam',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'MongoDB dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'MongoDB adapter for dbt',
                repository: 'https://github.com/mongodb/mongo-dbt',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'MongoDB Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-fivetran',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'MongoDB Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-stitch',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'MongoDB Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for MongoDB',
                repository: 'https://github.com/mongodb/mongo-talend',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'MongoDB Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for MongoDB',
                repository: 'https://github.com/mongodb/mongo-grafana',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'MongoDB Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for MongoDB',
                repository: 'https://github.com/mongodb/mongo-superset',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'MongoDB Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-tableau',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'MongoDB Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-powerbi',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'MongoDB Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-looker',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'MongoDB Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for MongoDB',
                repository: 'https://github.com/mongodb/mongo-metabase',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'MongoDB Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for MongoDB',
                repository: 'https://github.com/mongodb/mongo-redash',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'MongoDB Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-mode',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'MongoDB Sisense Connector',
                releaseDate: '2004-01-01',
                description: 'Sisense connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-sisense',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'MongoDB Qlik Connector',
                releaseDate: '2013-01-01',
                description: 'Qlik connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-qlik',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'MongoDB LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-langchain',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'MongoDB LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-llamaindex',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'MongoDB ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-chromadb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'MongoDB Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-milvus',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'MongoDB Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-pinecone',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'MongoDB Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-weaviate',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'MongoDB Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-qdrant',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'MongoDB Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for MongoDB',
                repository: 'https://github.com/mongodb/mongo-vector',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'MongoDB VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-vectordb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'MongoDB Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for MongoDB vector operations',
                repository: 'https://github.com/mongodb/mongo-semantic-kernel',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default mongodbData; 