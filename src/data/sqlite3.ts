import { TimelineData } from './types';
import { common } from './common';

const sqlite3Data: TimelineData = {
    database: 'sqlite3',
    displayName: 'SQLite3',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'SQLite JDBC Driver',
                releaseDate: '2000-01-01',
                description: 'SQLite implementation of JDBC',
                repository: 'https://github.com/xerial/sqlite-jdbc',
                authors: ['Taro L. Saito'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sqlite3',
                releaseDate: '2000-01-01',
                description: 'SQLite implementation of database/sql',
                repository: 'https://github.com/mattn/go-sqlite3',
                authors: ['Yasuhiro Matsumoto'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'sqlite3',
                releaseDate: '2000-01-01',
                description: 'SQLite implementation of DB-API',
                repository: 'https://github.com/python/cpython/tree/main/Modules/_sqlite',
                authors: ['Python Software Foundation'],
                contributorsType: ['open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM SQLite Driver',
                releaseDate: '2016-01-01',
                description: 'SQLite driver implementation of GORM',
                repository: 'https://github.com/go-gorm/sqlite',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate SQLite Dialect',
                releaseDate: '2005-01-01',
                description: 'SQLite dialect for Hibernate ORM',
                repository: 'https://github.com/hibernate/hibernate-orm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'SQLite SQLAlchemy Dialect',
                releaseDate: '2006-01-01',
                description: 'SQLAlchemy dialect for SQLite',
                repository: 'https://github.com/sqlalchemy/sqlalchemy',
                authors: ['SQLAlchemy'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway SQLite Support',
                releaseDate: '2012-01-01',
                description: 'SQLite support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-sqlite',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase SQLite Support',
                releaseDate: '2013-01-01',
                description: 'SQLite support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-sqlite',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver SQLite Support',
                releaseDate: '2010-01-01',
                description: 'SQLite support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip SQLite Support',
                releaseDate: '2010-01-01',
                description: 'SQLite support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // SQLite-specific frameworks
        {
            id: 'db-browser',
            name: 'DB Browser for SQLite',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2003-01-01',
            description: 'Visual database browser for SQLite',
            authors: ['DB Browser for SQLite Team'],
            implementation: {
                releaseDate: '2003-01-01',
                authors: ['DB Browser for SQLite Team'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'sqlite-cli',
            name: 'SQLite Command Line Tool',
            category: 'Admin',
            language: 'C',
            releaseDate: '2000-01-01',
            description: 'Command-line interface for SQLite',
            authors: ['SQLite Team'],
            implementation: {
                releaseDate: '2000-01-01',
                authors: ['SQLite Team'],
                contributorsType: ['open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'SQLite Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for SQLite',
                repository: 'https://github.com/apache/spark/tree/master/sql/core/src/main/scala/org/apache/spark/sql/jdbc',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'SQLite Flink Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Flink connector for SQLite',
                repository: 'https://github.com/apache/flink/tree/master/flink-connectors/flink-jdbc',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.dbt
        },

        // BI tools
        {
            ...common.grafana,
            implementation: {
                name: 'Grafana SQLite Plugin',
                releaseDate: '2015-01-01',
                description: 'Grafana data source plugin for SQLite',
                repository: 'https://github.com/grafana/grafana-sqlite-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'SQLite Superset Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Superset support for SQLite',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default sqlite3Data; 