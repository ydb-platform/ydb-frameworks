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
                releaseDate: '2016-01-01',
                description: 'Cassandra implementation of JDBC',
                repository: 'https://github.com/datastax/java-driver',
                authors: ['DataStax'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Cassandra Go Driver',
                releaseDate: '2016-01-01',
                description: 'Cassandra implementation of database/sql',
                repository: 'https://github.com/gocql/gocql',
                authors: ['Zach Musgrave'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'cassandra-driver',
                releaseDate: '2010-01-01',
                description: 'Cassandra implementation of DB-API',
                repository: 'https://github.com/datastax/python-driver',
                authors: ['DataStax'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Cassandra Driver',
                releaseDate: '2016-01-01',
                description: 'Cassandra driver implementation of GORM',
                repository: 'https://github.com/go-gorm/cassandra',
                authors: ['Jinzhu'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM Cassandra',
                releaseDate: '2011-01-01',
                description: 'Cassandra implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Cassandra SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for Cassandra',
                repository: 'https://github.com/datastax/python-driver',
                authors: ['DataStax'],
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
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Cassandra Dialect',
                releaseDate: '2010-01-01',
                description: 'Cassandra dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Cassandra Provider',
                releaseDate: '2016-06-27',
                description: 'Cassandra provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
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
                releaseDate: '2009-01-01',
                description: 'Cassandra support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Cassandra Support',
                releaseDate: '2018-01-01',
                description: 'Cassandra support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-cassandra',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Cassandra Support',
                releaseDate: '2019-01-01',
                description: 'Cassandra support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-cassandra',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose Cassandra Driver',
                releaseDate: '2013-05-01',
                description: 'Cassandra driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Cassandra Dialect',
                releaseDate: '2011-01-01',
                description: 'Cassandra dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Cassandra Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with Cassandra',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
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
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Cassandra Support',
                releaseDate: '2016-01-01',
                description: 'Cassandra support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Cassandra Support',
                releaseDate: '2016-01-01',
                description: 'Cassandra support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Cassandra-specific frameworks
        {
            id: 'cqlsh',
            name: 'cqlsh',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2010-01-01',
            description: 'Command-line interface for Cassandra',
            authors: ['Apache'],
            implementation: {
                releaseDate: '2010-01-01',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'datastax-devcenter',
            name: 'DataStax DevCenter',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2012-01-01',
            description: 'GUI for Cassandra',
            authors: ['DataStax'],
            implementation: {
                releaseDate: '2012-01-01',
                authors: ['DataStax'],
                contributorsType: ['staff']
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
                authors: ['DataStax'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Cassandra Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for Cassandra',
                repository: 'https://github.com/apache/flink',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'Cassandra Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for Cassandra',
                repository: 'https://github.com/apache/airflow',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'Cassandra NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for Cassandra',
                repository: 'https://github.com/apache/nifi',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Cassandra Kafka Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Kafka connector for Cassandra',
                repository: 'https://github.com/apache/kafka',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'Cassandra Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for Cassandra',
                repository: 'https://github.com/apache/beam',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'Cassandra dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'Cassandra adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'Cassandra Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for Cassandra',
                repository: 'https://github.com/fivetran',
                authors: ['Fivetran'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'Cassandra Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for Cassandra',
                repository: 'https://github.com/stitchdata',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'Cassandra Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for Cassandra',
                repository: 'https://github.com/Talend',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Cassandra Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for Cassandra',
                repository: 'https://github.com/grafana/grafana-cassandra-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Cassandra Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Cassandra',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Cassandra Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for Cassandra',
                repository: 'https://github.com/tableau',
                authors: ['Salesforce'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'Cassandra Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for Cassandra',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'Cassandra Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for Cassandra',
                repository: 'https://github.com/looker',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'Cassandra Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for Cassandra',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Metabase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'Cassandra Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for Cassandra',
                repository: 'https://github.com/getredash/redash',
                authors: ['Redash'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'Cassandra Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for Cassandra',
                repository: 'https://github.com/mode',
                authors: ['Mode'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'Cassandra Sisense Connector',
                releaseDate: '2004-01-01',
                description: 'Sisense connector for Cassandra',
                repository: 'https://github.com/sisense',
                authors: ['Sisense'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Cassandra Qlik Connector',
                releaseDate: '2023-01-01',
                description: 'Qlik connector for Cassandra',
                repository: 'https://github.com/qlik-oss/qlik-connector-cassandra',
                authors: ['Qlik'],
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
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Cassandra LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for Cassandra vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/cassandra',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Cassandra ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for Cassandra vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/cassandra',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Cassandra Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for Cassandra vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/cassandra',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Cassandra Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for Cassandra vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/cassandra',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Cassandra Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for Cassandra vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/cassandra',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Cassandra Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for Cassandra vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/cassandra',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Cassandra Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for Cassandra',
                repository: 'https://github.com/apache/cassandra/tree/master/src/java/org/apache/cassandra/db/vector',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Cassandra VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for Cassandra vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/cassandra',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Cassandra Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for Cassandra vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/cassandra',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default cassandraData; 