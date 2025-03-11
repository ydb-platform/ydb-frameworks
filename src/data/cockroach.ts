// src/data/cockroach.ts
import { TimelineData } from './types';

const cockroachData: TimelineData = {
    database: 'cockroach',
    frameworks: [
        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2016-05-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '2016-05-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2015-04-01',
            description: 'Go standard database interface',
            authors: ['Go Team']
        },
        {
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2017-02-01',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft']
        },

        // Драйверы - PostgreSQL совместимые
        {
            id: 'cockroach-jdbc',
            name: 'PostgreSQL JDBC Driver for CockroachDB',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2016-05-01',
            description: 'PostgreSQL JDBC driver compatible with CockroachDB',
            authors: ['PostgreSQL Global Development Group', 'Cockroach Labs']
        },
        {
            id: 'cockroach-psycopg2',
            name: 'Psycopg2 for CockroachDB',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2016-05-01',
            description: 'PostgreSQL database adapter for Python compatible with CockroachDB',
            authors: ['Federico Di Gregorio', 'Daniele Varrazzo', 'Cockroach Labs']
        },
        {
            id: 'cockroach-pgx',
            name: 'pgx for CockroachDB',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2015-04-01',
            description: 'PostgreSQL driver for Go compatible with CockroachDB',
            authors: ['Jack Christensen', 'Cockroach Labs']
        },
        {
            id: 'cockroach-npgsql',
            name: 'Npgsql for CockroachDB',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2017-02-01',
            description: 'PostgreSQL data provider for .NET compatible with CockroachDB',
            authors: ['Francisco Figueiredo Jr.', '.NET Foundation', 'Cockroach Labs']
        },
        {
            id: 'cockroach-libpq',
            name: 'libpq for CockroachDB',
            category: 'Driver',
            language: 'C',
            releaseDate: '2016-03-01',
            description: 'C library for PostgreSQL interface compatible with CockroachDB',
            authors: ['PostgreSQL Global Development Group', 'Cockroach Labs']
        },

        // Native drivers
        {
            id: 'cockroach-go-driver',
            name: 'CockroachDB Go Driver',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2015-06-01',
            description: 'Native Go driver for CockroachDB with special features',
            authors: ['Cockroach Labs']
        },
        {
            id: 'cockroach-python-driver',
            name: 'CockroachDB Python Driver',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2016-10-01',
            description: 'Native Python driver for CockroachDB',
            authors: ['Cockroach Labs']
        },
        {
            id: 'cockroach-nodejs-driver',
            name: 'CockroachDB Node.js Driver',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2016-09-01',
            description: 'Native Node.js driver for CockroachDB',
            authors: ['Cockroach Labs']
        },

        // ORM frameworks
        {
            id: 'hibernate-cockroach',
            name: 'Hibernate for CockroachDB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2016-09-01',
            description: 'Hibernate ORM compatible with CockroachDB',
            authors: ['Gavin King', 'Cockroach Labs']
        },
        {
            id: 'sqlalchemy-cockroach',
            name: 'SQLAlchemy for CockroachDB',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2016-08-01',
            description: 'SQLAlchemy dialect for CockroachDB',
            authors: ['Michael Bayer', 'Cockroach Labs']
        },
        {
            id: 'django-cockroach',
            name: 'Django for CockroachDB',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2017-01-01',
            description: 'Django ORM compatible with CockroachDB',
            authors: ['Django Software Foundation', 'Cockroach Labs']
        },
        {
            id: 'gorm-cockroach',
            name: 'GORM for CockroachDB',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2017-02-01',
            description: 'GORM dialect for CockroachDB',
            authors: ['Jinzhu', 'Cockroach Labs']
        },
        {
            id: 'spring-data-cockroach',
            name: 'Spring Data JPA for CockroachDB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2017-05-01',
            description: 'Spring Data JPA compatible with CockroachDB',
            authors: ['Spring Team', 'Cockroach Labs']
        },
        {
            id: 'entity-framework-cockroach',
            name: 'Entity Framework for CockroachDB',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2017-07-01',
            description: 'Entity Framework compatible with CockroachDB',
            authors: ['Microsoft', 'Cockroach Labs']
        },

        // Admin tools
        {
            id: 'cockroach-admin-ui',
            name: 'CockroachDB Admin UI',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2015-02-01',
            description: 'Built-in web-based administration for CockroachDB',
            authors: ['Cockroach Labs']
        },
        {
            id: 'cockroach-cli',
            name: 'CockroachDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2015-02-01',
            description: 'Command-line interface for CockroachDB',
            authors: ['Cockroach Labs']
        },
        {
            id: 'dbeaver-cockroach',
            name: 'DBeaver for CockroachDB',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2016-08-01',
            description: 'Universal database tool with CockroachDB support',
            authors: ['Serge Rider', 'Cockroach Labs']
        },
        {
            id: 'pgadmin-cockroach',
            name: 'pgAdmin for CockroachDB',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2016-10-01',
            description: 'PostgreSQL administration tool compatible with CockroachDB',
            authors: ['pgAdmin Development Team', 'Cockroach Labs']
        },

        // Migration tools
        {
            id: 'flyway-cockroach',
            name: 'Flyway for CockroachDB',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2017-05-01',
            description: 'Database migration tool compatible with CockroachDB',
            authors: ['Axel Fontaine', 'Redgate', 'Cockroach Labs']
        },
        {
            id: 'liquibase-cockroach',
            name: 'Liquibase for CockroachDB',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2017-09-01',
            description: 'Database schema change management compatible with CockroachDB',
            authors: ['Nathan Voxland', 'Cockroach Labs']
        },
        {
            id: 'cockroach-db-import',
            name: 'CockroachDB IMPORT',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2017-10-01',
            description: 'Data import statement for CockroachDB',
            authors: ['Cockroach Labs']
        },

        // Server-side features
        {
            id: 'cockroach-distributed-sql',
            name: 'CockroachDB Distributed SQL',
            category: 'Server-side feature',
            language: 'Go',
            releaseDate: '2015-02-01',
            description: 'Distributed SQL engine for CockroachDB',
            authors: ['Cockroach Labs']
        },
        {
            id: 'cockroach-spatial',
            name: 'CockroachDB Spatial',
            category: 'Server-side feature',
            language: 'Go',
            releaseDate: '2020-06-01',
            description: 'Spatial data type support for CockroachDB',
            authors: ['Cockroach Labs']
        },
        {
            id: 'cockroach-change-data-capture',
            name: 'CockroachDB Changefeeds',
            category: 'Server-side feature',
            language: 'Go',
            releaseDate: '2018-11-01',
            description: 'Change Data Capture for CockroachDB',
            authors: ['Cockroach Labs']
        },
        {
            id: 'cockroach-multiregion',
            name: 'CockroachDB Multi-region',
            category: 'Server-side feature',
            language: 'Go',
            releaseDate: '2021-05-01',
            description: 'Simplified multi-region deployment and data domiciling',
            authors: ['Cockroach Labs']
        },

        // BI инструменты
        {
            id: 'metabase-cockroach',
            name: 'Metabase for CockroachDB',
            category: 'BI',
            language: 'Java',
            releaseDate: '2017-01-01',
            description: 'Open source business intelligence tool with CockroachDB support',
            authors: ['Metabase Team', 'Cockroach Labs']
        },
        {
            id: 'superset-cockroach',
            name: 'Apache Superset for CockroachDB',
            category: 'BI',
            language: 'Python',
            releaseDate: '2017-05-01',
            description: 'Modern data exploration and visualization platform with CockroachDB support',
            authors: ['Apache Software Foundation', 'Cockroach Labs']
        },
        {
            id: 'tableau-cockroach',
            name: 'Tableau for CockroachDB',
            category: 'BI',
            language: 'C++',
            releaseDate: '2018-02-01',
            description: 'Visual analytics platform with CockroachDB support',
            authors: ['Tableau Software', 'Cockroach Labs']
        },

        // Message Broker
        {
            id: 'kafka-connect-cockroach',
            name: 'Kafka Connect for CockroachDB',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2018-10-01',
            description: 'Kafka connector for CockroachDB',
            authors: ['Cockroach Labs', 'Community']
        },
        {
            id: 'debezium-cockroach',
            name: 'Debezium CockroachDB Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2020-06-01',
            description: 'Debezium CDC connector for CockroachDB',
            authors: ['Red Hat', 'Cockroach Labs']
        }
    ],
    dependencies: [
        // PostgreSQL driver dependencies
        {
            source: 'cockroach-jdbc',
            target: 'jdbc',
            description: 'CockroachDB JDBC driver implements JDBC standard'
        },
        {
            source: 'cockroach-psycopg2',
            target: 'dbapi',
            description: 'CockroachDB Python driver implements DB-API specification'
        },
        {
            source: 'cockroach-pgx',
            target: 'database-sql',
            description: 'CockroachDB Go driver implements database/sql interface'
        },
        {
            source: 'cockroach-npgsql',
            target: 'adonet',
            description: 'CockroachDB .NET provider implements ADO.NET interfaces'
        },

        // ORM dependencies
        {
            source: 'cockroach-jdbc',
            target: 'hibernate-cockroach',
            description: 'Hibernate for CockroachDB uses JDBC driver'
        },
        {
            source: 'cockroach-jdbc',
            target: 'spring-data-cockroach',
            description: 'Spring Data JPA for CockroachDB uses JDBC driver'
        },
        {
            source: 'cockroach-psycopg2',
            target: 'sqlalchemy-cockroach',
            description: 'SQLAlchemy for CockroachDB uses Psycopg2'
        },
        {
            source: 'cockroach-psycopg2',
            target: 'django-cockroach',
            description: 'Django for CockroachDB uses Psycopg2'
        },
        {
            source: 'cockroach-pgx',
            target: 'gorm-cockroach',
            description: 'GORM for CockroachDB uses pgx driver'
        },
        {
            source: 'cockroach-npgsql',
            target: 'entity-framework-cockroach',
            description: 'Entity Framework for CockroachDB uses Npgsql'
        },

        // Admin tool dependencies
        {
            source: 'cockroach-jdbc',
            target: 'dbeaver-cockroach',
            description: 'DBeaver uses JDBC to connect to CockroachDB'
        },
        {
            source: 'cockroach-psycopg2',
            target: 'pgadmin-cockroach',
            description: 'pgAdmin uses Psycopg2 to connect to CockroachDB'
        },

        // Migration tool dependencies
        {
            source: 'cockroach-jdbc',
            target: 'flyway-cockroach',
            description: 'Flyway uses JDBC to connect to CockroachDB'
        },
        {
            source: 'cockroach-jdbc',
            target: 'liquibase-cockroach',
            description: 'Liquibase uses JDBC to connect to CockroachDB'
        },

        // BI tool dependencies
        {
            source: 'cockroach-jdbc',
            target: 'metabase-cockroach',
            description: 'Metabase uses JDBC to connect to CockroachDB'
        },
        {
            source: 'cockroach-psycopg2',
            target: 'superset-cockroach',
            description: 'Superset uses Psycopg2 to connect to CockroachDB'
        },
        {
            source: 'cockroach-jdbc',
            target: 'tableau-cockroach',
            description: 'Tableau uses JDBC to connect to CockroachDB'
        },

        // Server-side feature dependencies
        {
            source: 'cockroach-distributed-sql',
            target: 'cockroach-multiregion',
            description: 'Multi-region features are built on the distributed SQL engine'
        },
        {
            source: 'cockroach-distributed-sql',
            target: 'cockroach-spatial',
            description: 'Spatial features are built on the distributed SQL engine'
        },
        {
            source: 'cockroach-change-data-capture',
            target: 'debezium-cockroach',
            description: 'Debezium connector uses CockroachDB Changefeeds'
        },
        {
            source: 'cockroach-change-data-capture',
            target: 'kafka-connect-cockroach',
            description: 'Kafka Connect for CockroachDB can use Changefeeds'
        }
    ]
};

export default cockroachData;
