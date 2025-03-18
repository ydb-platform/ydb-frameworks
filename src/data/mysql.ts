// src/data/mysql.ts
import { TimelineData } from './types';
import { common } from './common';

const mysqlData: TimelineData = {
    database: 'mysql',
    displayName: 'MySQL',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'JDBC MySQL',
                releaseDate: '1997-02-19',
                description: 'MySQL implementation of JDBC',
                repository: 'https://github.com/mysql/mysql-connector-j',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for MySQL',
                releaseDate: '2011-03-01',
                description: 'MySQL implementation of database/sql',
                repository: 'https://github.com/go-sql-driver/mysql',
                authors: ['Julien Schmidt'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'mysql-connector-python',
                releaseDate: '1996-10-01',
                description: 'MySQL implementation of DB-API',
                repository: 'https://github.com/mysql/mysql-connector-python',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'MySql.Data',
                releaseDate: '2000-01-01',
                description: 'MySQL implementation of ADO.NET',
                repository: 'https://github.com/mysql/mysql-connector-dotnet',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for MySQL',
                releaseDate: '2013-01-01',
                description: 'MySQL driver implementation of GORM',
                repository: 'https://github.com/go-gorm/mysql',
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper MySQL',
                releaseDate: '2011-01-01',
                description: 'MySQL implementation of Dapper',
                repository: 'https://github.com/StackExchange/Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate MySQL Dialect',
                releaseDate: '2001-12-01',
                description: 'MySQL Dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Hibernate Team'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'MySQL SQLAlchemy Dialect',
                releaseDate: '2006-02-01',
                description: 'SQLAlchemy dialect for MySQL',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy Team'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway MySQL Support',
                releaseDate: '2010-06-01',
                description: 'MySQL support for Flyway',
                repository: 'https://github.com/flyway/flyway',
                authors: ['Redgate'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase MySQL Support',
                releaseDate: '2006-12-01',
                description: 'MySQL support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase',
                authors: ['Liquibase'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose MySQL Driver',
                releaseDate: '2013-05-01',
                description: 'MySQL driver for goose migrations',
                repository: 'https://github.com/pressly/goose',
                authors: ['liamstask', 'pressly'],
                contributorsType: ['open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver MySQL Support',
                releaseDate: '2010-06-01',
                description: 'MySQL support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip MySQL Support',
                releaseDate: '2015-12-01',
                description: 'MySQL support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // MySQL-specific frameworks
        {
            id: 'mysqlworkbench',
            name: 'MySQL Workbench',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2005-01-01',
            description: 'Unified visual tool for database architects, developers, and DBAs',
            authors: ['Oracle'],
            implementation: {
                releaseDate: '2005-01-01',
                authors: ['Oracle'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'MySQL Spark Connector',
                releaseDate: '2014-05-30',
                description: 'Apache Spark connector for MySQL',
                repository: 'https://github.com/apache/spark',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'MySQL Flink Connector',
                releaseDate: '2011-01-01',
                description: 'Apache Flink connector for MySQL',
                repository: 'https://github.com/apache/flink',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'MySQL dbt Adapter',
                releaseDate: '2016-12-01',
                description: 'MySQL adapter for dbt',
                repository: 'https://github.com/dbt-labs/dbt-core',
                authors: ['dbt Labs'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'MySQL Grafana Plugin',
                releaseDate: '2014-01-01',
                description: 'Grafana data source plugin for MySQL',
                repository: 'https://github.com/grafana/grafana',
                authors: ['Grafana Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'MySQL Superset Connector',
                releaseDate: '2015-10-01',
                description: 'Apache Superset support for MySQL',
                repository: 'https://github.com/apache/superset',
                authors: ['Airbnb', 'Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default mysqlData;