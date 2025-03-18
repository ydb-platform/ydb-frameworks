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
                name: 'JDBC MySQL',
                releaseDate: '1997-02-19',
                description: 'MySQL implementation of JDBC',
                repository: 'https://github.com/mysql/mysql-connector-j',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for MySQL',
                releaseDate: '2011-03-01',
                description: 'MySQL implementation of database/sql',
                repository: 'https://github.com/go-sql-driver/mysql',
                authors: ['Julien Schmidt'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'mysql-connector-python',
                releaseDate: '2001-01-01',
                description: 'MySQL implementation of DB-API',
                repository: 'https://github.com/mysql/mysql-connector-python',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'MySql.Data',
                releaseDate: '2002-01-01',
                description: 'MySQL implementation of ADO.NET',
                repository: 'https://github.com/mysql/mysql-connector-dotnet',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
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
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper MySQL',
                releaseDate: '2011-01-01',
                description: 'MySQL implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate MySQL Dialect',
                releaseDate: '2001-12-01',
                description: 'MySQL Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Hibernate Team'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'MySQL SQLAlchemy Dialect',
                releaseDate: '2006-02-01',
                description: 'SQLAlchemy dialect for MySQL',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy Team'],
                contributorsType: ['open-source']
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
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize MySQL Dialect',
                releaseDate: '2010-01-01',
                description: 'MySQL dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core MySQL Provider',
                releaseDate: '2016-06-27',
                description: 'MySQL provider for Entity Framework Core',
                repository: 'https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql',
                authors: ['Pomelo Foundation'],
                contributorsType: ['open-source']
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
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway MySQL Support',
                releaseDate: '2010-06-01',
                description: 'MySQL support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase MySQL Support',
                releaseDate: '2006-12-01',
                description: 'MySQL support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose MySQL Driver',
                releaseDate: '2013-05-01',
                description: 'MySQL driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic MySQL Dialect',
                releaseDate: '2011-01-01',
                description: 'MySQL dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM MySQL Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with MySQL',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
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
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver MySQL Support',
                releaseDate: '2010-06-01',
                description: 'MySQL support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip MySQL Support',
                releaseDate: '2015-12-01',
                description: 'MySQL support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // MySQL-specific frameworks
        {
            id: 'mysqlworkbench',
            name: 'MySQL Workbench',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2005-01-01',
            description: 'Unified visual tool for database architects, developers, and DBAs',
            authors: ['Oracle'],
            implementation: {
                releaseDate: '2005-01-01',
                authors: ['Oracle'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'MySQL Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for MySQL',
                repository: 'https://github.com/apache/spark',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'MySQL Flink Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Flink connector for MySQL',
                repository: 'https://github.com/apache/flink',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'MySQL Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for MySQL',
                repository: 'https://github.com/apache/airflow',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'MySQL NiFi Processor',
                releaseDate: '2014-07-01',
                description: 'Apache NiFi processor for MySQL',
                repository: 'https://github.com/apache/nifi',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'MySQL Kafka Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Kafka connector for MySQL',
                repository: 'https://github.com/apache/kafka',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'MySQL Beam IO',
                releaseDate: '2016-06-01',
                description: 'Apache Beam IO for MySQL',
                repository: 'https://github.com/apache/beam',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'MySQL dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'MySQL adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'MySQL Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for MySQL',
                repository: 'https://github.com/fivetran',
                authors: ['Fivetran'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'MySQL Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for MySQL',
                repository: 'https://github.com/stitchdata',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'MySQL Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for MySQL',
                repository: 'https://github.com/Talend',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'MySQL Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for MySQL',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Grafana Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'MySQL Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for MySQL',
                repository: 'https://github.com/apache/superset',
                authors: ['Airbnb', 'Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'MySQL Tableau Connector',
                releaseDate: '2003-01-01',
                description: 'Tableau connector for MySQL',
                repository: 'https://github.com/tableau',
                authors: ['Salesforce'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'MySQL Power BI Connector',
                releaseDate: '2015-07-01',
                description: 'Power BI connector for MySQL',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'MySQL Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for MySQL',
                repository: 'https://github.com/looker',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'MySQL Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for MySQL',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Metabase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'MySQL Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for MySQL',
                repository: 'https://github.com/getredash/redash',
                authors: ['Redash'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'MySQL Mode Connector',
                releaseDate: '2013-01-01',
                description: 'Mode connector for MySQL',
                repository: 'https://github.com/mode',
                authors: ['Mode'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'MySQL Sisense Connector',
                releaseDate: '2004-01-01',
                description: 'Sisense connector for MySQL',
                repository: 'https://github.com/sisense',
                authors: ['Sisense'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'MySQL Qlik Connector',
                releaseDate: '2013-01-01',
                description: 'Qlik connector for MySQL',
                repository: 'https://github.com/qlik-oss/qlik-connector-mysql',
                authors: ['Qlik'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'MySQL LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for MySQL vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/mysql',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'MySQL LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for MySQL vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/mysql',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'MySQL ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for MySQL vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/mysql',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'MySQL Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for MySQL vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/mysql',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'MySQL Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for MySQL vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/mysql',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'MySQL Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for MySQL vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/mysql',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'MySQL Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for MySQL vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/mysql',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'MySQL Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for MySQL',
                repository: 'https://github.com/mysql/mysql-server/tree/master/storage/vector',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'MySQL VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for MySQL vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/mysql',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'MySQL Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for MySQL vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/mysql',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default mysqlData;