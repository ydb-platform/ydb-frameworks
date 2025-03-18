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
            category: 'Standard API',
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
            category: 'Standard API',
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
            category: 'Standard API',
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
            category: 'Standard API',
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
                releaseDate: '2018-11-15',
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
                releaseDate: '2018-12-01',
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
                releaseDate: '2019-02-01',
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
                releaseDate: '2019-03-15',
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
                releaseDate: '2021-11-01',
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
                releaseDate: '2020-09-01',
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
                releaseDate: '2022-07-01',
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
                releaseDate: '2022-02-01',
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
                name: 'Flyway YDB Dialect',
                releaseDate: '2023-09-01',
                description: 'YDB Dialect for Flyway',
                repository: 'https://github.com/ydb-platform/ydb-java-dialects',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
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
                name: 'Liquibase YDB Dialect',
                releaseDate: '2023-09-01',
                description: 'YDB Dialect for Liquibase',
                repository: 'https://github.com/ydb-platform/ydb-java-dialects',
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
            id: 'dapper',
            name: 'Dapper',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2011-01-01',
            description: 'A simple object mapper for .NET',
            authors: ['Stack Overflow'],
            repository: 'https://github.com/StackExchange/Dapper',
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
        {
            id: 'hibernate',
            name: 'Hibernate',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2001-12-01',
            description: 'Object-relational mapping (ORM) tool for the Java programming language',
            authors: ['Gavin King', 'Red Hat'],
            repository: 'https://github.com/hibernate/hibernate-orm',
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
            id: 'sqlalchemy',
            name: 'SQLAlchemy',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2006-02-01',
            description: 'The Python SQL Toolkit and ORM',
            authors: ['Michael Bayer'],
            repository: 'https://github.com/sqlalchemy/sqlalchemy',
            implementation: {
                name: 'YDB SQLAlchemy Dialect',
                releaseDate: '2023-09-01',
                description: 'SQLAlchemy dialect for YDB',
                repository: 'https://github.com/ydb-platform/ydb-sqlalchemy',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        // ORM without YDB support (planned)
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
            id: 'linq2db',
            name: 'LINQ to DB',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2014-01-01',
            description: 'Fastest LINQ database access library',
            authors: ['Igor Tkachev'],
            repository: 'https://github.com/linq2db/linq2db'
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
                releaseDate: '2020-04-01',
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
                releaseDate: '2020-04-01',
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
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-10-01',
            description: 'Modern data exploration and visualization platform',
            authors: ['Airbnb', 'Apache Software Foundation'],
            repository: 'https://github.com/apache/superset',
            implementation: {
                name: 'YDB Superset Connector',
                releaseDate: '2024-12-01',
                description: 'Apache Superset support for YDB over SQLAlchemy',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'airflow',
            name: 'Apache Airflow',
            category: 'ETL',
            language: 'Python',
            releaseDate: '2015-06-01',
            description: 'Platform to programmatically author, schedule, and monitor workflows',
            authors: ['Airbnb', 'Apache Software Foundation'],
            repository: 'https://github.com/apache/airflow',
            implementation: {
                name: 'YDB Airflow Provider',
                releaseDate: '2023-09-01',
                description: 'Apache Airflow provider for YDB',
                repository: 'https://github.com/ydb-platform/ydb-airflow-provider',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'jupyter',
            name: 'Jupyter Notebook',
            category: 'BI',
            language: 'Python',
            releaseDate: '2014-02-01',
            description: 'Web-based interactive computing platform for creating and sharing documents containing live code, equations, visualizations, and narrative text',
            authors: ['Project Jupyter'],
            repository: 'https://github.com/jupyter/notebook',
            implementation: {
                name: 'YDB Jupyter Extension',
                releaseDate: '2023-09-01',
                description: 'Jupyter extension for YDB integration',
                repository: 'https://github.com/ydb-platform/ydb-jupyter-extension',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'pandas',
            name: 'Pandas',
            category: 'ETL',
            language: 'Python',
            releaseDate: '2009-01-01',
            description: 'Data manipulation and analysis library for Python',
            authors: ['Wes McKinney'],
            repository: 'https://github.com/pandas-dev/pandas',
            implementation: {
                name: 'YDB Pandas Integration',
                releaseDate: '2023-09-01',
                description: 'Pandas integration for YDB',
                repository: 'https://github.com/ydb-platform/ydb-pandas',
                authors: ['Yandex'],
                contributorsType: ['staff', 'open-source']
            }
        },

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
