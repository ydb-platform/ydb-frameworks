import { TimelineData } from './types';
import { common } from './common';

const cosmosdbData: TimelineData = {
    database: 'cosmosdb',
    displayName: 'Azure Cosmos DB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Cosmos DB JDBC Driver',
                releaseDate: '2017-05-10',
                description: 'Cosmos DB implementation of JDBC',
                repository: 'https://github.com/Azure/azure-cosmosdb-java',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Cosmos DB Go SDK',
                releaseDate: '2017-05-10',
                description: 'Cosmos DB implementation of database/sql',
                repository: 'https://github.com/Azure/azure-cosmosdb-go',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'azure-cosmos',
                releaseDate: '2017-05-10',
                description: 'Cosmos DB implementation of DB-API',
                repository: 'https://github.com/Azure/azure-cosmos-python',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Cosmos DB Driver',
                releaseDate: '2019-01-01',
                description: 'Cosmos DB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/cosmosdb',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM Cosmos DB',
                releaseDate: '2018-01-01',
                description: 'Cosmos DB implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Cosmos DB SQLAlchemy Dialect',
                releaseDate: '2018-01-01',
                description: 'SQLAlchemy dialect for Cosmos DB',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Cosmos DB Support',
                releaseDate: '2020-01-01',
                description: 'Cosmos DB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-cosmosdb',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Cosmos DB Support',
                releaseDate: '2021-01-01',
                description: 'Cosmos DB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-cosmosdb',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Cosmos DB Support',
                releaseDate: '2018-01-01',
                description: 'Cosmos DB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Cosmos DB Support',
                releaseDate: '2018-01-01',
                description: 'Cosmos DB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Cosmos DB-specific frameworks
        {
            id: 'cosmosdb-explorer',
            name: 'Cosmos DB Data Explorer',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-05-10',
            description: 'Web-based administration interface for Cosmos DB',
            authors: ['Microsoft'],
            implementation: {
                releaseDate: '2017-05-10',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'cosmosdb-emulator',
            name: 'Cosmos DB Emulator',
            category: 'Admin',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Local emulator for Cosmos DB development and testing',
            authors: ['Microsoft'],
            implementation: {
                releaseDate: '2017-05-10',
                authors: ['Microsoft'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Cosmos DB Spark Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Spark connector for Cosmos DB',
                repository: 'https://github.com/Azure/azure-cosmosdb-spark',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Cosmos DB Flink Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Flink connector for Cosmos DB',
                repository: 'https://github.com/Azure/azure-cosmosdb-flink',
                authors: ['Microsoft'],
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
                name: 'Grafana Cosmos DB Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for Cosmos DB',
                repository: 'https://github.com/grafana/grafana-cosmosdb-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Cosmos DB Superset Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Superset support for Cosmos DB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default cosmosdbData; 