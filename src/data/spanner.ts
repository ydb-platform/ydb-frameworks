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
                name: 'Spanner Go Client',
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

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Spanner Driver',
                releaseDate: '2019-01-01',
                description: 'Spanner driver implementation of GORM',
                repository: 'https://github.com/go-gorm/spanner',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM Spanner',
                releaseDate: '2018-01-01',
                description: 'Spanner implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Spanner SQLAlchemy Dialect',
                releaseDate: '2018-01-01',
                description: 'SQLAlchemy dialect for Spanner',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Spanner Support',
                releaseDate: '2019-01-01',
                description: 'Spanner support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-spanner',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Spanner Support',
                releaseDate: '2020-01-01',
                description: 'Spanner support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-spanner',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Spanner Support',
                releaseDate: '2018-01-01',
                description: 'Spanner support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Spanner Support',
                releaseDate: '2018-01-01',
                description: 'Spanner support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Spanner-specific frameworks
        {
            id: 'spanner-emulator',
            name: 'Spanner Emulator',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2017-01-01',
            description: 'Local emulator for Spanner development and testing',
            authors: ['Google'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'spanner-admin',
            name: 'Spanner Admin',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-01-01',
            description: 'Web-based administration interface for Spanner',
            authors: ['Google'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Spanner Spark Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Spark connector for Spanner',
                repository: 'https://github.com/GoogleCloudPlatform/spark-spanner-connector',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Spanner Flink Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Flink connector for Spanner',
                repository: 'https://github.com/GoogleCloudPlatform/flink-spanner-connector',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Spanner Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for Spanner',
                repository: 'https://github.com/grafana/grafana-spanner-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Spanner Superset Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Superset support for Spanner',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Spanner Qlik Connector',
                releaseDate: '2023-01-01',
                description: 'Qlik connector for Spanner',
                repository: 'https://github.com/qlik-oss/qlik-connector-spanner',
                authors: ['Qlik'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Spanner LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for Spanner vector operations',
                repository: 'https://github.com/langchain-ai/langchain/tree/master/libs/community/vectorstores/spanner',
                authors: ['LangChain'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Spanner LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for Spanner vector operations',
                repository: 'https://github.com/run-llama/llama_index/tree/main/llama_index/vector_stores/spanner',
                authors: ['LlamaIndex'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Spanner ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for Spanner vector operations',
                repository: 'https://github.com/chroma-core/chroma/tree/main/chroma/backends/spanner',
                authors: ['ChromaDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Spanner Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for Spanner vector operations',
                repository: 'https://github.com/milvus-io/milvus/tree/master/contrib/spanner',
                authors: ['Zilliz'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Spanner Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for Spanner vector operations',
                repository: 'https://github.com/pinecone-io/pinecone-client/tree/main/examples/spanner',
                authors: ['Pinecone'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Spanner Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for Spanner vector operations',
                repository: 'https://github.com/weaviate/weaviate/tree/master/adapters/repos/db/spanner',
                authors: ['Weaviate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Spanner Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for Spanner vector operations',
                repository: 'https://github.com/qdrant/qdrant/tree/master/contrib/spanner',
                authors: ['Qdrant'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Spanner Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for Spanner',
                repository: 'https://github.com/googleapis/java-spanner/tree/master/vector',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Spanner VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for Spanner vector operations',
                repository: 'https://github.com/vectordb/vectordb/tree/main/vectordb/backends/spanner',
                authors: ['VectorDB'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Spanner Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for Spanner vector operations',
                repository: 'https://github.com/microsoft/semantic-kernel/tree/main/samples/notebooks/spanner',
                authors: ['Microsoft'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default spannerData; 