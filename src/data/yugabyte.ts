// src/data/yugabyte.ts
import { TimelineData } from './types';

const yugabyteData: TimelineData = {
    database: 'yugabyte',
    frameworks: [
        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2017-11-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '2017-11-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG']
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
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2018-09-01',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft']
        },

        // Драйверы - PostgreSQL совместимые
        {
            id: 'yugabyte-jdbc',
            name: 'PostgreSQL JDBC Driver for YugabyteDB',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-11-01',
            description: 'PostgreSQL JDBC driver compatible with YugabyteDB',
            authors: ['PostgreSQL Global Development Group', 'Yugabyte']
        },
        {
            id: 'yugabyte-psycopg2',
            name: 'Psycopg2 for YugabyteDB',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2017-11-01',
            description: 'PostgreSQL database adapter for Python compatible with YugabyteDB',
            authors: ['Federico Di Gregorio', 'Daniele Varrazzo', 'Yugabyte']
        },
        {
            id: 'yugabyte-pgx',
            name: 'pgx for YugabyteDB',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2018-01-01',
            description: 'PostgreSQL driver for Go compatible with YugabyteDB',
            authors: ['Jack Christensen', 'Yugabyte']
        },
        {
            id: 'yugabyte-npgsql',
            name: 'Npgsql for YugabyteDB',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2018-09-01',
            description: 'PostgreSQL data provider for .NET compatible with YugabyteDB',
            authors: ['Francisco Figueiredo Jr.', '.NET Foundation', 'Yugabyte']
        },

        // Драйверы - Cassandra совместимые
        {
            id: 'yugabyte-cassandra-java-driver',
            name: 'DataStax Java Driver for YugabyteDB',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-12-01',
            description: 'Cassandra driver for Java compatible with YugabyteDB YCQL',
            authors: ['DataStax', 'Yugabyte']
        },
        {
            id: 'yugabyte-cassandra-python-driver',
            name: 'DataStax Python Driver for YugabyteDB',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2018-02-01',
            description: 'Cassandra driver for Python compatible with YugabyteDB YCQL',
            authors: ['DataStax', 'Yugabyte']
        },
        {
            id: 'yugabyte-gocql',
            name: 'gocql for YugabyteDB',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2018-03-01',
            description: 'Cassandra driver for Go compatible with YugabyteDB YCQL',
            authors: ['gocql team', 'Yugabyte']
        },

        // Native drivers
        {
            id: 'yugabyte-nodejs-driver',
            name: 'YugabyteDB Node.js Driver',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2019-05-01',
            description: 'Native Node.js driver for YugabyteDB',
            authors: ['Yugabyte']
        },
        {
            id: 'ysql-shell',
            name: 'YSQL Shell',
            category: 'Driver',
            language: 'C',
            releaseDate: '2018-08-01',
            description: 'Command-line SQL shell for YugabyteDB YSQL',
            authors: ['Yugabyte']
        },
        {
            id: 'ycql-shell',
            name: 'YCQL Shell',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2017-11-01',
            description: 'Command-line CQL shell for YugabyteDB YCQL',
            authors: ['Yugabyte']
        },

        // ORM frameworks - PostgreSQL compatible
        {
            id: 'hibernate-yugabytedb',
            name: 'Hibernate for YugabyteDB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2018-03-01',
            description: 'Hibernate ORM compatible with YugabyteDB',
            authors: ['Gavin King', 'Yugabyte']
        },
        {
            id: 'sqlalchemy-yugabytedb',
            name: 'SQLAlchemy for YugabyteDB',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2018-04-01',
            description: 'SQLAlchemy dialect for YugabyteDB',
            authors: ['Michael Bayer', 'Yugabyte']
        },
        {
            id: 'django-yugabytedb',
            name: 'Django for YugabyteDB',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2018-06-01',
            description: 'Django ORM compatible with YugabyteDB',
            authors: ['Django Software Foundation', 'Yugabyte']
        },
        {
            id: 'gorm-yugabytedb',
            name: 'GORM for YugabyteDB',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2018-08-01',
            description: 'GORM dialect for YugabyteDB',
            authors: ['Jinzhu', 'Yugabyte']
        },
        {
            id: 'spring-data-yugabytedb',
            name: 'Spring Data JPA for YugabyteDB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2018-10-01',
            description: 'Spring Data JPA compatible with YugabyteDB',
            authors: ['Spring Team', 'Yugabyte']
        },
        {
            id: 'entity-framework-yugabytedb',
            name: 'Entity Framework for YugabyteDB',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2019-02-01',
            description: 'Entity Framework compatible with YugabyteDB',
            authors: ['Microsoft', 'Yugabyte']
        },

        // Admin tools
        {
            id: 'yugabyte-admin',
            name: 'Yugabyte Platform',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2018-07-01',
            description: 'Management and monitoring platform for YugabyteDB',
            authors: ['Yugabyte']
        },
        {
            id: 'yugabyte-cli',
            name: 'YugabyteDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2017-11-01',
            description: 'Command-line tool for YugabyteDB administration',
            authors: ['Yugabyte']
        },
        {
            id: 'dbeaver-yugabytedb',
            name: 'DBeaver for YugabyteDB',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2018-05-01',
            description: 'Universal database tool with YugabyteDB support',
            authors: ['Serge Rider', 'Yugabyte']
        },
        {
            id: 'pgadmin-yugabytedb',
            name: 'pgAdmin for YugabyteDB',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2018-06-01',
            description: 'PostgreSQL administration tool compatible with YugabyteDB',
            authors: ['pgAdmin Development Team', 'Yugabyte']
        },

        // Migration tools
        {
            id: 'flyway-yugabytedb',
            name: 'Flyway for YugabyteDB',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2018-09-01',
            description: 'Database migration tool compatible with YugabyteDB',
            authors: ['Axel Fontaine', 'Redgate', 'Yugabyte']
        },
        {
            id: 'liquibase-yugabytedb',
            name: 'Liquibase for YugabyteDB',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2018-11-01',
            description: 'Database schema change management compatible with YugabyteDB',
            authors: ['Nathan Voxland', 'Yugabyte']
        },
        {
            id: 'ysql2ysql',
            name: 'YSQL to YSQL Data Migration',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2019-07-01',
            description: 'Tool for migrating data between YugabyteDB instances',
            authors: ['Yugabyte']
        },

        // Server-side features
        {
            id: 'yugabyte-distributed-sql',
            name: 'YugabyteDB Distributed SQL',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2017-11-01',
            description: 'Distributed SQL engine for YugabyteDB',
            authors: ['Yugabyte']
        },
        {
            id: 'yugabyte-geo-partitioning',
            name: 'Geo-partitioning',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2019-10-01',
            description: 'Geographic data partitioning for compliance and performance',
            authors: ['Yugabyte']
        },
        {
            id: 'yugabyte-change-data-capture',
            name: 'YugabyteDB CDC',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2020-05-01',
            description: 'Change Data Capture for YugabyteDB',
            authors: ['Yugabyte']
        },

        // BI инструменты
        {
            id: 'metabase-yugabytedb',
            name: 'Metabase for YugabyteDB',
            category: 'BI',
            language: 'Java',
            releaseDate: '2018-12-01',
            description: 'Open source business intelligence tool with YugabyteDB support',
            authors: ['Metabase Team', 'Yugabyte']
        },
        {
            id: 'superset-yugabytedb',
            name: 'Apache Superset for YugabyteDB',
            category: 'BI',
            language: 'Python',
            releaseDate: '2019-03-01',
            description: 'Modern data exploration and visualization platform with YugabyteDB support',
            authors: ['Apache Software Foundation', 'Yugabyte']
        },
        {
            id: 'tableau-yugabytedb',
            name: 'Tableau for YugabyteDB',
            category: 'BI',
            language: 'C++',
            releaseDate: '2019-05-01',
            description: 'Visual analytics platform with YugabyteDB support',
            authors: ['Tableau Software', 'Yugabyte']
        },

        // Message Broker
        {
            id: 'kafka-connect-yugabytedb',
            name: 'Kafka Connect for YugabyteDB',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2019-06-01',
            description: 'Kafka connector for YugabyteDB',
            authors: ['Yugabyte', 'Community']
        },
        {
            id: 'debezium-yugabytedb',
            name: 'Debezium YugabyteDB Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2020-08-01',
            description: 'Debezium CDC connector for YugabyteDB',
            authors: ['Red Hat', 'Yugabyte']
        }
    ],
    dependencies: [
        // PostgreSQL driver dependencies
        {
            source: 'yugabyte-jdbc',
            target: 'jdbc',
            description: 'YugabyteDB JDBC driver implements JDBC standard'
        },
        {
            source: 'yugabyte-psycopg2',
            target: 'dbapi',
            description: 'YugabyteDB Python driver implements DB-API specification'
        },
        {
            source: 'yugabyte-pgx',
            target: 'database-sql',
            description: 'YugabyteDB Go driver implements database/sql interface'
        },
        {
            source: 'yugabyte-npgsql',
            target: 'adonet',
            description: 'YugabyteDB .NET provider implements ADO.NET interfaces'
        },

        // Cassandra driver dependencies
        {
            source: 'yugabyte-cassandra-java-driver',
            target: 'jdbc',
            description: 'YugabyteDB Cassandra Java driver is compatible with JDBC standard'
        },
        {
            source: 'yugabyte-cassandra-python-driver',
            target: 'dbapi',
            description: 'YugabyteDB Cassandra Python driver follows DB-API patterns'
        },

        // ORM dependencies
        {
            source: 'yugabyte-jdbc',
            target: 'hibernate-yugabytedb',
            description: 'Hibernate for YugabyteDB uses JDBC driver'
        },
        {
            source: 'yugabyte-jdbc',
            target: 'spring-data-yugabytedb',
            description: 'Spring Data JPA for YugabyteDB uses JDBC driver'
        },
        {
            source: 'yugabyte-psycopg2',
            target: 'sqlalchemy-yugabytedb',
            description: 'SQLAlchemy for YugabyteDB uses Psycopg2'
        },
        {
            source: 'yugabyte-psycopg2',
            target: 'django-yugabytedb',
            description: 'Django for YugabyteDB uses Psycopg2'
        },
        {
            source: 'yugabyte-pgx',
            target: 'gorm-yugabytedb',
            description: 'GORM for YugabyteDB uses pgx driver'
        },
        {
            source: 'yugabyte-npgsql',
            target: 'entity-framework-yugabytedb',
            description: 'Entity Framework for YugabyteDB uses Npgsql'
        },

        // Admin tool dependencies
        {
            source: 'yugabyte-jdbc',
            target: 'dbeaver-yugabytedb',
            description: 'DBeaver uses JDBC to connect to YugabyteDB'
        },
        {
            source: 'yugabyte-psycopg2',
            target: 'pgadmin-yugabytedb',
            description: 'pgAdmin uses Psycopg2 to connect to YugabyteDB'
        },

        // Migration tool dependencies
        {
            source: 'yugabyte-jdbc',
            target: 'flyway-yugabytedb',
            description: 'Flyway uses JDBC to connect to YugabyteDB'
        },
        {
            source: 'yugabyte-jdbc',
            target: 'liquibase-yugabytedb',
            description: 'Liquibase uses JDBC to connect to YugabyteDB'
        },

        // BI tool dependencies
        {
            source: 'yugabyte-jdbc',
            target: 'metabase-yugabytedb',
            description: 'Metabase uses JDBC to connect to YugabyteDB'
        },
        {
            source: 'yugabyte-psycopg2',
            target: 'superset-yugabytedb',
            description: 'Superset uses Psycopg2 to connect to YugabyteDB'
        },
        {
            source: 'yugabyte-jdbc',
            target: 'tableau-yugabytedb',
            description: 'Tableau uses JDBC to connect to YugabyteDB'
        },

        // Server-side feature dependencies
        {
            source: 'yugabyte-distributed-sql',
            target: 'yugabyte-geo-partitioning',
            description: 'Geo-partitioning is built on the distributed SQL engine'
        },
        {
            source: 'yugabyte-change-data-capture',
            target: 'debezium-yugabytedb',
            description: 'Debezium connector uses YugabyteDB CDC'
        },
        {
            source: 'yugabyte-change-data-capture',
            target: 'kafka-connect-yugabytedb',
            description: 'Kafka Connect for YugabyteDB can use CDC'
        }
    ]
};

export default yugabyteData;
