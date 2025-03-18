// src/data/mysql.ts
import { TimelineData } from './types';
import { common } from './common';

const mysqlData: TimelineData = {
    database: 'mysql',
    displayName: 'MySQL',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'MySQL JDBC Driver',
                releaseDate: '1997-01-01',
                description: 'Official MySQL JDBC driver',
                repository: 'https://github.com/mysql/mysql-connector-j',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for MySQL',
                releaseDate: '2011-01-01',
                description: 'MySQL implementation of database/sql',
                repository: 'https://github.com/go-sql-driver/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for MySQL',
                releaseDate: '1994-01-01',
                description: 'MySQL implementation of DB-API',
                repository: 'https://github.com/mysql/mysql-connector-python',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for MySQL',
                releaseDate: '2004-01-01',
                description: 'MySQL implementation of ADO.NET',
                repository: 'https://github.com/mysql/mysql-connector-net',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for MySQL',
                releaseDate: '2013-01-01',
                description: 'MySQL driver implementation of GORM',
                repository: 'https://github.com/go-gorm/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper MySQL',
                releaseDate: '2011-01-01',
                description: 'MySQL implementation of Dapper',
                repository: 'https://github.com/DapperLib/Dapper',
                authors: ['Oracle'],
                contributorsType: ['staff'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate MySQL Dialect',
                releaseDate: '2001-01-01',
                description: 'MySQL Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'MySQL SQLAlchemy Dialect',
                releaseDate: '2006-01-01',
                description: 'SQLAlchemy dialect for MySQL',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma MySQL Adapter',
                releaseDate: '2019-01-01',
                description: 'MySQL adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM MySQL Driver',
                releaseDate: '2016-01-01',
                description: 'MySQL driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize MySQL Dialect',
                releaseDate: '2010-01-01',
                description: 'MySQL dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core MySQL Provider',
                releaseDate: '2016-01-01',
                description: 'MySQL provider for Entity Framework Core',
                repository: 'https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel MySQL Driver',
                releaseDate: '2015-01-01',
                description: 'MySQL driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx MySQL Driver',
                releaseDate: '2019-01-01',
                description: 'MySQL driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ MySQL Support',
                releaseDate: '2009-01-01',
                description: 'MySQL support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway MySQL Dialect',
                releaseDate: '2010-01-01',
                description: 'MySQL Dialect for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase MySQL Dialect',
                releaseDate: '2006-01-01',
                description: 'MySQL Dialect for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose MySQL Driver',
                description: 'MySQL Driver for goose migrations',
                releaseDate: '2013-01-01',
                repository: 'https://github.com/pressly/goose',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic MySQL Dialect',
                releaseDate: '2009-01-01',
                description: 'MySQL dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM MySQL Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with MySQL',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma MySQL Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with MySQL',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel MySQL Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with MySQL',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate MySQL Driver',
                releaseDate: '2013-01-01',
                description: 'MySQL driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js MySQL Driver',
                releaseDate: '2012-01-01',
                description: 'MySQL driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver MySQL Support',
                releaseDate: '2010-01-01',
                description: 'MySQL support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip MySQL Support',
                releaseDate: '2015-01-01',
                description: 'MySQL support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // MySQL-specific frameworks
        {
            id: 'mysql-workbench',
            name: 'MySQL Workbench',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2005-01-01',
            description: 'Visual database design tool for MySQL',
            authors: ['Oracle'],
            repository: 'https://github.com/mysql/mysql-workbench',
            implementation: {
                releaseDate: '2005-01-01',
                description: 'MySQL Workbench is a unified visual tool for database architects, developers, and DBAs',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'mysql-cli',
            name: 'MySQL CLI',
            category: 'Admin',
            language: 'C',
            releaseDate: '1995-01-01',
            description: 'Command-line interface for MySQL database',
            authors: ['Oracle'],
            implementation: {
                releaseDate: '1995-01-01',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'mysql-shell',
            name: 'MySQL Shell',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2016-01-01',
            description: 'Advanced command-line client for MySQL',
            authors: ['Oracle'],
            implementation: {
                name: 'MySQL Shell',
                releaseDate: '2016-01-01',
                description: 'Advanced command-line client for MySQL',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'mysql-router',
            name: 'MySQL Router',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2015-01-01',
            description: 'Lightweight middleware that provides transparent routing between your application and any backend MySQL Server',
            authors: ['Oracle'],
            repository: 'https://github.com/mysql/mysql-router',
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'MySQL Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for MySQL',
                repository: 'https://github.com/apache/spark',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'MySQL Flink Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Flink connector for MySQL',
                repository: 'https://github.com/apache/flink',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'MySQL Airflow Provider',
                releaseDate: '2015-01-01',
                description: 'Apache Airflow provider for MySQL',
                repository: 'https://github.com/apache/airflow',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'MySQL NiFi Processor',
                releaseDate: '2014-01-01',
                description: 'Apache NiFi processor for MySQL',
                repository: 'https://github.com/apache/nifi',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'MySQL Kafka Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Kafka connector for MySQL',
                repository: 'https://github.com/apache/kafka',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'MySQL Beam IO',
                releaseDate: '2016-01-01',
                description: 'Apache Beam IO for MySQL',
                repository: 'https://github.com/apache/beam',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'MySQL dbt Adapter',
                releaseDate: '2016-01-01',
                description: 'dbt adapter for MySQL',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'MySQL Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for MySQL',
                repository: 'https://github.com/fivetran/fivetran',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'MySQL Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for MySQL',
                repository: 'https://github.com/stitchdata/stitch',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'MySQL Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for MySQL',
                repository: 'https://github.com/Talend',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana MySQL Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for MySQL',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'MySQL Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for MySQL over SQLAlchemy',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'MySQL Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for MySQL',
                repository: 'https://github.com/tableau/connector-plugin-sdk',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'MySQL Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for MySQL',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'MySQL Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for MySQL',
                repository: 'https://github.com/looker-open-source',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'MySQL Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for MySQL',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'MySQL Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for MySQL',
                repository: 'https://github.com/getredash/redash',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'MySQL Mode Connector',
                releaseDate: '2015-01-01',
                description: 'Mode connector for MySQL',
                repository: 'https://github.com/modeanalytics',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'MySQL Sisense Connector',
                releaseDate: '2010-01-01',
                description: 'Sisense connector for MySQL',
                repository: 'https://github.com/sisense',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'MySQL Qlik Connector',
                releaseDate: '1993-01-01',
                description: 'Qlik connector for MySQL',
                repository: 'https://github.com/qlik-oss/qlik-connector-mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'MySQL LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for MySQL vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'MySQL LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for MySQL vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'MySQL ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for MySQL vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/master/chroma/backends/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'MySQL Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for MySQL vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/storage/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'MySQL Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for MySQL vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/master/pinecone/vectorstores/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'MySQL Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for MySQL vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'MySQL Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for MySQL vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/qdrant/vector_stores/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'MySQL Vector Extension',
                releaseDate: '2021-01-01',
                description: 'Vector similarity search extension for MySQL',
                repository: 'https://github.com/mysql/mysql-vector',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'MySQL VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for MySQL vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/master/vectordb/backends/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'MySQL Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for MySQL vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/python/semantic_kernel/vector_stores/mysql',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default mysqlData;