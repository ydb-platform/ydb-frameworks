import { TimelineData } from './types';
import { common } from './common';

const mongodbData: TimelineData = {
    database: 'mongodb',
    displayName: 'MongoDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'MongoDB JDBC Driver',
                releaseDate: '2016-01-01',
                description: 'MongoDB implementation of JDBC',
                repository: 'https://github.com/mongodb/mongo-jdbc-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'MongoDB Go Driver',
                releaseDate: '2016-01-01',
                description: 'MongoDB implementation of database/sql',
                repository: 'https://github.com/mongodb/mongo-go-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'PyMongo',
                releaseDate: '2009-01-01',
                description: 'MongoDB implementation of DB-API',
                repository: 'https://github.com/mongodb/mongo-python-driver',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM MongoDB Driver',
                releaseDate: '2016-01-01',
                description: 'MongoDB driver implementation of GORM',
                repository: 'https://github.com/go-gorm/mongodb',
                authors: ['Jinzhu'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM MongoDB',
                releaseDate: '2011-01-01',
                description: 'MongoDB implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'MongoDB SQLAlchemy Dialect',
                releaseDate: '2012-01-01',
                description: 'SQLAlchemy dialect for MongoDB',
                repository: 'https://github.com/mongodb/mongo-sqlalchemy',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway MongoDB Support',
                releaseDate: '2018-01-01',
                description: 'MongoDB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-mongodb',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase MongoDB Support',
                releaseDate: '2019-01-01',
                description: 'MongoDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-mongodb',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver MongoDB Support',
                releaseDate: '2016-01-01',
                description: 'MongoDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip MongoDB Support',
                releaseDate: '2016-01-01',
                description: 'MongoDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // MongoDB-specific frameworks
        {
            id: 'mongoose',
            name: 'Mongoose',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2010-01-01',
            description: 'MongoDB object modeling tool designed to work in an asynchronous environment',
            authors: ['Valeri Karpov'],
            repository: 'https://github.com/Automattic/mongoose',
            implementation: {
                releaseDate: '2010-01-01',
                authors: ['Valeri Karpov'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'mongodb-compass',
            name: 'MongoDB Compass',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2016-01-01',
            description: 'The GUI for MongoDB',
            authors: ['MongoDB'],
            implementation: {
                releaseDate: '2016-01-01',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'mongodb-shell',
            name: 'MongoDB Shell',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2016-01-01',
            description: 'Command-line interface for MongoDB',
            authors: ['MongoDB'],
            implementation: {
                releaseDate: '2016-01-01',
                authors: ['MongoDB'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'MongoDB Spark Connector',
                releaseDate: '2015-01-01',
                description: 'Apache Spark connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-spark',
                authors: ['MongoDB'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'MongoDB Flink Connector',
                releaseDate: '2018-01-01',
                description: 'Apache Flink connector for MongoDB',
                repository: 'https://github.com/mongodb/mongo-flink',
                authors: ['MongoDB'],
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
                name: 'Grafana MongoDB Plugin',
                releaseDate: '2016-01-01',
                description: 'Grafana data source plugin for MongoDB',
                repository: 'https://github.com/grafana/grafana-mongodb-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'MongoDB Superset Connector',
                releaseDate: '2017-01-01',
                description: 'Apache Superset support for MongoDB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default mongodbData; 