// src/data/postgresql.ts
import { TimelineData } from './types';

const postgresqlData: TimelineData = {
    database: 'postgresql',
    frameworks: [
        {
            id: 'odbc',
            name: 'ODBC',
            category: 'Driver',
            language: 'C',
            releaseDate: '1992-01-01',
            dbSupportDate: '1998-01-01',
            description: 'Open Database Connectivity standard. PostgreSQL support was added through psqlODBC driver developed by PostgreSQL Global Development Group.',
            authors: ['Microsoft', 'PostgreSQL Global Development Group'],
            dbImplementationName: 'psqlODBC'
        },
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Driver',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '1998-01-01',
            description: 'Java Database Connectivity API. PostgreSQL support was added through the PostgreSQL JDBC Driver.',
            authors: ['Sun Microsystems', 'PostgreSQL Global Development Group'],
            dbImplementationName: 'PostgreSQL JDBC Driver'
        },
        {
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2006-06-24',
            description: 'Microsoft ADO.NET data provider. PostgreSQL support was added through Npgsql driver.',
            authors: ['Microsoft', 'Francisco Figueiredo Jr.', '.NET Foundation'],
            dbImplementationName: 'Npgsql',
            version: '1.0'
        },
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
        }
    ],
    dependencies: [
        {
            source: 'sqlalchemy',
            target: 'alembic',
            description: 'Alembic was designed to work with SQLAlchemy'
        }
    ]
};

export default postgresqlData;
