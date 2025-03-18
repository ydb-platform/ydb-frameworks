import { TimelineData } from './types';
import { common } from './common';

const yugabytedbData: TimelineData = {
    database: 'yugabytedb',
    displayName: 'YugabyteDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'YugabyteDB JDBC Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of JDBC',
                repository: 'https://github.com/yugabyte/yugabyte-db',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'YugabyteDB Go Driver',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of database/sql',
                repository: 'https://github.com/yugabyte/yugabyte-db',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'yugabytedb',
                releaseDate: '2017-01-01',
                description: 'YugabyteDB implementation of DB-API',
                repository: 'https://github.com/yugabyte/yugabyte-db',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM YugabyteDB Driver',
                releaseDate: '2019-01-01',
                description: 'YugabyteDB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/postgres',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate YugabyteDB Dialect',
                releaseDate: '2018-01-01',
                description: 'YugabyteDB dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'YugabyteDB SQLAlchemy Dialect',
                releaseDate: '2018-01-01',
                description: 'SQLAlchemy dialect for YugabyteDB',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway YugabyteDB Support',
                releaseDate: '2019-01-01',
                description: 'YugabyteDB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-postgresql',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase YugabyteDB Support',
                releaseDate: '2020-01-01',
                description: 'YugabyteDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-postgresql',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver YugabyteDB Support',
                releaseDate: '2018-01-01',
                description: 'YugabyteDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip YugabyteDB Support',
                releaseDate: '2018-01-01',
                description: 'YugabyteDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // YugabyteDB-specific frameworks
        {
            id: 'yugabytedb-admin',
            name: 'YugabyteDB Admin',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2017-01-01',
            description: 'Web-based administration interface for YugabyteDB',
            authors: ['Yugabyte'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Yugabyte'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'yugabytedb-cli',
            name: 'YugabyteDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2017-01-01',
            description: 'Command-line interface for YugabyteDB',
            authors: ['Yugabyte'],
            implementation: {
                releaseDate: '2017-01-01',
                authors: ['Yugabyte'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'YugabyteDB Spark Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Spark connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yb-spark-connector',
                authors: ['Yugabyte'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'YugabyteDB Flink Connector',
                releaseDate: '2020-01-01',
                description: 'Apache Flink connector for YugabyteDB',
                repository: 'https://github.com/yugabyte/yb-flink-connector',
                authors: ['Yugabyte'],
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
                name: 'Grafana YugabyteDB Plugin',
                releaseDate: '2019-01-01',
                description: 'Grafana data source plugin for YugabyteDB',
                repository: 'https://github.com/grafana/grafana-postgresql-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'YugabyteDB Superset Connector',
                releaseDate: '2020-01-01',
                description: 'Apache Superset support for YugabyteDB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default yugabytedbData; 