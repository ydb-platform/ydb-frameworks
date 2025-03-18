// src/data/postgresql.ts
import { TimelineData } from './types';
import { common } from './common';

const postgresqlData: TimelineData = {
    database: 'postgresql',
    displayName: 'PostgreSQL',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'JDBC PostgreSQL',
                releaseDate: '1997-02-19',
                description: 'PostgreSQL implementation of JDBC',
                repository: 'https://github.com/pgjdbc/pgjdbc',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for PostgreSQL',
                releaseDate: '2011-03-01',
                description: 'PostgreSQL implementation of database/sql',
                repository: 'https://github.com/lib/pq',
                authors: ['lib/pq contributors'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'psycopg2',
                releaseDate: '1996-10-01',
                description: 'PostgreSQL implementation of DB-API',
                repository: 'https://github.com/psycopg/psycopg2',
                authors: ['Federico Di Gregorio'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Npgsql',
                releaseDate: '2000-01-01',
                description: 'PostgreSQL implementation of ADO.NET',
                repository: 'https://github.com/npgsql/npgsql',
                authors: ['Npgsql Development Team'],
                contributorsType: ['open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for PostgreSQL',
                releaseDate: '2013-01-01',
                description: 'PostgreSQL driver implementation of GORM',
                repository: 'https://github.com/go-gorm/postgres',
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper PostgreSQL',
                releaseDate: '2011-01-01',
                description: 'PostgreSQL implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate PostgreSQL Dialect',
                releaseDate: '2001-12-01',
                description: 'PostgreSQL Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Hibernate Team'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'PostgreSQL SQLAlchemy Dialect',
                releaseDate: '2006-02-01',
                description: 'SQLAlchemy dialect for PostgreSQL',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy Team'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway PostgreSQL Support',
                releaseDate: '2010-06-01',
                description: 'PostgreSQL support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase PostgreSQL Support',
                releaseDate: '2006-12-01',
                description: 'PostgreSQL support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose PostgreSQL Driver',
                releaseDate: '2013-05-01',
                description: 'PostgreSQL driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver PostgreSQL Support',
                releaseDate: '2010-06-01',
                description: 'PostgreSQL support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip PostgreSQL Support',
                releaseDate: '2015-12-01',
                description: 'PostgreSQL support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // PostgreSQL-specific frameworks
        {
            id: 'pgadmin',
            name: 'pgAdmin',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2004-01-01',
            description: 'Comprehensive PostgreSQL database management tool',
            authors: ['pgAdmin Development Team'],
            repository: 'https://github.com/pgadmin-org/pgadmin4',
            implementation: {
                releaseDate: '2004-01-01',
                authors: ['pgAdmin Development Team'],
                contributorsType: ['open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'PostgreSQL Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for PostgreSQL',
                repository: 'https://github.com/apache/spark',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'PostgreSQL Flink Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Flink connector for PostgreSQL',
                repository: 'https://github.com/apache/flink',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'PostgreSQL dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'PostgreSQL adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'PostgreSQL Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for PostgreSQL',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Grafana Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'PostgreSQL Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for PostgreSQL',
                repository: 'https://github.com/apache/superset',
                authors: ['Airbnb', 'Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default postgresqlData;