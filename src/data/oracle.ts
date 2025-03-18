import { TimelineData } from './types';
import { common } from './common';

const oracleData: TimelineData = {
    database: 'oracle',
    displayName: 'Oracle',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'JDBC Oracle',
                releaseDate: '1997-02-19',
                description: 'Oracle implementation of JDBC',
                repository: 'https://github.com/oracle/oracle-db-examples',
                authors: ['Oracle'],
                contributorsType: ['staff']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for Oracle',
                releaseDate: '2011-03-01',
                description: 'Oracle implementation of database/sql',
                repository: 'https://github.com/godror/godror',
                authors: ['Tamás Gulácsi'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'cx_Oracle',
                releaseDate: '1996-10-01',
                description: 'Oracle implementation of DB-API',
                repository: 'https://github.com/oracle/python-cx_Oracle',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'Oracle.ManagedDataAccess',
                releaseDate: '2000-01-01',
                description: 'Oracle implementation of ADO.NET',
                repository: 'https://github.com/oracle/dotnet-db-samples',
                authors: ['Oracle'],
                contributorsType: ['staff']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for Oracle',
                releaseDate: '2013-01-01',
                description: 'Oracle driver implementation of GORM',
                repository: 'https://github.com/go-gorm/oracle',
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper Oracle',
                releaseDate: '2011-01-01',
                description: 'Oracle implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Oracle Dialect',
                releaseDate: '2001-12-01',
                description: 'Oracle Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Hibernate Team'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Oracle SQLAlchemy Dialect',
                releaseDate: '2006-02-01',
                description: 'SQLAlchemy dialect for Oracle',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy Team'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Oracle Support',
                releaseDate: '2010-06-01',
                description: 'Oracle support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Oracle Support',
                releaseDate: '2006-12-01',
                description: 'Oracle support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose Oracle Driver',
                releaseDate: '2013-05-01',
                description: 'Oracle driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Oracle Support',
                releaseDate: '2010-06-01',
                description: 'Oracle support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Oracle Support',
                releaseDate: '2015-12-01',
                description: 'Oracle support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Oracle-specific frameworks
        {
            id: 'sqlplus',
            name: 'SQL*Plus',
            category: 'Admin',
            language: 'C',
            releaseDate: '1979-01-01',
            description: 'Command-line interface for Oracle Database',
            authors: ['Oracle'],
            implementation: {
                releaseDate: '1979-01-01',
                authors: ['Oracle'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'sqldeveloper',
            name: 'SQL Developer',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2006-01-01',
            description: 'Free integrated development environment that simplifies the development and management of Oracle Database',
            authors: ['Oracle'],
            implementation: {
                releaseDate: '2006-01-01',
                authors: ['Oracle'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Oracle Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for Oracle',
                repository: 'https://github.com/apache/spark',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Oracle Flink Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Flink connector for Oracle',
                repository: 'https://github.com/apache/flink',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'Oracle dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'Oracle adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Oracle Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for Oracle',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Grafana Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Oracle Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for Oracle',
                repository: 'https://github.com/apache/superset',
                authors: ['Airbnb', 'Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default oracleData; 