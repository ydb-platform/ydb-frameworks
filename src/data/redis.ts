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
                releaseDate: '2010-01-01',
                description: 'Official Redis JDBC driver',
                repository: 'https://github.com/redis/redis-jdbc',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for Redis',
                releaseDate: '2011-01-01',
                description: 'Redis implementation of database/sql',
                repository: 'https://github.com/redis/go-redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for Redis',
                releaseDate: '2010-01-01',
                description: 'Redis implementation of DB-API',
                repository: 'https://github.com/redis/redis-py',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for Redis',
                releaseDate: '2010-01-01',
                description: 'Redis implementation of ADO.NET',
                repository: 'https://github.com/redis/redis-csharp',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for Redis',
                releaseDate: '2013-01-01',
                description: 'Redis driver implementation of GORM',
                repository: 'https://github.com/redis/redis-gorm',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper Redis',
                releaseDate: '2011-01-01',
                description: 'Redis implementation of Dapper',
                repository: 'https://github.com/DapperLib/Dapper',
                authors: ['Redis'],
                contributorsType: ['staff'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Redis Dialect',
                releaseDate: '2010-01-01',
                description: 'Redis Dialect for Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Redis SQLAlchemy Dialect',
                releaseDate: '2010-01-01',
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
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Redis Dialect',
                releaseDate: '2010-01-01',
                description: 'Redis dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Redis Provider',
                releaseDate: '2016-01-01',
                description: 'Redis provider for Entity Framework Core',
                repository: 'https://github.com/redis/redis-efcore-provider',
                authors: ['Redis'],
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
                releaseDate: '2010-01-01',
                description: 'Redis support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Redis Dialect',
                releaseDate: '2010-01-01',
                description: 'Redis Dialect for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Redis Dialect',
                releaseDate: '2010-01-01',
                description: 'Redis Dialect for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose Redis Driver',
                description: 'Redis Driver for goose migrations',
                releaseDate: '2013-01-01',
                repository: 'https://github.com/pressly/goose',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Redis Dialect',
                releaseDate: '2010-01-01',
                description: 'Redis dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Redis Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with Redis',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
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
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Redis Support',
                releaseDate: '2010-01-01',
                description: 'Redis support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Redis Support',
                releaseDate: '2015-01-01',
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
            description: 'Command-line interface for Redis database',
            authors: ['Redis'],
            implementation: {
                releaseDate: '2009-01-01',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'redis-insight',
            name: 'RedisInsight',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Visual database management tool for Redis',
            authors: ['Redis'],
            repository: 'https://github.com/redis/redisinsight',
            implementation: {
                releaseDate: '2015-01-01',
                description: 'RedisInsight is a GUI for Redis that allows you to make smarter decisions about data structure, querying, indexing, and more',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'redis-cloud',
            name: 'Redis Cloud',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2016-01-01',
            description: 'Cloud database service for Redis',
            authors: ['Redis'],
            implementation: {
                name: 'Redis Cloud',
                releaseDate: '2016-01-01',
                description: 'Cloud database service for Redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'redis-enterprise',
            name: 'Redis Enterprise',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Enterprise database service for Redis',
            authors: ['Redis'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
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
                releaseDate: '2015-01-01',
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
                releaseDate: '2015-01-01',
                description: 'Apache Airflow provider for Redis',
                repository: 'https://github.com/redis/redis-airflow',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'Redis NiFi Processor',
                releaseDate: '2014-01-01',
                description: 'Apache NiFi processor for Redis',
                repository: 'https://github.com/redis/redis-nifi',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Redis Kafka Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Kafka connector for Redis',
                repository: 'https://github.com/redis/redis-kafka',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'Redis Beam IO',
                releaseDate: '2016-01-01',
                description: 'Apache Beam IO for Redis',
                repository: 'https://github.com/redis/redis-beam',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'Redis dbt Adapter',
                releaseDate: '2016-01-01',
                description: 'dbt adapter for Redis',
                repository: 'https://github.com/redis/redis-dbt',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'Redis Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for Redis',
                repository: 'https://github.com/fivetran/fivetran',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'Redis Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for Redis',
                repository: 'https://github.com/stitchdata/stitch',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'Redis Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for Redis',
                repository: 'https://github.com/Talend',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Redis Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for Redis',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Redis Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Redis over SQLAlchemy',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Redis Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for Redis',
                repository: 'https://github.com/tableau/connector-plugin-sdk',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'Redis Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for Redis',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'Redis Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for Redis',
                repository: 'https://github.com/looker-open-source',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'Redis Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for Redis',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'Redis Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for Redis',
                repository: 'https://github.com/getredash/redash',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'Redis Mode Connector',
                releaseDate: '2015-01-01',
                description: 'Mode connector for Redis',
                repository: 'https://github.com/modeanalytics',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'Redis Sisense Connector',
                releaseDate: '2010-01-01',
                description: 'Sisense connector for Redis',
                repository: 'https://github.com/sisense',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Redis Qlik Connector',
                releaseDate: '2010-01-01',
                description: 'Qlik connector for Redis',
                repository: 'https://github.com/qlik-oss/qlik-connector-redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Redis LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for Redis vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Redis LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for Redis vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Redis ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for Redis vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/master/chroma/backends/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Redis Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for Redis vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/storage/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Redis Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for Redis vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/master/pinecone/vectorstores/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Redis Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for Redis vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Redis Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for Redis vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/qdrant/vector_stores/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Redis Vector Extension',
                releaseDate: '2021-01-01',
                description: 'Vector similarity search extension for Redis',
                repository: 'https://github.com/redis/redis-vector',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Redis VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for Redis vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/master/vectordb/backends/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Redis Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for Redis vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/python/semantic_kernel/vector_stores/redis',
                authors: ['Redis'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default redisData; 