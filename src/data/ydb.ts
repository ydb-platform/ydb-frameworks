// src/data/ydb.ts
import { TimelineData } from './types';

const ydbData: TimelineData = {
    database: 'ydb',
    frameworks: [
        {
            id: 'ydb-cpp-sdk',
            name: 'YDB C++ SDK',
            category: 'Driver',
            language: 'C++',
            releaseDate: '2018-11-15',
            description: 'Official C++ SDK for YDB',
            authors: ['Yandex']
        },
        {
            id: 'ydb-go-sdk',
            name: 'YDB Go SDK',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2018-12-01',
            description: 'Official Go SDK for YDB',
            authors: ['Yandex']
        },
        {
            id: 'ydb-python-sdk',
            name: 'YDB Python SDK',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2019-02-01',
            description: 'Official Python SDK for YDB',
            authors: ['Yandex']
        },
        {
            id: 'ydb-java-sdk',
            name: 'YDB Java SDK',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2019-03-15',
            description: 'Official Java SDK for YDB',
            authors: ['Yandex']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2019-09-01',
            description: 'Go standard database interface. YDB support was added through the YDB database/sql driver.',
            authors: ['Go Team', 'Yandex'],
            dbImplementationName: 'YDB database/sql Driver'
        },
        {
            id: 'goose',
            name: 'goose',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2013-05-01',
            dbSupportDate: '2023-01-10',
            description: 'Database migration tool for Go. YDB support was added in version 3.18.0.',
            authors: ['liamstask', 'pressly'],
            version: '3.18.0'
        },
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Driver',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2020-04-01',
            description: 'Java Database Connectivity API. YDB support was added through YDB JDBC Driver.',
            authors: ['Sun Microsystems', 'Yandex'],
            dbImplementationName: 'YDB JDBC Driver'
        },
        {
            id: 'dbeaver',
            name: 'DBeaver',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            dbSupportDate: '2020-06-15',
            description: 'Universal database tool with YDB support',
            authors: ['Serge Rider']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Driver',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '2019-10-01',
            description: 'Python Database API Specification. YDB support was added through YDB DB-API implementation.',
            authors: ['Python DB-SIG', 'Yandex'],
            dbImplementationName: 'YDB DB-API'
        },
        {
// src/data/ydb.ts (продолжение)
            id: 'pandas',
            name: 'Pandas',
            category: 'ETL',
            language: 'Python',
            releaseDate: '2008-12-17',
            dbSupportDate: '2020-01-15',
            description: 'Data analysis and manipulation library with YDB support',
            authors: ['Wes McKinney', 'PyData Development Team']
        },
        {
            id: 'sqlalchemy',
            name: 'SQLAlchemy',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2006-02-14',
            dbSupportDate: '2021-03-01',
            description: 'SQL toolkit and ORM for Python. YDB support was added through SQLAlchemy dialect.',
            authors: ['Michael Bayer', 'Yandex'],
            dbImplementationName: 'SQLAlchemy YDB Dialect'
        },
        {
            id: 'ydb-cli',
            name: 'YDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2019-08-01',
            description: 'Command-line interface for YDB database',
            authors: ['Yandex']
        },
        {
            id: 'ydb-ui',
            name: 'YDB Web UI',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2019-10-01',
            description: 'Web-based administration interface for YDB',
            authors: ['Yandex']
        }
    ],
    dependencies: [
        {
            source: 'ydb-go-sdk',
            target: 'database-sql',
            description: 'database/sql driver is built on top of Go SDK'
        },
        {
            source: 'database-sql',
            target: 'goose',
            description: 'goose needs database/sql driver for YDB support'
        },
        {
            source: 'ydb-java-sdk',
            target: 'jdbc',
            description: 'JDBC driver is built on top of Java SDK'
        },
        {
            source: 'jdbc',
            target: 'dbeaver',
            description: 'DBeaver needs JDBC driver for YDB support'
        },
        {
            source: 'ydb-python-sdk',
            target: 'dbapi',
            description: 'DB-API implementation is built on top of Python SDK'
        },
        {
            source: 'dbapi',
            target: 'pandas',
            description: 'Pandas needs DB-API for YDB support'
        },
        {
            source: 'dbapi',
            target: 'sqlalchemy',
            description: 'SQLAlchemy YDB dialect is built on DB-API'
        }
    ]
};

export default ydbData;
