// src/data/db2.ts
import {TimelineData} from './types';

const db2Data: TimelineData = {
    database: 'db2',
    frameworks: [
        // Стандарты API
        {
            id: 'odbc',
            name: 'ODBC',
            category: 'Standard',
            language: 'C',
            releaseDate: '1992-01-01',
            dbSupportDate: '1993-01-01',
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
            dbSupportDate: '2000-01-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG']
        },
        {
            id: 'cli',
            name: 'CLI',
            category: 'Standard',
            language: 'C',
            releaseDate: '1995-01-01',
            description: 'Call-Level Interface standard for database access',
            authors: ['ISO', 'IEC']
        },
        {
            id: 'pdo',
            name: 'PDO',
            category: 'Standard',
            language: 'PHP',
            releaseDate: '2005-06-01',
            dbSupportDate: '2006-01-01',
            description: 'PHP Data Objects interface',
            authors: ['PHP Group']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2016-01-01',
            description: 'Go standard database interface',
            authors: ['Go Team']
        },

        // Драйверы
        {
            id: 'db2-cli',
            name: 'IBM Db2 CLI Driver',
            category: 'Driver',
            language: 'C',
            releaseDate: '1994-01-01',
            description: 'Native call-level interface for Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-odbc',
            name: 'IBM Db2 ODBC Driver',
            category: 'Driver',
            language: 'C',
            releaseDate: '1993-01-01',
            description: 'ODBC driver for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-jdbc',
            name: 'IBM Db2 JDBC Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '1997-06-01',
            description: 'JDBC driver for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-adonet',
            name: 'IBM Db2 ADO.NET Provider',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2002-01-01',
            description: 'ADO.NET provider for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'ibm-db',
            name: 'ibm_db',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2005-01-01',
            description: 'Python driver for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'ibm-db-sa',
            name: 'ibm_db_sa',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2007-01-01',
            description: 'SQLAlchemy adapter for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'ibm-db-django',
            name: 'ibm_db_django',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2008-01-01',
            description: 'Django adapter for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'ibm-db-ruby',
            name: 'ibm_db Ruby Driver',
            category: 'Driver',
            language: 'Ruby',
            releaseDate: '2007-01-01',
            description: 'Ruby driver for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'ibm-db-php',
            name: 'ibm_db2 PHP Extension',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2005-01-01',
            description: 'PHP extension for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'ibm-db-nodejs',
            name: 'ibm_db Node.js Driver',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2013-01-01',
            description: 'Node.js driver for IBM Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-go',
            name: 'go_ibm_db',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2016-01-01',
            description: 'Go driver for IBM Db2',
            authors: ['IBM']
        },

        // ORM frameworks
        {
            id: 'hibernate-db2',
            name: 'Hibernate for Db2',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2003-01-01',
            description: 'Hibernate ORM with Db2 dialect',
            authors: ['Gavin King', 'JBoss', 'IBM']
        },
        {
            id: 'sqlalchemy-db2',
            name: 'SQLAlchemy for Db2',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2007-01-01',
            description: 'SQLAlchemy dialect for Db2',
            authors: ['Michael Bayer', 'IBM']
        },
        {
            id: 'django-db2',
            name: 'Django for Db2',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2008-01-01',
            description: 'Django ORM support for Db2',
            authors: ['Django Software Foundation', 'IBM']
        },
        {
            id: 'entity-framework-db2',
            name: 'Entity Framework for Db2',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2010-01-01',
            description: 'Entity Framework support for Db2',
            authors: ['Microsoft', 'IBM']
        },
        {
            id: 'jpa-db2',
            name: 'JPA for Db2',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2006-05-11',
            description: 'Java Persistence API support for Db2',
            authors: ['Sun Microsystems', 'IBM']
        },
        {
            id: 'sequelize-db2',
            name: 'Sequelize for Db2',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2017-01-01',
            description: 'Sequelize ORM support for Db2',
            authors: ['Sequelize Contributors', 'IBM']
        },

        // Admin tools
        {
            id: 'data-studio',
            name: 'IBM Data Studio',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2008-01-01',
            description: 'Integrated environment for database development and administration',
            authors: ['IBM']
        },
        {
            id: 'db2-control-center',
            name: 'Db2 Control Center',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2000-01-01',
            endSupportDate: '2015-01-01',
            description: 'Administration tool for Db2 (legacy)',
            authors: ['IBM']
        },
        {
            id: 'db2-command-editor',
            name: 'Db2 Command Editor',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2005-01-01',
            description: 'SQL editor for Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-command-line-processor',
            name: 'Db2 Command Line Processor',
            category: 'Admin',
            language: 'C',
            releaseDate: '1993-01-01',
            description: 'Command line interface for Db2',
            authors: ['IBM']
        },
        {
            id: 'dbeaver-db2',
            name: 'DBeaver for Db2',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Universal database tool with Db2 support',
            authors: ['Serge Rider', 'Community']
        },
        {
            id: 'ibm-data-management-console',
            name: 'IBM Data Management Console',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2019-01-01',
            description: 'Web-based console for managing IBM data platforms',
            authors: ['IBM']
        },

        // Migration tools
        {
            id: 'db2-data-movement-tool',
            name: 'Db2 Data Movement Tool',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-01-01',
            description: 'Tool for migrating data to and from Db2',
            authors: ['IBM']
        },
        {
            id: 'ibm-data-replication',
            name: 'IBM InfoSphere Data Replication',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-01-01',
            description: 'Platform for data replication and synchronization',
            authors: ['IBM']
        },
        {
            id: 'db2move',
            name: 'db2move',
            category: 'Migration',
            language: 'C',
            releaseDate: '1997-01-01',
            description: 'Command-line tool for importing and exporting Db2 data',
            authors: ['IBM']
        },
        {
            id: 'db2look',
            name: 'db2look',
            category: 'Migration',
            language: 'C',
            releaseDate: '1997-01-01',
            description: 'Tool for extracting DDL from Db2 databases',
            authors: ['IBM']
        },
        {
            id: 'flyway-db2',
            name: 'Flyway for Db2',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-06-29',
            dbSupportDate: '2014-01-01',
            description: 'Database migration tool with Db2 support',
            authors: ['Axel Fontaine', 'Redgate', 'Community']
        },
        {
            id: 'liquibase-db2',
            name: 'Liquibase for Db2',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2006-12-05',
            dbSupportDate: '2010-01-01',
            description: 'Database schema change management with Db2 support',
            authors: ['Nathan Voxland', 'Community']
        },

        // Server-side features
        {
            id: 'db2-stored-procedures',
            name: 'Db2 Stored Procedures',
            category: 'Server-side feature',
            language: 'SQL',
            releaseDate: '1993-01-01',
            description: 'Server-side stored procedures in Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-user-defined-functions',
            name: 'Db2 User-Defined Functions',
            category: 'Server-side feature',
            language: 'SQL',
            releaseDate: '1993-01-01',
            description: 'User-defined functions in Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-triggers',
            name: 'Db2 Triggers',
            category: 'Server-side feature',
            language: 'SQL',
            releaseDate: '1993-01-01',
            description: 'Database triggers in Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-purexml',
            name: 'Db2 pureXML',
            category: 'Server-side feature',
            language: 'XML',
            releaseDate: '2006-01-01',
            description: 'Native XML support in Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-json',
            name: 'Db2 JSON',
            category: 'Server-side feature',
            language: 'JSON',
            releaseDate: '2016-01-01',
            description: 'JSON document support in Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-graph',
            name: 'Db2 Graph',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2016-01-01',
            description: 'Graph database capabilities in Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-spatial-extender',
            name: 'Db2 Spatial Extender',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2000-01-01',
            description: 'Spatial data capabilities for Db2',
            authors: ['IBM']
        },

        // BI инструменты
        {
            id: 'cognos-analytics',
            name: 'IBM Cognos Analytics',
            category: 'BI',
            language: 'Java',
            releaseDate: '2015-12-01',
            description: 'Business intelligence and analytics platform with Db2 integration',
            authors: ['IBM']
        },
        {
            id: 'cognos-framework-manager',
            name: 'Cognos Framework Manager',
            category: 'BI',
            language: 'Java',
            releaseDate: '2008-01-01',
            description: 'Metadata modeling tool for IBM Cognos Analytics',
            authors: ['IBM']
        },
        {
            id: 'spss-modeler',
            name: 'IBM SPSS Modeler',
            category: 'BI',
            language: 'Java',
            releaseDate: '2009-01-01',
            description: 'Predictive analytics platform with Db2 integration',
            authors: ['IBM']
        },
        {
            id: 'watson-studio',
            name: 'IBM Watson Studio',
            category: 'BI',
            language: 'JavaScript',
            releaseDate: '2018-03-01',
            description: 'Data science and AI tools with Db2 integration',
            authors: ['IBM']
        },
        {
            id: 'tableau-db2',
            name: 'Tableau for Db2',
            category: 'BI',
            language: 'C++',
            releaseDate: '2010-01-01',
            description: 'Visual analytics platform with Db2 support',
            authors: ['Tableau Software']
        },
        {
            id: 'powerbi-db2',
            name: 'Power BI for Db2',
            category: 'BI',
            language: 'C#',
            releaseDate: '2015-07-01',
            description: 'Business analytics service with Db2 connector',
            authors: ['Microsoft']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'websphere-db2',
            name: 'IBM WebSphere with Db2',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '1998-01-01',
            description: 'Application server with Db2 integration',
            authors: ['IBM']
        },
        {
            id: 'liberty-db2',
            name: 'WebSphere Liberty with Db2',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '2012-01-01',
            description: 'Lightweight Java application server with Db2 support',
            authors: ['IBM']
        },
        {
            id: 'jee-db2',
            name: 'Java EE with Db2',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '1999-01-01',
            description: 'Java Enterprise Edition with Db2 support',
            authors: ['Sun Microsystems', 'Oracle', 'IBM']
        },
        {
            id: 'spring-db2',
            name: 'Spring Framework with Db2',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '2004-01-01',
            description: 'Spring Framework with Db2 support',
            authors: ['Pivotal', 'VMware', 'IBM']
        },

        // Логирование
        {
            id: 'db2-audit',
            name: 'Db2 Audit Facility',
            category: 'Logging',
            language: 'C',
            releaseDate: '2000-01-01',
            description: 'Auditing facility for Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-activity-monitor',
            name: 'Db2 Activity Monitor',
            category: 'Logging',
            language: 'Java',
            releaseDate: '2008-01-01',
            description: 'Performance monitoring for Db2',
            authors: ['IBM']
        },
        {
            id: 'db2-event-monitor',
            name: 'Db2 Event Monitor',
            category: 'Logging',
            language: 'C',
            releaseDate: '1997-01-01',
            description: 'Event monitoring facility for Db2',
            authors: ['IBM']
        },
        {
            id: 'logstash-db2',
            name: 'Logstash for Db2',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2015-01-01',
            description: 'Logstash input/output plugins for Db2',
            authors: ['Elastic', 'Community']
        },

        // Message Broker
        {
            id: 'mq-db2',
            name: 'IBM MQ with Db2',
            category: 'Message broker',
            language: 'C',
            releaseDate: '1999-01-01',
            description: 'Message queuing middleware with Db2 integration',
            authors: ['IBM']
        },
        {
            id: 'db2-event-publishing',
            name: 'Db2 Event Publishing',
            category: 'Message broker',
            language: 'C',
            releaseDate: '2016-01-01',
            description: 'Event publishing capabilities in Db2',
            authors: ['IBM']
        },
        {
            id: 'kafka-db2-connector',
            name: 'Kafka Connect Db2 Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2018-01-01',
            description: 'Kafka connector for Db2',
            authors: ['IBM', 'Community']
        },
        {
            id: 'debezium-db2',
            name: 'Debezium Db2 Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2020-05-01',
            description: 'Debezium connector for Db2 CDC',
            authors: ['Red Hat', 'Community']
        }
    ],
    dependencies: [
        // Драйверы и стандарты
        {
            source: 'db2-cli',
            target: 'cli',
            description: 'Db2 CLI Driver implements Call-Level Interface standard'
        },
        {
            source: 'db2-odbc',
            target: 'odbc',
            description: 'Db2 ODBC Driver implements ODBC standard'
        },
        {
            source: 'db2-jdbc',
            target: 'jdbc',
            description: 'Db2 JDBC Driver implements JDBC standard'
        },
        {
            source: 'db2-adonet',
            target: 'adonet',
            description: 'Db2 ADO.NET Provider implements ADO.NET interfaces'
        },
        {
            source: 'ibm-db',
            target: 'dbapi',
            description: 'ibm_db implements Python DB-API specification'
        },
        {
            source: 'ibm-db-php',
            target: 'pdo',
            description: 'ibm_db2 PHP extension can be used with PDO'
        },
        {
            source: 'db2-go',
            target: 'database-sql',
            description: 'go_ibm_db implements Go database/sql interface'
        },

        // ORM зависимости
        {
            source: 'db2-jdbc',
            target: 'hibernate-db2',
            description: 'Hibernate for Db2 uses JDBC driver'
        },
        {
            source: 'db2-jdbc',
            target: 'jpa-db2',
            description: 'JPA for Db2 uses JDBC driver'
        },
        {
            source: 'ibm-db',
            target: 'ibm-db-sa',
            description: 'ibm_db_sa uses ibm_db for database access'
        },
        {
            source: 'ibm-db-sa',
            target: 'sqlalchemy-db2',
            description: 'SQLAlchemy for Db2 uses ibm_db_sa adapter'
        },
        {
            source: 'ibm-db',
            target: 'ibm-db-django',
            description: 'ibm_db_django uses ibm_db for database access'
        },
        {
            source: 'ibm-db-django',
            target: 'django-db2',
            description: 'Django for Db2 uses ibm_db_django adapter'
        },
        {
            source: 'db2-adonet',
            target: 'entity-framework-db2',
            description: 'Entity Framework for Db2 uses ADO.NET provider'
        },
        {
            source: 'ibm-db-nodejs',
            target: 'sequelize-db2',
            description: 'Sequelize for Db2 uses ibm_db Node.js driver'
        },

        // Админ-инструменты и драйверы
        {
            source: 'db2-jdbc',
            target: 'data-studio',
            description: 'IBM Data Studio uses JDBC to connect to Db2'
        },
        {
            source: 'db2-jdbc',
            target: 'db2-control-center',
            description: 'Db2 Control Center uses JDBC to connect to Db2'
        },
        {
            source: 'db2-cli',
            target: 'db2-command-line-processor',
            description: 'Db2 Command Line Processor uses CLI'
        },
        {
            source: 'db2-jdbc',
            target: 'dbeaver-db2',
            description: 'DBeaver uses JDBC to connect to Db2'
        },
        {
            source: 'db2-jdbc',
            target: 'ibm-data-management-console',
            description: 'IBM Data Management Console uses JDBC internally'
        },

        // Миграционные инструменты
        {
            source: 'db2-jdbc',
            target: 'flyway-db2',
            description: 'Flyway uses JDBC to connect to Db2'
        },
        {
            source: 'db2-jdbc',
            target: 'liquibase-db2',
            description: 'Liquibase uses JDBC to connect to Db2'
        },
        {
            source: 'db2-cli',
            target: 'db2move',
            description: 'db2move uses CLI to connect to Db2'
        },
        {
            source: 'db2-cli',
            target: 'db2look',
            description: 'db2look uses CLI to connect to Db2'
        },
        {
            source: 'db2-jdbc',
            target: 'db2-data-movement-tool',
            description: 'Db2 Data Movement Tool uses JDBC'
        },
        {
            source: 'db2-jdbc',
            target: 'ibm-data-replication',
            description: 'IBM InfoSphere Data Replication uses JDBC'
        },

        // BI зависимости
        {
            source: 'db2-jdbc',
            target: 'cognos-analytics',
            description: 'IBM Cognos Analytics uses JDBC to connect to Db2'
        },
        {
            source: 'cognos-analytics',
            target: 'cognos-framework-manager',
            description: 'Cognos Framework Manager works with Cognos Analytics'
        },
        {
            source: 'db2-jdbc',
            target: 'spss-modeler',
            description: 'IBM SPSS Modeler uses JDBC to connect to Db2'
        },
        {
            source: 'db2-jdbc',
            target: 'watson-studio',
            description: 'IBM Watson Studio uses JDBC to connect to Db2'
        },
        {
            source: 'db2-odbc',
            target: 'tableau-db2',
            description: 'Tableau uses ODBC to connect to Db2'
        },
        {
            source: 'db2-odbc',
            target: 'powerbi-db2',
            description: 'Power BI uses ODBC to connect to Db2'
        },

        // Приложения
        {
            source: 'db2-jdbc',
            target: 'websphere-db2',
            description: 'WebSphere uses JDBC to connect to Db2'
        },
        {
            source: 'db2-jdbc',
            target: 'liberty-db2',
            description: 'WebSphere Liberty uses JDBC to connect to Db2'
        },
        {
            source: 'db2-jdbc',
            target: 'jee-db2',
            description: 'Java EE applications use JDBC to connect to Db2'
        },
        {
            source: 'db2-jdbc',
            target: 'spring-db2',
            description: 'Spring Framework uses JDBC to connect to Db2'
        },

        // Логгеры
        {
            source: 'db2-cli',
            target: 'db2-audit',
            description: 'Db2 Audit Facility is part of the Db2 engine'
        },
        {
            source: 'db2-jdbc',
            target: 'db2-activity-monitor',
            description: 'Db2 Activity Monitor uses JDBC'
        },
        {
            source: 'db2-cli',
            target: 'db2-event-monitor',
            description: 'Db2 Event Monitor is part of the Db2 engine'
        },
        {
            source: 'db2-jdbc',
            target: 'logstash-db2',
            description: 'Logstash Db2 plugins use JDBC'
        },

        // Message brokers
        {
            source: 'db2-cli',
            target: 'mq-db2',
            description: 'IBM MQ can connect to Db2 using CLI'
        },
        {
            source: 'db2-cli',
            target: 'db2-event-publishing',
            description: 'Db2 Event Publishing is part of the Db2 engine'
        },
        {
            source: 'db2-jdbc',
            target: 'kafka-db2-connector',
            description: 'Kafka Connect Db2 Connector uses JDBC'
        },
        {
            source: 'db2-jdbc',
            target: 'debezium-db2',
            description: 'Debezium Db2 Connector uses JDBC'
        }
    ]
};

export default db2Data;
