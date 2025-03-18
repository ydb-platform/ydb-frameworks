import { TimelineData } from './types';
import { common } from './common';

const dynamodbData: TimelineData = {
    database: 'dynamodb',
    displayName: 'Amazon DynamoDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'DynamoDB JDBC Driver',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of JDBC',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'DynamoDB Go SDK',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of database/sql',
                repository: 'https://github.com/aws/aws-sdk-go',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'boto3',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of DB-API',
                repository: 'https://github.com/boto/boto3',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM DynamoDB Driver',
                releaseDate: '2018-01-01',
                description: 'DynamoDB driver implementation of GORM',
                repository: 'https://github.com/guregu/dynamo',
                authors: ['Yusuke Inuzuka'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM DynamoDB',
                releaseDate: '2014-01-01',
                description: 'DynamoDB implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'DynamoDB SQLAlchemy Dialect',
                releaseDate: '2015-01-01',
                description: 'SQLAlchemy dialect for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway DynamoDB Support',
                releaseDate: '2019-01-01',
                description: 'DynamoDB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-dynamodb',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase DynamoDB Support',
                releaseDate: '2020-01-01',
                description: 'DynamoDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-dynamodb',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver DynamoDB Support',
                releaseDate: '2018-01-01',
                description: 'DynamoDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip DynamoDB Support',
                releaseDate: '2018-01-01',
                description: 'DynamoDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // DynamoDB-specific frameworks
        {
            id: 'dynamodb-local',
            name: 'DynamoDB Local',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2012-01-01',
            description: 'Local version of DynamoDB for development and testing',
            authors: ['Amazon'],
            implementation: {
                releaseDate: '2012-01-01',
                authors: ['Amazon'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'dynamodb-admin',
            name: 'DynamoDB Admin',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2015-01-01',
            description: 'Web-based DynamoDB administration interface',
            authors: ['Aaron Heckmann'],
            repository: 'https://github.com/aaronshaf/dynamodb-admin',
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Aaron Heckmann'],
                contributorsType: ['open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'DynamoDB Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for DynamoDB',
                repository: 'https://github.com/audienceproject/spark-dynamodb',
                authors: ['AudienceProject'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'DynamoDB Flink Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Flink connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java-v2',
                authors: ['Amazon'],
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
                name: 'Grafana DynamoDB Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for DynamoDB',
                repository: 'https://github.com/grafana/grafana-dynamodb-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'DynamoDB Superset Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Superset support for DynamoDB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma DynamoDB Adapter',
                releaseDate: '2019-01-01',
                description: 'DynamoDB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM DynamoDB Driver',
                releaseDate: '2016-01-01',
                description: 'DynamoDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize DynamoDB Dialect',
                releaseDate: '2010-01-01',
                description: 'DynamoDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core DynamoDB Provider',
                releaseDate: '2016-06-27',
                description: 'DynamoDB provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel DynamoDB Driver',
                releaseDate: '2015-01-01',
                description: 'DynamoDB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx DynamoDB Driver',
                releaseDate: '2019-01-01',
                description: 'DynamoDB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ DynamoDB Support',
                releaseDate: '2009-01-01',
                description: 'DynamoDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose DynamoDB Driver',
                releaseDate: '2013-05-01',
                description: 'DynamoDB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic DynamoDB Dialect',
                releaseDate: '2011-01-01',
                description: 'DynamoDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM DynamoDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with DynamoDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma DynamoDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with DynamoDB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel DynamoDB Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with DynamoDB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate DynamoDB Driver',
                releaseDate: '2013-01-01',
                description: 'DynamoDB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js DynamoDB Driver',
                releaseDate: '2012-01-01',
                description: 'DynamoDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'DynamoDB Qlik Connector',
                releaseDate: '2023-01-01',
                description: 'Qlik connector for DynamoDB',
                repository: 'https://github.com/qlik-oss/qlik-connector-dynamodb',
                authors: ['Qlik'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'DynamoDB LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for DynamoDB vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/dynamodb',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'DynamoDB LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for DynamoDB vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/dynamodb',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'DynamoDB ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for DynamoDB vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/dynamodb',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'DynamoDB Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for DynamoDB vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/dynamodb',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'DynamoDB Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for DynamoDB vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/dynamodb',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'DynamoDB Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for DynamoDB vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/dynamodb',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'DynamoDB Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for DynamoDB vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/dynamodb',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'DynamoDB Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java/tree/master/aws-java-sdk-dynamodb/src/main/java/com/amazonaws/services/dynamodbv2/model/vector',
                authors: ['AWS'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'DynamoDB VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for DynamoDB vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/dynamodb',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'DynamoDB Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for DynamoDB vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/dynamodb',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default dynamodbData; 