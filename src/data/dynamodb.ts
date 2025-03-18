import { TimelineData } from './types';
import { common } from './common';

const dynamodbData: TimelineData = {
    database: 'dynamodb',
    displayName: 'Amazon DynamoDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'DynamoDB JDBC Driver',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of JDBC',
                repository: 'https://github.com/aws/aws-sdk-java',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'DynamoDB Go SDK',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of database/sql',
                repository: 'https://github.com/aws/aws-sdk-go',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'boto3',
                releaseDate: '2012-01-01',
                description: 'DynamoDB implementation of DB-API',
                repository: 'https://github.com/boto/boto3',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM DynamoDB Driver',
                releaseDate: '2018-01-01',
                description: 'DynamoDB driver implementation of GORM',
                repository: 'https://github.com/guregu/dynamo',
                authors: ['Yusuke Inuzuka'],
                contributorsType: ['open-source'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate OGM DynamoDB',
                releaseDate: '2014-01-01',
                description: 'DynamoDB implementation of Hibernate OGM',
                repository: 'https://github.com/hibernate/hibernate-ogm',
                authors: ['Red Hat'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'DynamoDB SQLAlchemy Dialect',
                releaseDate: '2015-01-01',
                description: 'SQLAlchemy dialect for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-python',
                authors: ['Amazon'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway DynamoDB Support',
                releaseDate: '2019-01-01',
                description: 'DynamoDB support for Flyway',
                repository: 'https://github.com/flyway/flyway-database-dynamodb',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase DynamoDB Support',
                releaseDate: '2020-01-01',
                description: 'DynamoDB support for Liquibase',
                repository: 'https://github.com/liquibase/liquibase-dynamodb',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver DynamoDB Support',
                releaseDate: '2018-01-01',
                description: 'DynamoDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip DynamoDB Support',
                releaseDate: '2018-01-01',
                description: 'DynamoDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // DynamoDB-specific frameworks
        {
            id: 'dynamodb-local',
            name: 'DynamoDB Local',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2012-01-01',
            description: 'Local version of DynamoDB for development and testing',
            authors: ['Amazon'],
            implementation: {
                releaseDate: '2012-01-01',
                authors: ['Amazon'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'dynamodb-admin',
            name: 'DynamoDB Admin',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2015-01-01',
            description: 'Web-based DynamoDB administration interface',
            authors: ['Aaron Heckmann'],
            repository: 'https://github.com/aaronshaf/dynamodb-admin',
            implementation: {
                releaseDate: '2015-01-01',
                authors: ['Aaron Heckmann'],
                contributorsType: ['open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'DynamoDB Spark Connector',
                releaseDate: '2016-01-01',
                description: 'Apache Spark connector for DynamoDB',
                repository: 'https://github.com/audienceproject/spark-dynamodb',
                authors: ['AudienceProject'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'DynamoDB Flink Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Flink connector for DynamoDB',
                repository: 'https://github.com/aws/aws-sdk-java-v2',
                authors: ['Amazon'],
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
                name: 'Grafana DynamoDB Plugin',
                releaseDate: '2018-01-01',
                description: 'Grafana data source plugin for DynamoDB',
                repository: 'https://github.com/grafana/grafana-dynamodb-datasource',
                authors: ['Grafana'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'DynamoDB Superset Connector',
                releaseDate: '2019-01-01',
                description: 'Apache Superset support for DynamoDB',
                authors: ['Apache'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default dynamodbData; 