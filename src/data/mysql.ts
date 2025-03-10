// src/data/mysql.ts
import { TimelineData } from './types';

const mysqlData: TimelineData = {
    database: 'mysql',
    frameworks: [
        {
            id: 'odbc',
            name: 'ODBC',
            category: 'Driver',
            language: 'C',
            releaseDate: '1992-01-01',
            dbSupportDate: '1996-01-01',
            description: 'Open Database Connectivity standard. MySQL support was added through MySQL ODBC Driver (Connector/ODBC).',
            authors: ['Microsoft', 'MySQL AB', 'Oracle'],
            dbImplementationName: 'MySQL ODBC Driver (Connector/ODBC)'
        },
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Driver',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '1999-01-01',
            description: 'Java Database Connectivity API. MySQL support was added through MySQL Connector/J.',
            authors: ['Sun Microsystems', 'MySQL AB', 'Oracle'],
            dbImplementationName: 'MySQL Connector/J'
        },
        {
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2004-10-20',
            description: 'Microsoft ADO.NET data provider. MySQL support was added through MySQL Connector/NET.',
            authors: ['Microsoft', 'MySQL AB', 'Oracle'],
            dbImplementationName: 'MySQL Connector/NET',
            version: '1.0'
        },
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
        }
    ],
    dependencies: []
};

export default mysqlData;
