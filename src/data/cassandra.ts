import { TimelineData } from './types';
import { common } from './common';

const cassandraData: TimelineData = {
    database: 'cassandra',
    displayName: 'Cassandra',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Cassandra JDBC Driver',
                releaseDate: '2010-01-01',
                description: 'Official Cassandra JDBC driver',
                repository: 'https://github.com/apache/cassandra-jdbc',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for Cassandra',
                releaseDate: '2011-01-01',
                description: 'Cassandra implementation of database/sql',
                repository: 'https://github.com/gocql/gocql',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for Cassandra',
                releaseDate: '2010-01-01',
                description: 'Cassandra implementation of DB-API',
                repository: 'https://github.com/datastax/python-driver',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for Cassandra',
                releaseDate: '2010-01-01',
                description: 'Cassandra implementation of ADO.NET',
                repository: 'https://github.com/datastax/csharp-driver',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for Cassandra',
                releaseDate: '2013-01-01',
                description: 'Cassandra driver implementation of GORM',
                repository: 'https://github.com/gocql/gocql',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper Cassandra',
                releaseDate: '2011-01-01',
                description: 'Cassandra implementation of Dapper',
                repository: 'https://github.com/DapperLib/Dapper',
                authors: ['Apache'],
                contributorsType: ['staff'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Cassandra Dialect',
                releaseDate: '2010-01-01',
                description: 'Cassandra Dialect for Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Cassandra SQLAlchemy Dialect',
                releaseDate: '2010-01-01',
                description: 'SQLAlchemy dialect for Cassandra',
                repository: 'https://github.com/datastax/python-driver',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma Cassandra Adapter',
                releaseDate: '2019-01-01',
                description: 'Cassandra adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Cassandra Driver',
                releaseDate: '2016-01-01',
                description: 'Cassandra driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Cassandra Dialect',
                releaseDate: '2010-01-01',
                description: 'Cassandra dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Cassandra Provider',
                releaseDate: '2016-01-01',
                description: 'Cassandra provider for Entity Framework Core',
                repository: 'https://github.com/datastax/csharp-driver',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel Cassandra Driver',
                releaseDate: '2015-01-01',
                description: 'Cassandra driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx Cassandra Driver',
                releaseDate: '2019-01-01',
                description: 'Cassandra driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ Cassandra Support',
                releaseDate: '2010-01-01',
                description: 'Cassandra support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Cassandra Dialect',
                releaseDate: '2010-01-01',
                description: 'Cassandra Dialect for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Cassandra Dialect',
                releaseDate: '2010-01-01',
                description: 'Cassandra Dialect for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose Cassandra Driver',
                description: 'Cassandra Driver for goose migrations',
                releaseDate: '2013-01-01',
                repository: 'https://github.com/pressly/goose',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Cassandra Dialect',
                releaseDate: '2010-01-01',
                description: 'Cassandra dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Cassandra Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with Cassandra',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma Cassandra Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with Cassandra',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel Cassandra Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with Cassandra',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate Cassandra Driver',
                releaseDate: '2013-01-01',
                description: 'Cassandra driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js Cassandra Driver',
                releaseDate: '2012-01-01',
                description: 'Cassandra driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Cassandra Support',
                releaseDate: '2010-01-01',
                description: 'Cassandra support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Cassandra Support',
                releaseDate: '2015-01-01',
                description: 'Cassandra support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Cassandra-specific frameworks
        {
            id: 'cqlsh',
            name: 'CQL Shell',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2009-01-01',
            description: 'Command-line interface for Cassandra database',
            authors: ['Apache'],
            implementation: {
                releaseDate: '2009-01-01',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'cassandra-web',
            name: 'Cassandra Web',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Visual database management tool for Cassandra',
            authors: ['Apache'],
            repository: 'https://github.com/apache/cassandra-web',
            implementation: {
                releaseDate: '2015-01-01',
                description: 'Cassandra Web is a GUI for Cassandra that allows you to make smarter decisions about data structure, querying, indexing, and more',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'cassandra-cloud',
            name: 'Cassandra Cloud',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2016-01-01',
            description: 'Cloud database service for Cassandra',
            authors: ['Apache'],
            implementation: {
                name: 'Cassandra Cloud',
                releaseDate: '2016-01-01',
                description: 'Cloud database service for Cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'cassandra-enterprise',
            name: 'Cassandra Enterprise',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Enterprise database service for Cassandra',
            authors: ['Apache'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Cassandra Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for Cassandra',
                repository: 'https://github.com/datastax/spark-cassandra-connector',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Cassandra Flink Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Flink connector for Cassandra',
                repository: 'https://github.com/apache/flink-connector-cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'Cassandra Airflow Provider',
                releaseDate: '2015-01-01',
                description: 'Apache Airflow provider for Cassandra',
                repository: 'https://github.com/apache/airflow',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'Cassandra NiFi Processor',
                releaseDate: '2014-01-01',
                description: 'Apache NiFi processor for Cassandra',
                repository: 'https://github.com/apache/nifi',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Cassandra Kafka Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Kafka connector for Cassandra',
                repository: 'https://github.com/apache/kafka',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'Cassandra Beam IO',
                releaseDate: '2016-01-01',
                description: 'Apache Beam IO for Cassandra',
                repository: 'https://github.com/apache/beam',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'Cassandra dbt Adapter',
                releaseDate: '2016-01-01',
                description: 'dbt adapter for Cassandra',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'Cassandra Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for Cassandra',
                repository: 'https://github.com/fivetran/fivetran',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'Cassandra Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for Cassandra',
                repository: 'https://github.com/stitchdata/stitch',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'Cassandra Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for Cassandra',
                repository: 'https://github.com/Talend',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Cassandra Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for Cassandra',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Cassandra Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Cassandra over SQLAlchemy',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Cassandra Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for Cassandra',
                repository: 'https://github.com/tableau/connector-plugin-sdk',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'Cassandra Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for Cassandra',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'Cassandra Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for Cassandra',
                repository: 'https://github.com/looker-open-source',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'Cassandra Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for Cassandra',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'Cassandra Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for Cassandra',
                repository: 'https://github.com/getredash/redash',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'Cassandra Mode Connector',
                releaseDate: '2015-01-01',
                description: 'Mode connector for Cassandra',
                repository: 'https://github.com/modeanalytics',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'Cassandra Sisense Connector',
                releaseDate: '2010-01-01',
                description: 'Sisense connector for Cassandra',
                repository: 'https://github.com/sisense',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Cassandra Qlik Connector',
                releaseDate: '2010-01-01',
                description: 'Qlik connector for Cassandra',
                repository: 'https://github.com/qlik-oss/qlik-connector-cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Cassandra LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for Cassandra vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Cassandra LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for Cassandra vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Cassandra ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for Cassandra vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/master/chroma/backends/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Cassandra Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for Cassandra vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/storage/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Cassandra Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for Cassandra vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/master/pinecone/vectorstores/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Cassandra Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for Cassandra vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Cassandra Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for Cassandra vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/qdrant/vector_stores/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Cassandra Vector Extension',
                releaseDate: '2021-01-01',
                description: 'Vector similarity search extension for Cassandra',
                repository: 'https://github.com/apache/cassandra-vector',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Cassandra VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for Cassandra vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/master/vectordb/backends/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Cassandra Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for Cassandra vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/python/semantic_kernel/vector_stores/cassandra',
                authors: ['Apache'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default cassandraData; 