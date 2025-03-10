// src/data/mysql.ts
import { TimelineData } from './types';

const mysqlData: TimelineData = {
    database: 'mysql',
    frameworks: [
        // Стандарты API
        {
            id: 'odbc',
            name: 'ODBC',
            category: 'Standard',
            language: 'C',
            releaseDate: '1992-01-01',
            dbSupportDate: '1996-01-01',
            description: 'Open Database Connectivity standard',
            authors: ['Microsoft']
        },
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '1999-01-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2004-10-20',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '1999-01-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG']
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
            dbSupportDate: '2012-07-18',
            description: 'Go standard database interface',
            authors: ['Go Team']
        },

        // Драйверы
        {
            id: 'mysql-odbc',
            name: 'MySQL ODBC Driver',
            category: 'Driver',
            language: 'C',
            releaseDate: '1996-01-01',
            description: 'MySQL ODBC driver (Connector/ODBC)',
            authors: ['MySQL AB', 'Oracle']
        },
        {
            id: 'mysql-connector-j',
            name: 'MySQL Connector/J',
            category: 'Driver',
            language: 'Java',
            releaseDate: '1999-01-01',
            description: 'JDBC driver for MySQL',
            authors: ['MySQL AB', 'Oracle']
        },
        {
            id: 'mysql-connector-net',
            name: 'MySQL Connector/NET',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2004-10-20',
            description: 'MySQL ADO.NET driver',
            authors: ['MySQL AB', 'Oracle'],
            version: '1.0'
        },
        {
            id: 'mysqlclient',
            name: 'MySQLclient',
            category: 'Driver',
            language: 'Python',
            releaseDate: '1999-01-01',
            description: 'MySQL database connector for Python (originally MySQLdb)',
            authors: ['Andy Dustman', 'Community']
        },
        {
            id: 'pymysql',
            name: 'PyMySQL',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2010-09-02',
            description: 'Pure-Python MySQL client library',
            authors: ['yutaka.matsubara', 'Community']
        },
        {
            id: 'pdo-mysql',
            name: 'PDO_MYSQL',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2005-06-01',
            description: 'PDO driver for MySQL',
            authors: ['PHP Group']
        },
        {
            id: 'go-mysql-driver',
            name: 'go-mysql-driver',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2012-07-18',
            description: 'MySQL driver for Go\'s database/sql',
            authors: ['Julien Schmidt']
        },

        // Admin tools
        {
            id: 'phpmyadmin',
            name: 'phpMyAdmin',
            category: 'Admin',
            language: 'PHP',
            releaseDate: '1998-09-09',
            description: 'Web-based MySQL administration tool',
            authors: ['Tobias Ratschiller', 'phpMyAdmin contributors']
        },
        {
            id: 'mysql-workbench',
            name: 'MySQL Workbench',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2005-09-01',
            description: 'Visual database design tool for MySQL',
            authors: ['MySQL AB', 'Oracle']
        },

        // ORM frameworks
        {
            id: 'typeorm',
            name: 'TypeORM',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2016-01-01',
            description: 'ORM for TypeScript and JavaScript with MySQL support',
            authors: ['Umed Khudoiberdiev']
        },
        {
            id: 'prisma',
            name: 'Prisma',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2019-06-01',
            description: 'Next-generation ORM for Node.js and TypeScript with MySQL support',
            authors: ['Prisma']
        },
        {
            id: 'sequelize',
            name: 'Sequelize',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2011-07-18',
            description: 'Promise-based Node.js ORM with MySQL support',
            authors: ['Sascha Depold']
        },
        {
            id: 'sqlalchemy',
            name: 'SQLAlchemy',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2006-02-14',
            description: 'SQL toolkit and ORM for Python with MySQL support',
            authors: ['Michael Bayer']
        },
        {
            id: 'django-orm',
            name: 'Django ORM',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2005-07-21',
            description: 'ORM built into Django web framework with MySQL support',
            authors: ['Django Software Foundation']
        },
        {
            id: 'hibernate',
            name: 'Hibernate',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2001-05-01',
            description: 'Object-relational mapping framework for Java with MySQL support',
            authors: ['Gavin King']
        },
        {
            id: 'gorm',
            name: 'GORM',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2013-10-25',
            description: 'The fantastic ORM library for Golang with MySQL support',
            authors: ['Jinzhu']
        },

        // Migration tools
        {
            id: 'flyway',
            name: 'Flyway',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-06-29',
            description: 'Database migration tool with MySQL support',
            authors: ['Axel Fontaine', 'Redgate']
        },
        {
            id: 'liquibase',
            name: 'Liquibase',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2006-12-05',
            description: 'Database schema change management with MySQL support',
            authors: ['Nathan Voxland']
        },
        {
            id: 'knex',
            name: 'Knex.js',
            category: 'Query Builder',
            language: 'JavaScript',
            releaseDate: '2013-04-21',
            description: 'SQL query builder for JavaScript with MySQL support',
            authors: ['Tim Griesser']
        },
        {
            id: 'dbeaver',
            name: 'DBeaver',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Universal database tool with MySQL support',
            authors: ['Serge Rider']
        },

        // BI инструменты
        {
            id: 'metabase',
            name: 'Metabase',
            category: 'BI',
            language: 'Java',
            releaseDate: '2015-10-01',
            description: 'Open source business intelligence tool with MySQL support',
            authors: ['Metabase Team']
        },
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-12-17',
            description: 'Modern data exploration and visualization platform with MySQL support',
            authors: ['Airbnb', 'Apache Software Foundation']
        },
        {
            id: 'redash',
            name: 'Redash',
            category: 'BI',
            language: 'Python',
            releaseDate: '2013-11-04',
            description: 'Open source data visualization and dashboard tool with MySQL support',
            authors: ['Arik Fraimovich']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'nextcloud',
            name: 'Nextcloud',
            category: 'Apps with abstract storage',
            language: 'PHP',
            releaseDate: '2016-06-02',
            description: 'Self-hosted productivity platform with MySQL support',
            authors: ['Nextcloud GmbH']
        },
        {
            id: 'gitea',
            name: 'Gitea',
            category: 'Apps with abstract storage',
            language: 'Go',
            releaseDate: '2016-12-24',
            description: 'Lightweight code hosting solution that supports MySQL',
            authors: ['Gitea Team']
        },
        {
            id: 'wordpress',
            name: 'WordPress',
            category: 'Apps with abstract storage',
            language: 'PHP',
            releaseDate: '2003-05-27',
            description: 'Popular CMS with native MySQL support',
            authors: ['WordPress Team']
        },

        // Логирование
        {
            id: 'fluentd',
            name: 'Fluentd',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2011-10-01',
            description: 'Open source data collector with MySQL output plugin',
            authors: ['Treasure Data']
        },
        {
            id: 'logstash',
            name: 'Logstash',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2010-08-02',
            description: 'Data processing pipeline with MySQL input/output support',
            authors: ['Jordan Sissel', 'Elastic']
        },

        // Message Broker
        {
            id: 'kafka-connect',
            name: 'Kafka Connect',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2015-11-01',
            description: 'Connector framework for Apache Kafka with MySQL source/sink connectors',
            authors: ['Apache Software Foundation', 'Confluent']
        },
        {
            id: 'debezium',
            name: 'Debezium',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2016-06-10',
            description: 'Platform for change data capture with MySQL connector',
            authors: ['Red Hat']
        },
        {
            id: 'maxwell',
            name: 'Maxwell',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2015-08-01',
            description: 'MySQL binlog processor that streams changes to Kafka, RabbitMQ, or other destinations',
            authors: ['Zendesk']
        }
    ],
    dependencies: [
        // Зависимости драйверов от стандартов
        {
            source: 'mysql-odbc',
            target: 'odbc',
            description: 'MySQL ODBC driver implements ODBC standard'
        },
        {
            source: 'mysql-connector-j',
            target: 'jdbc',
            description: 'MySQL Connector/J implements JDBC API'
        },
        {
            source: 'mysql-connector-net',
            target: 'adonet',
            description: 'MySQL Connector/NET implements ADO.NET interfaces'
        },
        {
            source: 'mysqlclient',
            target: 'dbapi',
            description: 'MySQLclient implements Python DB-API 2.0 specification'
        },
        {
            source: 'pymysql',
            target: 'dbapi',
            description: 'PyMySQL implements Python DB-API 2.0 specification'
        },
        {
            source: 'pdo-mysql',
            target: 'pdo',
            description: 'PDO_MYSQL implements PDO interface for MySQL'
        },
        {
            source: 'go-mysql-driver',
            target: 'database-sql',
            description: 'go-mysql-driver implements database/sql interface for MySQL'
        },

        // Другие зависимости
        {
            source: 'mysql-connector-j',
            target: 'hibernate',
            description: 'Hibernate uses JDBC to connect to MySQL'
        },
        {
            source: 'mysqlclient',
            target: 'sqlalchemy',
            description: 'SQLAlchemy can use MySQLclient for MySQL connections'
        },
        {
            source: 'pymysql',
            target: 'sqlalchemy',
            description: 'SQLAlchemy can use PyMySQL for MySQL connections'
        },
        {
            source: 'mysqlclient',
            target: 'django-orm',
            description: 'Django ORM can use MySQLclient for MySQL connections'
        },
        {
            source: 'go-mysql-driver',
            target: 'gorm',
            description: 'GORM uses go-mysql-driver for MySQL support'
        }
    ]
};

export default mysqlData;
