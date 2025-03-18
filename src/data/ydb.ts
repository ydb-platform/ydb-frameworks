// src/data/ydb.ts
import { TimelineData } from './types';

const ydbData: TimelineData = {
    database: 'ydb',
    displayName: 'YDB',
    frameworks: [
        // Server-side features
        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems'],
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
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            description: 'Go standard database interface',
            authors: ['Go Team'],
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
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG'],
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
            id: 'ado-net',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft'],
            implementation: {
                name: 'ADO.NET provider for YDB',
                releaseDate: '2022-07-01',
                description: 'YDB implementation of ADO.NET',
                repository: 'https://github.com/ydb-platform/ydb-dotnet-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // Нативные драйверы
        {
            id: 'ydb-cpp-sdk',
            name: 'YDB C++ SDK',
            category: 'Driver',
            language: 'C++',
            releaseDate: '2018-11-15',
            description: 'Official C++ SDK for YDB',
            repository: 'https://github.com/ydb-platform/ydb-cpp-sdk',
            authors: ['Yandex'],
            implementation: {
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            id: 'ydb-go-sdk',
            name: 'YDB Go SDK',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2018-12-01',
            description: 'Official Go SDK for YDB',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/ydb-go-sdk',
            implementation: {
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            id: 'ydb-python-sdk',
            name: 'YDB Python SDK',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2019-02-01',
            description: 'Official Python SDK for YDB',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/ydb-python-sdk',
            implementation: {
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            id: 'ydb-java-sdk',
            name: 'YDB Java SDK',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2019-03-15',
            description: 'Official Java SDK for YDB',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/ydb-java-sdk',
            implementation: {
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            id: 'ydb-rust-sdk',
            name: 'YDB Rust SDK',
            category: 'Driver',
            language: 'Rust',
            releaseDate: '2021-11-01',
            description: 'Official Rust SDK for YDB',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/ydb-rust-sdk',
            implementation: {
                contributorsType: ['staff', 'student', 'open-source'],
            }
        },
        {
            id: 'ydb-nodejs-sdk',
            name: 'YDB Node.js SDK',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2020-09-01',
            description: 'Official Node.js SDK for YDB',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/ydb-nodejs-sdk',
            implementation: {
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            id: 'ydb-dotnet-sdk',
            name: 'YDB .NET SDK',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2022-07-01',
            description: 'Official .NET SDK for YDB',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/ydb-dotnet-sdk',
            implementation: {
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            id: 'ydb-php-sdk',
            name: 'YDB PHP SDK',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2022-02-01',
            description: 'Official PHP SDK for YDB',
            authors: ['Yandex'],
            repository: 'https://github.com/ydb-platform/ydb-php-sdk',
            implementation: {
                contributorsType: ['freelance', 'open-source'],
            }
        },

        // Migration tools
        {
            id: 'flyway',
            name: 'Flyway',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Database migration tool',
            authors: ['Redgate'],
            repository: 'https://github.com/flyway/flyway',
            implementation: {
                name: 'Flyway YDB Support',
                releaseDate: '2023-08-01',
                description: 'YDB support in Flyway migrations',
                repository: 'https://github.com/ydb-platform/ydb-jdbc-driver',
                authors: ['Yandex'],
                contributorsType: ['staff']
            }
        },
        {
            id: 'liquibase',
            name: 'Liquibase',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2006-12-01',
            description: 'Database schema change management',
            authors: ['Liquibase'],
            repository: 'https://github.com/liquibase/liquibase',
            implementation: {
                name: 'Liquibase YDB Extension',
                releaseDate: '2023-09-01',
                description: 'Liquibase extension for YDB schema migrations',
                repository: 'https://github.com/ydb-platform/liquibase-ydb',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'goose',
            name: 'goose',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2013-05-01',
            description: 'Database migration tool for Go',
            authors: ['liamstask', 'pressly'],
            version: '3.18.0',
            repository: 'https://github.com/pressly/goose',
            implementation: {
                name: 'goose YDB Driver',
                description: 'YDB Driver for goose migrations',
                releaseDate: '2023-01-10',
                repository: 'https://github.com/ydb-platform/ydb-go-sdk',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // ORM
        {
            id: 'sqlx',
            name: 'sqlx',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2019-06-15',
            description: 'The practical SQL library for Go',
            authors: ['sqlx authors'],
            repository: 'https://github.com/jmoiron/sqlx'
        },
        {
            id: 'gorm',
            name: 'GORM',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2013-01-01',
            description: 'The fantastic ORM library for Golang, aims to be developer friendly',
            authors: ['Jinzhu Zhang'],
            repository: 'https://github.com/go-gorm/gorm',
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
            id: 'xorm',
            name: 'XORM',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2015-01-01',
            description: 'Simple and powerful ORM for Go',
            authors: ['Lunny Xiao'],
            repository: 'https://github.com/go-xorm/xorm'
        },
        {
            id: 'dapper',
            name: 'Dapper',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2011-01-01',
            description: 'A simple object mapper for .NET',
            authors: ['Stack Overflow'],
            repository: 'https://github.com/StackExchange/Dapper'
        },
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
            }
        },
        {
            id: 'linq2db',
            name: 'LINQ to DB',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2014-01-01',
            description: 'Fastest LINQ database access library',
            authors: ['Igor Tkachev'],
            repository: 'https://github.com/linq2db/linq2db'
        },
        {
            id: 'spring-data',
            name: 'Spring Data',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2011-07-21',
            description: 'Spring Data provides a familiar and consistent, Spring-based programming model for data access',
            authors: ['Pivotal', 'Spring Team'],
            repository: 'https://github.com/spring-projects/spring-data-commons',
            implementation: {
                name: 'Spring Data YDB',
                releaseDate: '2021-11-01',
                description: 'Spring Data repository support for YDB',
                repository: 'https://github.com/ydb-platform/ydb-java-spring-data',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            id: 'dbeaver',
            name: 'DBeaver',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Universal database tool',
            authors: ['Serge Rider'],
            repository: 'https://github.com/dbeaver/dbeaver',
            implementation: {
                name: 'DBeaver YDB Support',
                releaseDate: '2020-06-15',
                description: 'YDB support in DBeaver',
                repository: 'https://github.com/dbeaver/dbeaver',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'datagrip',
            name: 'DataGrip',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2015-12-01',
            description: 'Database IDE by JetBrains',
            authors: ['JetBrains'],
            repository: 'https://github.com/JetBrains/intellij-community',
            implementation: {
                name: 'DataGrip YDB Support',
                description: 'YDB support in JetBrains DataGrip',
                repository: 'https://github.com/ydb-platform/ydb-jdbc-driver',
                releaseDate: '2022-04-01',
                authors: ['JetBrains', 'Yandex'],
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
                contributorsType: ['staff', 'open-source']
            }
        },

        // ETL Tools
        {
            id: 'spark',
            name: 'Apache Spark',
            category: 'ETL',
            language: 'Scala',
            releaseDate: '2014-05-30',
            description: 'Unified analytics engine for large-scale data processing',
            authors: ['Apache Software Foundation'],
            repository: 'https://github.com/apache/spark',
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
            id: 'flink',
            name: 'Apache Flink',
            category: 'ETL',
            language: 'Java',
            releaseDate: '2011-01-01',
            description: 'Stream processing framework for distributed, high-performing data streaming applications',
            authors: ['Apache Software Foundation'],
            repository: 'https://github.com/apache/flink',
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
            id: 'dbt',
            name: 'dbt',
            category: 'ETL',
            language: 'Python',
            releaseDate: '2016-12-01',
            description: 'Data transformation tool that enables data analysts and engineers to transform data',
            authors: ['dbt Labs'],
            repository: 'https://github.com/dbt-labs/dbt-core',
            implementation: {
                name: 'dbt-ydb',
                releaseDate: '2022-07-01',
                description: 'dbt (data build tool) adapter for YDB',
                repository: 'https://github.com/ydb-platform/ydb-dbt-adapter',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // BI tools
        {
            id: 'grafana',
            name: 'Grafana',
            category: 'BI',
            language: 'TypeScript',
            releaseDate: '2014-01-01',
            description: 'Open source analytics & monitoring solution',
            authors: ['Grafana Labs'],
            repository: 'https://github.com/grafana/grafana',
            implementation: {
                name: 'Grafana YDB Plugin',
                releaseDate: '2021-06-01',
                description: 'Grafana data source plugin for YDB',
                repository: 'https://github.com/ydb-platform/ydb-grafana-datasource-plugin',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Apps with abstract storage

        // Logging
        {
            id: 'fluentbit',
            name: 'fluentbit',
            category: 'Logging',
            language: 'C',
            releaseDate: '2011-10-01',
            description: 'Fast and Lightweight Logs, Metrics and Traces processor for Linux, BSD, OSX and Windows',
            authors: ['Treasure Data'],
            repository: 'https://github.com/fluent/fluent-bit',
            implementation: {
                name: 'Fluentbit YDB Plugin',
                releaseDate: '2022-03-01',
                description: 'Fluentbit output plugin for YDB',
                repository: 'https://github.com/ydb-platform/fluent-bit-ydb',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'logstash',
            name: 'Logstash',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2010-08-02',
            description: 'Data processing pipeline',
            authors: ['Elastic'],
            repository: 'https://github.com/elastic/logstash',
            implementation: {
                name: 'Logstash YDB Plugin',
                releaseDate: '2022-04-15',
                description: 'Logstash output plugin for YDB',
                repository: 'https://github.com/ydb-platform/ydb-logstash-plugin',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Message Broker

        // ORM
        {
            id: 'nestjs',
            name: 'NestJS',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2017-06-20',
            description: 'A progressive Node.js framework for building efficient and scalable server-side applications',
            authors: ['Kamil Mysliwiec'],
            repository: 'https://github.com/nestjs/nest',
        },
        {
            id: 'express',
            name: 'Express.js',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2010-11-16',
            description: 'Fast, unopinionated, minimalist web framework for Node.js',
            authors: ['TJ Holowaychuk'],
            repository: 'https://github.com/expressjs/express',
        },
        {
            id: 'nextjs',
            name: 'Next.js',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2016-10-25',
            description: 'The React Framework for Production',
            authors: ['Vercel'],
            repository: 'https://github.com/vercel/next.js',
        },
        {
            id: 'prisma',
            name: 'Prisma',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2019-06-01',
            description: 'Next-generation ORM for Node.js & TypeScript',
            authors: ['Prisma'],
            repository: 'https://github.com/prisma/prisma'
        },
        {
            id: 'sequelize',
            name: 'Sequelize',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2011-07-18',
            description: 'Easy-to-use and promise-based Node.js ORM tool',
            authors: ['Sequelize Contributors'],
            repository: 'https://github.com/sequelize/sequelize'
        },
        {
            id: 'typeorm',
            name: 'TypeORM',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2016-06-30',
            description: 'ORM for TypeScript and JavaScript',
            authors: ['TypeORM Contributors'],
            repository: 'https://github.com/typeorm/typeorm'
        },
        {
            id: 'django',
            name: 'Django ORM',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2005-07-01',
            description: 'High-level Python web framework with built-in ORM',
            authors: ['Django Software Foundation'],
            repository: 'https://github.com/django/django'
        }
    ],
    dependencies: []
};

export default ydbData;
