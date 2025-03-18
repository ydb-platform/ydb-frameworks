import { TimelineData } from './types';

const mssqlData: TimelineData = {
    database: 'mssql',
    displayName: 'MS SQL Server',
    frameworks: [
        // Server-side features
        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard API',
            language: 'Java',
            releaseDate: '1997-02-19',
            description: 'Microsoft JDBC Driver for SQL Server',
            authors: ['Microsoft'],
            implementation: {
                name: 'Microsoft JDBC Driver',
                releaseDate: '1997-02-19',
                description: 'Official JDBC driver for SQL Server',
                repository: 'https://github.com/microsoft/mssql-jdbc',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard API',
            language: 'Go',
            releaseDate: '2011-03-01',
            description: 'Go SQL Server driver for database/sql',
            authors: ['Go Team'],
            implementation: {
                name: 'go',
                releaseDate: '2011-03-01',
                description: 'SQL Server driver for Go database/sql',
                repository: 'https://github.com/denisenkom/godb',
                authors: ['Denis Komarov'],
                contributorsType: ['open-source'],
            }
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard API',
            language: 'Python',
            releaseDate: '1996-10-01',
            description: 'pyodbc - DB-API driver for SQL Server',
            authors: ['Microsoft'],
            implementation: {
                name: 'pyodbc',
                releaseDate: '2011-01-01',
                description: 'DB-API driver for SQL Server',
                repository: 'https://github.com/mkleehammer/pyodbc',
                authors: ['Michael Kleehammer'],
                contributorsType: ['open-source'],
            }
        },
        {
            id: 'ado-net',
            name: 'ADO.NET',
            category: 'Standard API',
            language: 'C#',
            releaseDate: '2000-01-01',
            description: 'Microsoft.Data.SqlClient - ADO.NET driver for SQL Server',
            authors: ['Microsoft'],
            implementation: {
                name: 'Microsoft.Data.SqlClient',
                releaseDate: '2000-01-01',
                description: 'Official ADO.NET driver for SQL Server',
                repository: 'https://github.com/dotnet/SqlClient',
                authors: ['Microsoft'],
                contributorsType: ['staff', 'open-source'],
            }
        },

        // ORM
        {
            id: 'gorm',
            name: 'GORM',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2013-01-01',
            description: 'GORM SQL Server driver',
            authors: ['Jinzhu Zhang'],
            repository: 'https://github.com/go-gorm/sqlserver',
            implementation: {
                name: 'GORM SQL Server driver',
                releaseDate: '2013-01-01',
                description: 'SQL Server driver for GORM',
                repository: 'https://github.com/go-gorm/sqlserver',
                authors: ['Jinzhu Zhang'],
                contributorsType: ['open-source'],
            }
        },
        {
            id: 'dapper',
            name: 'Dapper',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2011-01-01',
            description: 'Dapper with SQL Server support',
            authors: ['Stack Overflow'],
            repository: 'https://github.com/StackExchange/Dapper',
            implementation: {
                name: 'Dapper SQL Server',
                releaseDate: '2011-01-01',
                description: 'SQL Server support for Dapper',
                authors: ['Stack Overflow'],
                contributorsType: ['open-source'],
            }
        },
        {
            id: 'hibernate',
            name: 'Hibernate',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2001-12-01',
            description: 'Hibernate SQL Server dialect',
            authors: ['Red Hat'],
            repository: 'https://github.com/hibernate/hibernate-orm',
            implementation: {
                name: 'Hibernate SQL Server Dialect',
                releaseDate: '2001-12-01',
                description: 'SQL Server dialect for Hibernate ORM',
                authors: ['Red Hat'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'sqlalchemy',
            name: 'SQLAlchemy',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2006-02-01',
            description: 'SQLAlchemy SQL Server dialect',
            authors: ['Michael Bayer'],
            repository: 'https://github.com/sqlalchemy/sqlalchemy',
            implementation: {
                name: 'SQLAlchemy SQL Server Dialect',
                releaseDate: '2006-02-01',
                description: 'SQL Server dialect for SQLAlchemy',
                authors: ['Michael Bayer'],
                contributorsType: ['open-source']
            }
        },

        // Migration tools
        {
            id: 'flyway',
            name: 'Flyway',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Flyway SQL Server dialect',
            authors: ['Redgate'],
            repository: 'https://github.com/flyway/flyway',
            implementation: {
                name: 'Flyway SQL Server Dialect',
                releaseDate: '2010-06-01',
                description: 'SQL Server dialect for Flyway',
                authors: ['Redgate'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'liquibase',
            name: 'Liquibase',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2006-12-01',
            description: 'Liquibase SQL Server dialect',
            authors: ['Liquibase'],
            repository: 'https://github.com/liquibase/liquibase',
            implementation: {
                name: 'Liquibase SQL Server Dialect',
                releaseDate: '2006-12-01',
                description: 'SQL Server dialect for Liquibase',
                authors: ['Liquibase'],
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
            description: 'DBeaver SQL Server support',
            authors: ['Serge Rider'],
            repository: 'https://github.com/dbeaver/dbeaver',
            implementation: {
                name: 'DBeaver MS SQL Support',
                releaseDate: '2010-06-01',
                description: 'MS SQL support for DBeaver',
                authors: ['Serge Rider'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'datagrip',
            name: 'DataGrip',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2015-12-01',
            description: 'DataGrip SQL Server support',
            authors: ['JetBrains'],
            repository: 'https://github.com/JetBrains/intellij-community',
            implementation: {
                name: 'DataGrip MS SQL Support',
                releaseDate: '2015-12-01',
                description: 'MS SQL support for DataGrip',
                authors: ['JetBrains'],
                contributorsType: ['staff']
            }
        },

        // ETL Tools
        {
            id: 'spark',
            name: 'Apache Spark',
            category: 'ETL',
            language: 'Scala',
            releaseDate: '2014-05-30',
            description: 'Apache Spark SQL Server connector',
            authors: ['Apache Software Foundation'],
            repository: 'https://github.com/apache/spark',
            implementation: {
                name: 'Spark SQL Server Connector',
                releaseDate: '2014-05-30',
                description: 'SQL Server connector for Apache Spark',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'flink',
            name: 'Apache Flink',
            category: 'ETL',
            language: 'Java',
            releaseDate: '2011-01-01',
            description: 'Apache Flink SQL Server connector',
            authors: ['Apache Software Foundation'],
            repository: 'https://github.com/apache/flink',
            implementation: {
                name: 'Flink SQL Server Connector',
                releaseDate: '2011-01-01',
                description: 'SQL Server connector for Apache Flink',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        },

        // BI tools
        {
            id: 'grafana',
            name: 'Grafana',
            category: 'BI',
            language: 'TypeScript',
            releaseDate: '2014-01-01',
            description: 'Grafana SQL Server data source',
            authors: ['Grafana Labs'],
            repository: 'https://github.com/grafana/grafana',
            implementation: {
                name: 'Grafana SQL Server Data Source',
                releaseDate: '2014-01-01',
                description: 'SQL Server data source for Grafana',
                authors: ['Grafana Labs'],
                contributorsType: ['open-source']
            }
        },
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-10-01',
            description: 'Apache Superset SQL Server support',
            authors: ['Airbnb', 'Apache Software Foundation'],
            repository: 'https://github.com/apache/superset',
            implementation: {
                name: 'Superset SQL Server Support',
                releaseDate: '2015-10-01',
                description: 'SQL Server support for Apache Superset',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default mssqlData; 