import { TimelineData } from './types';
import { common } from './common';

const bigtableData: TimelineData = {
    database: 'bigtable',
    displayName: 'Google BigTable',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'BigTable JDBC Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of JDBC',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for BigTable',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of database/sql',
                repository: 'https://github.com/googleapis/google-cloud-go/tree/main/bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'google-cloud-bigtable',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of DB-API',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Google.Cloud.Bigtable.V2',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of ADO.NET',
                repository: 'https://github.com/googleapis/google-cloud-dotnet/tree/main/apis/Google.Cloud.Bigtable.V2',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for BigTable',
                releaseDate: '2015-01-01',
                description: 'BigTable driver implementation of GORM',
                repository: 'https://github.com/googleapis/google-cloud-go/tree/main/bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper BigTable',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of Dapper',
                repository: 'https://github.com/googleapis/google-cloud-dotnet/tree/main/apis/Google.Cloud.Bigtable.V2',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate BigTable Dialect',
                releaseDate: '2015-01-01',
                description: 'BigTable Dialect for Hibernate',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'BigTable SQLAlchemy Dialect',
                releaseDate: '2015-01-01',
                description: 'SQLAlchemy dialect for BigTable',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma BigTable Adapter',
                releaseDate: '2019-01-01',
                description: 'BigTable adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM BigTable Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize BigTable Dialect',
                releaseDate: '2015-01-01',
                description: 'BigTable dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core BigTable Provider',
                releaseDate: '2015-01-01',
                description: 'BigTable provider for Entity Framework Core',
                repository: 'https://github.com/googleapis/google-cloud-dotnet/tree/main/apis/Google.Cloud.Bigtable.V2',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel BigTable Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx BigTable Driver',
                releaseDate: '2019-01-01',
                description: 'BigTable driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ BigTable Support',
                releaseDate: '2015-01-01',
                description: 'BigTable support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway BigTable Support',
                releaseDate: '2015-01-01',
                description: 'BigTable support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase BigTable Support',
                releaseDate: '2015-01-01',
                description: 'BigTable support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose BigTable Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic BigTable Dialect',
                releaseDate: '2015-01-01',
                description: 'BigTable dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM BigTable Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for TypeORM with BigTable',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma BigTable Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with BigTable',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel BigTable Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with BigTable',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate BigTable Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js BigTable Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver BigTable Support',
                releaseDate: '2015-01-01',
                description: 'BigTable support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip BigTable Support',
                releaseDate: '2015-01-01',
                description: 'BigTable support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // BigTable-specific frameworks
        {
            id: 'bigtable-cli',
            name: 'BigTable CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2015-01-01',
            description: 'Command-line interface for BigTable database',
            authors: ['Google'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'bigtable-console',
            name: 'BigTable Console',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Web-based administration interface for BigTable',
            authors: ['Google'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'BigTable Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'BigTable Flink Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Flink connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'BigTable Airflow Provider',
                releaseDate: '2015-01-01',
                description: 'Apache Airflow provider for BigTable',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'BigTable NiFi Processor',
                releaseDate: '2015-01-01',
                description: 'Apache NiFi processor for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'BigTable Kafka Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Kafka connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'BigTable Beam IO',
                releaseDate: '2015-01-01',
                description: 'Apache Beam IO for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'BigTable dbt Adapter',
                releaseDate: '2015-01-01',
                description: 'BigTable adapter for dbt',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'BigTable Fivetran Connector',
                releaseDate: '2015-01-01',
                description: 'Fivetran connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'BigTable Stitch Connector',
                releaseDate: '2015-01-01',
                description: 'Stitch connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'BigTable Talend Component',
                releaseDate: '2015-01-01',
                description: 'Talend component for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'BigTable Grafana Plugin',
                releaseDate: '2015-01-01',
                description: 'Grafana data source plugin for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'BigTable Superset Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Superset support for BigTable',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'BigTable Tableau Connector',
                releaseDate: '2015-01-01',
                description: 'Tableau connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'BigTable Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'BigTable Looker Connector',
                releaseDate: '2015-01-01',
                description: 'Looker connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'BigTable Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'BigTable Redash Query Runner',
                releaseDate: '2015-01-01',
                description: 'Redash query runner for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'BigTable Mode Connector',
                releaseDate: '2015-01-01',
                description: 'Mode connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'BigTable Sisense Connector',
                releaseDate: '2015-01-01',
                description: 'Sisense connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'BigTable Qlik Connector',
                releaseDate: '2015-01-01',
                description: 'Qlik connector for BigTable',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'BigTable LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'BigTable LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'BigTable ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'BigTable Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'BigTable Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'BigTable Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'BigTable Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'BigTable Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for BigTable',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'BigTable VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'BigTable Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for BigTable vector operations',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default bigtableData; 