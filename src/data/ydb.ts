// src/data/ydb.ts
import { TimelineData } from './types';

const ydbData: TimelineData = {
    database: 'ydb',
    frameworks: [
        // Server-side features
        {
            id: 'ydb-table-ttl',
            name: 'Table TTL',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2020-03-15',
            description: 'Automatic expiration of table rows based on TTL settings',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-cdc',
            name: 'Change Data Capture',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2021-05-01',
            description: 'Stream of changes made to tables for real-time data processing',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-serverless-triggers',
            name: 'Serverless Triggers',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2021-08-20',
            description: 'Automatically execute code in response to data changes',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-secondary-indexes',
            name: 'Secondary Indexes',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2022-02-10',
            description: 'Automatically maintained indexes for faster queries on non-primary key columns',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },

        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2020-04-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems', 'Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2019-09-01',
            description: 'Go standard database interface',
            authors: ['Go Team', 'Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '2019-10-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG', 'Yandex'],
            contributorsType: ['staff']
        },

        // Драйверы
        {
            id: 'ydb-cpp-sdk',
            name: 'YDB C++ SDK',
            category: 'Driver',
            language: 'C++',
            releaseDate: '2018-11-15',
            description: 'Official C++ SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-go-sdk',
            name: 'YDB Go SDK',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2018-12-01',
            description: 'Official Go SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-python-sdk',
            name: 'YDB Python SDK',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2019-02-01',
            description: 'Official Python SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student']
        },
        {
            id: 'ydb-java-sdk',
            name: 'YDB Java SDK',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2019-03-15',
            description: 'Official Java SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-golang-database-sql',
            name: 'YDB database/sql Driver',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2019-09-01',
            description: 'database/sql driver implementation for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-jdbc',
            name: 'YDB JDBC Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2020-04-01',
            description: 'JDBC driver implementation for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student']
        },
        {
            id: 'ydb-dbapi',
            name: 'YDB DB-API',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2019-10-01',
            description: 'Python DB-API 2.0 interface for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student']
        },

        // Migration tools
        {
            id: 'goose',
            name: 'goose',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2013-05-01',
            dbSupportDate: '2023-01-10',
            description: 'Database migration tool for Go',
            authors: ['liamstask', 'pressly'],
            version: '3.18.0',
            contributorsType: ['open-source']
        },

        // ORM
        {
            id: 'sqlalchemy-ydb',
            name: 'SQLAlchemy YDB Dialect',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2021-03-01',
            description: 'SQLAlchemy dialect for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student']
        },

        // Admin tools
        {
            id: 'dbeaver',
            name: 'DBeaver',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            dbSupportDate: '2020-06-15',
            description: 'Universal database tool with YDB support',
            authors: ['Serge Rider'],
            contributorsType: ['open-source']
        },
        {
            id: 'ydb-cli',
            name: 'YDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2019-08-01',
            description: 'Command-line interface for YDB database',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-ui',
            name: 'YDB Web UI',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2019-10-01',
            description: 'Web-based administration interface for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },

        // ETL Tools
        {
            id: 'pandas',
            name: 'Pandas',
            category: 'ETL',
            language: 'Python',
            releaseDate: '2008-12-17',
            dbSupportDate: '2020-01-15',
            description: 'Data analysis and manipulation library with YDB support',
            authors: ['Wes McKinney', 'PyData Development Team'],
            contributorsType: ['open-source', 'student']
        },

        // BI tools
        {
            id: 'metabase',
            name: 'Metabase',
            category: 'BI',
            language: 'Java',
            releaseDate: '2015-10-01',
            dbSupportDate: '2021-11-15',
            description: 'Open source business intelligence tool with YDB support',
            authors: ['Metabase Team', 'Yandex'],
            version: '0.41.0',
            contributorsType: ['open-source', 'staff']
        },
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-12-17',
            dbSupportDate: '2022-05-01',
            description: 'Modern data exploration and visualization platform with YDB support',
            authors: ['Apache Software Foundation', 'Yandex'],
            contributorsType: ['open-source', 'staff']
        },

        // Apps with abstract storage
        {
            id: 'clickhouse-ydb-dictionary',
            name: 'ClickHouse YDB Dictionary',
            category: 'Apps with abstract storage',
            language: 'C++',
            releaseDate: '2022-01-01',
            description: 'ClickHouse dictionary source for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'yandex-cloud-functions',
            name: 'Yandex Cloud Functions',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2019-11-01',
            description: 'Serverless compute platform with YDB integration',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },

        // Logging
        {
            id: 'fluentd',
            name: 'Fluentd',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2011-10-01',
            dbSupportDate: '2022-03-01',
            description: 'Open source data collector with YDB output plugin',
            authors: ['Treasure Data', 'Yandex'],
            contributorsType: ['open-source', 'staff']
        },
        {
            id: 'logstash',
            name: 'Logstash',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2010-08-02',
            dbSupportDate: '2022-04-15',
            description: 'Data processing pipeline with YDB output support',
            authors: ['Elastic', 'Yandex'],
            contributorsType: ['open-source', 'staff']
        },

        // Message Broker
        {
            id: 'ydb-topic',
            name: 'YDB Topic',
            category: 'Message broker',
            language: 'C++',
            releaseDate: '2022-10-01',
            description: 'Native pub/sub messaging service in YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-queue',
            name: 'YDB Queue',
            category: 'Message broker',
            language: 'C++',
            releaseDate: '2021-07-01',
            description: 'Distributed queue implementation on top of YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        }
    ],
    dependencies: [
        // SDK и стандартные драйверы
        {
            source: 'ydb-go-sdk',
            target: 'ydb-golang-database-sql',
            description: 'YDB database/sql driver is built on top of Go SDK'
        },
        {
            source: 'ydb-java-sdk',
            target: 'ydb-jdbc',
            description: 'YDB JDBC driver is built on top of Java SDK'
        },
        {
            source: 'ydb-python-sdk',
            target: 'ydb-dbapi',
            description: 'YDB DB-API implementation is built on top of Python SDK'
        },

        // Зависимости от стандартов к драйверам
        {
            source: 'ydb-golang-database-sql',
            target: 'database-sql',
            description: 'YDB database/sql driver implements database/sql interface'
        },
        {
            source: 'ydb-jdbc',
            target: 'jdbc',
            description: 'YDB JDBC driver implements JDBC standard'
        },
        {
            source: 'ydb-dbapi',
            target: 'dbapi',
            description: 'YDB DB-API implements Python DB-API specification'
        },

        // Инструменты ORM и миграций
        {
            source: 'ydb-golang-database-sql',
            target: 'goose',
            description: 'goose needs database/sql driver for YDB support'
        },
        {
            source: 'ydb-dbapi',
            target: 'sqlalchemy-ydb',
            description: 'SQLAlchemy YDB dialect is built on DB-API'
        },

        // Admin tools
        {
            source: 'ydb-jdbc',
            target: 'dbeaver',
            description: 'DBeaver needs JDBC driver for YDB support'
        },

        // ETL и BI
        {
            source: 'ydb-dbapi',
            target: 'pandas',
            description: 'Pandas needs DB-API for YDB support'
        },
        {
            source: 'ydb-jdbc',
            target: 'metabase',
            description: 'Metabase uses JDBC driver to connect to YDB'
        },
        {
            source: 'sqlalchemy-ydb',
            target: 'superset',
            description: 'Superset uses SQLAlchemy to connect to YDB'
        },

        // Server-side features
        {
            source: 'ydb-cdc',
            target: 'ydb-serverless-triggers',
            description: 'Serverless Triggers rely on Change Data Capture for monitoring changes'
        },
        {
            source: 'ydb-topic',
            target: 'ydb-cdc',
            description: 'YDB CDC can publish changes to YDB Topic'
        },

        // Логирование
        {
            source: 'ydb-go-sdk',
            target: 'fluentd',
            description: 'Fluentd YDB plugin uses YDB Go SDK'
        },
        {
            source: 'ydb-java-sdk',
            target: 'logstash',
            description: 'Logstash YDB plugin uses YDB Java SDK'
        }
    ]
};

export default ydbData;
