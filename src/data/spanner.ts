// src/data/spanner.ts
import { TimelineData } from './types';

const spannerData: TimelineData = {
    database: 'spanner',
    frameworks: [
        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2017-05-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2018-01-01',
            description: 'Go standard database interface',
            authors: ['Go Team']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '2017-08-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG']
        },
        {
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2018-03-01',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft']
        },

        // Драйверы
        {
            id: 'google-cloud-spanner-java',
            name: 'Google Cloud Spanner Java Client',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-02-15',
            description: 'Official Java client library for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'spanner-jdbc',
            name: 'Cloud Spanner JDBC Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-05-01',
            description: 'JDBC driver for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'google-cloud-go-spanner',
            name: 'Google Cloud Go Spanner Client',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2017-03-10',
            description: 'Official Go client library for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'google-cloud-python-spanner',
            name: 'Google Cloud Python Spanner Client',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2017-04-18',
            description: 'Official Python client library for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'google-cloud-nodejs-spanner',
            name: 'Google Cloud Node.js Spanner Client',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2017-05-12',
            description: 'Official Node.js client library for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'google-cloud-dotnet-spanner',
            name: 'Google Cloud .NET Spanner Client',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2017-06-21',
            description: 'Official .NET client library for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'spanner-database-sql',
            name: 'database/sql Driver for Spanner',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2018-01-01',
            description: 'database/sql driver interface for Google Cloud Spanner',
            authors: ['Google']
        },

        // ORM frameworks
        {
            id: 'hibernate-spanner',
            name: 'Hibernate ORM with Spanner Dialect',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2019-02-01',
            description: 'Hibernate ORM support for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'spring-cloud-gcp-data-spanner',
            name: 'Spring Data Spanner',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2018-05-01',
            description: 'Spring Data module for Google Cloud Spanner',
            authors: ['Google', 'Pivotal']
        },
        {
            id: 'gorm-spanner',
            name: 'GORM Spanner Dialect',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2019-06-01',
            description: 'GORM dialect for Google Cloud Spanner',
            authors: ['Google', 'Community']
        },
        {
            id: 'django-spanner',
            name: 'Django Spanner',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2019-11-01',
            description: 'Django ORM backend for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'sqlalchemy-spanner',
            name: 'SQLAlchemy Spanner Dialect',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2020-01-15',
            description: 'SQLAlchemy dialect for Google Cloud Spanner',
            authors: ['Google']
        },

        // Migration tools
        {
            id: 'spanner-migration-tool',
            name: 'Spanner Migration Tool',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2020-07-01',
            description: 'Tool to migrate databases from other database engines to Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'flyway-spanner',
            name: 'Flyway Spanner Support',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2021-03-01',
            description: 'Database migration tool support for Google Cloud Spanner',
            authors: ['Google', 'Redgate']
        },
        {
            id: 'liquibase-spanner',
            name: 'Liquibase Spanner Support',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2021-01-15',
            description: 'Database schema change management for Google Cloud Spanner',
            authors: ['Google', 'Liquibase']
        },

        // Admin tools
        {
            id: 'spanner-console',
            name: 'Google Cloud Console for Spanner',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2017-02-15',
            description: 'Web-based administration console for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'spanner-emulator',
            name: 'Cloud Spanner Emulator',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2019-07-01',
            description: 'Local emulator for Google Cloud Spanner',
            authors: ['Google']
        },
        {
            id: 'spanner-cli',
            name: 'Spanner CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2018-08-01',
            description: 'Command-line tool for Google Cloud Spanner',
            authors: ['Google', 'Community']
        },

        // Query Builder
        {
            id: 'knex-spanner',
            name: 'Knex.js Spanner Dialect',
            category: 'Query Builder',
            language: 'JavaScript',
            releaseDate: '2020-05-01',
            description: 'SQL query builder for Google Cloud Spanner',
            authors: ['Community']
        },

        // Server-side features
        {
            id: 'spanner-query-insights',
            name: 'Query Insights',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2018-06-01',
            description: 'Performance monitoring and insights for Spanner queries',
            authors: ['Google']
        },
        {
            id: 'spanner-transaction-insights',
            name: 'Transaction Insights',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2019-10-01',
            description: 'Visibility into transactions and lock contention',
            authors: ['Google']
        },
        {
            id: 'spanner-graph',
            name: 'Spanner Graph',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2023-08-01',
            description: 'Graph data management and querying in Spanner',
            authors: ['Google']
        },
        {
            id: 'spanner-change-streams',
            name: 'Spanner Change Streams',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2022-02-01',
            description: 'Track changes to Spanner databases in near real-time',
            authors: ['Google']
        },

        // BI инструменты
        {
            id: 'looker',
            name: 'Looker',
            category: 'BI',
            language: 'Java',
            releaseDate: '2012-03-01',
            dbSupportDate: '2018-01-01',
            description: 'Business intelligence platform with Google Cloud Spanner support',
            authors: ['Looker', 'Google']
        },
        {
            id: 'datagrip',
            name: 'DataGrip',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2015-11-01',
            dbSupportDate: '2020-03-01',
            description: 'Database IDE with Google Cloud Spanner support',
            authors: ['JetBrains']
        },
        {
            id: 'dbeaver',
            name: 'DBeaver',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            dbSupportDate: '2021-01-01',
            description: 'Universal database tool with Google Cloud Spanner support',
            authors: ['Serge Rider', 'Community']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'spanner-change-publisher',
            name: 'Spanner Change Publisher',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '2022-02-01',
            description: 'Publishing changes from Spanner Change Streams to Pub/Sub',
            authors: ['Google']
        },
        {
            id: 'spanner-terraform',
            name: 'Terraform Provider for Spanner',
            category: 'Apps with abstract storage',
            language: 'Go',
            releaseDate: '2017-12-01',
            description: 'Infrastructure as code support for Google Cloud Spanner',
            authors: ['HashiCorp', 'Google']
        },

        // Логирование
        {
            id: 'cloud-logging-spanner',
            name: 'Cloud Logging for Spanner',
            category: 'Logging',
            language: 'Java',
            releaseDate: '2017-02-15',
            description: 'Google Cloud Logging integration with Spanner',
            authors: ['Google']
        },

        // Message Broker
        {
            id: 'dataflow-spanner',
            name: 'Cloud Dataflow Spanner I/O',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2017-06-01',
            description: 'Google Cloud Dataflow connectors for Spanner',
            authors: ['Google']
        },
        {
            id: 'datastream-spanner',
            name: 'Datastream for Spanner',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2022-10-01',
            description: 'Serverless change data capture service with Spanner support',
            authors: ['Google']
        }
    ],
    dependencies: [
        // Зависимости драйверов от стандартов
        {
            source: 'spanner-jdbc',
            target: 'jdbc',
            description: 'Spanner JDBC driver implements JDBC API'
        },
        {
            source: 'spanner-database-sql',
            target: 'database-sql',
            description: 'Spanner database/sql driver implements database/sql interface'
        },
        {
            source: 'google-cloud-python-spanner',
            target: 'dbapi',
            description: 'Python Spanner client implements DB-API'
        },
        {
            source: 'google-cloud-dotnet-spanner',
            target: 'adonet',
            description: '.NET Spanner client implements ADO.NET provider pattern'
        },

        // Native clients
        // Native clients
        {
            source: 'google-cloud-spanner-java',
            target: 'spanner-jdbc',
            description: 'Spanner JDBC driver is built on top of the native Java client'
        },
        {
            source: 'google-cloud-go-spanner',
            target: 'spanner-database-sql',
            description: 'Spanner database/sql driver is built on top of the native Go client'
        },

        // ORM зависимости
        {
            source: 'spanner-jdbc',
            target: 'hibernate-spanner',
            description: 'Hibernate Spanner dialect uses JDBC driver'
        },
        {
            source: 'google-cloud-spanner-java',
            target: 'spring-cloud-gcp-data-spanner',
            description: 'Spring Data Spanner uses native Java client'
        },
        {
            source: 'google-cloud-go-spanner',
            target: 'gorm-spanner',
            description: 'GORM Spanner dialect uses Go client'
        },
        {
            source: 'google-cloud-python-spanner',
            target: 'django-spanner',
            description: 'Django Spanner uses Python client'
        },
        {
            source: 'google-cloud-python-spanner',
            target: 'sqlalchemy-spanner',
            description: 'SQLAlchemy Spanner dialect uses Python client'
        },

        // Migration tools
        {
            source: 'google-cloud-go-spanner',
            target: 'spanner-migration-tool',
            description: 'Spanner Migration Tool uses Go client'
        },
        {
            source: 'spanner-jdbc',
            target: 'flyway-spanner',
            description: 'Flyway uses JDBC to migrate Spanner schemas'
        },
        {
            source: 'spanner-jdbc',
            target: 'liquibase-spanner',
            description: 'Liquibase uses JDBC to manage Spanner schema changes'
        },

        // Server-side features
        {
            source: 'spanner-change-streams',
            target: 'spanner-change-publisher',
            description: 'Spanner Change Publisher uses Change Streams'
        },
        {
            source: 'spanner-change-streams',
            target: 'datastream-spanner',
            description: 'Datastream for Spanner uses Change Streams'
        },

        // Admin tools
        {
            source: 'spanner-jdbc',
            target: 'dbeaver',
            description: 'DBeaver uses JDBC to connect to Spanner'
        },
        {
            source: 'spanner-jdbc',
            target: 'datagrip',
            description: 'DataGrip uses JDBC to connect to Spanner'
        },

        // BI tools
        {
            source: 'spanner-jdbc',
            target: 'looker',
            description: 'Looker can use JDBC to connect to Spanner'
        },

        // Query builders
        {
            source: 'google-cloud-nodejs-spanner',
            target: 'knex-spanner',
            description: 'Knex.js Spanner dialect uses Node.js client'
        },

        // Message brokers
        {
            source: 'google-cloud-spanner-java',
            target: 'dataflow-spanner',
            description: 'Cloud Dataflow uses Java client for Spanner I/O'
        },
        {
            source: 'google-cloud-go-spanner',
            target: 'spanner-terraform',
            description: 'Terraform provider uses Go client to manage Spanner resources'
        }
    ]
};

export default spannerData;
