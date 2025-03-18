import { TimelineData } from './types';
import { common } from './common';

const verticaData: TimelineData = {
    database: 'vertica',
    displayName: 'Vertica',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Vertica JDBC Driver',
                releaseDate: '2007-01-01',
                description: 'Official Vertica JDBC driver',
                repository: 'https://github.com/vertica/vertica-jdbc',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for Vertica',
                releaseDate: '2011-01-01',
                description: 'Vertica implementation of database/sql',
                repository: 'https://github.com/vertica/vertica-go-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for Vertica',
                releaseDate: '2010-01-01',
                description: 'Vertica implementation of DB-API',
                repository: 'https://github.com/vertica/vertica-python-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for Vertica',
                releaseDate: '2010-01-01',
                description: 'Vertica implementation of ADO.NET',
                repository: 'https://github.com/vertica/vertica-dotnet-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for Vertica',
                releaseDate: '2013-01-01',
                description: 'Vertica driver implementation of GORM',
                repository: 'https://github.com/vertica/vertica-go-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Vertica Dialect',
                releaseDate: '2010-01-01',
                description: 'Vertica Dialect for Hibernate ORM',
                repository: 'https://github.com/vertica/vertica-java-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Vertica SQLAlchemy Dialect',
                releaseDate: '2010-01-01',
                description: 'SQLAlchemy dialect for Vertica',
                repository: 'https://github.com/vertica/vertica-python-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM Vertica Driver',
                releaseDate: '2016-01-01',
                description: 'Vertica driver for TypeORM',
                repository: 'https://github.com/vertica/vertica-typescript-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize Vertica Dialect',
                releaseDate: '2010-01-01',
                description: 'Vertica dialect for Sequelize',
                repository: 'https://github.com/vertica/vertica-typescript-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Vertica Support',
                releaseDate: '2010-01-01',
                description: 'Vertica support for Flyway',
                repository: 'https://github.com/vertica/vertica-java-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Vertica Support',
                releaseDate: '2010-01-01',
                description: 'Vertica support for Liquibase',
                repository: 'https://github.com/vertica/vertica-java-sdk',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Vertica Support',
                releaseDate: '2010-01-01',
                description: 'Vertica support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Vertica Support',
                releaseDate: '2015-01-01',
                description: 'Vertica support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Vertica-specific frameworks
        {
            id: 'vertica-cli',
            name: 'Vertica CLI',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2007-01-01',
            description: 'Command-line interface for Vertica database',
            authors: ['Vertica'],
            implementation: {
                releaseDate: '2007-01-01',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'vertica-ui',
            name: 'Vertica UI',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2007-01-01',
            description: 'Web-based administration interface for Vertica',
            authors: ['Vertica'],
            implementation: {
                name: 'Vertica UI',
                releaseDate: '2007-01-01',
                description: 'Web-based administration interface for Vertica',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Vertica Spark Connector',
                releaseDate: '2014-01-01',
                description: 'Apache Spark connector for Vertica',
                repository: 'https://github.com/vertica/vertica-spark-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Vertica Flink Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Flink connector for Vertica',
                repository: 'https://github.com/vertica/vertica-flink-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.airflow,
            implementation: {
                name: 'Vertica Airflow Provider',
                releaseDate: '2015-01-01',
                description: 'Apache Airflow provider for Vertica',
                repository: 'https://github.com/vertica/vertica-airflow-provider',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'Vertica Kafka Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Kafka connector for Vertica',
                repository: 'https://github.com/vertica/vertica-kafka-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Vertica Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for Vertica',
                repository: 'https://github.com/vertica/vertica-grafana-plugin',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.tableau,
            implementation: {
                name: 'Vertica Tableau Connector',
                releaseDate: '2007-01-01',
                description: 'Tableau connector for Vertica',
                repository: 'https://github.com/vertica/vertica-tableau-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'Vertica Power BI Connector',
                releaseDate: '2015-01-01',
                description: 'Power BI connector for Vertica',
                repository: 'https://github.com/vertica/vertica-powerbi-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'Vertica Qlik Connector',
                releaseDate: '2010-01-01',
                description: 'Qlik connector for Vertica',
                repository: 'https://github.com/vertica/vertica-qlik-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Vector Store tools
        {
            ...common.langchain,
            implementation: {
                name: 'Vertica LangChain Integration',
                releaseDate: '2023-12-01',
                description: 'LangChain integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-langchain',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.llamaindex,
            implementation: {
                name: 'Vertica LlamaIndex Integration',
                releaseDate: '2023-12-01',
                description: 'LlamaIndex integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-llamaindex',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.chromadb,
            implementation: {
                name: 'Vertica ChromaDB Integration',
                releaseDate: '2023-12-01',
                description: 'ChromaDB integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-chromadb',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.milvus,
            implementation: {
                name: 'Vertica Milvus Integration',
                releaseDate: '2023-12-01',
                description: 'Milvus integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-milvus',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pinecone,
            implementation: {
                name: 'Vertica Pinecone Integration',
                releaseDate: '2023-12-01',
                description: 'Pinecone integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-pinecone',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.weaviate,
            implementation: {
                name: 'Vertica Weaviate Integration',
                releaseDate: '2023-12-01',
                description: 'Weaviate integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-weaviate',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qdrant,
            implementation: {
                name: 'Vertica Qdrant Integration',
                releaseDate: '2023-12-01',
                description: 'Qdrant integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-qdrant',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.pgvector,
            implementation: {
                name: 'Vertica Vector Extension',
                releaseDate: '2023-12-01',
                description: 'Vector similarity search extension for Vertica',
                repository: 'https://github.com/vertica/vertica-vector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['vector-db'],
            implementation: {
                name: 'Vertica VectorDB Integration',
                releaseDate: '2023-12-01',
                description: 'VectorDB integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-vectordb',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['semantic-kernel'],
            implementation: {
                name: 'Vertica Semantic Kernel Integration',
                releaseDate: '2023-12-01',
                description: 'Semantic Kernel integration for Vertica vector operations',
                repository: 'https://github.com/vertica/vertica-semantic-kernel',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default verticaData; 