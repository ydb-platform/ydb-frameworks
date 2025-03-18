// src/data/ydb.ts
import { TimelineData } from './types';
import { common } from './common';

const ydbData: TimelineData = {
    database: 'ydb',
    displayName: 'YDB',
    frameworks: [
        // Standard APIs
        {
            ...common.jdbc,
            implementation: {
                name: 'JDBC YDB',
                releaseDate: '2020-04-01',
                description: 'YDB implementation of JDBC',
                repository: 'https://github.com/ydb-platform/ydb-jdbc-driver',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['database-sql'],
            implementation: {
                name: 'database/sql driver for YDB',
                releaseDate: '2019-09-01',
                description: 'YDB implementation of database/sql',
                repository: 'https://github.com/ydb-platform/ydb-go-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dbapi,
            implementation: {
                name: 'DB-API driver for YDB',
                releaseDate: '2019-10-01',
                description: 'YDB implementation of DB-API',
                repository: 'https://github.com/ydb-platform/ydb-python-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common['ado-net'],
            implementation: {
                name: 'ADO.NET provider for YDB',
                releaseDate: '2022-07-01',
                description: 'YDB implementation of ADO.NET',
                repository: 'https://github.com/ydb-platform/ydb-dotnet-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORMs
        {
            ...common.gorm,
            implementation: {
                name: 'GORM driver for YDB',
                releaseDate: '2023-01-31',
                description: 'YDB driver implementation of GORM',
                repository: 'https://github.com/ydb-platform/gorm-driver',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            ...common.dapper,
            implementation: {
                name: 'Dapper YDB',
                releaseDate: '2023-01-01',
                description: 'YDB implementation of Dapper',
                repository: 'https://github.com/ydb-platform/ydb-dotnet-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff'],
            }
        },
        {
            ...common.hibernate,
            implementation: {
                name: 'Hibernate YDB Dialect',
                releaseDate: '2023-09-01',
                description: 'YDB Dialect for Hibernate ORM',
                repository: 'https://github.com/ydb-platform/ydb-java-dialects',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sqlalchemy,
            implementation: {
                name: 'YDB SQLAlchemy Dialect',
                releaseDate: '2023-09-01',
                description: 'SQLAlchemy dialect for YDB',
                repository: 'https://github.com/ydb-platform/ydb-sqlalchemy',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Migration tools
        {
            ...common.flyway,
            implementation: {
                name: 'Flyway YDB Dialect',
                releaseDate: '2023-09-01',
                description: 'YDB Dialect for Flyway',
                repository: 'https://github.com/ydb-platform/ydb-java-dialects',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.liquibase,
            implementation: {
                name: 'Liquibase YDB Dialect',
                releaseDate: '2023-09-01',
                description: 'YDB Dialect for Liquibase',
                repository: 'https://github.com/ydb-platform/ydb-java-dialects',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.goose,
            implementation: {
                name: 'goose YDB Driver',
                description: 'YDB Driver for goose migrations',
                releaseDate: '2023-01-10',
                repository: 'https://github.com/ydb-platform/ydb-go-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            ...common.dbeaver,
            implementation: {
                name: 'DBeaver YDB Support',
                releaseDate: '2020-04-01',
                description: 'YDB support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            ...common.datagrip,
            implementation: {
                name: 'DataGrip YDB Support',
                releaseDate: '2020-04-01',
                description: 'YDB support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // YDB-specific frameworks
        {
            id: 'yoj',
            name: 'YOJ',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2023-12-28',
            description: 'Yet Another ORM for Java',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/yoj-project',
            implementation: {
                releaseDate: '2023-12-28',
                description: 'YDB ORM for Java (YOJ) is a lightweight ORM for immutable entities, with native support for YDB',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'ydb-cli',
            name: 'YDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2019-08-01',
            description: 'Command-line interface for YDB database',
            authors: ['Yandex'],
            implementation: {
                releaseDate: '2019-08-01',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'ydb-ui',
            name: 'YDB Embedded (Web) UI',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2019-10-01',
            description: 'Web-based administration interface for YDB',
            authors: ['Yandex'],
            implementation: {
                name: 'YDB Embedded (Web) UI',
                releaseDate: '2019-10-01',
                description: 'Web-based administration interface for YDB',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'ydb-terraform-provider',
            name: 'YDB Terraform Provider',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2021-04-01',
            description: 'Terraform provider for YDB',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/terraform-provider-ydb',
            implementation: {
                releaseDate: '2021-04-01',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            ...common.spark,
            implementation: {
                name: 'YDB Spark Connector',
                releaseDate: '2021-09-01',
                description: 'Apache Spark connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-spark-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.flink,
            implementation: {
                name: 'YDB Flink Connector',
                releaseDate: '2022-03-01',
                description: 'Apache Flink connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-flink-connector',
                authors: ['Yandex'],
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
                name: 'Grafana YDB Plugin',
                releaseDate: '2021-06-01',
                description: 'Grafana data source plugin for YDB',
                repository: 'https://github.com/ydb-platform/ydb-grafana-datasource-plugin',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.superset,
            implementation: {
                name: 'YDB Superset Connector',
                releaseDate: '2024-12-01',
                description: 'Apache Superset support for YDB over SQLAlchemy',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default ydbData;