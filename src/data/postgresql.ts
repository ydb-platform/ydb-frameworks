// src/data/postgresql.ts
import { TimelineData } from './types';
import { common } from './common';

const postgresqlData: TimelineData = {
    database: 'postgresql',
    displayName: 'PostgreSQL',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'PostgreSQL JDBC Driver',
                releaseDate: '1997-08-01',
                description: 'Official PostgreSQL JDBC driver',
                repository: 'https://github.com/pgjdbc/pgjdbc',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for PostgreSQL',
                releaseDate: '2011-01-01',
                description: 'PostgreSQL implementation of database/sql',
                repository: 'https://github.com/lib/pq',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for PostgreSQL',
                releaseDate: '1994-01-01',
                description: 'PostgreSQL implementation of DB-API',
                repository: 'https://github.com/psycopg/psycopg',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for PostgreSQL',
                releaseDate: '2004-01-01',
                description: 'PostgreSQL implementation of ADO.NET',
                repository: 'https://github.com/npgsql/npgsql',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for PostgreSQL',
                releaseDate: '2013-01-01',
                description: 'PostgreSQL driver implementation of GORM',
                repository: 'https://github.com/go-gorm/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper PostgreSQL',
                releaseDate: '2011-01-01',
                description: 'PostgreSQL implementation of Dapper',
                repository: 'https://github.com/DapperLib/Dapper',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate PostgreSQL Dialect',
                releaseDate: '2001-01-01',
                description: 'PostgreSQL Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'PostgreSQL SQLAlchemy Dialect',
                releaseDate: '2006-01-01',
                description: 'SQLAlchemy dialect for PostgreSQL',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma PostgreSQL Adapter',
                releaseDate: '2019-01-01',
                description: 'PostgreSQL adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM PostgreSQL Driver',
                releaseDate: '2016-01-01',
                description: 'PostgreSQL driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize PostgreSQL Dialect',
                releaseDate: '2010-01-01',
                description: 'PostgreSQL dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core PostgreSQL Provider',
                releaseDate: '2016-01-01',
                description: 'PostgreSQL provider for Entity Framework Core',
                repository: 'https://github.com/npgsql/efcore.pg',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel PostgreSQL Driver',
                releaseDate: '2015-01-01',
                description: 'PostgreSQL driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx PostgreSQL Driver',
                releaseDate: '2019-01-01',
                description: 'PostgreSQL driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ PostgreSQL Support',
                releaseDate: '2009-01-01',
                description: 'PostgreSQL support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway PostgreSQL Support',
                releaseDate: '2010-01-01',
                description: 'PostgreSQL support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase PostgreSQL Support',
                releaseDate: '2006-01-01',
                description: 'PostgreSQL support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose PostgreSQL Driver',
                description: 'PostgreSQL driver for goose migrations',
                releaseDate: '2013-01-01',
                repository: 'https://github.com/pressly/goose',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic PostgreSQL Dialect',
                releaseDate: '2009-01-01',
                description: 'PostgreSQL dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM PostgreSQL Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with PostgreSQL',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma PostgreSQL Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with PostgreSQL',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel PostgreSQL Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with PostgreSQL',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate PostgreSQL Driver',
                releaseDate: '2013-01-01',
                description: 'PostgreSQL driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js PostgreSQL Driver',
                releaseDate: '2012-01-01',
                description: 'PostgreSQL driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver PostgreSQL Support',
                releaseDate: '2010-01-01',
                description: 'PostgreSQL support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip PostgreSQL Support',
                releaseDate: '2015-01-01',
                description: 'PostgreSQL support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // PostgreSQL-specific frameworks
        {
            id: 'pgadmin',
            name: 'pgAdmin',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2004-01-01',
            description: 'Comprehensive PostgreSQL database management tool',
            authors: ['PostgreSQL Global Development Group'],
            repository: 'https://github.com/pgadmin-org/pgadmin4',
            implementation: {
                releaseDate: '2004-01-01',
                description: 'pgAdmin is the most popular and feature rich Open Source administration and development platform for PostgreSQL',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'pgcli',
            name: 'pgcli',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2014-01-01',
            description: 'Command-line interface for PostgreSQL database',
            authors: ['PostgreSQL Global Development Group'],
            implementation: {
                releaseDate: '2014-01-01',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'pgweb',
            name: 'pgweb',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2015-01-01',
            description: 'Web-based PostgreSQL database browser',
            authors: ['PostgreSQL Global Development Group'],
            implementation: {
                name: 'pgweb',
                releaseDate: '2015-01-01',
                description: 'Web-based PostgreSQL database browser',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'pg_auto_failover',
            name: 'pg_auto_failover',
            category: 'Admin',
            language: 'C',
            releaseDate: '2019-01-01',
            description: 'PostgreSQL extension and service for automated failover and high-availability',
            authors: ['PostgreSQL Global Development Group'],
            repository: 'https://github.com/citusdata/pg_auto_failover',
            implementation: {
                releaseDate: '2019-01-01',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'PostgreSQL Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for PostgreSQL',
                repository: 'https://github.com/apache/spark',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'PostgreSQL Flink Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Flink connector for PostgreSQL',
                repository: 'https://github.com/apache/flink',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'PostgreSQL Airflow Provider',
                releaseDate: '2015-01-01',
                description: 'Apache Airflow provider for PostgreSQL',
                repository: 'https://github.com/apache/airflow',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'PostgreSQL NiFi Processor',
                releaseDate: '2014-01-01',
                description: 'Apache NiFi processor for PostgreSQL',
                repository: 'https://github.com/apache/nifi',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'PostgreSQL Kafka Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Kafka connector for PostgreSQL',
                repository: 'https://github.com/apache/kafka',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'PostgreSQL Beam IO',
                releaseDate: '2016-01-01',
                description: 'Apache Beam IO for PostgreSQL',
                repository: 'https://github.com/apache/beam',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'PostgreSQL dbt Adapter',
                releaseDate: '2016-01-01',
                description: 'dbt adapter for PostgreSQL',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'PostgreSQL Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for PostgreSQL',
                repository: 'https://github.com/fivetran/fivetran',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'PostgreSQL Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for PostgreSQL',
                repository: 'https://github.com/stitchdata/stitch',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'PostgreSQL Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for PostgreSQL',
                repository: 'https://github.com/Talend',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana PostgreSQL Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for PostgreSQL',
                repository: 'https://github.com/grafana/grafana',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'PostgreSQL Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for PostgreSQL over SQLAlchemy',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'PostgreSQL Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for PostgreSQL',
                repository: 'https://github.com/tableau/connector-plugin-sdk',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'PostgreSQL Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for PostgreSQL',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'PostgreSQL Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for PostgreSQL',
                repository: 'https://github.com/looker-open-source',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'PostgreSQL Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for PostgreSQL',
                repository: 'https://github.com/metabase/metabase',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'PostgreSQL Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for PostgreSQL',
                repository: 'https://github.com/getredash/redash',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'PostgreSQL Mode Connector',
                releaseDate: '2015-01-01',
                description: 'Mode connector for PostgreSQL',
                repository: 'https://github.com/modeanalytics',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'PostgreSQL Sisense Connector',
                releaseDate: '2010-01-01',
                description: 'Sisense connector for PostgreSQL',
                repository: 'https://github.com/sisense',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'PostgreSQL Qlik Connector',
                releaseDate: '1993-01-01',
                description: 'Qlik connector for PostgreSQL',
                repository: 'https://github.com/qlik-oss/qlik-connector-postgresql',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'PostgreSQL LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for PostgreSQL vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'PostgreSQL LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for PostgreSQL vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'PostgreSQL ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for PostgreSQL vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/master/chroma/backends/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'PostgreSQL Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for PostgreSQL vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/storage/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'PostgreSQL Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for PostgreSQL vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/master/pinecone/vectorstores/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'PostgreSQL Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for PostgreSQL vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'PostgreSQL Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for PostgreSQL vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/qdrant/vector_stores/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'PostgreSQL Vector Extension',
                releaseDate: '2021-01-01',
                description: 'Vector similarity search extension for PostgreSQL',
                repository: 'https://github.com/pgvector/pgvector',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'PostgreSQL VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for PostgreSQL vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/master/vectordb/backends/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'PostgreSQL Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for PostgreSQL vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/python/semantic_kernel/vector_stores/postgres',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default postgresqlData;