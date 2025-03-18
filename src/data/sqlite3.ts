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
                name: 'SQLite3 JDBC Driver',
                releaseDate: '2000-01-01',
                description: 'Official SQLite3 JDBC driver',
                repository: 'https://github.com/xerial/sqlite-jdbc',
                authors: ['Taro L. Saito'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for SQLite3',
                releaseDate: '2011-01-01',
                description: 'SQLite3 implementation of database/sql',
                repository: 'https://github.com/mattn/go-sqlite3',
                authors: ['Yasuhiro Matsumoto'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for SQLite3',
                releaseDate: '2000-01-01',
                description: 'SQLite3 implementation of DB-API',
                repository: 'https://github.com/python/cpython/tree/main/Modules/_sqlite',
                authors: ['Python Software Foundation'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for SQLite3',
                releaseDate: '2005-01-01',
                description: 'SQLite3 implementation of ADO.NET',
                repository: 'https://github.com/System.Data.SQLite/System.Data.SQLite',
                authors: ['Robert Simpson'],
                contributorsType: ['open-source'],
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for SQLite3',
                releaseDate: '2013-01-01',
                description: 'SQLite3 driver implementation of GORM',
                repository: 'https://github.com/go-gorm/sqlite',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate SQLite3 Dialect',
                releaseDate: '2000-01-01',
                description: 'SQLite3 Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'SQLite3 SQLAlchemy Dialect',
                releaseDate: '2006-01-01',
                description: 'SQLAlchemy dialect for SQLite3',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM SQLite3 Driver',
                releaseDate: '2016-01-01',
                description: 'SQLite3 driver for TypeORM',
                repository: 'https://github.com/typeorm/typeorm',
                authors: ['TypeORM'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize SQLite3 Dialect',
                releaseDate: '2010-01-01',
                description: 'SQLite3 dialect for Sequelize',
                repository: 'https://github.com/sequelize/sequelize',
                authors: ['Sequelize'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway SQLite3 Support',
                releaseDate: '2010-01-01',
                description: 'SQLite3 support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-sqlite',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase SQLite3 Support',
                releaseDate: '2006-01-01',
                description: 'SQLite3 support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-sqlite',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver SQLite3 Support',
                releaseDate: '2000-01-01',
                description: 'SQLite3 support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip SQLite3 Support',
                releaseDate: '2015-01-01',
                description: 'SQLite3 support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // SQLite3-specific frameworks
        {
            id: 'sqlite3-cli',
            name: 'SQLite3 CLI',
            category: 'Admin',
            language: 'C',
            releaseDate: '2000-01-01',
            description: 'Command-line interface for SQLite3 database',
            authors: ['D. Richard Hipp'],
            implementation: {
                releaseDate: '2000-01-01',
                authors: ['D. Richard Hipp'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'sqlite3-browser',
            name: 'SQLite3 Browser',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2000-01-01',
            description: 'Web-based administration interface for SQLite3',
            authors: ['SQLite3'],
            implementation: {
                name: 'SQLite3 Browser',
                releaseDate: '2000-01-01',
                description: 'Web-based administration interface for SQLite3',
                authors: ['SQLite3'],
                contributorsType: ['open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'SQLite3 Spark Connector',
                releaseDate: '2014-01-01',
                description: 'Apache Spark connector for SQLite3',
                repository: 'https://github.com/apache/spark/tree/master/external/sqlite',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'SQLite3 Flink Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Flink connector for SQLite3',
                repository: 'https://github.com/apache/flink/tree/master/flink-connectors/flink-sqlite',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'SQLite3 Airflow Provider',
                releaseDate: '2015-01-01',
                description: 'Apache Airflow provider for SQLite3',
                repository: 'https://github.com/apache/airflow/tree/master/providers/sqlite',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'SQLite3 Kafka Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Kafka connector for SQLite3',
                repository: 'https://github.com/apache/kafka/tree/master/connect/sqlite',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana SQLite3 Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for SQLite3',
                repository: 'https://github.com/grafana/grafana/tree/main/public/app/plugins/datasource/sqlite',
                authors: ['Grafana'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'SQLite3 Tableau Connector',
                releaseDate: '2000-01-01',
                description: 'Tableau connector for SQLite3',
                repository: 'https://github.com/tableau/connector-plugin-sdk/tree/master/samples/plugins/sqlite',
                authors: ['Tableau'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'SQLite3 Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for SQLite3',
                repository: 'https://github.com/microsoft/PowerBI-Icons/tree/master/SQLite',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'SQLite3 Qlik Connector',
                releaseDate: '2010-01-01',
                description: 'Qlik connector for SQLite3',
                repository: 'https://github.com/qlik-oss/qlik-connector-sqlite',
                authors: ['Qlik'],
                contributorsType: ['staff']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'SQLite3 LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for SQLite3 vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/sqlite',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'SQLite3 LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for SQLite3 vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/sqlite',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'SQLite3 ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for SQLite3 vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/sqlite',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'SQLite3 Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for SQLite3 vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/sqlite',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'SQLite3 Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for SQLite3 vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/sqlite',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'SQLite3 Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for SQLite3 vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/sqlite',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'SQLite3 Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for SQLite3 vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/sqlite',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'SQLite3 Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for SQLite3',
                repository: 'https://github.com/sqlite3/sqlite3/tree/master/contrib/vector',
                authors: ['SQLite3'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'SQLite3 VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for SQLite3 vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/sqlite',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'SQLite3 Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for SQLite3 vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/sqlite',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default sqlite3Data; 