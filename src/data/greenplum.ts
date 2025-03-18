import { TimelineData } from './types';
import { common } from './common';

const greenplumData: TimelineData = {
    database: 'greenplum',
    displayName: 'Greenplum',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Greenplum JDBC Driver',
                releaseDate: '2005-01-01',
                description: 'Greenplum implementation of JDBC',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Greenplum Go Driver',
                releaseDate: '2005-01-01',
                description: 'Greenplum implementation of database/sql',
                repository: 'https://github.com/greenplum-db/gpdb',
                authors: ['Greenplum'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'psycopg2',
                releaseDate: '2005-01-01',
                description: 'Greenplum implementation of DB-API',
                repository: 'https://github.com/psycopg/psycopg2',
                authors: ['Federico Di Gregorio'],
                contributorsType: ['open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Greenplum Driver',
                releaseDate: '2018-01-01',
                description: 'Greenplum driver implementation of GORM',
                repository: 'https://github.com/go-gorm/postgres',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Greenplum Dialect',
                releaseDate: '2010-01-01',
                description: 'Greenplum dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Greenplum SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for Greenplum',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Greenplum Support',
                releaseDate: '2015-01-01',
                description: 'Greenplum support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-postgresql',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Greenplum Support',
                releaseDate: '2016-01-01',
                description: 'Greenplum support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-postgresql',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Greenplum Support',
                releaseDate: '2015-01-01',
                description: 'Greenplum support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Greenplum Support',
                releaseDate: '2015-01-01',
                description: 'Greenplum support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Greenplum-specific frameworks
        {
            id: 'gpadmin',
            name: 'GPAdmin',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2005-01-01',
            description: 'Greenplum administration tool',
            authors: ['Pivotal'],
            implementation: {
                releaseDate: '2005-01-01',
                authors: ['Pivotal'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'gpcc',
            name: 'GPCC',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-01-01',
            description: 'Greenplum Command Center',
            authors: ['Pivotal'],
            implementation: {
                releaseDate: '2010-01-01',
                authors: ['Pivotal'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Greenplum Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for Greenplum',
                repository: 'https://github.com/pivotal/gp-spark-connector',
                authors: ['Pivotal'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Greenplum Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for Greenplum',
                repository: 'https://github.com/pivotal/gp-flink-connector',
                authors: ['Pivotal'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana Greenplum Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for Greenplum',
                repository: 'https://github.com/grafana/grafana-postgresql-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Greenplum Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Greenplum',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default greenplumData; 