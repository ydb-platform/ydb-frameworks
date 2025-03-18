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
        {
            ...common.typeorm,
            implementation: {
                name: 'TypeORM YDB Driver',
                releaseDate: '2023-12-01',
                description: 'YDB driver for TypeORM',
                repository: 'https://github.com/ydb-platform/ydb-typescript-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sequelize,
            implementation: {
                name: 'Sequelize YDB Dialect',
                releaseDate: '2023-12-01',
                description: 'YDB dialect for Sequelize',
                repository: 'https://github.com/ydb-platform/ydb-typescript-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['entity-framework-core'],
            implementation: {
                name: 'Entity Framework Core YDB Provider',
                releaseDate: '2023-01-01',
                description: 'YDB provider for Entity Framework Core',
                repository: 'https://github.com/ydb-platform/ydb-dotnet-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.jooq,
            implementation: {
                name: 'jOOQ YDB Support',
                releaseDate: '2023-09-01',
                description: 'YDB support for jOOQ',
                repository: 'https://github.com/ydb-platform/ydb-java-sdk',
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
        {
            ...common.alembic,
            implementation: {
                name: 'Alembic YDB Dialect',
                releaseDate: '2023-09-01',
                description: 'YDB dialect for Alembic',
                repository: 'https://github.com/ydb-platform/ydb-sqlalchemy',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common['typeorm-migrations'],
            implementation: {
                name: 'TypeORM YDB Migrations',
                releaseDate: '2023-12-01',
                description: 'Migration system for TypeORM with YDB',
                repository: 'https://github.com/ydb-platform/ydb-typescript-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.knex,
            implementation: {
                name: 'Knex.js YDB Driver',
                releaseDate: '2023-12-01',
                description: 'YDB driver for Knex.js',
                repository: 'https://github.com/ydb-platform/ydb-typescript-sdk',
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
            ...common.airflow,
            implementation: {
                name: 'YDB Airflow Provider',
                releaseDate: '2023-01-01',
                description: 'Apache Airflow provider for YDB',
                repository: 'https://github.com/ydb-platform/ydb-airflow-provider',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.nifi,
            implementation: {
                name: 'YDB NiFi Processor',
                releaseDate: '2023-01-01',
                description: 'Apache NiFi processor for YDB',
                repository: 'https://github.com/ydb-platform/ydb-nifi-processor',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.kafka,
            implementation: {
                name: 'YDB Kafka Connector',
                releaseDate: '2023-01-01',
                description: 'Apache Kafka connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-kafka-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.beam,
            implementation: {
                name: 'YDB Beam IO',
                releaseDate: '2023-01-01',
                description: 'Apache Beam IO for YDB',
                repository: 'https://github.com/ydb-platform/ydb-beam-io',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.dbt,
            implementation: {
                name: 'YDB dbt Adapter',
                releaseDate: '2023-01-01',
                description: 'dbt adapter for YDB',
                repository: 'https://github.com/ydb-platform/ydb-dbt-adapter',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.fivetran,
            implementation: {
                name: 'YDB Fivetran Connector',
                releaseDate: '2023-01-01',
                description: 'Fivetran connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-fivetran-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.stitch,
            implementation: {
                name: 'YDB Stitch Connector',
                releaseDate: '2023-01-01',
                description: 'Stitch connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-stitch-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.talend,
            implementation: {
                name: 'YDB Talend Component',
                releaseDate: '2023-01-01',
                description: 'Talend component for YDB',
                repository: 'https://github.com/ydb-platform/ydb-talend-component',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
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
        },
        {
            ...common.tableau,
            implementation: {
                name: 'YDB Tableau Connector',
                releaseDate: '2023-01-01',
                description: 'Tableau connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-tableau-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.powerbi,
            implementation: {
                name: 'YDB Power BI Connector',
                releaseDate: '2023-01-01',
                description: 'Power BI connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-powerbi-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.looker,
            implementation: {
                name: 'YDB Looker Connector',
                releaseDate: '2023-01-01',
                description: 'Looker connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-looker-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.metabase,
            implementation: {
                name: 'YDB Metabase Driver',
                releaseDate: '2023-01-01',
                description: 'Metabase driver for YDB',
                repository: 'https://github.com/ydb-platform/ydb-metabase-driver',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.redash,
            implementation: {
                name: 'YDB Redash Query Runner',
                releaseDate: '2023-01-01',
                description: 'Redash query runner for YDB',
                repository: 'https://github.com/ydb-platform/ydb-redash-query-runner',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.mode,
            implementation: {
                name: 'YDB Mode Connector',
                releaseDate: '2023-01-01',
                description: 'Mode connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-mode-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.sisense,
            implementation: {
                name: 'YDB Sisense Connector',
                releaseDate: '2023-01-01',
                description: 'Sisense connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-sisense-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            ...common.qlik,
            implementation: {
                name: 'YDB Qlik Connector',
                releaseDate: '2023-01-01',
                description: 'Qlik connector for YDB',
                repository: 'https://github.com/ydb-platform/ydb-qlik-connector',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        }
    ],
    dependencies: []
};

export default ydbData;