import { TimelineData } from './types';
import { common } from './common';

const bigtableData: TimelineData = {
    database: 'bigtable',
    displayName: 'Google BigTable',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'BigTable JDBC Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of JDBC',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'BigTable Go Client',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of database/sql',
                repository: 'https://github.com/googleapis/google-cloud-go/tree/main/bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'google-cloud-bigtable',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of DB-API',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM BigTable Driver',
                releaseDate: '2018-01-01',
                description: 'BigTable driver implementation of GORM',
                repository: 'https://github.com/go-gorm/bigtable',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM BigTable',
                releaseDate: '2017-01-01',
                description: 'BigTable implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'BigTable SQLAlchemy Dialect',
                releaseDate: '2017-01-01',
                description: 'SQLAlchemy dialect for BigTable',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway BigTable Support',
                releaseDate: '2019-01-01',
                description: 'BigTable support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-bigtable',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase BigTable Support',
                releaseDate: '2020-01-01',
                description: 'BigTable support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-bigtable',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver BigTable Support',
                releaseDate: '2017-01-01',
                description: 'BigTable support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip BigTable Support',
                releaseDate: '2017-01-01',
                description: 'BigTable support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // BigTable-specific frameworks
        {
            id: 'bigtable-emulator',
            name: 'BigTable Emulator',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2015-01-01',
            description: 'Local emulator for BigTable development and testing',
            authors: ['Google'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'bigtable-admin',
            name: 'BigTable Admin',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Web-based administration interface for BigTable',
            authors: ['Google'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'BigTable Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for BigTable',
                repository: 'https://github.com/GoogleCloudPlatform/spark-bigtable-connector',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'BigTable Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for BigTable',
                repository: 'https://github.com/GoogleCloudPlatform/flink-bigtable-connector',
                authors: ['Google'],
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
                name: 'Grafana BigTable Plugin',
                releaseDate: '2017-01-01',
                description: 'Grafana data source plugin for BigTable',
                repository: 'https://github.com/grafana/grafana-bigtable-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'BigTable Superset Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Superset support for BigTable',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma BigTable Adapter',
                releaseDate: '2019-01-01',
                description: 'BigTable adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM BigTable Driver',
                releaseDate: '2016-01-01',
                description: 'BigTable driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize BigTable Dialect',
                releaseDate: '2010-01-01',
                description: 'BigTable dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core BigTable Provider',
                releaseDate: '2016-06-27',
                description: 'BigTable provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel BigTable Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx BigTable Driver',
                releaseDate: '2019-01-01',
                description: 'BigTable driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ BigTable Support',
                releaseDate: '2009-01-01',
                description: 'BigTable support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose BigTable Driver',
                releaseDate: '2013-05-01',
                description: 'BigTable driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic BigTable Dialect',
                releaseDate: '2011-01-01',
                description: 'BigTable dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM BigTable Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with BigTable',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma BigTable Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with BigTable',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel BigTable Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with BigTable',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate BigTable Driver',
                releaseDate: '2013-01-01',
                description: 'BigTable driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js BigTable Driver',
                releaseDate: '2012-01-01',
                description: 'BigTable driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'BigTable Qlik Connector',
                releaseDate: '2023-01-01',
                description: 'Qlik connector for BigTable',
                repository: 'https://github.com/qlik-oss/qlik-connector-bigtable',
                authors: ['Qlik'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'BigTable LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for BigTable vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/bigtable',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'BigTable LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for BigTable vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/bigtable',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'BigTable ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for BigTable vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/bigtable',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'BigTable Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for BigTable vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/bigtable',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'BigTable Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for BigTable vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/bigtable',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'BigTable Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for BigTable vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/bigtable',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'BigTable Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for BigTable vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/bigtable',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'BigTable Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable/tree/master/vector',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'BigTable VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for BigTable vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/bigtable',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'BigTable Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for BigTable vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/bigtable',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default bigtableData; 