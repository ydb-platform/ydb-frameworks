import { TimelineData } from './types';
import { common } from './common';

const tarantoolData: TimelineData = {
    database: 'tarantool',
    displayName: 'Tarantool',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Tarantool JDBC Driver',
                releaseDate: '2018-01-01',
                description: 'Tarantool implementation of JDBC',
                repository: 'https://github.com/tarantool/tarantool-jdbc',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Tarantool Go Driver',
                releaseDate: '2018-01-01',
                description: 'Tarantool implementation of database/sql',
                repository: 'https://github.com/tarantool/go-tarantool',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'tarantool-driver',
                releaseDate: '2018-01-01',
                description: 'Tarantool implementation of DB-API',
                repository: 'https://github.com/tarantool/tarantool-python',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Tarantool Driver',
                releaseDate: '2018-01-01',
                description: 'Tarantool driver implementation of GORM',
                repository: 'https://github.com/tarantool/go-tarantool',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM Tarantool',
                releaseDate: '2018-01-01',
                description: 'Tarantool implementation of Hibernate OGM',
                repository: 'https://github.com/tarantool/tarantool-jdbc',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Tarantool SQLAlchemy Dialect',
                releaseDate: '2018-01-01',
                description: 'SQLAlchemy dialect for Tarantool',
                repository: 'https://github.com/tarantool/tarantool-python',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Tarantool Driver',
                releaseDate: '2018-01-01',
                description: 'Tarantool driver for TypeORM',
                repository: 'https://github.com/tarantool/tarantool-jdbc',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Tarantool Dialect',
                releaseDate: '2018-01-01',
                description: 'Tarantool dialect for Sequelize',
                repository: 'https://github.com/tarantool/tarantool-jdbc',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Tarantool Support',
                releaseDate: '2018-01-01',
                description: 'Tarantool support for Flyway',
                repository: 'https://github.com/tarantool/tarantool-jdbc',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Tarantool Support',
                releaseDate: '2018-01-01',
                description: 'Tarantool support for Liquibase',
                repository: 'https://github.com/tarantool/tarantool-jdbc',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose Tarantool Driver',
                releaseDate: '2018-01-01',
                description: 'Tarantool driver for goose migrations',
                repository: 'https://github.com/tarantool/go-tarantool',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic Tarantool Dialect',
                releaseDate: '2018-01-01',
                description: 'Tarantool dialect for Alembic',
                repository: 'https://github.com/tarantool/tarantool-python',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Tarantool Support',
                releaseDate: '2018-01-01',
                description: 'Tarantool support for DBeaver',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Tarantool Support',
                releaseDate: '2018-01-01',
                description: 'Tarantool support for DataGrip',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Tarantool-specific frameworks
        {
            id: 'tarantool-cli',
            name: 'Tarantool CLI',
            category: 'Admin',
            language: 'Lua',
            releaseDate: '2018-01-01',
            description: 'Command-line interface for Tarantool',
            authors: ['Tarantool'],
            implementation: {
                releaseDate: '2018-01-01',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'tarantool-webui',
            name: 'Tarantool WebUI',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2018-01-01',
            description: 'Web-based administration interface for Tarantool',
            authors: ['Tarantool'],
            implementation: {
                releaseDate: '2018-01-01',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Tarantool Spark Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Spark connector for Tarantool',
                repository: 'https://github.com/tarantool/tarantool-spark-connector',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Tarantool Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for Tarantool',
                repository: 'https://github.com/tarantool/tarantool-flink-connector',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'Tarantool Airflow Provider',
                releaseDate: '2018-01-01',
                description: 'Apache Airflow provider for Tarantool',
                repository: 'https://github.com/tarantool/tarantool-airflow-provider',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Tarantool Kafka Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Kafka connector for Tarantool',
                repository: 'https://github.com/tarantool/tarantool-kafka-connector',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Tarantool Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for Tarantool',
                repository: 'https://github.com/tarantool/tarantool-grafana-datasource',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Tarantool Tableau Connector',
                releaseDate: '2018-01-01',
                description: 'Tableau connector for Tarantool',
                repository: 'https://github.com/tarantool/tarantool-tableau-connector',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Tarantool Qlik Connector',
                releaseDate: '2023-01-01',
                description: 'Qlik connector for Tarantool',
                repository: 'https://github.com/qlik-oss/qlik-connector-tarantool',
                authors: ['Qlik'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Tarantool LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for Tarantool vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/tarantool',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Tarantool LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for Tarantool vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/tarantool',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Tarantool ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for Tarantool vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/tarantool',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Tarantool Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for Tarantool vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/tarantool',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Tarantool Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for Tarantool vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/tarantool',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Tarantool Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for Tarantool vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/tarantool',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Tarantool Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for Tarantool vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/tarantool',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Tarantool Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for Tarantool',
                repository: 'https://github.com/tarantool/tarantool/tree/master/src/box/vector',
                authors: ['Tarantool'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Tarantool VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for Tarantool vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/tarantool',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Tarantool Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for Tarantool vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/tarantool',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default tarantoolData; 