import { TimelineData } from './types';

const oracleData: TimelineData = {
    database: 'oracle',
    displayName: 'Oracle',
    frameworks: [
        // Server-side features
        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC Oracle',
            category: 'Standard API',
            language: 'Java',
            releaseDate: '1997-02-19',
            description: 'Oracle JDBC Driver',
            authors: ['Oracle'],
            implementation: {
                name: 'Oracle JDBC Driver',
                releaseDate: '1997-02-19',
                description: 'Official JDBC driver for Oracle',
                repository: 'https://github.com/oracle/db-sample-schemas',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'database-sql',
            name: 'database/sql Oracle',
            category: 'Standard API',
            language: 'Go',
            releaseDate: '2011-03-01',
            description: 'Go Oracle driver for database/sql',
            authors: ['Go Team'],
            implementation: {
                name: 'go-ora',
                releaseDate: '2011-03-01',
                description: 'Oracle driver for Go database/sql',
                repository: 'https://github.com/sijms/go-ora',
                authors: ['Sijms'],
                contributorsType: ['open-source'],
            }
        },
        {
            id: 'dbapi',
            name: 'DB-API Oracle',
            category: 'Standard API',
            language: 'Python',
            releaseDate: '1996-10-01',
            description: 'cx_Oracle - DB-API driver for Oracle',
            authors: ['Oracle'],
            implementation: {
                name: 'cx_Oracle',
                releaseDate: '2011-01-01',
                description: 'DB-API driver for Oracle',
                repository: 'https://github.com/oracle/python-cx_Oracle',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            id: 'ado-net',
            name: 'ADO.NET Oracle',
            category: 'Standard API',
            language: 'C#',
            releaseDate: '2000-01-01',
            description: 'Oracle Data Provider for .NET',
            authors: ['Oracle'],
            implementation: {
                name: 'Oracle Data Provider',
                releaseDate: '2000-01-01',
                description: 'Official ADO.NET driver for Oracle',
                repository: 'https://github.com/oracle/dotnet-db-samples',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORM
        {
            id: 'gorm',
            name: 'GORM Oracle',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2013-01-01',
            description: 'GORM Oracle driver',
            authors: ['Jinzhu Zhang'],
            repository: 'https://github.com/go-gorm/oracle',
            implementation: {
                name: 'GORM Oracle driver',
                releaseDate: '2013-01-01',
                description: 'Oracle driver for GORM',
                repository: 'https://github.com/go-gorm/oracle',
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source'],
            }
        },
        {
            id: 'dapper',
            name: 'Dapper Oracle',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2011-01-01',
            description: 'Dapper with Oracle support',
            authors: ['Stack Overflow'],
            repository: 'https://github.com/StackExchange/Dapper',
            implementation: {
                name: 'Dapper Oracle',
                releaseDate: '2011-01-01',
                description: 'Oracle support for Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source'],
            }
        },
        {
            id: 'hibernate',
            name: 'Hibernate Oracle',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2001-12-01',
            description: 'Hibernate Oracle dialect',
            authors: ['Red Hat'],
            repository: 'https://github.com/hibernate/hibernate-orm',
            implementation: {
                name: 'Hibernate Oracle Dialect',
                releaseDate: '2001-12-01',
                description: 'Oracle dialect for Hibernate ORM',
                authors: ['Red Hat'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'sqlalchemy',
            name: 'SQLAlchemy Oracle',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2006-02-01',
            description: 'SQLAlchemy Oracle dialect',
            authors: ['Michael Bayer'],
            repository: 'https://github.com/sqlalchemy/sqlalchemy',
            implementation: {
                name: 'SQLAlchemy Oracle Dialect',
                releaseDate: '2006-02-01',
                description: 'Oracle dialect for SQLAlchemy',
                authors: ['Michael Bayer'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            id: 'flyway',
            name: 'Flyway Oracle',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Flyway Oracle dialect',
            authors: ['Redgate'],
            repository: 'https://github.com/flyway/flyway',
            implementation: {
                name: 'Flyway Oracle Dialect',
                releaseDate: '2010-06-01',
                description: 'Oracle dialect for Flyway',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'liquibase',
            name: 'Liquibase Oracle',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2006-12-01',
            description: 'Liquibase Oracle dialect',
            authors: ['Liquibase'],
            repository: 'https://github.com/liquibase/liquibase',
            implementation: {
                name: 'Liquibase Oracle Dialect',
                releaseDate: '2006-12-01',
                description: 'Oracle dialect for Liquibase',
                authors: ['Liquibase'],
                contributorsType: ['staff', 'open-source']
            }
        },

        // Admin tools
        {
            id: 'dbeaver',
            name: 'DBeaver Oracle',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'DBeaver Oracle support',
            authors: ['Serge Rider'],
            repository: 'https://github.com/dbeaver/dbeaver',
            implementation: {
                name: 'DBeaver Oracle Support',
                releaseDate: '2010-06-01',
                description: 'Oracle support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'datagrip',
            name: 'DataGrip Oracle',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2015-12-01',
            description: 'DataGrip Oracle support',
            authors: ['JetBrains'],
            repository: 'https://github.com/JetBrains/intellij-community',
            implementation: {
                name: 'DataGrip Oracle Support',
                releaseDate: '2015-12-01',
                description: 'Oracle support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            id: 'spark',
            name: 'Apache Spark Oracle',
            category: 'ETL',
            language: 'Scala',
            releaseDate: '2014-05-30',
            description: 'Apache Spark Oracle connector',
            authors: ['Apache Software Foundation'],
            repository: 'https://github.com/apache/spark',
            implementation: {
                name: 'Spark Oracle Connector',
                releaseDate: '2014-05-30',
                description: 'Oracle connector for Apache Spark',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'flink',
            name: 'Apache Flink Oracle',
            category: 'ETL',
            language: 'Java',
            releaseDate: '2011-01-01',
            description: 'Apache Flink Oracle connector',
            authors: ['Apache Software Foundation'],
            repository: 'https://github.com/apache/flink',
            implementation: {
                name: 'Flink Oracle Connector',
                releaseDate: '2011-01-01',
                description: 'Oracle connector for Apache Flink',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            id: 'grafana',
            name: 'Grafana Oracle',
            category: 'BI',
            language: 'TypeScript',
            releaseDate: '2014-01-01',
            description: 'Grafana Oracle data source',
            authors: ['Grafana Labs'],
            repository: 'https://github.com/grafana/grafana',
            implementation: {
                name: 'Grafana Oracle Data Source',
                releaseDate: '2014-01-01',
                description: 'Oracle data source for Grafana',
                authors: ['Grafana Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'superset',
            name: 'Apache Superset Oracle',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-10-01',
            description: 'Apache Superset Oracle support',
            authors: ['Airbnb', 'Apache Software Foundation'],
            repository: 'https://github.com/apache/superset',
            implementation: {
                name: 'Superset Oracle Support',
                releaseDate: '2015-10-01',
                description: 'Oracle support for Apache Superset',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default oracleData; 