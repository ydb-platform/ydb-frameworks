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
                releaseDate: '2010-01-01',
                description: 'Official MongoDB JDBC driver',
                repository: 'https://github.com/mongodb/mongo-jdbc-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for MongoDB',
                releaseDate: '2011-01-01',
                description: 'MongoDB implementation of database/sql',
                repository: 'https://github.com/mongodb/mongo-go-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for MongoDB',
                releaseDate: '2010-01-01',
                description: 'MongoDB implementation of DB-API',
                repository: 'https://github.com/mongodb/mongo-python-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for MongoDB',
                releaseDate: '2010-01-01',
                description: 'MongoDB implementation of ADO.NET',
                repository: 'https://github.com/mongodb/mongo-csharp-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source'],
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
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper MongoDB',
                releaseDate: '2011-01-01',
                description: 'MongoDB implementation of Dapper',
                repository: 'https://github.com/DapperLib/Dapper',
                authors: ['MongoDB'],
                contributorsType: ['staff'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate MongoDB Dialect',
                releaseDate: '2010-01-01',
                description: 'MongoDB Dialect for Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'MongoDB SQLAlchemy Dialect',
                releaseDate: '2010-01-01',
                description: 'SQLAlchemy dialect for MongoDB',
                repository: 'https://github.com/mongodb/mongo-sqlalchemy',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM MongoDB Driver',
                releaseDate: '2016-01-01',
                description: 'MongoDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize MongoDB Dialect',
                releaseDate: '2010-01-01',
                description: 'MongoDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core MongoDB Provider',
                releaseDate: '2016-01-01',
                description: 'MongoDB provider for Entity Framework Core',
                repository: 'https://github.com/mongodb/mongo-efcore-provider',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ MongoDB Support',
                releaseDate: '2010-01-01',
                description: 'MongoDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway MongoDB Dialect',
                releaseDate: '2010-01-01',
                description: 'MongoDB Dialect for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase MongoDB Dialect',
                releaseDate: '2010-01-01',
                description: 'MongoDB Dialect for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose MongoDB Driver',
                description: 'MongoDB Driver for goose migrations',
                releaseDate: '2013-01-01',
                repository: 'https://github.com/pressly/goose',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic MongoDB Dialect',
                releaseDate: '2010-01-01',
                description: 'MongoDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM MongoDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with MongoDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js MongoDB Driver',
                releaseDate: '2012-01-01',
                description: 'MongoDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver MongoDB Support',
                releaseDate: '2010-01-01',
                description: 'MongoDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip MongoDB Support',
                releaseDate: '2015-01-01',
                description: 'MongoDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // MongoDB-specific frameworks
        {
            id: 'mongodb-compass',
            name: 'MongoDB Compass',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Visual database management tool for MongoDB',
            authors: ['MongoDB'],
            repository: 'https://github.com/mongodb-js/compass',
            implementation: {
                releaseDate: '2015-01-01',
                description: 'MongoDB Compass is a GUI for MongoDB that allows you to make smarter decisions about document structure, querying, indexing, document validation, and more',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'mongodb-shell',
            name: 'MongoDB Shell',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2009-01-01',
            description: 'Command-line interface for MongoDB database',
            authors: ['MongoDB'],
            implementation: {
                releaseDate: '2009-01-01',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'mongodb-atlas',
            name: 'MongoDB Atlas',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2016-01-01',
            description: 'Cloud database service for MongoDB',
            authors: ['MongoDB'],
            implementation: {
                name: 'MongoDB Atlas',
                releaseDate: '2016-01-01',
                description: 'Cloud database service for MongoDB',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'mongodb-realm',
            name: 'MongoDB Realm',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2019-01-01',
            description: 'Mobile database and backend service for MongoDB',
            authors: ['MongoDB'],
            repository: 'https://github.com/realm/realm-js',
            implementation: {
                releaseDate: '2019-01-01',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
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
                releaseDate: '2015-01-01',
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
                releaseDate: '2015-01-01',
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
                releaseDate: '2014-01-01',
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
                releaseDate: '2015-01-01',
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
                releaseDate: '2016-01-01',
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
                releaseDate: '2016-01-01',
                description: 'dbt adapter for MongoDB',
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
                repository: 'https://github.com/fivetran/fivetran',
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
                repository: 'https://github.com/stitchdata/stitch',
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
                repository: 'https://github.com/Talend',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana MongoDB Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for MongoDB',
                repository: 'https://github.com/grafana/grafana',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'MongoDB Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for MongoDB over SQLAlchemy',
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
                repository: 'https://github.com/tableau/connector-plugin-sdk',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'MongoDB Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for MongoDB',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'MongoDB Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for MongoDB',
                repository: 'https://github.com/looker-open-source',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'MongoDB Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for MongoDB',
                repository: 'https://github.com/metabase/metabase',
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
                repository: 'https://github.com/getredash/redash',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'MongoDB Mode Connector',
                releaseDate: '2015-01-01',
                description: 'Mode connector for MongoDB',
                repository: 'https://github.com/modeanalytics',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'MongoDB Sisense Connector',
                releaseDate: '2010-01-01',
                description: 'Sisense connector for MongoDB',
                repository: 'https://github.com/sisense',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'MongoDB Qlik Connector',
                releaseDate: '2010-01-01',
                description: 'Qlik connector for MongoDB',
                repository: 'https://github.com/qlik-oss/qlik-connector-mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'MongoDB LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for MongoDB vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'MongoDB LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for MongoDB vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'MongoDB ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for MongoDB vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/master/chroma/backends/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'MongoDB Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for MongoDB vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/storage/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'MongoDB Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for MongoDB vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/master/pinecone/vectorstores/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'MongoDB Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for MongoDB vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'MongoDB Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for MongoDB vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/qdrant/vector_stores/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'MongoDB Vector Extension',
                releaseDate: '2021-01-01',
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
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for MongoDB vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/master/vectordb/backends/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'MongoDB Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for MongoDB vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/python/semantic_kernel/vector_stores/mongodb',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default mongodbData; 