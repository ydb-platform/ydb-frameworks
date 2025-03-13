// src/data/cosmosdb.ts
import { TimelineData } from './types';

const cosmosData: TimelineData = {
    database: 'cosmosdb',
    displayName: 'Azure Cosmos DB',
    frameworks: [
        // Драйверы - SQL API
        {
            id: 'cosmosdb-dotnet-sql',
            name: 'Azure Cosmos DB .NET SDK for SQL API',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Official .NET SDK for Azure Cosmos DB SQL API',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-java-sql',
            name: 'Azure Cosmos DB Java SDK for SQL API',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-05-10',
            description: 'Official Java SDK for Azure Cosmos DB SQL API',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-nodejs-sql',
            name: 'Azure Cosmos DB Node.js SDK for SQL API',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2017-05-10',
            description: 'Official Node.js SDK for Azure Cosmos DB SQL API',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-python-sql',
            name: 'Azure Cosmos DB Python SDK for SQL API',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2017-05-10',
            description: 'Official Python SDK for Azure Cosmos DB SQL API',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-go-sql',
            name: 'Azure Cosmos DB Go SDK for SQL API',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2018-01-01',
            description: 'Official Go SDK for Azure Cosmos DB SQL API',
            authors: ['Microsoft']
        },

        // Драйверы - MongoDB API
        {
            id: 'cosmosdb-mongodb',
            name: 'Azure Cosmos DB MongoDB API',
            category: 'Driver',
            language: 'C',
            releaseDate: '2017-05-10',
            description: 'MongoDB protocol support for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-mongodb-nodejs',
            name: 'MongoDB Node.js Driver for Cosmos DB',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2017-05-10',
            description: 'MongoDB Node.js driver compatible with Cosmos DB MongoDB API',
            authors: ['MongoDB Inc.', 'Microsoft']
        },
        {
            id: 'cosmosdb-mongodb-python',
            name: 'PyMongo for Cosmos DB',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2017-05-10',
            description: 'MongoDB Python driver compatible with Cosmos DB MongoDB API',
            authors: ['MongoDB Inc.', 'Microsoft']
        },

        // Драйверы - Cassandra API
        {
            id: 'cosmosdb-cassandra',
            name: 'Azure Cosmos DB Cassandra API',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2018-01-01',
            description: 'Cassandra protocol support for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-cassandra-java',
            name: 'DataStax Java Driver for Cosmos DB',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2018-01-01',
            description: 'Cassandra Java driver compatible with Cosmos DB Cassandra API',
            authors: ['DataStax', 'Microsoft']
        },

        // Драйверы - Gremlin API
        {
            id: 'cosmosdb-gremlin',
            name: 'Azure Cosmos DB Gremlin API',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-09-01',
            description: 'Gremlin graph protocol support for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-gremlin-java',
            name: 'Gremlin Java Client for Cosmos DB',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-09-01',
            description: 'Gremlin Java client compatible with Cosmos DB Gremlin API',
            authors: ['Apache TinkerPop', 'Microsoft']
        },
        {
            id: 'cosmosdb-gremlin-nodejs',
            name: 'Gremlin Node.js Client for Cosmos DB',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2017-09-01',
            description: 'Gremlin Node.js client compatible with Cosmos DB Gremlin API',
            authors: ['Apache TinkerPop', 'Microsoft']
        },

        // Драйверы - Table API
        {
            id: 'cosmosdb-table',
            name: 'Azure Cosmos DB Table API',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Azure Table Storage protocol support for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-table-dotnet',
            name: 'Azure Cosmos DB Table .NET SDK',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Official .NET SDK for Azure Cosmos DB Table API',
            authors: ['Microsoft']
        },

        // ORM frameworks - SQL API
        {
            id: 'entity-framework-cosmosdb',
            name: 'Entity Framework Core for Cosmos DB',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2019-09-23',
            description: 'Entity Framework Core provider for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'azure-spring-data-cosmosdb',
            name: 'Spring Data for Azure Cosmos DB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2018-03-01',
            description: 'Spring Data support for Azure Cosmos DB',
            authors: ['Microsoft', 'Spring Team']
        },
        {
            id: 'typeorm-cosmosdb',
            name: 'TypeORM for Cosmos DB',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2019-01-01',
            description: 'TypeORM support for Azure Cosmos DB',
            authors: ['Community', 'Microsoft']
        },

        // ORM frameworks - MongoDB API
        {
            id: 'mongoose-cosmosdb',
            name: 'Mongoose for Cosmos DB',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2017-05-10',
            description: 'Mongoose ODM compatible with Cosmos DB MongoDB API',
            authors: ['Automattic', 'Microsoft']
        },
        {
            id: 'mongoengine-cosmosdb',
            name: 'MongoEngine for Cosmos DB',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2017-05-10',
            description: 'MongoEngine ODM compatible with Cosmos DB MongoDB API',
            authors: ['MongoEngine Team', 'Microsoft']
        },

        // Admin tools
        {
            id: 'azure-portal-cosmosdb',
            name: 'Azure Portal for Cosmos DB',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-05-10',
            description: 'Web-based management interface for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'azure-cosmosdb-explorer',
            name: 'Azure Cosmos DB Explorer',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-05-10',
            description: 'Data explorer for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'azure-cli-cosmosdb',
            name: 'Azure CLI for Cosmos DB',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2017-05-10',
            description: 'Command-line interface for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'azure-powershell-cosmosdb',
            name: 'Azure PowerShell for Cosmos DB',
            category: 'Admin',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'PowerShell cmdlets for Azure Cosmos DB',
            authors: ['Microsoft']
        },

        // Migration tools
        {
            id: 'cosmos-db-data-migrator',
            name: 'Azure Cosmos DB Data Migrator',
            category: 'Migration',
            language: 'C#',
            releaseDate: '2018-01-01',
            description: 'Utility to migrate data to Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'azure-cosmosdb-datamigrationtool',
            name: 'Azure Cosmos DB Data Migration Tool',
            category: 'Migration',
            language: 'C#',
            releaseDate: '2017-06-01',
            description: 'Tool for importing data into Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-mongodb-migrator',
            name: 'MongoDB to Cosmos DB Migrator',
            category: 'Migration',
            language: 'JavaScript',
            releaseDate: '2017-05-10',
            description: 'Tool for migrating from MongoDB to Cosmos DB MongoDB API',
            authors: ['Microsoft']
        },

        // Server-side features
        {
            id: 'cosmosdb-stored-procedures',
            name: 'Cosmos DB Stored Procedures',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2017-05-10',
            description: 'JavaScript stored procedures in Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-triggers',
            name: 'Cosmos DB Triggers',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2017-05-10',
            description: 'Pre and post triggers for Azure Cosmos DB operations',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-udfs',
            name: 'Cosmos DB User-Defined Functions',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2017-05-10',
            description: 'JavaScript user-defined functions in Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-multi-region',
            name: 'Cosmos DB Multi-region Writes',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2018-12-01',
            description: 'Multi-region write capability in Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-autoscale',
            name: 'Cosmos DB Autoscale',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2020-05-01',
            description: 'Automatic scaling of throughput based on usage',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-analytics',
            name: 'Cosmos DB Analytical Store',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2019-11-01',
            description: 'Column-oriented analytical store for Azure Cosmos DB',
            authors: ['Microsoft']
        },

        // BI инструменты
        {
            id: 'powerbi-cosmosdb',
            name: 'Power BI for Cosmos DB',
            category: 'BI',
            language: 'C#',
            releaseDate: '2018-03-01',
            description: 'Power BI connector for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'tableau-cosmosdb',
            name: 'Tableau for Cosmos DB',
            category: 'BI',
            language: 'Java',
            releaseDate: '2019-01-01',
            description: 'Tableau connector for Azure Cosmos DB',
            authors: ['Tableau Software', 'Microsoft']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'azure-functions-cosmosdb',
            name: 'Azure Functions Cosmos DB Bindings',
            category: 'Apps with abstract storage',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Azure Functions bindings for Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'azure-static-web-apps-cosmosdb',
            name: 'Azure Static Web Apps with Cosmos DB',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2020-05-01',
            description: 'Azure Static Web Apps integration with Cosmos DB',
            authors: ['Microsoft']
        },

        // Логирование
        {
            id: 'azure-monitor-cosmosdb',
            name: 'Azure Monitor for Cosmos DB',
            category: 'Logging',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Monitoring and diagnostic logging for Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'app-insights-cosmosdb',
            name: 'Application Insights for Cosmos DB',
            category: 'Logging',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Application Insights integration with Azure Cosmos DB',
            authors: ['Microsoft']
        },

        // Message Broker
        {
            id: 'azure-eventhubs-cosmosdb',
            name: 'Azure Event Hubs Cosmos DB Connector',
            category: 'Message broker',
            language: 'C#',
            releaseDate: '2018-01-01',
            description: 'Integration between Azure Event Hubs and Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-change-feed',
            name: 'Cosmos DB Change Feed',
            category: 'Message broker',
            language: 'C#',
            releaseDate: '2017-05-10',
            description: 'Change feed capabilities in Azure Cosmos DB',
            authors: ['Microsoft']
        },
        {
            id: 'cosmosdb-kafka-connector',
            name: 'Kafka Connect Cosmos DB Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2019-05-01',
            description: 'Kafka Connect connector for Azure Cosmos DB',
            authors: ['Microsoft']
        }
    ],
    dependencies: [
        // SQL API dependencies
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'entity-framework-cosmosdb',
            description: 'Entity Framework Core provider uses .NET SDK for Cosmos DB'
        },
        {
            source: 'cosmosdb-java-sql',
            target: 'azure-spring-data-cosmosdb',
            description: 'Spring Data for Azure Cosmos DB uses Java SDK'
        },
        {
            source: 'cosmosdb-nodejs-sql',
            target: 'typeorm-cosmosdb',
            description: 'TypeORM for Cosmos DB uses Node.js SDK'
        },

        // MongoDB API dependencies
        {
            source: 'cosmosdb-mongodb',
            target: 'cosmosdb-mongodb-nodejs',
            description: 'MongoDB Node.js driver uses Cosmos DB MongoDB API'
        },
        {
            source: 'cosmosdb-mongodb',
            target: 'cosmosdb-mongodb-python',
            description: 'PyMongo uses Cosmos DB MongoDB API'
        },
        {
            source: 'cosmosdb-mongodb-nodejs',
            target: 'mongoose-cosmosdb',
            description: 'Mongoose uses MongoDB Node.js driver to connect to Cosmos DB'
        },
        {
            source: 'cosmosdb-mongodb-python',
            target: 'mongoengine-cosmosdb',
            description: 'MongoEngine uses PyMongo to connect to Cosmos DB'
        },

        // Cassandra API dependencies
        {
            source: 'cosmosdb-cassandra',
            target: 'cosmosdb-cassandra-java',
            description: 'DataStax Java driver uses Cosmos DB Cassandra API'
        },

        // Gremlin API dependencies
        {
            source: 'cosmosdb-gremlin',
            target: 'cosmosdb-gremlin-java',
            description: 'Gremlin Java client uses Cosmos DB Gremlin API'
        },
        {
            source: 'cosmosdb-gremlin',
            target: 'cosmosdb-gremlin-nodejs',
            description: 'Gremlin Node.js client uses Cosmos DB Gremlin API'
        },

        // Table API dependencies
        {
            source: 'cosmosdb-table',
            target: 'cosmosdb-table-dotnet',
            description: 'Azure Cosmos DB Table .NET SDK uses Table API'
        },

        // Admin tool dependencies
        {
            source: 'azure-portal-cosmosdb',
            target: 'azure-cosmosdb-explorer',
            description: 'Azure Cosmos DB Explorer is integrated with Azure Portal'
        },

        // Migration tool dependencies
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'cosmos-db-data-migrator',
            description: 'Data Migrator uses .NET SDK for Cosmos DB'
        },
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'azure-cosmosdb-datamigrationtool',
            description: 'Data Migration Tool uses .NET SDK for Cosmos DB'
        },
        {
            source: 'cosmosdb-mongodb',
            target: 'cosmosdb-mongodb-migrator',
            description: 'MongoDB Migrator uses Cosmos DB MongoDB API'
        },

        // Server-side feature dependencies
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'cosmosdb-stored-procedures',
            description: 'Stored procedures are managed via SDKs like .NET SDK'
        },
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'cosmosdb-triggers',
            description: 'Triggers are managed via SDKs like .NET SDK'
        },
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'cosmosdb-udfs',
            description: 'UDFs are managed via SDKs like .NET SDK'
        },
        {
            source: 'cosmosdb-multi-region',
            target: 'cosmosdb-analytics',
            description: 'Analytical Store leverages multi-region capabilities'
        },

        // BI tool dependencies
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'powerbi-cosmosdb',
            description: 'Power BI connector uses .NET SDK for Cosmos DB'
        },
        {
            source: 'cosmosdb-java-sql',
            target: 'tableau-cosmosdb',
            description: 'Tableau connector uses Java SDK for Cosmos DB'
        },

        // Application dependencies
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'azure-functions-cosmosdb',
            description: 'Azure Functions bindings use .NET SDK for Cosmos DB'
        },
        {
            source: 'cosmosdb-nodejs-sql',
            target: 'azure-static-web-apps-cosmosdb',
            description: 'Static Web Apps can use Node.js SDK for Cosmos DB'
        },

        // Logging dependencies
        {
            source: 'azure-monitor-cosmosdb',
            target: 'app-insights-cosmosdb',
            description: 'Application Insights uses Azure Monitor for Cosmos DB metrics'
        },

        // Message broker dependencies
        {
            source: 'cosmosdb-change-feed',
            target: 'azure-eventhubs-cosmosdb',
            description: 'Event Hubs connector can use Change Feed for data capture'
        },
        {
            source: 'cosmosdb-change-feed',
            target: 'cosmosdb-kafka-connector',
            description: 'Kafka connector can use Change Feed for data capture'
        },
        {
            source: 'cosmosdb-dotnet-sql',
            target: 'cosmosdb-change-feed',
            description: 'Change Feed is accessed via SDKs like .NET SDK'
        }
    ]
};

export default cosmosData;
