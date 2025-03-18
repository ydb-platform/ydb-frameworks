import { TimelineData } from './types';
import { common } from './common';

const sqlite3Data: TimelineData = {
    database: 'sqlite3',
    displayName: 'SQLite3',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'SQLite JDBC Driver',
                releaseDate: '2000-01-01',
                description: 'SQLite implementation of JDBC',
                repository: 'https://github.com/xerial/sqlite-jdbc',
                authors: ['Taro L. Saito'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for SQLite',
                releaseDate: '2011-01-01',
                description: 'SQLite implementation of database/sql',
                repository: 'https://github.com/mattn/go-sqlite3',
                authors: ['Yasuhiro Matsumoto'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'sqlite3',
                releaseDate: '2001-01-01',
                description: 'SQLite implementation of DB-API',
                repository: 'https://github.com/python/cpython/tree/main/Modules/_sqlite',
                authors: ['Python'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Microsoft.Data.Sqlite',
                releaseDate: '2016-06-27',
                description: 'SQLite implementation of ADO.NET',
                repository: 'https://github.com/dotnet/efcore/tree/main/src/Microsoft.Data.Sqlite',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for SQLite',
                releaseDate: '2011-01-01',
                description: 'SQLite driver implementation of GORM',
                repository: 'https://github.com/go-gorm/sqlite',
                authors: ['Jinzhu'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper SQLite',
                releaseDate: '2011-01-01',
                description: 'SQLite implementation of Dapper',
                repository: 'https://github.com/DapperLib/Dapper',
                authors: ['Stack Exchange'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate SQLite Dialect',
                releaseDate: '2005-01-01',
                description: 'SQLite Dialect for Hibernate',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'SQLite SQLAlchemy Dialect',
                releaseDate: '2005-01-01',
                description: 'SQLAlchemy dialect for SQLite',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.prisma,
            implementation: {
                name: 'Prisma SQLite Adapter',
                releaseDate: '2019-01-01',
                description: 'SQLite adapter for Prisma',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM SQLite Driver',
                releaseDate: '2016-01-01',
                description: 'SQLite driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize SQLite Dialect',
                releaseDate: '2011-01-01',
                description: 'SQLite dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core SQLite Provider',
                releaseDate: '2016-06-27',
                description: 'SQLite provider for Entity Framework Core',
                repository: 'https://github.com/dotnet/efcore/tree/main/src/Microsoft.EntityFrameworkCore.Sqlite',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.diesel,
            implementation: {
                name: 'Diesel SQLite Driver',
                releaseDate: '2015-01-01',
                description: 'SQLite driver for Diesel',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlx,
            implementation: {
                name: 'SQLx SQLite Driver',
                releaseDate: '2019-01-01',
                description: 'SQLite driver for SQLx',
                repository: 'https://github.com/launchbadge/sqlx',
                authors: ['SQLx'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ SQLite Support',
                releaseDate: '2011-01-01',
                description: 'SQLite support for jOOQ',
                repository: 'https://github.com/jOOQ/jOOQ',
                authors: ['Lukas Eder'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway SQLite Support',
                releaseDate: '2010-01-01',
                description: 'SQLite support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase SQLite Support',
                releaseDate: '2010-01-01',
                description: 'SQLite support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose SQLite Driver',
                releaseDate: '2011-01-01',
                description: 'SQLite driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic SQLite Dialect',
                releaseDate: '2005-01-01',
                description: 'SQLite dialect for Alembic',
                repository: 'https://github.com/sqlalchemy/alembic',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM SQLite Migrations',
                releaseDate: '2016-01-01',
                description: 'Migration system for TypeORM with SQLite',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['prisma-migrate'],
            implementation: {
                name: 'Prisma SQLite Migrations',
                releaseDate: '2019-01-01',
                description: 'Migration system for Prisma with SQLite',
                repository: 'https://github.com/prisma/prisma',
                authors: ['Prisma'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['diesel-migrations'],
            implementation: {
                name: 'Diesel SQLite Migrations',
                releaseDate: '2015-01-01',
                description: 'Migration system for Diesel with SQLite',
                repository: 'https://github.com/diesel-rs/diesel',
                authors: ['Diesel'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['db-migrate'],
            implementation: {
                name: 'db-migrate SQLite Driver',
                releaseDate: '2011-01-01',
                description: 'SQLite driver for db-migrate',
                repository: 'https://github.com/db-migrate/node-db-migrate',
                authors: ['db-migrate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js SQLite Driver',
                releaseDate: '2011-01-01',
                description: 'SQLite driver for Knex.js',
                repository: 'https://github.com/knex/knex',
                authors: ['Knex.js'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver SQLite Support',
                releaseDate: '2010-01-01',
                description: 'SQLite support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip SQLite Support',
                releaseDate: '2015-12-01',
                description: 'SQLite support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // SQLite-specific frameworks
        {
            id: 'sqlite-cli',
            name: 'SQLite CLI',
            category: 'Admin',
            language: 'C',
            releaseDate: '2000-01-01',
            description: 'Command-line interface for SQLite database',
            authors: ['SQLite'],
            implementation: {
                releaseDate: '2000-01-01',
                authors: ['SQLite'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'sqlite-browser',
            name: 'DB Browser for SQLite',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2003-01-01',
            description: 'Visual database browser for SQLite',
            authors: ['DB Browser for SQLite'],
            implementation: {
                releaseDate: '2003-01-01',
                authors: ['DB Browser for SQLite'],
                contributorsType: ['open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'SQLite Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for SQLite',
                repository: 'https://github.com/apache/spark',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'SQLite Flink Connector',
                releaseDate: '2014-12-11',
                description: 'Apache Flink connector for SQLite',
                repository: 'https://github.com/apache/flink',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'SQLite Airflow Provider',
                releaseDate: '2015-06-01',
                description: 'Apache Airflow provider for SQLite',
                repository: 'https://github.com/apache/airflow',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'SQLite NiFi Processor',
                releaseDate: '2014-01-01',
                description: 'Apache NiFi processor for SQLite',
                repository: 'https://github.com/apache/nifi',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'SQLite Kafka Connector',
                releaseDate: '2014-01-01',
                description: 'Apache Kafka connector for SQLite',
                repository: 'https://github.com/apache/kafka',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'SQLite Beam IO',
                releaseDate: '2016-01-01',
                description: 'Apache Beam IO for SQLite',
                repository: 'https://github.com/apache/beam',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'SQLite dbt Adapter',
                releaseDate: '2016-01-01',
                description: 'SQLite adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'SQLite Fivetran Connector',
                releaseDate: '2013-01-01',
                description: 'Fivetran connector for SQLite',
                repository: 'https://github.com/fivetran/fivetran',
                authors: ['Fivetran'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'SQLite Stitch Connector',
                releaseDate: '2016-01-01',
                description: 'Stitch connector for SQLite',
                repository: 'https://github.com/stitchdata/stitch',
                authors: ['Stitch'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'SQLite Talend Component',
                releaseDate: '2005-01-01',
                description: 'Talend component for SQLite',
                repository: 'https://github.com/Talend',
                authors: ['Talend'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'SQLite Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for SQLite',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Grafana'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'SQLite Superset Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Superset support for SQLite',
                repository: 'https://github.com/apache/superset',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'SQLite Tableau Connector',
                releaseDate: '2010-01-01',
                description: 'Tableau connector for SQLite',
                repository: 'https://github.com/tableau/connector-plugin-sdk',
                authors: ['Tableau'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'SQLite Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for SQLite',
                repository: 'https://github.com/microsoft/PowerBI-Icons',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'SQLite Looker Connector',
                releaseDate: '2012-01-01',
                description: 'Looker connector for SQLite',
                repository: 'https://github.com/looker-open-source',
                authors: ['Looker'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'SQLite Metabase Driver',
                releaseDate: '2015-01-01',
                description: 'Metabase driver for SQLite',
                repository: 'https://github.com/metabase/metabase',
                authors: ['Metabase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'SQLite Redash Query Runner',
                releaseDate: '2013-01-01',
                description: 'Redash query runner for SQLite',
                repository: 'https://github.com/getredash/redash',
                authors: ['Redash'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'SQLite Mode Connector',
                releaseDate: '2015-01-01',
                description: 'Mode connector for SQLite',
                repository: 'https://github.com/modeanalytics',
                authors: ['Mode'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'SQLite Sisense Connector',
                releaseDate: '2010-01-01',
                description: 'Sisense connector for SQLite',
                repository: 'https://github.com/sisense',
                authors: ['Sisense'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'SQLite Qlik Connector',
                releaseDate: '2013-01-01',
                description: 'Qlik connector for SQLite',
                repository: 'https://github.com/qlik-oss',
                authors: ['Qlik'],
                contributorsType: ['open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'SQLite LangChain Integration',
                releaseDate: '2023-06-01',
                description: 'LangChain integration for SQLite vector operations',
                repository: 'https://github.com/langchain-ai/langchain',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'SQLite LlamaIndex Integration',
                releaseDate: '2023-06-01',
                description: 'LlamaIndex integration for SQLite vector operations',
                repository: 'https://github.com/run-llama/llama_index',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'SQLite ChromaDB Integration',
                releaseDate: '2023-06-01',
                description: 'ChromaDB integration for SQLite vector operations',
                repository: 'https://github.com/chroma-core/chroma',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'SQLite Milvus Integration',
                releaseDate: '2023-06-01',
                description: 'Milvus integration for SQLite vector operations',
                repository: 'https://github.com/milvus-io/milvus',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'SQLite Pinecone Integration',
                releaseDate: '2023-06-01',
                description: 'Pinecone integration for SQLite vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'SQLite Weaviate Integration',
                releaseDate: '2023-06-01',
                description: 'Weaviate integration for SQLite vector operations',
                repository: 'https://github.com/weaviate/weaviate',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'SQLite Qdrant Integration',
                releaseDate: '2023-06-01',
                description: 'Qdrant integration for SQLite vector operations',
                repository: 'https://github.com/qdrant/qdrant',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'SQLite Vector Extension',
                releaseDate: '2023-06-01',
                description: 'Vector similarity search extension for SQLite',
                repository: 'https://github.com/pgvector/pgvector',
                authors: ['pgvector'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'SQLite VectorDB Integration',
                releaseDate: '2023-06-01',
                description: 'VectorDB integration for SQLite vector operations',
                repository: 'https://github.com/vectordb/vectordb',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'SQLite Semantic Kernel Integration',
                releaseDate: '2023-06-01',
                description: 'Semantic Kernel integration for SQLite vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default sqlite3Data; 