import { TimelineData } from './types';
import { common } from './common';

const yugabytedbData: TimelineData = {
    database: 'yugabytedb',
    displayName: 'YugabyteDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'YugabyteDB JDBC Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of JDBC',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/java/yb-pgsql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for YugabyteDB',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of database/sql',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'psycopg2 for YugabyteDB',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of DB-API',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Npgsql for YugabyteDB',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of ADO.NET',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for YugabyteDB',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB driver implementation of GORM',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper YugabyteDB',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of Dapper',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate YugabyteDB Dialect',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB Dialect for Hibernate',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/java/yb-pgsql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'YugabyteDB SQLAlchemy Dialect',
                releaseDate: '2017-01-01',
                description: 'SQLAlchemy dialect for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma YugabyteDB Adapter',
                releaseDate: '2019-01-01',
                description: 'YugabyteDB adapter for Prisma',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM YugabyteDB Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB driver for TypeORM',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize YugabyteDB Dialect',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB dialect for Sequelize',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core YugabyteDB Provider',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB provider for Entity Framework Core',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel YugabyteDB Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB driver for Diesel',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx YugabyteDB Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB driver for SQLx',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ YugabyteDB Support',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB support for jOOQ',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/java/yb-pgsql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway YugabyteDB Support',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB support for Flyway',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/java/yb-pgsql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase YugabyteDB Support',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB support for Liquibase',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/java/yb-pgsql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose YugabyteDB Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB driver for goose migrations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic YugabyteDB Dialect',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB dialect for Alembic',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM YugabyteDB Migrations',
                releaseDate: '2017-01-01',
                description: 'Migration system for TypeORM with YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma YugabyteDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel YugabyteDB Migrations',
                releaseDate: '2017-01-01',
                description: 'Migration system for Diesel with YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate YugabyteDB Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB driver for db-migrate',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js YugabyteDB Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB driver for Knex.js',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver YugabyteDB Support',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip YugabyteDB Support',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // YugabyteDB-specific frameworks
        {
            id: 'yugabytedb-cli',
            name: 'YugabyteDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2017-01-01',
            description: 'Command-line interface for YugabyteDB',
            authors: ['Yugabyte'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'yugabytedb-ui',
            name: 'YugabyteDB UI',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-01-01',
            description: 'Web-based administration interface for YugabyteDB',
            authors: ['Yugabyte'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'YugabyteDB Spark Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Spark connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'YugabyteDB Flink Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Flink connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'YugabyteDB Airflow Provider',
                releaseDate: '2017-01-01',
                description: 'Apache Airflow provider for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'YugabyteDB NiFi Processor',
                releaseDate: '2017-01-01',
                description: 'Apache NiFi processor for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'YugabyteDB Kafka Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Kafka connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'YugabyteDB Beam IO',
                releaseDate: '2017-01-01',
                description: 'Apache Beam IO for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'YugabyteDB dbt Adapter',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB adapter for dbt',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'YugabyteDB Fivetran Connector',
                releaseDate: '2017-01-01',
                description: 'Fivetran connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'YugabyteDB Stitch Connector',
                releaseDate: '2017-01-01',
                description: 'Stitch connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'YugabyteDB Talend Component',
                releaseDate: '2017-01-01',
                description: 'Talend component for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'YugabyteDB Grafana Plugin',
                releaseDate: '2017-01-01',
                description: 'Grafana data source plugin for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'YugabyteDB Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'YugabyteDB Tableau Connector',
                releaseDate: '2017-01-01',
                description: 'Tableau connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'YugabyteDB Power BI Connector',
                releaseDate: '2017-01-01',
                description: 'Power BI connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'YugabyteDB Looker Connector',
                releaseDate: '2017-01-01',
                description: 'Looker connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'YugabyteDB Metabase Driver',
                releaseDate: '2017-01-01',
                description: 'Metabase driver for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'YugabyteDB Redash Query Runner',
                releaseDate: '2017-01-01',
                description: 'Redash query runner for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'YugabyteDB Mode Connector',
                releaseDate: '2017-01-01',
                description: 'Mode connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'YugabyteDB Sisense Connector',
                releaseDate: '2017-01-01',
                description: 'Sisense connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'YugabyteDB Qlik Connector',
                releaseDate: '2017-01-01',
                description: 'Qlik connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'YugabyteDB LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'YugabyteDB LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'YugabyteDB ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'YugabyteDB Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'YugabyteDB Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'YugabyteDB Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'YugabyteDB Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'YugabyteDB Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for YugabyteDB',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'YugabyteDB VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'YugabyteDB Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for YugabyteDB vector operations',
                repository: 'https://github.com/yugabyte/yugabyte-db/tree/master/cloud/connectors/yb-ysql',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default yugabytedbData; 