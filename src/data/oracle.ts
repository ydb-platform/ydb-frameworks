// src/data/oracle.ts
import { TimelineData } from './types';

const oracleData: TimelineData = {
    database: 'oracle',
    frameworks: [
        // Стандарты API
        {
            id: 'odbc',
            name: 'ODBC',
            category: 'Standard',
            language: 'C',
            releaseDate: '1992-01-01',
            dbSupportDate: '1994-01-01',
            description: 'Open Database Connectivity standard',
            authors: ['Microsoft']
        },
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '1997-06-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2002-01-01',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '1998-01-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG']
        },
        {
            id: 'oci',
            name: 'OCI',
            category: 'Standard',
            language: 'C',
            releaseDate: '1992-06-01',
            description: 'Oracle Call Interface - C language interface to Oracle',
            authors: ['Oracle Corporation']
        },
        {
            id: 'pdo',
            name: 'PDO',
            category: 'Standard',
            language: 'PHP',
            releaseDate: '2005-06-01',
            dbSupportDate: '2005-06-01',
            description: 'PHP Data Objects interface',
            authors: ['PHP Group']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2013-05-01',
            description: 'Go standard database interface',
            authors: ['Go Team']
        },

        // Драйверы
        {
            id: 'oracle-odbc',
            name: 'Oracle ODBC Driver',
            category: 'Driver',
            language: 'C',
            releaseDate: '1994-01-01',
            description: 'Oracle ODBC driver',
            authors: ['Oracle Corporation']
        },
        {
            id: 'oracle-jdbc',
            name: 'Oracle JDBC Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '1997-06-01',
            description: 'JDBC driver for Oracle Database',
            authors: ['Oracle Corporation']
        },
        {
            id: 'oracle-data-provider',
            name: 'Oracle Data Provider for .NET',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2002-01-01',
            description: 'Oracle\'s ADO.NET implementation',
            authors: ['Oracle Corporation']
        },
        {
            id: 'cx_oracle',
            name: 'cx_Oracle',
            category: 'Driver',
            language: 'Python',
            releaseDate: '1998-01-01',
            description: 'Python interface to Oracle Database',
            authors: ['Anthony Tuininga', 'Computronix']
        },
        {
            id: 'python-oracledb',
            name: 'python-oracledb',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2022-04-01',
            description: 'Python interface to Oracle Database (successor to cx_Oracle)',
            authors: ['Oracle Corporation']
        },
        {
            id: 'pdo-oci',
            name: 'PDO_OCI',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2005-06-01',
            description: 'PDO driver for Oracle',
            authors: ['PHP Group']
        },
        {
            id: 'go-ora',
            name: 'go-ora',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2013-05-01',
            description: 'Pure Go Oracle driver for Go\'s database/sql package',
            authors: ['Tamás Gulácsi']
        },
        {
            id: 'godror',
            name: 'godror',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2019-08-15',
            description: 'Go driver for Oracle Database',
            authors: ['Tamás Gulácsi']
        },

        // ORM frameworks
        {
            id: 'hibernate',
            name: 'Hibernate',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2001-05-01',
            description: 'Object-relational mapping framework for Java',
            authors: ['Gavin King']
        },
        {
            id: 'typeorm',
            name: 'TypeORM',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2016-01-01',
            description: 'ORM for TypeScript and JavaScript with Oracle support',
            authors: ['Umed Khudoiberdiev']
        },
        {
            id: 'sequelize',
            name: 'Sequelize',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2011-07-18',
            description: 'Promise-based Node.js ORM with Oracle support',
            authors: ['Sascha Depold']
        },
        {
            id: 'sqlalchemy',
            name: 'SQLAlchemy',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2006-02-14',
            description: 'SQL toolkit and ORM for Python with Oracle support',
            authors: ['Michael Bayer']
        },
        {
            id: 'django-orm',
            name: 'Django ORM',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2005-07-21',
            description: 'ORM built into Django web framework with Oracle support',
            authors: ['Django Software Foundation']
        },
        {
            id: 'entity-framework',
            name: 'Entity Framework',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2008-08-11',
            description: 'Microsoft\'s ORM for .NET with Oracle support',
            authors: ['Microsoft']
        },
        {
            id: 'gorm',
            name: 'GORM',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2013-10-25',
            description: 'The fantastic ORM library for Golang with Oracle support',
            authors: ['Jinzhu']
        },

        // Admin tools
        {
            id: 'sql-developer',
            name: 'Oracle SQL Developer',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2006-03-01',
            description: 'Free graphical tool for database development from Oracle',
            authors: ['Oracle Corporation']
        },
        {
            id: 'toad',
            name: 'Toad for Oracle',
            category: 'Admin',
            language: 'C++',
            releaseDate: '1998-01-01',
            description: 'Database management and development tool for Oracle',
            authors: ['Quest Software']
        },
        {
            id: 'dbeaver',
            name: 'DBeaver',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Universal database tool with Oracle support',
            authors: ['Serge Rider']
        },

        // Migration tools
        {
            id: 'flyway',
            name: 'Flyway',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-06-29',
            description: 'Database migration tool with Oracle support',
            authors: ['Axel Fontaine', 'Redgate']
        },
        {
            id: 'liquibase',
            name: 'Liquibase',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2006-12-05',
            description: 'Database schema change management with Oracle support',
            authors: ['Nathan Voxland']
        },
        {
            id: 'alembic',
            name: 'Alembic',
            category: 'Migration',
            language: 'Python',
            releaseDate: '2012-04-07',
            description: 'Database migration tool for SQLAlchemy with Oracle support',
            authors: ['Michael Bayer']
        },

        // BI инструменты
        {
            id: 'oracle-analytics',
            name: 'Oracle Analytics Cloud',
            category: 'BI',
            language: 'Java',
            releaseDate: '2017-06-01',
            description: 'Oracle\'s cloud-based analytics platform',
            authors: ['Oracle Corporation']
        },
        {
            id: 'metabase',
            name: 'Metabase',
            category: 'BI',
            language: 'Java',
            releaseDate: '2015-10-01',
            description: 'Open source business intelligence tool with Oracle support',
            authors: ['Metabase Team']
        },
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-12-17',
            description: 'Modern data exploration and visualization platform with Oracle support',
            authors: ['Airbnb', 'Apache Software Foundation']
        },
        {
            id: 'tableau',
            name: 'Tableau',
            category: 'BI',
            language: 'C++',
            releaseDate: '2003-01-01',
            description: 'Visual analytics platform with Oracle support',
            authors: ['Tableau Software']
        },

        // Логирование
        {
            id: 'fluentd',
            name: 'Fluentd',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2011-10-01',
            description: 'Open source data collector with Oracle output plugin',
            authors: ['Treasure Data']
        },
        {
            id: 'logstash',
            name: 'Logstash',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2010-08-02',
            description: 'Data processing pipeline with Oracle input/output support',
            authors: ['Jordan Sissel', 'Elastic']
        },

        // Message Broker
        {
            id: 'kafka-connect',
            name: 'Kafka Connect',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2015-11-01',
            description: 'Connector framework for Apache Kafka with Oracle source/sink connectors',
            authors: ['Apache Software Foundation', 'Confluent']
        },
        {
            id: 'oracle-streaming',
            name: 'Oracle GoldenGate',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2009-04-20',
            description: 'Real-time data replication and integration solution',
            authors: ['Oracle Corporation']
        },
        {
            id: 'debezium-oracle',
            name: 'Debezium Oracle Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2018-07-01',
            description: 'Platform for change data capture with Oracle connector',
            authors: ['Red Hat']
        }
    ],
    dependencies: [
        // Зависимости драйверов от стандартов
        {
            source: 'oracle-odbc',
            target: 'odbc',
            description: 'Oracle ODBC driver implements ODBC standard'
        },
        {
            source: 'oracle-jdbc',
            target: 'jdbc',
            description: 'Oracle JDBC driver implements JDBC API'
        },
        {
            source: 'oracle-data-provider',
            target: 'adonet',
            description: 'Oracle Data Provider implements ADO.NET interfaces'
        },
        {
            source: 'cx_oracle',
            target: 'dbapi',
            description: 'cx_Oracle implements Python DB-API 2.0 specification'
        },
        {
            source: 'python-oracledb',
            target: 'dbapi',
            description: 'python-oracledb implements Python DB-API 2.0 specification'
        },
        {
            source: 'cx_oracle',
            target: 'oci',
            description: 'cx_Oracle uses OCI to communicate with Oracle Database'
        },
        {
            source: 'python-oracledb',
            target: 'oci',
            description: 'python-oracledb uses OCI to communicate with Oracle Database'
        },
        {
            source: 'pdo-oci',
            target: 'pdo',
            description: 'PDO_OCI implements PDO interface for Oracle'
        },
        {
            source: 'go-ora',
            target: 'database-sql',
            description: 'go-ora implements database/sql interface for Oracle'
        },
        {
            source: 'godror',
            target: 'database-sql',
            description: 'godror implements database/sql interface for Oracle'
        },

        // ORM зависимости
        {
            source: 'oracle-jdbc',
            target: 'hibernate',
            description: 'Hibernate uses JDBC to connect to Oracle'
        },
        {
            source: 'oracle-jdbc',
            target: 'oracle-analytics',
            description: 'Oracle Analytics uses JDBC to connect to Oracle databases'
        },
        {
            source: 'cx_oracle',
            target: 'sqlalchemy',
            description: 'SQLAlchemy can use cx_Oracle for Oracle connections'
        },
        {
            source: 'python-oracledb',
            target: 'sqlalchemy',
            description: 'SQLAlchemy can use python-oracledb for Oracle connections'
        },
        {
            source: 'cx_oracle',
            target: 'django-orm',
            description: 'Django ORM can use cx_Oracle for Oracle connections'
        },
        {
            source: 'python-oracledb',
            target: 'django-orm',
            description: 'Django ORM can use python-oracledb for Oracle connections'
        },
        {
            source: 'oracle-data-provider',
            target: 'entity-framework',
            description: 'Entity Framework uses Oracle Data Provider for Oracle support'
        },
        {
            source: 'godror',
            target: 'gorm',
            description: 'GORM can use godror for Oracle support'
        },

        // Migration tools
        {
            source: 'oracle-jdbc',
            target: 'flyway',
            description: 'Flyway uses JDBC to connect to Oracle'
        },
        {
            source: 'oracle-jdbc',
            target: 'liquibase',
            description: 'Liquibase uses JDBC to connect to Oracle'
        },
        {
            source: 'sqlalchemy',
            target: 'alembic',
            description: 'Alembic uses SQLAlchemy for Oracle migrations'
        },

        // BI и инструменты визуализации
        {
            source: 'oracle-jdbc',
            target: 'metabase',
            description: 'Metabase uses JDBC to connect to Oracle'
        },
        {
            source: 'cx_oracle',
            target: 'superset',
            description: 'Superset uses cx_Oracle or python-oracledb to connect to Oracle'
        },
        {
            source: 'oracle-jdbc',
            target: 'tableau',
            description: 'Tableau uses JDBC to connect to Oracle'
        },

        // Логгеры и message brokers
        {
            source: 'oracle-jdbc',
            target: 'fluentd',
            description: 'Fluentd Oracle plugin uses JDBC'
        },
        {
            source: 'oracle-jdbc',
            target: 'logstash',
            description: 'Logstash Oracle plugin uses JDBC'
        },
        {
            source: 'oracle-jdbc',
            target: 'kafka-connect',
            description: 'Kafka Connect Oracle connector uses JDBC'
        },
        {
            source: 'oracle-streaming',
            target: 'debezium-oracle',
            description: 'Debezium Oracle connector can use Oracle GoldenGate'
        }
    ]
};

export default oracleData;
