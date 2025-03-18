import { TimelineData } from './types';
import { common } from './common';

const verticaData: TimelineData = {
    database: 'vertica',
    displayName: 'Vertica',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'Vertica JDBC Driver',
                releaseDate: '2005-01-01',
                description: 'Vertica implementation of JDBC',
                repository: 'https://github.com/vertica/vertica-jdbc',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'Vertica Go Driver',
                releaseDate: '2005-01-01',
                description: 'Vertica implementation of database/sql',
                repository: 'https://github.com/vertica/vertica-go',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'vertica-python',
                releaseDate: '2005-01-01',
                description: 'Vertica implementation of DB-API',
                repository: 'https://github.com/vertica/vertica-python',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM Vertica Driver',
                releaseDate: '2018-01-01',
                description: 'Vertica driver implementation of GORM',
                repository: 'https://github.com/go-gorm/postgres',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate Vertica Dialect',
                releaseDate: '2010-01-01',
                description: 'Vertica dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'Vertica SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for Vertica',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway Vertica Support',
                releaseDate: '2015-01-01',
                description: 'Vertica support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-postgresql',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase Vertica Support',
                releaseDate: '2016-01-01',
                description: 'Vertica support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-postgresql',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver Vertica Support',
                releaseDate: '2015-01-01',
                description: 'Vertica support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip Vertica Support',
                releaseDate: '2015-01-01',
                description: 'Vertica support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // Vertica-specific frameworks
        {
            id: 'vsql',
            name: 'vsql',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2005-01-01',
            description: 'Command-line interface for Vertica',
            authors: ['Vertica'],
            implementation: {
                releaseDate: '2005-01-01',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'vmc',
            name: 'Vertica Management Console',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-01-01',
            description: 'Web-based administration interface for Vertica',
            authors: ['Vertica'],
            implementation: {
                releaseDate: '2010-01-01',
                authors: ['Vertica'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'Vertica Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for Vertica',
                repository: 'https://github.com/vertica/vertica-spark-connector',
                authors: ['Vertica'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'Vertica Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for Vertica',
                repository: 'https://github.com/vertica/vertica-flink-connector',
                authors: ['Vertica'],
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
                name: 'Grafana Vertica Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for Vertica',
                repository: 'https://github.com/grafana/grafana-postgresql-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'Vertica Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for Vertica',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default verticaData; 