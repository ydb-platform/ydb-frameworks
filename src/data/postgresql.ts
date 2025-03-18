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
                name: 'JDBC PostgreSQL',
                releaseDate: '1997-02-19',
                description: 'PostgreSQL implementation of JDBC',
                repository: 'https://github.com/pgjdbc/pgjdbc',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for PostgreSQL',
                releaseDate: '2011-03-01',
                description: 'PostgreSQL implementation of database/sql',
                repository: 'https://github.com/lib/pq',
                authors: ['lib/pq contributors'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'psycopg2',
                releaseDate: '2001-01-01',
                description: 'PostgreSQL implementation of DB-API',
                repository: 'https://github.com/psycopg/psycopg2',
                authors: ['Federico Di Gregorio'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Npgsql',
                releaseDate: '2002-01-01',
                description: 'PostgreSQL implementation of ADO.NET',
                repository: 'https://github.com/npgsql/npgsql',
                authors: ['Npgsql Development Team'],
                contributorsType: ['open-source']
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
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper PostgreSQL',
                releaseDate: '2011-01-01',
                description: 'PostgreSQL implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate PostgreSQL Dialect',
                releaseDate: '2001-12-01',
                description: 'PostgreSQL Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Hibernate Team'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'PostgreSQL SQLAlchemy Dialect',
                releaseDate: '2006-02-01',
                description: 'SQLAlchemy dialect for PostgreSQL',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy Team'],
                contributorsType: ['open-source']
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
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize PostgreSQL Dialect',
                releaseDate: '2010-01-01',
                description: 'PostgreSQL dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core PostgreSQL Provider',
                releaseDate: '2016-06-27',
                description: 'PostgreSQL provider for Entity Framework Core',
                repository: 'https://github.com/npgsql/efcore.pg',
                authors: ['Npgsql Development Team'],
                contributorsType: ['open-source']
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
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway PostgreSQL Support',
                releaseDate: '2010-06-01',
                description: 'PostgreSQL support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase PostgreSQL Support',
                releaseDate: '2006-12-01',
                description: 'PostgreSQL support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose PostgreSQL Driver',
                releaseDate: '2013-05-01',
                description: 'PostgreSQL driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic PostgreSQL Dialect',
                releaseDate: '2011-01-01',
                description: 'PostgreSQL dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM PostgreSQL Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with PostgreSQL',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
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
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver PostgreSQL Support',
                releaseDate: '2010-06-01',
                description: 'PostgreSQL support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip PostgreSQL Support',
                releaseDate: '2015-12-01',
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
            authors: ['pgAdmin Development Team'],
            repository: 'https://github.com/pgadmin-org/pgadmin4',
            implementation: {
                releaseDate: '2004-01-01',
                authors: ['pgAdmin Development Team'],
                contributorsType: ['open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'PostgreSQL Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for PostgreSQL',
                repository: 'https://github.com/apache/spark',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'PostgreSQL Flink Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Flink connector for PostgreSQL',
                repository: 'https://github.com/apache/flink',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'PostgreSQL Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for PostgreSQL',
                repository: 'https://github.com/apache/airflow',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'PostgreSQL NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for PostgreSQL',
                repository: 'https://github.com/apache/nifi',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'PostgreSQL Kafka Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Kafka connector for PostgreSQL',
                repository: 'https://github.com/apache/kafka',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'PostgreSQL Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for PostgreSQL',
                repository: 'https://github.com/apache/beam',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'PostgreSQL dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'PostgreSQL adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'PostgreSQL Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for PostgreSQL',
                repository: 'https://github.com/fivetran',
                authors: ['Fivetran'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'PostgreSQL Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for PostgreSQL',
                repository: 'https://github.com/stitchdata',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'PostgreSQL Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for PostgreSQL',
                repository: 'https://github.com/Talend',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'PostgreSQL Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for PostgreSQL',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Grafana Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'PostgreSQL Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for PostgreSQL',
                repository: 'https://github.com/apache/superset',
                authors: ['Airbnb', 'Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'PostgreSQL Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for PostgreSQL',
                repository: 'https://github.com/tableau',
                authors: ['Salesforce'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'PostgreSQL Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for PostgreSQL',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'PostgreSQL Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for PostgreSQL',
                repository: 'https://github.com/looker',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'PostgreSQL Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for PostgreSQL',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Metabase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'PostgreSQL Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for PostgreSQL',
                repository: 'https://github.com/getredash/redash',
                authors: ['Redash'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'PostgreSQL Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for PostgreSQL',
                repository: 'https://github.com/mode',
                authors: ['Mode'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'PostgreSQL Sisense Connector',
                releaseDate: '2004-01-01',
                description: 'Sisense connector for PostgreSQL',
                repository: 'https://github.com/sisense',
                authors: ['Sisense'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'PostgreSQL Qlik Connector',
                releaseDate: '2013-01-01',
                description: 'Qlik connector for PostgreSQL',
                repository: 'https://github.com/qlik-oss/qlik-connector-postgresql',
                authors: ['Qlik'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'PostgreSQL LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for PostgreSQL with pgvector',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/postgres',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'PostgreSQL LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for PostgreSQL with pgvector',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/postgres',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'PostgreSQL ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for PostgreSQL with pgvector',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/postgres',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'PostgreSQL Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for PostgreSQL with pgvector',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/postgres',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'PostgreSQL Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for PostgreSQL with pgvector',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/postgres',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'PostgreSQL Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for PostgreSQL with pgvector',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/postgres',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'PostgreSQL Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for PostgreSQL with pgvector',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/postgres',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'pgvector',
                releaseDate: '2021-01-01',
                description: 'Open-source vector similarity search for PostgreSQL',
                repository: 'https://github.com/pgvector/pgvector',
                authors: ['pgvector'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'PostgreSQL VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for PostgreSQL with pgvector',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/postgres',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'PostgreSQL Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for PostgreSQL with pgvector',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/postgres',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default postgresqlData;