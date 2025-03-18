import { TimelineData } from './types';
import { common } from './common';

const bigtableData: TimelineData = {
    database: 'bigtable',
    displayName: 'Google BigTable',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'BigTable JDBC Driver',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of JDBC',
                repository: 'https://github.com/googleapis/java-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'BigTable Go Client',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of database/sql',
                repository: 'https://github.com/googleapis/google-cloud-go/tree/main/bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'google-cloud-bigtable',
                releaseDate: '2015-01-01',
                description: 'BigTable implementation of DB-API',
                repository: 'https://github.com/googleapis/python-bigtable',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM BigTable Driver',
                releaseDate: '2018-01-01',
                description: 'BigTable driver implementation of GORM',
                repository: 'https://github.com/go-gorm/bigtable',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM BigTable',
                releaseDate: '2017-01-01',
                description: 'BigTable implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'BigTable SQLAlchemy Dialect',
                releaseDate: '2017-01-01',
                description: 'SQLAlchemy dialect for BigTable',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway BigTable Support',
                releaseDate: '2019-01-01',
                description: 'BigTable support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-bigtable',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase BigTable Support',
                releaseDate: '2020-01-01',
                description: 'BigTable support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-bigtable',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver BigTable Support',
                releaseDate: '2017-01-01',
                description: 'BigTable support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip BigTable Support',
                releaseDate: '2017-01-01',
                description: 'BigTable support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // BigTable-specific frameworks
        {
            id: 'bigtable-emulator',
            name: 'BigTable Emulator',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2015-01-01',
            description: 'Local emulator for BigTable development and testing',
            authors: ['Google'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'bigtable-admin',
            name: 'BigTable Admin',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2015-01-01',
            description: 'Web-based administration interface for BigTable',
            authors: ['Google'],
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'BigTable Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for BigTable',
                repository: 'https://github.com/GoogleCloudPlatform/spark-bigtable-connector',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'BigTable Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for BigTable',
                repository: 'https://github.com/GoogleCloudPlatform/flink-bigtable-connector',
                authors: ['Google'],
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
                name: 'Grafana BigTable Plugin',
                releaseDate: '2017-01-01',
                description: 'Grafana data source plugin for BigTable',
                repository: 'https://github.com/grafana/grafana-bigtable-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'BigTable Superset Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Superset support for BigTable',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default bigtableData; 