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
                name: 'Cosmos DB JDBC Driver',
                releaseDate: '2017-05-10',
                description: 'Cosmos DB implementation of JDBC',
                repository: 'https://github.com/Azure/azure-cosmosdb-java',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Cosmos DB Go SDK',
                releaseDate: '2017-05-10',
                description: 'Cosmos DB implementation of database/sql',
                repository: 'https://github.com/Azure/azure-cosmosdb-go',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'azure-cosmos',
                releaseDate: '2017-05-10',
                description: 'Cosmos DB implementation of DB-API',
                repository: 'https://github.com/Azure/azure-cosmos-python',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Cosmos DB Driver',
                releaseDate: '2019-01-01',
                description: 'Cosmos DB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/cosmosdb',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM Cosmos DB',
                releaseDate: '2018-01-01',
                description: 'Cosmos DB implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Cosmos DB SQLAlchemy Dialect',
                releaseDate: '2018-01-01',
                description: 'SQLAlchemy dialect for Cosmos DB',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Cosmos DB Support',
                releaseDate: '2020-01-01',
                description: 'Cosmos DB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-cosmosdb',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Cosmos DB Support',
                releaseDate: '2021-01-01',
                description: 'Cosmos DB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-cosmosdb',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Cosmos DB Support',
                releaseDate: '2018-01-01',
                description: 'Cosmos DB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Cosmos DB Support',
                releaseDate: '2018-01-01',
                description: 'Cosmos DB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Cosmos DB-specific frameworks
        {
            id: 'cosmosdb-explorer',
            name: 'Cosmos DB Data Explorer',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-05-10',
            description: 'Web-based administration interface for Cosmos DB',
            authors: ['Microsoft'],
            implementation: {
                releaseDate: '2017-05-10',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'cosmosdb-emulator',
            name: 'Cosmos DB Emulator',
            category: 'Admin',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Local emulator for Cosmos DB development and testing',
            authors: ['Microsoft'],
            implementation: {
                releaseDate: '2017-05-10',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Cosmos DB Spark Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Spark connector for Cosmos DB',
                repository: 'https://github.com/Azure/azure-cosmosdb-spark',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Cosmos DB Flink Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Flink connector for Cosmos DB',
                repository: 'https://github.com/Azure/azure-cosmosdb-flink',
                authors: ['Microsoft'],
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
                name: 'Grafana Cosmos DB Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for Cosmos DB',
                repository: 'https://github.com/grafana/grafana-cosmosdb-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Cosmos DB Superset Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Superset support for Cosmos DB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma Cosmos DB Adapter',
                releaseDate: '2019-01-01',
                description: 'Cosmos DB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Cosmos DB Driver',
                releaseDate: '2016-01-01',
                description: 'Cosmos DB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Cosmos DB Dialect',
                releaseDate: '2010-01-01',
                description: 'Cosmos DB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Cosmos DB Provider',
                releaseDate: '2016-06-27',
                description: 'Cosmos DB provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel Cosmos DB Driver',
                releaseDate: '2015-01-01',
                description: 'Cosmos DB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx Cosmos DB Driver',
                releaseDate: '2019-01-01',
                description: 'Cosmos DB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ Cosmos DB Support',
                releaseDate: '2009-01-01',
                description: 'Cosmos DB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose Cosmos DB Driver',
                releaseDate: '2013-05-01',
                description: 'Cosmos DB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Cosmos DB Dialect',
                releaseDate: '2011-01-01',
                description: 'Cosmos DB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Cosmos DB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with Cosmos DB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma Cosmos DB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with Cosmos DB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel Cosmos DB Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with Cosmos DB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate Cosmos DB Driver',
                releaseDate: '2013-01-01',
                description: 'Cosmos DB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js Cosmos DB Driver',
                releaseDate: '2012-01-01',
                description: 'Cosmos DB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'CosmosDB Qlik Connector',
                releaseDate: '2023-01-01',
                description: 'Qlik connector for CosmosDB',
                repository: 'https://github.com/qlik-oss/qlik-connector-cosmosdb',
                authors: ['Qlik'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'CosmosDB LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for CosmosDB vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/cosmosdb',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'CosmosDB LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for CosmosDB vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/cosmosdb',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'CosmosDB ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for CosmosDB vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/cosmosdb',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'CosmosDB Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for CosmosDB vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/cosmosdb',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'CosmosDB Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for CosmosDB vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/cosmosdb',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'CosmosDB Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for CosmosDB vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/cosmosdb',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'CosmosDB Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for CosmosDB vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/cosmosdb',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'CosmosDB Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for CosmosDB',
                repository: 'https://github.com/Azure/azure-cosmos-db/tree/master/vector',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'CosmosDB VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for CosmosDB vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/cosmosdb',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'CosmosDB Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for CosmosDB vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/cosmosdb',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default cosmosdbData; 