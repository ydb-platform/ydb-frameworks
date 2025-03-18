import { TimelineData } from './types';
import { common } from './common';

const greenplumData: TimelineData = {
    database: 'greenplum',
    displayName: 'Greenplum',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Greenplum JDBC Driver',
                releaseDate: '2005-01-01',
                description: 'Greenplum implementation of JDBC',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for Greenplum',
                releaseDate: '2011-03-01',
                description: 'Greenplum implementation of database/sql',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'psycopg2',
                releaseDate: '2001-01-01',
                description: 'Greenplum implementation of DB-API',
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
                description: 'Greenplum implementation of ADO.NET',
                repository: 'https://github.com/npgsql/npgsql',
                authors: ['Shay Rojansky'],
                contributorsType: ['open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for Greenplum',
                releaseDate: '2011-03-01',
                description: 'Greenplum driver implementation of GORM',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper Greenplum',
                releaseDate: '2011-01-01',
                description: 'Greenplum implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Greenplum Dialect',
                releaseDate: '2005-01-01',
                description: 'Greenplum Dialect for Hibernate',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Greenplum SQLAlchemy Dialect',
                releaseDate: '2005-01-01',
                description: 'SQLAlchemy dialect for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma Greenplum Adapter',
                releaseDate: '2019-01-01',
                description: 'Greenplum adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Greenplum Driver',
                releaseDate: '2016-01-01',
                description: 'Greenplum driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Greenplum Dialect',
                releaseDate: '2011-01-01',
                description: 'Greenplum dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core Greenplum Provider',
                releaseDate: '2016-06-27',
                description: 'Greenplum provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel Greenplum Driver',
                releaseDate: '2015-01-01',
                description: 'Greenplum driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx Greenplum Driver',
                releaseDate: '2019-01-01',
                description: 'Greenplum driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ Greenplum Support',
                releaseDate: '2009-01-01',
                description: 'Greenplum support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Greenplum Support',
                releaseDate: '2010-01-01',
                description: 'Greenplum support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Greenplum Support',
                releaseDate: '2010-01-01',
                description: 'Greenplum support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose Greenplum Driver',
                releaseDate: '2013-05-01',
                description: 'Greenplum driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Greenplum Dialect',
                releaseDate: '2011-01-01',
                description: 'Greenplum dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM Greenplum Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with Greenplum',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma Greenplum Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with Greenplum',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel Greenplum Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with Greenplum',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate Greenplum Driver',
                releaseDate: '2013-01-01',
                description: 'Greenplum driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js Greenplum Driver',
                releaseDate: '2012-01-01',
                description: 'Greenplum driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Greenplum Support',
                releaseDate: '2010-01-01',
                description: 'Greenplum support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Greenplum Support',
                releaseDate: '2015-12-01',
                description: 'Greenplum support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Greenplum-specific frameworks
        {
            id: 'gpadmin',
            name: 'GPAdmin',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2005-01-01',
            description: 'Web-based Greenplum administration interface',
            authors: ['Greenplum'],
            implementation: {
                releaseDate: '2005-01-01',
                authors: ['Greenplum'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Greenplum Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Greenplum Flink Connector',
                releaseDate: '2014-12-11',
                description: 'Apache Flink connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'Greenplum Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'Greenplum NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Greenplum Kafka Connector',
                releaseDate: '2014-01-01',
                description: 'Apache Kafka connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'Greenplum Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'Greenplum dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'Greenplum adapter for dbt',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'Greenplum Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'Greenplum Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'Greenplum Talend Component',
                releaseDate: '2010-01-01',
                description: 'Talend component for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Greenplum Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Greenplum Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Greenplum Tableau Connector',
                releaseDate: '2010-01-01',
                description: 'Tableau connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'Greenplum Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'Greenplum Looker Connector',
                releaseDate: '2010-01-01',
                description: 'Looker connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'Greenplum Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'Greenplum Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'Greenplum Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'Greenplum Sisense Connector',
                releaseDate: '2010-01-01',
                description: 'Sisense connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Greenplum Qlik Connector',
                releaseDate: '2013-01-01',
                description: 'Qlik connector for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Greenplum LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Greenplum LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Greenplum ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Greenplum Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Greenplum Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Greenplum Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Greenplum Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Greenplum Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for Greenplum',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Greenplum VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Greenplum Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for Greenplum vector operations',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default greenplumData; 