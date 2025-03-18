import { TimelineData } from './types';

const mysqlData: TimelineData = {
    database: 'mysql',
    displayName: 'MySQL',
    frameworks: [
        // Server-side features
        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard API',
            language: 'Java',
            releaseDate: '1997-02-19',
            description: 'MySQL Connector/J - JDBC driver for',
            authors: ['Oracle'],
            implementation: {
                name: 'MySQL Connector/J',
                releaseDate: '1997-02-19',
                description: 'Official JDBC driver for',
                repository: 'https://github.com/mysql/mysql-connector-j',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source']
            }
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard API',
            language: 'Go',
            releaseDate: '2011-03-01',
            description: 'Go MySQL driver for database/sql',
            authors: ['Go Team'],
            implementation: {
                name: 'go-sql-driver/mysql',
                releaseDate: '2011-03-01',
                description: 'MySQL driver for Go database/sql',
                repository: 'https://github.com/go-sql-driver/mysql',
                authors: ['Julien Schmidt'],
                contributorsType: ['open-source'],
            }
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard API',
            language: 'Python',
            releaseDate: '1996-10-01',
            description: 'MySQL Connector/Python - DB-API driver for',
            authors: ['Oracle'],
            implementation: {
                name: 'MySQL Connector/Python',
                releaseDate: '2011-01-01',
                description: 'Official DB-API driver for',
                repository: 'https://github.com/mysql/mysql-connector-python',
                authors: ['Oracle'],
                contributorsType: ['staff', 'open-source'],
            }
        },
        {
            id: 'ado-net',
            name: 'ADO.NET',
            category: 'Standard API',
            language: 'C#',
            releaseDate: '2000-01-01',
            description: 'MySQL Connector/NET - ADO.NET driver for',
            authors: ['Oracle'],
            implementation: {
                name: 'MySQL Connector/NET',
                releaseDate: '2000-01-01',
                description: 'Official ADO.NET driver for',
                repository: 'https://github.com/mysql/mysql-connector-net',
                authors: ['Oracle'],
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
            description: 'GORM MySQL driver',
            authors: ['Jinzhu Zhang'],
            repository: 'https://github.com/go-gorm/mysql',
            implementation: {
                name: 'GORM MySQL driver',
                releaseDate: '2013-01-01',
                description: 'MySQL driver for GORM',
                repository: 'https://github.com/go-gorm/mysql',
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
            description: 'Dapper with MySQL support',
            authors: ['Stack Overflow'],
            repository: 'https://github.com/StackExchange/Dapper',
            implementation: {
                name: 'Dapper',
                releaseDate: '2011-01-01',
                description: 'MySQL support for Dapper',
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
            description: 'Hibernate MySQL dialect',
            authors: ['Red Hat'],
            repository: 'https://github.com/hibernate/hibernate-orm',
            implementation: {
                name: 'Hibernate MySQL Dialect',
                releaseDate: '2001-12-01',
                description: 'MySQL dialect for Hibernate ORM',
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
            description: 'SQLAlchemy MySQL dialect',
            authors: ['Michael Bayer'],
            repository: 'https://github.com/sqlalchemy/sqlalchemy',
            implementation: {
                name: 'SQLAlchemy MySQL Dialect',
                releaseDate: '2006-02-01',
                description: 'MySQL dialect for SQLAlchemy',
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
            description: 'Flyway MySQL dialect',
            authors: ['Redgate'],
            repository: 'https://github.com/flyway/flyway',
            implementation: {
                name: 'Flyway MySQL Dialect',
                releaseDate: '2010-06-01',
                description: 'MySQL dialect for Flyway',
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
            description: 'Liquibase MySQL dialect',
            authors: ['Liquibase'],
            repository: 'https://github.com/liquibase/liquibase',
            implementation: {
                name: 'Liquibase MySQL Dialect',
                releaseDate: '2006-12-01',
                description: 'MySQL dialect for Liquibase',
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
            description: 'DBeaver MySQL support',
            authors: ['Serge Rider'],
            repository: 'https://github.com/dbeaver/dbeaver',
            implementation: {
                name: 'DBeaver MySQL Support',
                releaseDate: '2010-06-01',
                description: 'MySQL support for DBeaver',
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
            description: 'DataGrip MySQL support',
            authors: ['JetBrains'],
            repository: 'https://github.com/JetBrains/intellij-community',
            implementation: {
                name: 'DataGrip MySQL Support',
                releaseDate: '2015-12-01',
                description: 'MySQL support for DataGrip',
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
            description: 'Apache Spark MySQL connector',
            authors: ['Apache Software Foundation'],
            repository: 'https://github.com/apache/spark',
            implementation: {
                name: 'Spark MySQL Connector',
                releaseDate: '2014-05-30',
                description: 'MySQL connector for Apache Spark',
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
            description: 'Apache Flink MySQL connector',
            authors: ['Apache Software Foundation'],
            repository: 'https://github.com/apache/flink',
            implementation: {
                name: 'Flink MySQL Connector',
                releaseDate: '2011-01-01',
                description: 'MySQL connector for Apache Flink',
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
            description: 'Grafana MySQL data source',
            authors: ['Grafana Labs'],
            repository: 'https://github.com/grafana/grafana',
            implementation: {
                name: 'Grafana MySQL Data Source',
                releaseDate: '2014-01-01',
                description: 'MySQL data source for Grafana',
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
            description: 'Apache Superset MySQL support',
            authors: ['Airbnb', 'Apache Software Foundation'],
            repository: 'https://github.com/apache/superset',
            implementation: {
                name: 'Superset MySQL Support',
                releaseDate: '2015-10-01',
                description: 'MySQL support for Apache Superset',
                authors: ['Apache Software Foundation'],
                contributorsType: ['open-source']
            }
        }
    ],
    dependencies: []
};

export default mysqlData; 