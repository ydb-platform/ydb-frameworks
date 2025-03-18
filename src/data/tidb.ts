import { TimelineData } from './types';
import { common } from './common';

const tidbData: TimelineData = {
    database: 'tidb',
    displayName: 'TiDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'TiDB JDBC Driver',
                releaseDate: '2015-01-01',
                description: 'TiDB implementation of JDBC',
                repository: 'https://github.com/pingcap/tidb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'TiDB Go Driver',
                releaseDate: '2015-01-01',
                description: 'TiDB implementation of database/sql',
                repository: 'https://github.com/pingcap/tidb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'TiDB Python Driver',
                releaseDate: '2015-01-01',
                description: 'TiDB implementation of DB-API',
                repository: 'https://github.com/pingcap/tidb',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM TiDB Driver',
                releaseDate: '2018-01-01',
                description: 'TiDB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/mysql',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate TiDB Dialect',
                releaseDate: '2017-01-01',
                description: 'TiDB dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'TiDB SQLAlchemy Dialect',
                releaseDate: '2017-01-01',
                description: 'SQLAlchemy dialect for TiDB',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway TiDB Support',
                releaseDate: '2018-01-01',
                description: 'TiDB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-mysql',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase TiDB Support',
                releaseDate: '2019-01-01',
                description: 'TiDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-mysql',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver TiDB Support',
                releaseDate: '2017-01-01',
                description: 'TiDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip TiDB Support',
                releaseDate: '2017-01-01',
                description: 'TiDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // TiDB-specific frameworks
        {
            id: 'tidb-dashboard',
            name: 'TiDB Dashboard',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2019-01-01',
            description: 'Web-based administration interface for TiDB',
            authors: ['PingCAP'],
            implementation: {
                releaseDate: '2019-01-01',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'tiup',
            name: 'TiUP',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2020-01-01',
            description: 'TiDB component manager and deployment tool',
            authors: ['PingCAP'],
            implementation: {
                releaseDate: '2020-01-01',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'TiDB Spark Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Spark connector for TiDB',
                repository: 'https://github.com/pingcap/tispark',
                authors: ['PingCAP'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'TiDB Flink Connector',
                releaseDate: '2020-01-01',
                description: 'Apache Flink connector for TiDB',
                repository: 'https://github.com/pingcap/tiflink',
                authors: ['PingCAP'],
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
                name: 'Grafana TiDB Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for TiDB',
                repository: 'https://github.com/grafana/grafana-mysql-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'TiDB Superset Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Superset support for TiDB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default tidbData; 