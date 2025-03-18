import { TimelineData } from './types';
import { common } from './common';

const tidbData: TimelineData = {
    database: 'tidb',
    displayName: 'TiDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'TiDB JDBC Driver',
                releaseDate: '2016-01-01',
                description: 'Official TiDB JDBC driver',
                repository: 'https://github.com/pingcap/tidb-jdbc',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for TiDB',
                releaseDate: '2016-01-01',
                description: 'TiDB implementation of database/sql',
                repository: 'https://github.com/pingcap/tidb-go-sdk',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for TiDB',
                releaseDate: '2016-01-01',
                description: 'TiDB implementation of DB-API',
                repository: 'https://github.com/pingcap/tidb-python-sdk',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for TiDB',
                releaseDate: '2016-01-01',
                description: 'TiDB implementation of ADO.NET',
                repository: 'https://github.com/pingcap/tidb-dotnet-sdk',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for TiDB',
                releaseDate: '2016-01-01',
                description: 'TiDB driver implementation of GORM',
                repository: 'https://github.com/pingcap/tidb-go-sdk',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate TiDB Dialect',
                releaseDate: '2016-01-01',
                description: 'TiDB Dialect for Hibernate ORM',
                repository: 'https://github.com/pingcap/tidb-jdbc',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'TiDB SQLAlchemy Dialect',
                releaseDate: '2016-01-01',
                description: 'SQLAlchemy dialect for TiDB',
                repository: 'https://github.com/pingcap/tidb-python-sdk',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM TiDB Driver',
                releaseDate: '2016-01-01',
                description: 'TiDB driver for TypeORM',
                repository: 'https://github.com/pingcap/tidb-typescript-sdk',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize TiDB Dialect',
                releaseDate: '2016-01-01',
                description: 'TiDB dialect for Sequelize',
                repository: 'https://github.com/pingcap/tidb-typescript-sdk',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for Flyway',
                repository: 'https://github.com/pingcap/tidb-jdbc',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for Liquibase',
                repository: 'https://github.com/pingcap/tidb-jdbc',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip TiDB Support',
                releaseDate: '2016-01-01',
                description: 'TiDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // TiDB-specific frameworks
        {
            id: 'tidb-cli',
            name: 'TiDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2016-01-01',
            description: 'Command-line interface for TiDB database',
            authors: ['PingCAP'],
            implementation: {
                releaseDate: '2016-01-01',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'tidb-dashboard',
            name: 'TiDB Dashboard',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2016-01-01',
            description: 'Web-based administration interface for TiDB',
            authors: ['PingCAP'],
            implementation: {
                name: 'TiDB Dashboard',
                releaseDate: '2016-01-01',
                description: 'Web-based administration interface for TiDB',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'TiDB Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-spark-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'TiDB Flink Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Flink connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-flink-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'TiDB Airflow Provider',
                releaseDate: '2016-01-01',
                description: 'Apache Airflow provider for TiDB',
                repository: 'https://github.com/pingcap/tidb-airflow-provider',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'TiDB Kafka Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Kafka connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-kafka-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana TiDB Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for TiDB',
                repository: 'https://github.com/pingcap/tidb-grafana-plugin',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'TiDB Tableau Connector',
                releaseDate: '2016-01-01',
                description: 'Tableau connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-tableau-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'TiDB Power BI Connector',
                releaseDate: '2016-01-01',
                description: 'Power BI connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-powerbi-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'TiDB Qlik Connector',
                releaseDate: '2016-01-01',
                description: 'Qlik connector for TiDB',
                repository: 'https://github.com/pingcap/tidb-qlik-connector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'TiDB LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-langchain',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'TiDB LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-llamaindex',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'TiDB ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-chromadb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'TiDB Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-milvus',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'TiDB Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-pinecone',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'TiDB Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-weaviate',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'TiDB Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-qdrant',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'TiDB Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for TiDB',
                repository: 'https://github.com/pingcap/tidb-vector',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'TiDB VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-vectordb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'TiDB Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for TiDB vector operations',
                repository: 'https://github.com/pingcap/tidb-semantic-kernel',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default tidbData; 