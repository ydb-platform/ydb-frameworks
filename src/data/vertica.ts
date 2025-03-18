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
                releaseDate: '2007-01-01',
                description: 'Vertica implementation of JDBC',
                repository: 'https://github.com/vertica/vertica-jdbc',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for Vertica',
                releaseDate: '2011-03-01',
                description: 'Vertica implementation of database/sql',
                repository: 'https://github.com/vertica/vertica-go-driver',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'vertica-python',
                releaseDate: '2010-01-01',
                description: 'Vertica implementation of DB-API',
                repository: 'https://github.com/vertica/vertica-python',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Vertica ADO.NET Provider',
                releaseDate: '2007-01-01',
                description: 'Vertica implementation of ADO.NET',
                repository: 'https://github.com/vertica/vertica-dotnet',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for Vertica',
                releaseDate: '2011-03-01',
                description: 'Vertica driver implementation of GORM',
                repository: 'https://github.com/vertica/vertica-go-driver',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper Vertica',
                releaseDate: '2011-01-01',
                description: 'Vertica implementation of Dapper',
                repository: 'https://github.com/vertica/vertica-dotnet',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Vertica Dialect',
                releaseDate: '2007-01-01',
                description: 'Vertica Dialect for Hibernate',
                repository: 'https://github.com/vertica/vertica-jdbc',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Vertica SQLAlchemy Dialect',
                releaseDate: '2007-01-01',
                description: 'SQLAlchemy dialect for Vertica',
                repository: 'https://github.com/vertica/vertica-python',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
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
                releaseDate: '2011-01-01',
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
                repository: 'https://github.com/vertica/vertica-dotnet',
                authors: ['Vertica'],
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
            ...common.flyway,
            implementation: {
                name: 'Flyway Vertica Support',
                releaseDate: '2010-01-01',
                description: 'Vertica support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Vertica Support',
                releaseDate: '2010-01-01',
                description: 'Vertica support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
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

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Vertica Support',
                releaseDate: '2010-01-01',
                description: 'Vertica support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Vertica Support',
                releaseDate: '2015-12-01',
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
            releaseDate: '2007-01-01',
            description: 'Command-line interface for Vertica database',
            authors: ['Vertica'],
            implementation: {
                releaseDate: '2007-01-01',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'vertica-management-console',
            name: 'Vertica Management Console',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2007-01-01',
            description: 'Web-based administration interface for Vertica',
            authors: ['Vertica'],
            implementation: {
                releaseDate: '2007-01-01',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Vertica Spark Connector',
                releaseDate: '2014-05-30',
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
                releaseDate: '2014-12-11',
                description: 'Apache Flink connector for Vertica',
                repository: 'https://github.com/vertica/vertica-flink-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'Vertica Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for Vertica',
                repository: 'https://github.com/vertica/vertica-airflow-provider',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'Vertica NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for Vertica',
                repository: 'https://github.com/vertica/vertica-nifi-processor',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Vertica Kafka Connector',
                releaseDate: '2014-01-01',
                description: 'Apache Kafka connector for Vertica',
                repository: 'https://github.com/vertica/vertica-kafka-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'Vertica Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for Vertica',
                repository: 'https://github.com/vertica/vertica-beam-io',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'Vertica dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'Vertica adapter for dbt',
                repository: 'https://github.com/vertica/vertica-dbt-adapter',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'Vertica Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for Vertica',
                repository: 'https://github.com/vertica/vertica-fivetran-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'Vertica Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for Vertica',
                repository: 'https://github.com/vertica/vertica-stitch-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'Vertica Talend Component',
                releaseDate: '2010-01-01',
                description: 'Talend component for Vertica',
                repository: 'https://github.com/vertica/vertica-talend-component',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Vertica Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for Vertica',
                repository: 'https://github.com/vertica/vertica-grafana-plugin',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Vertica Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for Vertica',
                repository: 'https://github.com/vertica/vertica-superset-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Vertica Tableau Connector',
                releaseDate: '2010-01-01',
                description: 'Tableau connector for Vertica',
                repository: 'https://github.com/vertica/vertica-tableau-connector',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'Vertica Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for Vertica',
                repository: 'https://github.com/vertica/vertica-powerbi-connector',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'Vertica Looker Connector',
                releaseDate: '2010-01-01',
                description: 'Looker connector for Vertica',
                repository: 'https://github.com/vertica/vertica-looker-connector',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'Vertica Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for Vertica',
                repository: 'https://github.com/vertica/vertica-metabase-driver',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'Vertica Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for Vertica',
                repository: 'https://github.com/vertica/vertica-redash-query-runner',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'Vertica Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for Vertica',
                repository: 'https://github.com/vertica/vertica-mode-connector',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'Vertica Sisense Connector',
                releaseDate: '2010-01-01',
                description: 'Sisense connector for Vertica',
                repository: 'https://github.com/vertica/vertica-sisense-connector',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Vertica Qlik Connector',
                releaseDate: '2013-01-01',
                description: 'Qlik connector for Vertica',
                repository: 'https://github.com/vertica/vertica-qlik-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Vertica LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-langchain',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Vertica LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-llamaindex',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Vertica ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-chromadb',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Vertica Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-milvus',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Vertica Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-pinecone',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Vertica Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-weaviate',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Vertica Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-qdrant',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Vertica Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for Vertica',
                repository: 'https://github.com/vertica/vertica-vector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Vertica VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-vectordb',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Vertica Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-semantic-kernel',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default verticaData; 