import { TimelineData } from './types';
import { common } from './common';

const cockroachdbData: TimelineData = {
    database: 'cockroachdb',
    displayName: 'CockroachDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'CockroachDB JDBC Driver',
                releaseDate: '2015-01-01',
                description: 'CockroachDB implementation of JDBC',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'CockroachDB Go Driver',
                releaseDate: '2015-01-01',
                description: 'CockroachDB implementation of database/sql',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'cockroachdb',
                releaseDate: '2015-01-01',
                description: 'CockroachDB implementation of DB-API',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM CockroachDB Driver',
                releaseDate: '2015-01-01',
                description: 'CockroachDB driver implementation of GORM',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate CockroachDB Dialect',
                releaseDate: '2015-01-01',
                description: 'CockroachDB dialect for Hibernate',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'CockroachDB SQLAlchemy Dialect',
                releaseDate: '2015-01-01',
                description: 'SQLAlchemy dialect for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway CockroachDB Support',
                releaseDate: '2015-01-01',
                description: 'CockroachDB support for Flyway',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase CockroachDB Support',
                releaseDate: '2015-01-01',
                description: 'CockroachDB support for Liquibase',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver CockroachDB Support',
                releaseDate: '2015-01-01',
                description: 'CockroachDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip CockroachDB Support',
                releaseDate: '2015-01-01',
                description: 'CockroachDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // CockroachDB-specific frameworks
        {
            id: 'cockroachdb-admin',
            name: 'CockroachDB Admin',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Web-based administration interface for CockroachDB',
            authors: ['Cockroach Labs'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'cockroachdb-cli',
            name: 'CockroachDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2015-01-01',
            description: 'Command-line interface for CockroachDB',
            authors: ['Cockroach Labs'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'CockroachDB Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'CockroachDB Flink Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Flink connector for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'CockroachDB Grafana Plugin',
                releaseDate: '2015-01-01',
                description: 'Grafana data source plugin for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'CockroachDB Superset Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Superset support for CockroachDB',
                repository: 'https://github.com/cockroachdb/cockroach',
                authors: ['Cockroach Labs'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default cockroachdbData; 