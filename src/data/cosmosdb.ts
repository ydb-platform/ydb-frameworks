import { TimelineData } from './types';
import { common } from './common';

const cosmosdbData: TimelineData = {
    database: 'cosmosdb',
    displayName: 'Azure Cosmos DB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'CosmosDB JDBC Driver',
                releaseDate: '2017-01-01',
                description: 'CosmosDB implementation of JDBC',
                repository: 'https://github.com/microsoft/CosmosDB-JDBC',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for CosmosDB',
                releaseDate: '2017-01-01',
                description: 'CosmosDB implementation of database/sql',
                repository: 'https://github.com/microsoft/CosmosDB-Go',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'azure-cosmos',
                releaseDate: '2017-01-01',
                description: 'CosmosDB implementation of DB-API',
                repository: 'https://github.com/Azure/azure-cosmos-python',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Microsoft.Azure.Cosmos',
                releaseDate: '2017-01-01',
                description: 'CosmosDB implementation of ADO.NET',
                repository: 'https://github.com/Azure/azure-cosmos-dotnet-v3',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for CosmosDB',
                releaseDate: '2017-01-01',
                description: 'CosmosDB driver implementation of GORM',
                repository: 'https://github.com/microsoft/CosmosDB-Go',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper CosmosDB',
                releaseDate: '2017-01-01',
                description: 'CosmosDB implementation of Dapper',
                repository: 'https://github.com/Azure/azure-cosmos-dotnet-v3',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate CosmosDB Dialect',
                releaseDate: '2017-01-01',
                description: 'CosmosDB Dialect for Hibernate',
                repository: 'https://github.com/microsoft/CosmosDB-JDBC',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'CosmosDB SQLAlchemy Dialect',
                releaseDate: '2017-01-01',
                description: 'SQLAlchemy dialect for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmos-python',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma CosmosDB Adapter',
                releaseDate: '2019-01-01',
                description: 'CosmosDB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM CosmosDB Driver',
                releaseDate: '2017-01-01',
                description: 'CosmosDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize CosmosDB Dialect',
                releaseDate: '2017-01-01',
                description: 'CosmosDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core CosmosDB Provider',
                releaseDate: '2017-01-01',
                description: 'CosmosDB provider for Entity Framework Core',
                repository: 'https://github.com/Azure/azure-cosmos-dotnet-v3',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel CosmosDB Driver',
                releaseDate: '2017-01-01',
                description: 'CosmosDB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx CosmosDB Driver',
                releaseDate: '2019-01-01',
                description: 'CosmosDB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ CosmosDB Support',
                releaseDate: '2017-01-01',
                description: 'CosmosDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway CosmosDB Support',
                releaseDate: '2017-01-01',
                description: 'CosmosDB support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase CosmosDB Support',
                releaseDate: '2017-01-01',
                description: 'CosmosDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose CosmosDB Driver',
                releaseDate: '2017-01-01',
                description: 'CosmosDB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic CosmosDB Dialect',
                releaseDate: '2017-01-01',
                description: 'CosmosDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM CosmosDB Migrations',
                releaseDate: '2017-01-01',
                description: 'Migration system for TypeORM with CosmosDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma CosmosDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with CosmosDB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel CosmosDB Migrations',
                releaseDate: '2017-01-01',
                description: 'Migration system for Diesel with CosmosDB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate CosmosDB Driver',
                releaseDate: '2017-01-01',
                description: 'CosmosDB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js CosmosDB Driver',
                releaseDate: '2017-01-01',
                description: 'CosmosDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver CosmosDB Support',
                releaseDate: '2017-01-01',
                description: 'CosmosDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip CosmosDB Support',
                releaseDate: '2017-01-01',
                description: 'CosmosDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // CosmosDB-specific frameworks
        {
            id: 'cosmosdb-cli',
            name: 'CosmosDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2017-01-01',
            description: 'Command-line interface for CosmosDB database',
            authors: ['Microsoft'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'cosmosdb-portal',
            name: 'CosmosDB Portal',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-01-01',
            description: 'Web-based administration interface for CosmosDB',
            authors: ['Microsoft'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'CosmosDB Spark Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Spark connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-spark',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'CosmosDB Flink Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Flink connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-flink',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'CosmosDB Airflow Provider',
                releaseDate: '2017-01-01',
                description: 'Apache Airflow provider for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-airflow',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'CosmosDB NiFi Processor',
                releaseDate: '2017-01-01',
                description: 'Apache NiFi processor for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-nifi',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'CosmosDB Kafka Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Kafka connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-kafka',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'CosmosDB Beam IO',
                releaseDate: '2017-01-01',
                description: 'Apache Beam IO for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-beam',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'CosmosDB dbt Adapter',
                releaseDate: '2017-01-01',
                description: 'CosmosDB adapter for dbt',
                repository: 'https://github.com/Azure/azure-cosmosdb-dbt',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'CosmosDB Fivetran Connector',
                releaseDate: '2017-01-01',
                description: 'Fivetran connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-fivetran',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'CosmosDB Stitch Connector',
                releaseDate: '2017-01-01',
                description: 'Stitch connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-stitch',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'CosmosDB Talend Component',
                releaseDate: '2017-01-01',
                description: 'Talend component for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-talend',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'CosmosDB Grafana Plugin',
                releaseDate: '2017-01-01',
                description: 'Grafana data source plugin for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-grafana',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'CosmosDB Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-superset',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'CosmosDB Tableau Connector',
                releaseDate: '2017-01-01',
                description: 'Tableau connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-tableau',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'CosmosDB Power BI Connector',
                releaseDate: '2017-01-01',
                description: 'Power BI connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-powerbi',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'CosmosDB Looker Connector',
                releaseDate: '2017-01-01',
                description: 'Looker connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-looker',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'CosmosDB Metabase Driver',
                releaseDate: '2017-01-01',
                description: 'Metabase driver for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-metabase',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'CosmosDB Redash Query Runner',
                releaseDate: '2017-01-01',
                description: 'Redash query runner for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-redash',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'CosmosDB Mode Connector',
                releaseDate: '2017-01-01',
                description: 'Mode connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-mode',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'CosmosDB Sisense Connector',
                releaseDate: '2017-01-01',
                description: 'Sisense connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-sisense',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'CosmosDB Qlik Connector',
                releaseDate: '2017-01-01',
                description: 'Qlik connector for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-qlik',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'CosmosDB LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-langchain',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'CosmosDB LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-llamaindex',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'CosmosDB ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-chromadb',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'CosmosDB Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-milvus',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'CosmosDB Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-pinecone',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'CosmosDB Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-weaviate',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'CosmosDB Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-qdrant',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'CosmosDB Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmosdb-vector',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'CosmosDB VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-vectordb',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'CosmosDB Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for CosmosDB vector operations',
                repository: 'https://github.com/Azure/azure-cosmosdb-semantic-kernel',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default cosmosdbData; 