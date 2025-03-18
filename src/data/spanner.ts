import { TimelineData } from './types';
import { common } from './common';

const spannerData: TimelineData = {
    database: 'spanner',
    displayName: 'Google Cloud Spanner',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Spanner JDBC Driver',
                releaseDate: '2017-01-01',
                description: 'Spanner implementation of JDBC',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for Spanner',
                releaseDate: '2017-01-01',
                description: 'Spanner implementation of database/sql',
                repository: 'https://github.com/googleapis/google-cloud-go/tree/main/spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'google-cloud-spanner',
                releaseDate: '2017-01-01',
                description: 'Spanner implementation of DB-API',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Google.Cloud.Spanner.V1',
                releaseDate: '2017-01-01',
                description: 'Spanner implementation of ADO.NET',
                repository: 'https://github.com/googleapis/google-cloud-dotnet/tree/main/apis/Google.Cloud.Spanner.V1',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for Spanner',
                releaseDate: '2017-01-01',
                description: 'Spanner driver implementation of GORM',
                repository: 'https://github.com/googleapis/google-cloud-go/tree/main/spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper Spanner',
                releaseDate: '2017-01-01',
                description: 'Spanner implementation of Dapper',
                repository: 'https://github.com/googleapis/google-cloud-dotnet/tree/main/apis/Google.Cloud.Spanner.V1',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Spanner Dialect',
                releaseDate: '2017-01-01',
                description: 'Spanner Dialect for Hibernate',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Spanner SQLAlchemy Dialect',
                releaseDate: '2017-01-01',
                description: 'SQLAlchemy dialect for Spanner',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma Spanner Adapter',
                releaseDate: '2019-01-01',
                description: 'Spanner adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Spanner Driver',
                releaseDate: '2017-01-01',
                description: 'Spanner driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Spanner Dialect',
                releaseDate: '2017-01-01',
                description: 'Spanner dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Spanner Provider',
                releaseDate: '2017-01-01',
                description: 'Spanner provider for Entity Framework Core',
                repository: 'https://github.com/googleapis/google-cloud-dotnet/tree/main/apis/Google.Cloud.Spanner.V1',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel Spanner Driver',
                releaseDate: '2017-01-01',
                description: 'Spanner driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx Spanner Driver',
                releaseDate: '2019-01-01',
                description: 'Spanner driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ Spanner Support',
                releaseDate: '2017-01-01',
                description: 'Spanner support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Spanner Support',
                releaseDate: '2017-01-01',
                description: 'Spanner support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Spanner Support',
                releaseDate: '2017-01-01',
                description: 'Spanner support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose Spanner Driver',
                releaseDate: '2017-01-01',
                description: 'Spanner driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Spanner Dialect',
                releaseDate: '2017-01-01',
                description: 'Spanner dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Spanner Migrations',
                releaseDate: '2017-01-01',
                description: 'Migration system for TypeORM with Spanner',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma Spanner Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with Spanner',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel Spanner Migrations',
                releaseDate: '2017-01-01',
                description: 'Migration system for Diesel with Spanner',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate Spanner Driver',
                releaseDate: '2017-01-01',
                description: 'Spanner driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js Spanner Driver',
                releaseDate: '2017-01-01',
                description: 'Spanner driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Spanner Support',
                releaseDate: '2017-01-01',
                description: 'Spanner support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Spanner Support',
                releaseDate: '2017-01-01',
                description: 'Spanner support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Spanner-specific frameworks
        {
            id: 'spanner-cli',
            name: 'Spanner CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2017-01-01',
            description: 'Command-line interface for Spanner database',
            authors: ['Google'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'spanner-console',
            name: 'Spanner Console',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-01-01',
            description: 'Web-based administration interface for Spanner',
            authors: ['Google'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Spanner Spark Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Spark connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Spanner Flink Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Flink connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'Spanner Airflow Provider',
                releaseDate: '2017-01-01',
                description: 'Apache Airflow provider for Spanner',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'Spanner NiFi Processor',
                releaseDate: '2017-01-01',
                description: 'Apache NiFi processor for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Spanner Kafka Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Kafka connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'Spanner Beam IO',
                releaseDate: '2017-01-01',
                description: 'Apache Beam IO for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'Spanner dbt Adapter',
                releaseDate: '2017-01-01',
                description: 'Spanner adapter for dbt',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'Spanner Fivetran Connector',
                releaseDate: '2017-01-01',
                description: 'Fivetran connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'Spanner Stitch Connector',
                releaseDate: '2017-01-01',
                description: 'Stitch connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'Spanner Talend Component',
                releaseDate: '2017-01-01',
                description: 'Talend component for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Spanner Grafana Plugin',
                releaseDate: '2017-01-01',
                description: 'Grafana data source plugin for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Spanner Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Spanner',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Spanner Tableau Connector',
                releaseDate: '2017-01-01',
                description: 'Tableau connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'Spanner Power BI Connector',
                releaseDate: '2017-01-01',
                description: 'Power BI connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'Spanner Looker Connector',
                releaseDate: '2017-01-01',
                description: 'Looker connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'Spanner Metabase Driver',
                releaseDate: '2017-01-01',
                description: 'Metabase driver for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'Spanner Redash Query Runner',
                releaseDate: '2017-01-01',
                description: 'Redash query runner for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'Spanner Mode Connector',
                releaseDate: '2017-01-01',
                description: 'Mode connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'Spanner Sisense Connector',
                releaseDate: '2017-01-01',
                description: 'Sisense connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Spanner Qlik Connector',
                releaseDate: '2017-01-01',
                description: 'Qlik connector for Spanner',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Spanner LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Spanner LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Spanner ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Spanner Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Spanner Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Spanner Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Spanner Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Spanner Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for Spanner',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Spanner VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Spanner Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for Spanner vector operations',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default spannerData; 