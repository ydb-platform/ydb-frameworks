import { TimelineData } from './types';
import { common } from './common';

const dynamodbData: TimelineData = {
    database: 'dynamodb',
    displayName: 'Amazon DynamoDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'DynamoDB JDBC Driver',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of JDBC',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for DynamoDB',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of database/sql',
                repository: 'https://github.com/aws/aws-sdk-go',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'boto3',
                releaseDate: '2014-11-01',
                description: 'DynamoDB implementation of DB-API',
                repository: 'https://github.com/boto/boto3',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'AWSSDK.DynamoDBv2',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of ADO.NET',
                repository: 'https://github.com/aws/aws-sdk-net',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for DynamoDB',
                releaseDate: '2013-01-01',
                description: 'DynamoDB driver implementation of GORM',
                repository: 'https://github.com/guregu/dynamo',
                authors: ['guregu'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper DynamoDB',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate DynamoDB Dialect',
                releaseDate: '2012-01-01',
                description: 'DynamoDB Dialect for Hibernate',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'DynamoDB SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma DynamoDB Adapter',
                releaseDate: '2019-01-01',
                description: 'DynamoDB adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM DynamoDB Driver',
                releaseDate: '2016-01-01',
                description: 'DynamoDB driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize DynamoDB Dialect',
                releaseDate: '2012-01-01',
                description: 'DynamoDB dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core DynamoDB Provider',
                releaseDate: '2016-06-27',
                description: 'DynamoDB provider for Entity Framework Core',
                repository: 'https://github.com/aws/aws-sdk-net',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel DynamoDB Driver',
                releaseDate: '2015-01-01',
                description: 'DynamoDB driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx DynamoDB Driver',
                releaseDate: '2019-01-01',
                description: 'DynamoDB driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ DynamoDB Support',
                releaseDate: '2012-01-01',
                description: 'DynamoDB support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway DynamoDB Support',
                releaseDate: '2012-01-01',
                description: 'DynamoDB support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase DynamoDB Support',
                releaseDate: '2012-01-01',
                description: 'DynamoDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose DynamoDB Driver',
                releaseDate: '2013-05-01',
                description: 'DynamoDB driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic DynamoDB Dialect',
                releaseDate: '2012-01-01',
                description: 'DynamoDB dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM DynamoDB Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with DynamoDB',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma DynamoDB Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with DynamoDB',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel DynamoDB Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with DynamoDB',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate DynamoDB Driver',
                releaseDate: '2013-01-01',
                description: 'DynamoDB driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js DynamoDB Driver',
                releaseDate: '2012-01-01',
                description: 'DynamoDB driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver DynamoDB Support',
                releaseDate: '2012-01-01',
                description: 'DynamoDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip DynamoDB Support',
                releaseDate: '2015-12-01',
                description: 'DynamoDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // DynamoDB-specific frameworks
        {
            id: 'dynamodb-local',
            name: 'DynamoDB Local',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2012-01-01',
            description: 'Local version of DynamoDB for development',
            authors: ['Amazon'],
            implementation: {
                releaseDate: '2012-01-01',
                authors: ['Amazon'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'DynamoDB Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'DynamoDB Flink Connector',
                releaseDate: '2012-01-01',
                description: 'Apache Flink connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'DynamoDB Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'DynamoDB NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'DynamoDB Kafka Connector',
                releaseDate: '2012-01-01',
                description: 'Apache Kafka connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'DynamoDB Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'DynamoDB dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'DynamoDB adapter for dbt',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'DynamoDB Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'DynamoDB Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'DynamoDB Talend Component',
                releaseDate: '2012-01-01',
                description: 'Talend component for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'DynamoDB Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'DynamoDB Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'DynamoDB Tableau Connector',
                releaseDate: '2012-01-01',
                description: 'Tableau connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'DynamoDB Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-net',
                authors: ['Amazon'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'DynamoDB Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'DynamoDB Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'DynamoDB Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'DynamoDB Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'DynamoDB Sisense Connector',
                releaseDate: '2012-01-01',
                description: 'Sisense connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'DynamoDB Qlik Connector',
                releaseDate: '2013-01-01',
                description: 'Qlik connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'DynamoDB LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'DynamoDB LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'DynamoDB ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'DynamoDB Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'DynamoDB Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'DynamoDB Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'DynamoDB Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'DynamoDB Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'DynamoDB VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'DynamoDB Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for DynamoDB vector operations',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default dynamodbData; 