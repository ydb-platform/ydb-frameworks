// src/data/ydb.ts
import { TimelineData } from './types';

const ydbData: TimelineData = {
    database: 'ydb',
    displayName: 'YDB',
    frameworks: [
        // Server-side features
        {
            id: 'ydb-table-ttl',
            name: 'Table TTL',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2020-03-15',
            description: 'Automatic expiration of table rows based on TTL settings',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-cdc',
            name: 'Change Data Capture',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2021-05-01',
            description: 'Stream of changes made to tables for real-time data processing',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-serverless-triggers',
            name: 'Serverless Triggers',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2021-08-20',
            description: 'Automatically execute code in response to data changes',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-secondary-indexes',
            name: 'Secondary Indexes',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2022-02-10',
            description: 'Automatically maintained indexes for faster queries on non-primary key columns',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-partitioning',
            name: 'Advanced Partitioning',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2020-06-01',
            description: 'Flexible partitioning strategies for high-load systems',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-json-support',
            name: 'JSON Support',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2021-03-01',
            description: 'Native JSON data type and operations',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-scripting',
            name: 'Stored Procedures',
            category: 'Server-side feature',
            language: 'JavaScript',
            releaseDate: '2022-01-15',
            description: 'Server-side JavaScript procedures',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-backup-restore',
            name: 'Backup and Restore',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2019-08-01',
            description: 'Consistent backup and restore capabilities',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },

        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2020-04-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems', 'Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2019-09-01',
            description: 'Go standard database interface',
            authors: ['Go Team', 'Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '2019-10-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG', 'Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ado-net',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2022-07-01',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft', 'Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // Драйверы
        {
            id: 'ydb-cpp-sdk',
            name: 'YDB C++ SDK',
            category: 'Driver',
            language: 'C++',
            releaseDate: '2018-11-15',
            description: 'Official C++ SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-go-sdk',
            name: 'YDB Go SDK',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2018-12-01',
            description: 'Official Go SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-go-sdk'
        },
        {
            id: 'ydb-python-sdk',
            name: 'YDB Python SDK',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2019-02-01',
            description: 'Official Python SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student'],
            repository: 'https://github.com/ydb-platform/ydb-python-sdk'
        },
        {
            id: 'ydb-java-sdk',
            name: 'YDB Java SDK',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2019-03-15',
            description: 'Official Java SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-java-sdk'
        },
        {
            id: 'ydb-rust-sdk',
            name: 'YDB Rust SDK',
            category: 'Driver',
            language: 'Rust',
            releaseDate: '2021-11-01',
            description: 'Official Rust SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-rust-sdk'
        },
        {
            id: 'ydb-nodejs-sdk',
            name: 'YDB Node.js SDK',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2020-09-01',
            description: 'Official Node.js SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-sdk'
        },
        {
            id: 'ydb-dotnet-sdk',
            name: 'YDB .NET SDK',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2022-07-01',
            description: 'Official .NET SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-dotnet-sdk'
        },
        {
            id: 'ydb-php-sdk',
            name: 'YDB PHP SDK',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2022-02-01',
            description: 'Official PHP SDK for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-php-sdk'
        },
        {
            id: 'ydb-golang-database-sql',
            name: 'YDB database/sql Driver',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2019-09-01',
            description: 'database/sql driver implementation for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-jdbc',
            name: 'YDB JDBC Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2020-04-01',
            description: 'JDBC driver implementation for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student'],
            repository: 'https://github.com/ydb-platform/ydb-jdbc-driver'
        },
        {
            id: 'ydb-dbapi',
            name: 'YDB DB-API',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2019-10-01',
            description: 'Python DB-API 2.0 interface for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student']
        },
        {
            id: 'ydb-adonet',
            name: 'YDB ADO.NET Provider',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2022-07-01',
            description: 'ADO.NET data provider for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // Migration tools
        {
            id: 'goose',
            name: 'goose',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2013-05-01',
            dbSupportDate: '2023-01-10',
            description: 'Database migration tool for Go',
            authors: ['liamstask', 'pressly'],
            version: '3.18.0',
            contributorsType: ['open-source'],
            repository: 'https://github.com/pressly/goose'
        },
        {
            id: 'ydb-migrate',
            name: 'YDB Migrate',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2022-10-01',
            description: 'Official migration tool for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-data-transfer',
            name: 'YDB Data Transfer',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2021-08-01',
            description: 'Data migration tool for transferring data to/from YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'liquibase-ydb',
            name: 'Liquibase YDB Extension',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2022-09-01',
            description: 'Liquibase extension for YDB schema migrations',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/liquibase-ydb'
        },

        // ORM
        {
            id: 'sqlalchemy-ydb',
            name: 'SQLAlchemy YDB Dialect',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2021-03-01',
            description: 'SQLAlchemy dialect for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student']
        },
        {
            id: 'sqlx-ydb',
            name: 'sqlx YDB',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2022-06-01',
            description: 'YDB adapter for sqlx library',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'gorm-ydb',
            name: 'GORM YDB',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2022-08-01',
            description: 'YDB dialect for GORM',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/gorm-driver'
        },
        {
            id: 'hibernate-ydb',
            name: 'Hibernate YDB Dialect',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2022-05-01',
            description: 'Hibernate ORM dialect for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-java-hibernate'
        },
        {
            id: 'spring-data-ydb',
            name: 'Spring Data YDB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2021-11-01',
            description: 'Spring Data repository support for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-java-spring-data'
        },
        {
            id: 'entity-framework-ydb',
            name: 'Entity Framework Core YDB Provider',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2022-08-01',
            description: 'Entity Framework Core provider for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'typeorm-ydb',
            name: 'TypeORM YDB Driver',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2022-03-01',
            description: 'TypeORM driver for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'prisma-ydb',
            name: 'Prisma YDB Driver',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2023-02-01',
            description: 'Prisma driver for YDB (experimental)',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // Admin tools
        {
            id: 'dbeaver',
            name: 'DBeaver',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            dbSupportDate: '2020-06-15',
            description: 'Universal database tool with YDB support',
            authors: ['Serge Rider'],
            contributorsType: ['open-source'],
            repository: 'https://github.com/dbeaver/dbeaver'
        },
        {
            id: 'ydb-cli',
            name: 'YDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2019-08-01',
            description: 'Command-line interface for YDB database',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-ui',
            name: 'YDB Web UI',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2019-10-01',
            description: 'Web-based administration interface for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-monitoring',
            name: 'YDB Monitoring',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2020-04-01',
            description: 'Monitoring and observability solution for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-console',
            name: 'YDB Console',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2021-05-01',
            description: 'Advanced web console for YDB management',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'datagrip-ydb',
            name: 'DataGrip YDB Support',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2022-04-01',
            description: 'YDB support in JetBrains DataGrip',
            authors: ['JetBrains', 'Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // ETL Tools
        {
            id: 'pandas',
            name: 'Pandas',
            category: 'ETL',
            language: 'Python',
            releaseDate: '2008-12-17',
            dbSupportDate: '2020-01-15',
            description: 'Data analysis and manipulation library with YDB support',
            authors: ['Wes McKinney', 'PyData Development Team'],
            contributorsType: ['open-source', 'student'],
            repository: 'https://github.com/pandas-dev/pandas'
        },
        {
            id: 'ydb-spark-connector',
            name: 'YDB Spark Connector',
            category: 'ETL',
            language: 'Scala',
            releaseDate: '2021-09-01',
            description: 'Apache Spark connector for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-flink-connector',
            name: 'YDB Flink Connector',
            category: 'ETL',
            language: 'Java',
            releaseDate: '2022-03-01',
            description: 'Apache Flink connector for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'dbt-ydb',
            name: 'dbt-ydb',
            category: 'ETL',
            language: 'Python',
            releaseDate: '2022-07-01',
            description: 'dbt (data build tool) adapter for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-dbt-adapter'
        },
        {
            id: 'ydb-airbyte-connector',
            name: 'YDB Airbyte Connector',
            category: 'ETL',
            language: 'Java',
            releaseDate: '2022-10-01',
            description: 'Airbyte connector for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // BI tools
        {
            id: 'metabase',
            name: 'Metabase',
            category: 'BI',
            language: 'Java',
            releaseDate: '2015-10-01',
            dbSupportDate: '2021-11-15',
            description: 'Open source business intelligence tool with YDB support',
            authors: ['Metabase Team', 'Yandex'],
            version: '0.41.0',
            contributorsType: ['open-source', 'staff'],
            repository: 'https://github.com/metabase/metabase'
        },
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-12-17',
            dbSupportDate: '2022-05-01',
            description: 'Modern data exploration and visualization platform with YDB support',
            authors: ['Apache Software Foundation', 'Yandex'],
            contributorsType: ['open-source', 'staff'],
            repository: 'https://github.com/apache/superset'
        },
        {
            id: 'tableau-ydb',
            name: 'Tableau YDB Connector',
            category: 'BI',
            language: 'Java',
            releaseDate: '2022-09-01',
            description: 'Tableau connector for YDB',
            authors: ['Tableau Software', 'Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'powerbi-ydb',
            name: 'Power BI YDB Connector',
            category: 'BI',
            language: 'C#',
            releaseDate: '2022-11-01',
            description: 'Microsoft Power BI connector for YDB',
            authors: ['Microsoft', 'Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'grafana-ydb',
            name: 'Grafana YDB Plugin',
            category: 'BI',
            language: 'TypeScript',
            releaseDate: '2021-06-01',
            description: 'Grafana data source plugin for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-grafana-datasource-plugin'
        },

        // Apps with abstract storage
        {
            id: 'clickhouse-ydb-dictionary',
            name: 'ClickHouse YDB Dictionary',
            category: 'Apps with abstract storage',
            language: 'C++',
            releaseDate: '2022-01-01',
            description: 'ClickHouse dictionary source for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'yandex-cloud-functions',
            name: 'Yandex Cloud Functions',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2019-11-01',
            description: 'Serverless compute platform with YDB integration',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-terraform-provider',
            name: 'YDB Terraform Provider',
            category: 'Apps with abstract storage',
            language: 'Go',
            releaseDate: '2021-04-01',
            description: 'Terraform provider for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/terraform-provider-ydb'
        },
        {
            id: 'ydb-dataloader',
            name: 'YDB DataLoader',
            category: 'Apps with abstract storage',
            language: 'Go',
            releaseDate: '2021-10-01',
            description: 'Bulk data loading utility for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-vector-search',
            name: 'YDB Vector Search',
            category: 'Apps with abstract storage',
            language: 'C++',
            releaseDate: '2023-03-01',
            description: 'Vector similarity search capabilities for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-spring-boot-starter',
            name: 'YDB Spring Boot Starter',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '2021-07-01',
            description: 'Spring Boot starter for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source'],
            repository: 'https://github.com/ydb-platform/ydb-java-spring-boot-starter'
        },
        {
            id: 'ydb-nextjs-adapter',
            name: 'YDB Next.js Adapter',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2022-12-01',
            description: 'Data adapter for Next.js applications with YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // Logging
        {
            id: 'fluentd',
            name: 'Fluentd',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2011-10-01',
            dbSupportDate: '2022-03-01',
            description: 'Open source data collector with YDB output plugin',
            authors: ['Treasure Data', 'Yandex'],
            contributorsType: ['open-source', 'staff']
        },
        {
            id: 'logstash',
            name: 'Logstash',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2010-08-02',
            dbSupportDate: '2022-04-15',
            description: 'Data processing pipeline with YDB output support',
            authors: ['Elastic', 'Yandex'],
            contributorsType: ['open-source', 'staff']
        },
        {
            id: 'ydb-logger',
            name: 'YDB Logger',
            category: 'Logging',
            language: 'Go',
            releaseDate: '2021-05-01',
            description: 'Structured logging library for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'opentelemetry-ydb',
            name: 'OpenTelemetry YDB',
            category: 'Logging',
            language: 'Go',
            releaseDate: '2022-02-01',
            description: 'OpenTelemetry integration for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // Message Broker
        {
            id: 'ydb-topic',
            name: 'YDB Topic',
            category: 'Message broker',
            language: 'C++',
            releaseDate: '2022-10-01',
            description: 'Native pub/sub messaging service in YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'ydb-queue',
            name: 'YDB Queue',
            category: 'Message broker',
            language: 'C++',
            releaseDate: '2021-07-01',
            description: 'Distributed queue implementation on top of YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'kafka-ydb-connector',
            name: 'Kafka Connect YDB Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2022-08-01',
            description: 'Kafka Connect connector for YDB',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-grafana-alerting',
            name: 'YDB Grafana Alerting',
            category: 'Message broker',
            language: 'Go',
            releaseDate: '2022-05-01',
            description: 'Grafana alerting integration with YDB',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },

        // Query Builder
        {
            id: 'ydb-query-builder',
            name: 'YDB Query Builder',
            category: 'Query Builder',
            language: 'TypeScript',
            releaseDate: '2021-04-01',
            description: 'TypeScript library for building YDB queries',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'yql-helper',
            name: 'YQL Helper',
            category: 'Query Builder',
            language: 'Python',
            releaseDate: '2020-09-01',
            description: 'Python library for building YQL queries',
            authors: ['Yandex'],
            contributorsType: ['staff', 'student']
        },
        {
            id: 'ydb-sqlbuilder',
            name: 'YDB SQL Builder',
            category: 'Query Builder',
            language: 'Go',
            releaseDate: '2022-01-01',
            description: 'SQL query builder for YDB in Go',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // Connection Pool
        {
            id: 'ydb-connection-pool',
            name: 'YDB Connection Pool',
            category: 'Connection Pool',
            language: 'Go',
            releaseDate: '2020-03-01',
            description: 'Connection pooling library for YDB Go SDK',
            authors: ['Yandex'],
            contributorsType: ['staff']
        },
        {
            id: 'hikaricp-ydb',
            name: 'HikariCP for YDB',
            category: 'Connection Pool',
            language: 'Java',
            releaseDate: '2021-08-01',
            description: 'HikariCP connection pool for YDB JDBC driver',
            authors: ['Yandex'],
            contributorsType: ['staff', 'open-source']
        },

        // Node.js фреймворки и библиотеки
        {
            id: 'ydb-sdk-nodejs',
            name: 'YDB Node.js SDK',
            category: 'Driver',
            language: 'TypeScript',
            releaseDate: '2021-03-15',
            description: 'Official Node.js SDK for YDB',
            authors: ['Yandex', 'Community'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-sdk',
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-orm',
            name: 'YDB ORM',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2022-01-20',
            description: 'TypeScript ORM for YDB',
            authors: ['Yandex', 'Community'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-sdk',
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'nestjs-ydb',
            name: 'NestJS YDB Integration',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2022-05-10',
            description: 'NestJS module for YDB integration',
            authors: ['Community'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-sdk',
            contributorsType: ['open-source']
        },
        {
            id: 'ydb-query-builder',
            name: 'YDB Query Builder',
            category: 'Query Builder',
            language: 'TypeScript',
            releaseDate: '2021-09-01',
            description: 'Query builder for YDB in Node.js',
            authors: ['Yandex', 'Community'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-sdk',
            contributorsType: ['staff', 'open-source']
        },
        {
            id: 'ydb-express-session',
            name: 'YDB Express Session',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2022-03-15',
            description: 'Express.js session store implementation for YDB',
            authors: ['Community'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-examples',
            contributorsType: ['open-source']
        },
        {
            id: 'ydb-typeorm',
            name: 'TypeORM YDB Adapter',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2022-06-01',
            description: 'TypeORM adapter for YDB',
            authors: ['Community'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-sdk',
            contributorsType: ['open-source']
        },
        {
            id: 'ydb-prisma',
            name: 'Prisma YDB Adapter',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2022-08-15',
            description: 'Prisma adapter for YDB',
            authors: ['Community'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-sdk',
            contributorsType: ['open-source']
        },
        {
            id: 'ydb-serverless-functions',
            name: 'YDB Serverless Functions',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2021-10-01',
            description: 'Integration of YDB with serverless functions',
            authors: ['Yandex', 'Community'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-examples',
            contributorsType: ['staff', 'open-source']
        }
    ],
    dependencies: [
        // SDK и стандартные драйверы
        {
            source: 'ydb-go-sdk',
            target: 'ydb-golang-database-sql',
            description: 'YDB database/sql driver is built on top of Go SDK'
        },
        {
            source: 'ydb-java-sdk',
            target: 'ydb-jdbc',
            description: 'YDB JDBC driver is built on top of Java SDK'
        },
        {
            source: 'ydb-python-sdk',
            target: 'ydb-dbapi',
            description: 'YDB DB-API implementation is built on top of Python SDK'
        },
        {
            source: 'ydb-dotnet-sdk',
            target: 'ydb-adonet',
            description: 'YDB ADO.NET provider is built on top of .NET SDK'
        },
        {
            source: 'ydb-cpp-sdk',
            target: 'grpc-api',
            description: 'YDB C++ SDK implements gRPC API'
        },

        // Зависимости от стандартов к драйверам
        {
            source: 'ydb-golang-database-sql',
            target: 'database-sql',
            description: 'YDB database/sql driver implements database/sql interface'
        },
        {
            source: 'ydb-jdbc',
            target: 'jdbc',
            description: 'YDB JDBC driver implements JDBC standard'
        },
        {
            source: 'ydb-dbapi',
            target: 'dbapi',
            description: 'YDB DB-API implements Python DB-API specification'
        },
        {
            source: 'ydb-adonet',
            target: 'ado-net',
            description: 'YDB ADO.NET provider implements ADO.NET standard'
        },

        // Инструменты ORM и миграций
        {
            source: 'ydb-golang-database-sql',
            target: 'goose',
            description: 'goose needs database/sql driver for YDB support'
        },
        {
            source: 'ydb-dbapi',
            target: 'sqlalchemy-ydb',
            description: 'SQLAlchemy YDB dialect is built on DB-API'
        },
        {
            source: 'ydb-go-sdk',
            target: 'sqlx-ydb',
            description: 'sqlx YDB uses YDB Go SDK'
        },
        {
            source: 'ydb-golang-database-sql',
            target: 'gorm-ydb',
            description: 'GORM YDB uses database/sql driver'
        },
        {
            source: 'ydb-jdbc',
            target: 'hibernate-ydb',
            description: 'Hibernate YDB dialect uses JDBC driver'
        },
        {
            source: 'ydb-java-sdk',
            target: 'spring-data-ydb',
            description: 'Spring Data YDB uses YDB Java SDK'
        },
        {
            source: 'ydb-adonet',
            target: 'entity-framework-ydb',
            description: 'Entity Framework YDB uses ADO.NET provider'
        },
        {
            source: 'ydb-nodejs-sdk',
            target: 'typeorm-ydb',
            description: 'TypeORM YDB uses Node.js SDK'
        },
        {
            source: 'ydb-nodejs-sdk',
            target: 'prisma-ydb',
            description: 'Prisma YDB uses Node.js SDK'
        },
        {
            source: 'ydb-go-sdk',
            target: 'ydb-migrate',
            description: 'YDB Migrate uses YDB Go SDK'
        },
        {
            source: 'ydb-go-sdk',
            target: 'ydb-data-transfer',
            description: 'YDB Data Transfer uses YDB Go SDK'
        },
        {
            source: 'ydb-jdbc',
            target: 'liquibase-ydb',
            description: 'Liquibase YDB Extension uses JDBC driver'
        },

        // Admin tools
        {
            source: 'ydb-jdbc',
            target: 'dbeaver',
            description: 'DBeaver needs JDBC driver for YDB support'
        },
        {
            source: 'ydb-go-sdk',
            target: 'ydb-cli',
            description: 'YDB CLI uses YDB Go SDK'
        },
        {
            source: 'ydb-go-sdk',
            target: 'ydb-monitoring',
            description: 'YDB Monitoring uses YDB Go SDK'
        },
        {
            source: 'ydb-nodejs-sdk',
            target: 'ydb-ui',
            description: 'YDB Web UI uses Node.js SDK'
        },
        {
            source: 'ydb-nodejs-sdk',
            target: 'ydb-console',
            description: 'YDB Console uses Node.js SDK'
        },
        {
            source: 'ydb-jdbc',
            target: 'datagrip-ydb',
            description: 'DataGrip uses JDBC to connect to YDB'
        },

        // ETL и BI
        {
            source: 'ydb-dbapi',
            target: 'pandas',
            description: 'Pandas needs DB-API for YDB support'
        },
        {
            source: 'ydb-java-sdk',
            target: 'ydb-spark-connector',
            description: 'YDB Spark Connector uses YDB Java SDK'
        },
        {
            source: 'ydb-java-sdk',
            target: 'ydb-flink-connector',
            description: 'YDB Flink Connector uses YDB Java SDK'
        },
        {
            source: 'ydb-dbapi',
            target: 'dbt-ydb',
            description: 'dbt-ydb uses YDB DB-API'
        },
        {
            source: 'ydb-java-sdk',
            target: 'ydb-airbyte-connector',
            description: 'YDB Airbyte Connector uses YDB Java SDK'
        },
        {
            source: 'ydb-jdbc',
            target: 'metabase',
            description: 'Metabase uses JDBC driver to connect to YDB'
        },
        {
            source: 'sqlalchemy-ydb',
            target: 'superset',
            description: 'Superset uses SQLAlchemy to connect to YDB'
        },
        {
            source: 'ydb-jdbc',
            target: 'tableau-ydb',
            description: 'Tableau connector uses JDBC to connect to YDB'
        },
        {
            source: 'ydb-adonet',
            target: 'powerbi-ydb',
            description: 'Power BI connector uses ADO.NET provider'
        },
        {
            source: 'ydb-nodejs-sdk',
            target: 'grafana-ydb',
            description: 'Grafana plugin uses Node.js SDK'
        },

        // Server-side features
        {
            source: 'ydb-cdc',
            target: 'ydb-serverless-triggers',
            description: 'Serverless Triggers rely on Change Data Capture for monitoring changes'
        },
        {
            source: 'ydb-topic',
            target: 'ydb-cdc',
            description: 'YDB CDC can publish changes to YDB Topic'
        },
        {
            source: 'ydb-cdc',
            target: 'kafka-ydb-connector',
            description: 'Kafka YDB Connector can use CDC for change data capture'
        },
        {
            source: 'ydb-json-support',
            target: 'ydb-vector-search',
            description: 'Vector Search uses JSON support for vector storage'
        },

        // Applications
        {
            source: 'ydb-go-sdk',
            target: 'ydb-terraform-provider',
            description: 'YDB Terraform Provider uses YDB Go SDK'
        },
        {
            source: 'ydb-go-sdk',
            target: 'ydb-dataloader',
            description: 'YDB DataLoader uses YDB Go SDK'
        },
        {
            source: 'ydb-java-sdk',
            target: 'ydb-spring-boot-starter',
            description: 'YDB Spring Boot Starter uses YDB Java SDK'
        },
        {
            source: 'ydb-nodejs-sdk',
            target: 'ydb-nextjs-adapter',
            description: 'YDB Next.js Adapter uses YDB Node.js SDK'
        },
        {
            source: 'ydb-cpp-sdk',
            target: 'clickhouse-ydb-dictionary',
            description: 'ClickHouse YDB Dictionary uses YDB C++ SDK'
        },

        // Логирование
        {
            source: 'ydb-go-sdk',
            target: 'fluentd',
            description: 'Fluentd YDB plugin uses YDB Go SDK'
        },
        {
            source: 'ydb-java-sdk',
            target: 'logstash',
            description: 'Logstash YDB plugin uses YDB Java SDK'
        },
        {
            source: 'ydb-go-sdk',
            target: 'ydb-logger',
            description: 'YDB Logger uses YDB Go SDK'
        },
        {
            source: 'ydb-go-sdk',
            target: 'opentelemetry-ydb',
            description: 'OpenTelemetry YDB uses YDB Go SDK'
        },
        {
            source: 'ydb-go-sdk',
            target: 'ydb-grafana-alerting',
            description: 'YDB Grafana Alerting uses YDB Go SDK'
        },

        // Message Broker
        {
            source: 'ydb-cpp-sdk',
            target: 'ydb-topic',
            description: 'YDB Topic is part of YDB built on C++ SDK'
        },
        {
            source: 'ydb-cpp-sdk',
            target: 'ydb-queue',
            description: 'YDB Queue is part of YDB built on C++ SDK'
        },
        {
            source: 'ydb-java-sdk',
            target: 'kafka-ydb-connector',
            description: 'Kafka YDB connector uses YDB Java SDK'
        },

        // Query Builders
        {
            source: 'ydb-nodejs-sdk',
            target: 'ydb-query-builder',
            description: 'YDB Query Builder uses YDB Node.js SDK'
        },
        {
            source: 'ydb-python-sdk',
            target: 'yql-helper',
            description: 'YQL Helper uses YDB Python SDK'
        },
        {
            source: 'ydb-go-sdk',
            target: 'ydb-sqlbuilder',
            description: 'YDB SQL Builder uses YDB Go SDK'
        },

        // Connection Pools
        {
            source: 'ydb-go-sdk',
            target: 'ydb-connection-pool',
            description: 'YDB Connection Pool is built for YDB Go SDK'
        },
        {
            source: 'ydb-jdbc',
            target: 'hikaricp-ydb',
            description: 'HikariCP for YDB works with YDB JDBC driver'
        },

        // Cross-dependencies
        {
            source: 'ydb-topic',
            target: 'ydb-queue',
            description: 'YDB Queue can be implemented on top of YDB Topic'
        },
        {
            source: 'ydb-serverless-triggers',
            target: 'yandex-cloud-functions',
            description: 'YDB Serverless Triggers can invoke Yandex Cloud Functions'
        },
        {
            source: 'spring-data-ydb',
            target: 'ydb-spring-boot-starter',
            description: 'YDB Spring Boot Starter uses Spring Data YDB'
        },
        {
            source: 'hibernate-ydb',
            target: 'spring-data-ydb',
            description: 'Spring Data YDB can use Hibernate YDB dialect'
        },
        {
            source: 'ydb-grafana-alerting',
            target: 'grafana-ydb',
            description: 'YDB Grafana Alerting uses Grafana YDB plugin'
        },
        {
            source: 'ydb-monitoring',
            target: 'opentelemetry-ydb',
            description: 'YDB Monitoring can use OpenTelemetry YDB'
        }
    ]
};

export default ydbData;
