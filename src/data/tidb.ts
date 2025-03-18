import { TimelineData } from './types';
import { common } from './common';

const tidbData: TimelineData = {
    database: 'tidb',
    displayName: 'TiDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'TiDB JDBC Driver',
                releaseDate: '2016-01-01',
                description: 'TiDB implementation of JDBC',
                repository: 'https://github.com/pingcap/tidb-jdbc',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for TiDB',
                releaseDate: '2016-01-01',
                description: 'TiDB implementation of database/sql',
                repository: 'https://github.com/pingcap/tidb-go-driver',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'mysql-connector-python',
                releaseDate: '2016-01-01',
                description: 'TiDB implementation of DB-API',
                repository: 'https://github.com/pingcap/tidb-python-driver',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'TiDB ADO.NET Provider',
                releaseDate: '2016-01-01',
                description: 'TiDB implementation of ADO.NET',
                repository: 'https://github.com/pingcap/tidb-dotnet-driver',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for TiDB',
                releaseDate: '2016-01-01',
                description: 'TiDB driver implementation of GORM',
                repository: 'https://github.com/pingcap/tidb-go-driver',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper TiDB',
                releaseDate: '2016-01-01',
                description: 'TiDB implementation of Dapper',
                repository: 'https://github.com/pingcap/tidb-dotnet-driver',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate TiDB Dialect',
                releaseDate: '2016-01-01',
                description: 'TiDB Dialect for Hibernate',
                repository: 'https://github.com/pingcap/tidb-jdbc',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'TiDB SQLAlchemy Dialect',
                releaseDate: '2016-01-01',
                description: 'SQLAlchemy dialect for TiDB',
                repository: 'https://github.com/pingcap/tidb-python-driver',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma TiDB Adapter',
                releaseDate: '2019-01-01',
                description: 'TiDB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM TiDB Driver',
                releaseDate: '2016-01-01',
                description: 'TiDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize TiDB Dialect',
                releaseDate: '2016-01-01',
                description: 'TiDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core TiDB Provider',
                releaseDate: '2016-06-27',
                description: 'TiDB provider for Entity Framework Core',
                repository: 'https://github.com/pingcap/tidb-dotnet-driver',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel TiDB Driver',
                releaseDate: '2016-01-01',
                description: 'TiDB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx TiDB Driver',
                releaseDate: '2019-01-01',
                description: 'TiDB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose TiDB Driver',
                releaseDate: '2016-01-01',
                description: 'TiDB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic TiDB Dialect',
                releaseDate: '2016-01-01',
                description: 'TiDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM TiDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with TiDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma TiDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with TiDB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel TiDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for Diesel with TiDB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate TiDB Driver',
                releaseDate: '2016-01-01',
                description: 'TiDB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js TiDB Driver',
                releaseDate: '2016-01-01',
                description: 'TiDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // TiDB-specific frameworks
        {
            id: 'tidb-cli',
            name: 'TiDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2016-01-01',
            description: 'Command-line interface for TiDB database',
            authors: ['PingCAP'],
            implementation: {
                releaseDate: '2016-01-01',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'tidb-dashboard',
            name: 'TiDB Dashboard',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2019-01-01',
            description: 'Web-based administration interface for TiDB',
            authors: ['PingCAP'],
            implementation: {
                releaseDate: '2019-01-01',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'TiDB Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-spark-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'TiDB Flink Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Flink connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-flink-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'TiDB Airflow Provider',
                releaseDate: '2016-01-01',
                description: 'Apache Airflow provider for TiDB',
                repository: 'https://github.com/pingcap/tidb-airflow-provider',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'TiDB NiFi Processor',
                releaseDate: '2016-01-01',
                description: 'Apache NiFi processor for TiDB',
                repository: 'https://github.com/pingcap/tidb-nifi-processor',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'TiDB Kafka Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Kafka connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-kafka-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'TiDB Beam IO',
                releaseDate: '2016-01-01',
                description: 'Apache Beam IO for TiDB',
                repository: 'https://github.com/pingcap/tidb-beam-io',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'TiDB dbt Adapter',
                releaseDate: '2016-01-01',
                description: 'TiDB adapter for dbt',
                repository: 'https://github.com/pingcap/tidb-dbt-adapter',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'TiDB Fivetran Connector',
                releaseDate: '2016-01-01',
                description: 'Fivetran connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-fivetran-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'TiDB Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-stitch-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'TiDB Talend Component',
                releaseDate: '2016-01-01',
                description: 'Talend component for TiDB',
                repository: 'https://github.com/pingcap/tidb-talend-component',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'TiDB Grafana Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for TiDB',
                repository: 'https://github.com/pingcap/tidb-grafana-plugin',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'TiDB Superset Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Superset support for TiDB',
                repository: 'https://github.com/pingcap/tidb-superset-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'TiDB Tableau Connector',
                releaseDate: '2016-01-01',
                description: 'Tableau connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-tableau-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'TiDB Power BI Connector',
                releaseDate: '2016-01-01',
                description: 'Power BI connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-powerbi-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'TiDB Looker Connector',
                releaseDate: '2016-01-01',
                description: 'Looker connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-looker-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'TiDB Metabase Driver',
                releaseDate: '2016-01-01',
                description: 'Metabase driver for TiDB',
                repository: 'https://github.com/pingcap/tidb-metabase-driver',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'TiDB Redash Query Runner',
                releaseDate: '2016-01-01',
                description: 'Redash query runner for TiDB',
                repository: 'https://github.com/pingcap/tidb-redash-query-runner',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'TiDB Mode Connector',
                releaseDate: '2016-01-01',
                description: 'Mode connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-mode-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'TiDB Sisense Connector',
                releaseDate: '2016-01-01',
                description: 'Sisense connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-sisense-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'TiDB Qlik Connector',
                releaseDate: '2016-01-01',
                description: 'Qlik connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-qlik-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'TiDB LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-langchain',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'TiDB LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-llamaindex',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'TiDB ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-chromadb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'TiDB Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-milvus',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'TiDB Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-pinecone',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'TiDB Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-weaviate',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'TiDB Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-qdrant',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'TiDB Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for TiDB',
                repository: 'https://github.com/pingcap/tidb-vector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'TiDB VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-vectordb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'TiDB Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-semantic-kernel',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default tidbData; 