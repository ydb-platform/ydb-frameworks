import { TimelineData } from './types';

const postgresqlData: TimelineData = {
    database: 'postgresql',
    displayName: 'PostgreSQL',
    frameworks: [
        // Standard API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard API',
            language: 'Java',
            releaseDate: '1997-02-19',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems'],
            implementation: {
                name: 'PostgreSQL JDBC Driver',
                releaseDate: '1997-02-19',
                description: 'Official PostgreSQL JDBC driver',
                repository: 'https://github.com/pgjdbc/pgjdbc',
                authors: ['PostgreSQL Global Development Group'],
                contributorsType: ['open-source']
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
                name: 'database/sql driver for PostgreSQL',
                releaseDate: '2011-03-01',
                description: 'PostgreSQL implementation of database/sql',
                repository: 'https://github.com/lib/pq',
                authors: ['Go Team'],
                contributorsType: ['open-source'],
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
                name: 'psycopg2',
                releaseDate: '2000-01-01',
                description: 'PostgreSQL adapter for Python',
                repository: 'https://github.com/psycopg/psycopg2',
                authors: ['Federico Di Gregorio'],
                contributorsType: ['open-source'],
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
                name: 'Npgsql',
                releaseDate: '2002-01-01',
                description: 'PostgreSQL provider for ADO.NET',
                repository: 'https://github.com/npgsql/npgsql',
                authors: ['Shay Rojansky'],
                contributorsType: ['open-source'],
            }
        },

        // ORM
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
                name: 'Hibernate PostgreSQL Dialect',
                releaseDate: '2001-12-01',
                description: 'PostgreSQL dialect for Hibernate ORM',
                authors: ['Hibernate Team'],
                contributorsType: ['open-source']
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
                name: 'SQLAlchemy PostgreSQL Dialect',
                releaseDate: '2006-02-01',
                description: 'PostgreSQL dialect for SQLAlchemy',
                authors: ['SQLAlchemy Team'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'django',
            name: 'Django ORM',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2005-07-01',
            description: 'High-level Python web framework with built-in ORM',
            authors: ['Django Software Foundation'],
            repository: 'https://github.com/django/django',
            implementation: {
                name: 'Django PostgreSQL Backend',
                releaseDate: '2005-07-01',
                description: 'PostgreSQL backend for Django ORM',
                authors: ['Django Team'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'typeorm',
            name: 'TypeORM',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2016-06-30',
            description: 'ORM for TypeScript and JavaScript',
            authors: ['TypeORM Contributors'],
            repository: 'https://github.com/typeorm/typeorm',
            implementation: {
                name: 'TypeORM PostgreSQL Driver',
                releaseDate: '2016-06-30',
                description: 'PostgreSQL driver for TypeORM',
                authors: ['TypeORM Team'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'prisma',
            name: 'Prisma',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2019-06-01',
            description: 'Next-generation ORM for Node.js & TypeScript',
            authors: ['Prisma'],
            repository: 'https://github.com/prisma/prisma',
            implementation: {
                name: 'Prisma PostgreSQL Adapter',
                releaseDate: '2019-06-01',
                description: 'PostgreSQL adapter for Prisma',
                authors: ['Prisma Team'],
                contributorsType: ['open-source']
            }
        },

        // Migration
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
                name: 'Flyway PostgreSQL Support',
                releaseDate: '2010-06-01',
                description: 'PostgreSQL support for Flyway',
                authors: ['Flyway Team'],
                contributorsType: ['open-source']
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
                name: 'Liquibase PostgreSQL Support',
                releaseDate: '2006-12-01',
                description: 'PostgreSQL support for Liquibase',
                authors: ['Liquibase Team'],
                contributorsType: ['open-source']
            }
        },

        // Admin
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
                name: 'DBeaver PostgreSQL Support',
                releaseDate: '2010-06-01',
                description: 'PostgreSQL support for DBeaver',
                authors: ['DBeaver Team'],
                contributorsType: ['open-source']
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
                name: 'DataGrip PostgreSQL Support',
                releaseDate: '2015-12-01',
                description: 'PostgreSQL support for DataGrip',
                authors: ['JetBrains Team'],
                contributorsType: ['open-source']
            }
        },

        // ETL
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
                name: 'Spark PostgreSQL Connector',
                releaseDate: '2014-05-30',
                description: 'PostgreSQL connector for Apache Spark',
                authors: ['Spark Team'],
                contributorsType: ['open-source']
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
                name: 'Flink PostgreSQL Connector',
                releaseDate: '2011-01-01',
                description: 'PostgreSQL connector for Apache Flink',
                authors: ['Flink Team'],
                contributorsType: ['open-source']
            }
        },

        // BI
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
                name: 'Grafana PostgreSQL Plugin',
                releaseDate: '2014-01-01',
                description: 'PostgreSQL data source plugin for Grafana',
                authors: ['Grafana Team'],
                contributorsType: ['open-source']
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
                name: 'Superset PostgreSQL Connector',
                releaseDate: '2015-10-01',
                description: 'PostgreSQL connector for Apache Superset',
                authors: ['Superset Team'],
                contributorsType: ['open-source']
            }
        },

        // Logging
        {
            id: 'fluentbit',
            name: 'fluentbit',
            category: 'Logging',
            language: 'C',
            releaseDate: '2011-10-01',
            description: 'Fast and Lightweight Logs, Metrics and Traces processor',
            authors: ['Treasure Data'],
            repository: 'https://github.com/fluent/fluent-bit',
            implementation: {
                name: 'Fluentbit PostgreSQL Plugin',
                releaseDate: '2011-10-01',
                description: 'PostgreSQL output plugin for Fluentbit',
                authors: ['Fluentbit Team'],
                contributorsType: ['open-source']
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
                name: 'Logstash PostgreSQL Plugin',
                releaseDate: '2010-08-02',
                description: 'PostgreSQL output plugin for Logstash',
                authors: ['Logstash Team'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default postgresqlData; 