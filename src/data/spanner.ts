import { TimelineData } from './types';
import { common } from './common';

const spannerData: TimelineData = {
    database: 'spanner',
    displayName: 'Google Cloud Spanner',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Spanner JDBC Driver',
                releaseDate: '2017-01-01',
                description: 'Spanner implementation of JDBC',
                repository: 'https://github.com/googleapis/java-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Spanner Go Client',
                releaseDate: '2017-01-01',
                description: 'Spanner implementation of database/sql',
                repository: 'https://github.com/googleapis/google-cloud-go/tree/main/spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'google-cloud-spanner',
                releaseDate: '2017-01-01',
                description: 'Spanner implementation of DB-API',
                repository: 'https://github.com/googleapis/python-spanner',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Spanner Driver',
                releaseDate: '2019-01-01',
                description: 'Spanner driver implementation of GORM',
                repository: 'https://github.com/go-gorm/spanner',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM Spanner',
                releaseDate: '2018-01-01',
                description: 'Spanner implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Spanner SQLAlchemy Dialect',
                releaseDate: '2018-01-01',
                description: 'SQLAlchemy dialect for Spanner',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Spanner Support',
                releaseDate: '2019-01-01',
                description: 'Spanner support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-spanner',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Spanner Support',
                releaseDate: '2020-01-01',
                description: 'Spanner support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-spanner',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Spanner Support',
                releaseDate: '2018-01-01',
                description: 'Spanner support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Spanner Support',
                releaseDate: '2018-01-01',
                description: 'Spanner support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Spanner-specific frameworks
        {
            id: 'spanner-emulator',
            name: 'Spanner Emulator',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2017-01-01',
            description: 'Local emulator for Spanner development and testing',
            authors: ['Google'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'spanner-admin',
            name: 'Spanner Admin',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-01-01',
            description: 'Web-based administration interface for Spanner',
            authors: ['Google'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Google'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Spanner Spark Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Spark connector for Spanner',
                repository: 'https://github.com/GoogleCloudPlatform/spark-spanner-connector',
                authors: ['Google'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Spanner Flink Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Flink connector for Spanner',
                repository: 'https://github.com/GoogleCloudPlatform/flink-spanner-connector',
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
                name: 'Grafana Spanner Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for Spanner',
                repository: 'https://github.com/grafana/grafana-spanner-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Spanner Superset Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Superset support for Spanner',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default spannerData; 