// src/data/postgresql.ts
import { TimelineData } from './types';

const postgresqlData: TimelineData = {
    database: 'postgresql',
    displayName: 'PostgreSQL',
    frameworks: [
        // Стандарты API
        {
            id: 'odbc',
            name: 'ODBC',
            category: 'Standard',
            language: 'C',
            releaseDate: '1992-01-01',
            dbSupportDate: '1998-01-01',
            description: 'Open Database Connectivity standard',
            authors: ['Microsoft']
        },
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '1998-01-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2006-06-24',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '1998-05-12',
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
            dbSupportDate: '2011-12-01',
            description: 'Go standard database interface',
            authors: ['Go Team']
        },

        // Драйверы
        {
            id: 'psqlodbc',
            name: 'psqlODBC',
            category: 'Driver',
            language: 'C',
            releaseDate: '1998-01-01',
            description: 'PostgreSQL ODBC driver',
            authors: ['PostgreSQL Global Development Group']
        },
        {
            id: 'pgjdbc',
            name: 'PostgreSQL JDBC Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '1998-01-01',
            description: 'JDBC driver for PostgreSQL',
            authors: ['PostgreSQL Global Development Group']
        },
        {
            id: 'npgsql',
            name: 'Npgsql',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2006-06-24',
            description: 'PostgreSQL data provider for .NET',
            authors: ['Francisco Figueiredo Jr.', '.NET Foundation'],
            version: '1.0'
        },
        {
            id: 'psycopg2',
            name: 'Psycopg2',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2001-12-18',
            description: 'PostgreSQL database adapter for Python',
            authors: ['Federico Di Gregorio', 'Daniele Varrazzo']
        },
        {
            id: 'pdo-pgsql',
            name: 'PDO_PGSQL',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2005-06-01',
            description: 'PDO driver for PostgreSQL',
            authors: ['PHP Group']
        },
        {
            id: 'pq',
            name: 'pq',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2011-12-01',
            description: 'Pure Go Postgres driver for Go\'s database/sql package',
            authors: ['Blake Mizerany']
        },
        {
            id: 'pgx',
            name: 'pgx',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2014-03-30',
            description: 'PostgreSQL driver and toolkit for Go',
            authors: ['Jack Christensen']
        },

        // Остальные фреймворки (ORM, Migration, etc.)
        {
            id: 'pgadmin',
            name: 'pgAdmin',
            category: 'Admin',
            language: 'C++',
            releaseDate: '1998-09-09',
            description: 'Open source administration and management tool for PostgreSQL',
            authors: ['Dave Page']
        },
        {
            id: 'typeorm',
            name: 'TypeORM',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2016-01-01',
            description: 'ORM for TypeScript and JavaScript',
            authors: ['Umed Khudoiberdiev']
        },
        {
            id: 'prisma',
            name: 'Prisma',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2019-06-01',
            description: 'Next-generation ORM for Node.js and TypeScript',
            authors: ['Prisma']
        },
        {
            id: 'sequelize',
            name: 'Sequelize',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2011-07-18',
            description: 'Promise-based Node.js ORM',
            authors: ['Sascha Depold']
        },
        {
            id: 'sqlalchemy',
            name: 'SQLAlchemy',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2006-02-14',
            description: 'SQL toolkit and ORM for Python',
            authors: ['Michael Bayer']
        },
        {
            id: 'django-orm',
            name: 'Django ORM',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2005-07-21',
            description: 'ORM built into Django web framework',
            authors: ['Django Software Foundation']
        },
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
            id: 'gorm',
            name: 'GORM',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2013-10-25',
            description: 'The fantastic ORM library for Golang',
            authors: ['Jinzhu']
        },
        {
            id: 'flyway',
            name: 'Flyway',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-06-29',
            description: 'Database migration tool',
            authors: ['Axel Fontaine', 'Redgate']
        },
        {
            id: 'liquibase',
            name: 'Liquibase',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2006-12-05',
            description: 'Database schema change management',
            authors: ['Nathan Voxland']
        },
        {
            id: 'alembic',
            name: 'Alembic',
            category: 'Migration',
            language: 'Python',
            releaseDate: '2012-04-07',
            description: 'Database migration tool for SQLAlchemy',
            authors: ['Michael Bayer']
        },
        {
            id: 'knex',
            name: 'Knex.js',
            category: 'Query Builder',
            language: 'JavaScript',
            releaseDate: '2013-04-21',
            description: 'SQL query builder for JavaScript',
            authors: ['Tim Griesser']
        },
        {
            id: 'dbeaver',
            name: 'DBeaver',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Universal database tool',
            authors: ['Serge Rider']
        },

        // BI инструменты
        {
            id: 'metabase',
            name: 'Metabase',
            category: 'BI',
            language: 'Java',
            releaseDate: '2015-10-01',
            description: 'Open source business intelligence tool with PostgreSQL support',
            authors: ['Metabase Team']
        },
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-12-17',
            description: 'Modern data exploration and visualization platform with PostgreSQL support',
            authors: ['Airbnb', 'Apache Software Foundation']
        },
        {
            id: 'redash',
            name: 'Redash',
            category: 'BI',
            language: 'Python',
            releaseDate: '2013-11-04',
            description: 'Open source data visualization and dashboard tool with PostgreSQL support',
            authors: ['Arik Fraimovich']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'nextcloud',
            name: 'Nextcloud',
            category: 'Apps with abstract storage',
            language: 'PHP',
            releaseDate: '2016-06-02',
            description: 'Self-hosted productivity platform that can use PostgreSQL as backend',
            authors: ['Nextcloud GmbH']
        },
        {
            id: 'gitea',
            name: 'Gitea',
            category: 'Apps with abstract storage',
            language: 'Go',
            releaseDate: '2016-12-24',
            description: 'Lightweight code hosting solution that supports PostgreSQL',
            authors: ['Gitea Team']
        },
        {
            id: 'wordpress',
            name: 'WordPress',
            category: 'Apps with abstract storage',
            language: 'PHP',
            releaseDate: '2003-05-27',
            dbSupportDate: '2016-08-15', // Официальная поддержка PostgreSQL через плагин
            description: 'Popular CMS with PostgreSQL support via plugins',
            authors: ['WordPress Team']
        },

        // Логирование
        {
            id: 'fluentd',
            name: 'Fluentd',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2011-10-01',
            description: 'Open source data collector with PostgreSQL output plugin',
            authors: ['Treasure Data']
        },
        {
            id: 'logstash',
            name: 'Logstash',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2010-08-02',
            description: 'Data processing pipeline with PostgreSQL input/output support',
            authors: ['Jordan Sissel', 'Elastic']
        },

        // Message Broker
        {
            id: 'kafka-connect',
            name: 'Kafka Connect',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2015-11-01',
            description: 'Connector framework for Apache Kafka with PostgreSQL source/sink connectors',
            authors: ['Apache Software Foundation', 'Confluent']
        },
        {
            id: 'debezium',
            name: 'Debezium',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2016-06-10',
            description: 'Platform for change data capture with PostgreSQL connector',
            authors: ['Red Hat']
        },

        // Node.js фреймворки и библиотеки
        {
            id: 'node-postgres',
            name: 'node-postgres (pg)',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2010-12-12',
            description: 'Non-blocking PostgreSQL client for Node.js',
            authors: ['Brian Carlson', 'Community'],
            repository: 'https://github.com/brianc/node-postgres'
        },
        {
            id: 'knex-pg',
            name: 'Knex.js for PostgreSQL',
            category: 'Query Builder',
            language: 'JavaScript',
            releaseDate: '2013-04-21',
            description: 'SQL query builder for PostgreSQL in Node.js',
            authors: ['Tim Griesser', 'Community'],
            repository: 'https://github.com/knex/knex'
        },
        {
            id: 'objection-pg',
            name: 'Objection.js for PostgreSQL',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2015-03-01',
            description: 'ORM built on Knex.js for PostgreSQL',
            authors: ['Sami Koskimäki', 'Community'],
            repository: 'https://github.com/Vincit/objection.js'
        },
        {
            id: 'mikro-orm-pg',
            name: 'MikroORM for PostgreSQL',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2018-12-09',
            description: 'TypeScript ORM for Node.js based on Data Mapper pattern',
            authors: ['Martin Adámek', 'Community'],
            repository: 'https://github.com/mikro-orm/mikro-orm'
        },
        {
            id: 'bookshelf-pg',
            name: 'Bookshelf.js for PostgreSQL',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2013-05-01',
            description: 'JavaScript ORM for Node.js, built on Knex',
            authors: ['Tim Griesser', 'Community'],
            repository: 'https://github.com/bookshelf/bookshelf'
        },
        {
            id: 'slonik',
            name: 'Slonik',
            category: 'Query Builder',
            language: 'TypeScript',
            releaseDate: '2019-01-01',
            description: 'PostgreSQL client with strict types, detailed logging and assertions',
            authors: ['Gajus Kuizinas', 'Community'],
            repository: 'https://github.com/gajus/slonik'
        },
        {
            id: 'pg-promise',
            name: 'pg-promise',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2015-07-17',
            description: 'PostgreSQL interface for Node.js with powerful extensions',
            authors: ['Vitaly Tomilov', 'Community'],
            repository: 'https://github.com/vitaly-t/pg-promise'
        },
        {
            id: 'nestjs-pg',
            name: 'NestJS with PostgreSQL',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2017-11-01',
            description: 'Progressive Node.js framework with PostgreSQL support',
            authors: ['Kamil Myśliwiec', 'Community'],
            repository: 'https://github.com/nestjs/nest'
        },
        {
            id: 'typegoose-pg',
            name: 'Typegoose for PostgreSQL',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2017-06-01',
            description: 'Define Mongoose models using TypeScript classes',
            authors: ['Ben Grynhaus', 'Community'],
            repository: 'https://github.com/typegoose/typegoose'
        },
        {
            id: 'drizzle-orm-pg',
            name: 'DrizzleORM for PostgreSQL',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2022-05-15',
            description: 'TypeScript ORM with PostgreSQL support focused on type-safety and performance',
            authors: ['Drizzle Team', 'Community'],
            repository: 'https://github.com/drizzle-team/drizzle-orm'
        },
    ],
    dependencies: [
        // Зависимости драйверов от стандартов
        {
            source: 'psqlodbc',
            target: 'odbc',
            description: 'psqlODBC implements ODBC standard for PostgreSQL'
        },
        {
            source: 'pgjdbc',
            target: 'jdbc',
            description: 'PostgreSQL JDBC driver implements JDBC API'
        },
        {
            source: 'npgsql',
            target: 'adonet',
            description: 'Npgsql implements ADO.NET interfaces for PostgreSQL'
        },
        {
            source: 'psycopg2',
            target: 'dbapi',
            description: 'Psycopg2 implements Python DB-API 2.0 specification'
        },
        {
            source: 'pdo-pgsql',
            target: 'pdo',
            description: 'PDO_PGSQL implements PDO interface for PostgreSQL'
        },
        {
            source: 'pq',
            target: 'database-sql',
            description: 'pq implements database/sql interface for PostgreSQL'
        },
        {
            source: 'pgx',
            target: 'database-sql',
            description: 'pgx supports database/sql interface for PostgreSQL'
        },

        // Другие зависимости
        {
            source: 'sqlalchemy',
            target: 'alembic',
            description: 'Alembic was designed to work with SQLAlchemy'
        },
        {
            source: 'pgjdbc',
            target: 'hibernate',
            description: 'Hibernate uses JDBC to connect to PostgreSQL'
        },
        {
            source: 'psycopg2',
            target: 'sqlalchemy',
            description: 'SQLAlchemy uses Psycopg2 for PostgreSQL connections'
        },
        {
            source: 'psycopg2',
            target: 'django-orm',
            description: 'Django ORM uses Psycopg2 for PostgreSQL connections'
        },
        {
            source: 'pq',
            target: 'gorm',
            description: 'GORM uses pq driver for PostgreSQL support'
        }
    ]
};

export default postgresqlData;
