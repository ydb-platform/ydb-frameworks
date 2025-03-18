import { TimelineData } from './types';
import { common } from './common';

const verticaData: TimelineData = {
    database: 'vertica',
    displayName: 'Vertica',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Vertica JDBC Driver',
                releaseDate: '2005-01-01',
                description: 'Vertica implementation of JDBC',
                repository: 'https://github.com/vertica/vertica-jdbc',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Vertica Go Driver',
                releaseDate: '2005-01-01',
                description: 'Vertica implementation of database/sql',
                repository: 'https://github.com/vertica/vertica-go',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'vertica-python',
                releaseDate: '2005-01-01',
                description: 'Vertica implementation of DB-API',
                repository: 'https://github.com/vertica/vertica-python',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Vertica Driver',
                releaseDate: '2018-01-01',
                description: 'Vertica driver implementation of GORM',
                repository: 'https://github.com/go-gorm/postgres',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Vertica Dialect',
                releaseDate: '2010-01-01',
                description: 'Vertica dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Vertica SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for Vertica',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Vertica Support',
                releaseDate: '2015-01-01',
                description: 'Vertica support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-postgresql',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Vertica Support',
                releaseDate: '2016-01-01',
                description: 'Vertica support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-postgresql',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Vertica Support',
                releaseDate: '2015-01-01',
                description: 'Vertica support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Vertica Support',
                releaseDate: '2015-01-01',
                description: 'Vertica support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Vertica-specific frameworks
        {
            id: 'vsql',
            name: 'vsql',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2005-01-01',
            description: 'Command-line interface for Vertica',
            authors: ['Vertica'],
            implementation: {
                releaseDate: '2005-01-01',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'vmc',
            name: 'Vertica Management Console',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-01-01',
            description: 'Web-based administration interface for Vertica',
            authors: ['Vertica'],
            implementation: {
                releaseDate: '2010-01-01',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Vertica Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for Vertica',
                repository: 'https://github.com/vertica/vertica-spark-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Vertica Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for Vertica',
                repository: 'https://github.com/vertica/vertica-flink-connector',
                authors: ['Vertica'],
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
                name: 'Grafana Vertica Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for Vertica',
                repository: 'https://github.com/grafana/grafana-postgresql-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Vertica Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Vertica',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma Vertica Adapter',
                releaseDate: '2019-01-01',
                description: 'Vertica adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Vertica Driver',
                releaseDate: '2016-01-01',
                description: 'Vertica driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Vertica Dialect',
                releaseDate: '2010-01-01',
                description: 'Vertica dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Vertica Provider',
                releaseDate: '2016-06-27',
                description: 'Vertica provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel Vertica Driver',
                releaseDate: '2015-01-01',
                description: 'Vertica driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx Vertica Driver',
                releaseDate: '2019-01-01',
                description: 'Vertica driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ Vertica Support',
                releaseDate: '2009-01-01',
                description: 'Vertica support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.goose,
            implementation: {
                name: 'goose Vertica Driver',
                releaseDate: '2013-05-01',
                description: 'Vertica driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Vertica Dialect',
                releaseDate: '2011-01-01',
                description: 'Vertica dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Vertica Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with Vertica',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma Vertica Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with Vertica',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel Vertica Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with Vertica',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate Vertica Driver',
                releaseDate: '2013-01-01',
                description: 'Vertica driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js Vertica Driver',
                releaseDate: '2012-01-01',
                description: 'Vertica driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Vertica Qlik Connector',
                releaseDate: '2023-01-01',
                description: 'Qlik connector for Vertica',
                repository: 'https://github.com/qlik-oss/qlik-connector-vertica',
                authors: ['Qlik'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Vertica LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for Vertica vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/vertica',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Vertica LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for Vertica vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/vertica',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Vertica ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for Vertica vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/vertica',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Vertica Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for Vertica vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/vertica',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Vertica Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for Vertica vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/vertica',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Vertica Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for Vertica vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/vertica',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Vertica Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for Vertica vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/vertica',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Vertica Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for Vertica',
                repository: 'https://github.com/vertica/vertica/tree/master/contrib/vector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Vertica VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for Vertica vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/vertica',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Vertica Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for Vertica vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/vertica',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default verticaData; 