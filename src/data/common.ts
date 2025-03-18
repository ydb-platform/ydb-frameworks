import { Framework } from './types';

export const common: Record<string, Framework> = {
    // Standard APIs
    jdbc: {
        id: 'jdbc',
        name: 'JDBC',
        category: 'Standard API',
        language: 'Java',
        releaseDate: '1997-02-19',
        description: 'Java Database Connectivity API',
        authors: ['Sun Microsystems']
    },
    'database-sql': {
        id: 'database-sql',
        name: 'database/sql',
        category: 'Standard API',
        language: 'Go',
        releaseDate: '2011-03-01',
        description: 'Go standard database interface',
        authors: ['Go Team']
    },
    dbapi: {
        id: 'dbapi',
        name: 'DB-API',
        category: 'Standard API',
        language: 'Python',
        releaseDate: '1996-10-01',
        description: 'Python Database API Specification (PEP 249)',
        authors: ['Python DB-SIG']
    },
    'ado-net': {
        id: 'ado-net',
        name: 'ADO.NET',
        category: 'Standard API',
        language: 'C#',
        releaseDate: '2000-01-01',
        description: 'Microsoft ADO.NET data provider',
        authors: ['Microsoft']
    },

    // ORMs
    gorm: {
        id: 'gorm',
        name: 'GORM',
        category: 'ORM',
        language: 'Go',
        releaseDate: '2013-01-01',
        description: 'The fantastic ORM library for Golang, aims to be developer friendly',
        authors: ['Jinzhu Zhang'],
        repository: 'https://github.com/go-gorm/gorm'
    },
    dapper: {
        id: 'dapper',
        name: 'Dapper',
        category: 'ORM',
        language: 'C#',
        releaseDate: '2011-01-01',
        description: 'A simple object mapper for .NET',
        authors: ['Stack Overflow'],
        repository: 'https://github.com/StackExchange/Dapper'
    },
    hibernate: {
        id: 'hibernate',
        name: 'Hibernate',
        category: 'ORM',
        language: 'Java',
        releaseDate: '2001-12-01',
        description: 'Object-relational mapping (ORM) tool for the Java programming language',
        authors: ['Gavin King', 'Red Hat'],
        repository: 'https://github.com/hibernate/hibernate-orm'
    },
    sqlalchemy: {
        id: 'sqlalchemy',
        name: 'SQLAlchemy',
        category: 'ORM',
        language: 'Python',
        releaseDate: '2006-02-01',
        description: 'The Python SQL Toolkit and ORM',
        authors: ['Michael Bayer'],
        repository: 'https://github.com/sqlalchemy/sqlalchemy'
    },

    // Migration tools
    flyway: {
        id: 'flyway',
        name: 'Flyway',
        category: 'Migration',
        language: 'Java',
        releaseDate: '2010-06-01',
        description: 'Database migration tool',
        authors: ['Redgate'],
        repository: 'https://github.com/flyway/flyway'
    },
    liquibase: {
        id: 'liquibase',
        name: 'Liquibase',
        category: 'Migration',
        language: 'Java',
        releaseDate: '2006-12-01',
        description: 'Database schema change management',
        authors: ['Liquibase'],
        repository: 'https://github.com/liquibase/liquibase'
    },
    goose: {
        id: 'goose',
        name: 'goose',
        category: 'Migration',
        language: 'Go',
        releaseDate: '2013-05-01',
        description: 'Database migration tool for Go',
        authors: ['liamstask', 'pressly'],
        repository: 'https://github.com/pressly/goose'
    },

    // Admin tools
    dbeaver: {
        id: 'dbeaver',
        name: 'DBeaver',
        category: 'Admin',
        language: 'Java',
        releaseDate: '2010-06-01',
        description: 'Universal database tool',
        authors: ['Serge Rider'],
        repository: 'https://github.com/dbeaver/dbeaver'
    },
    datagrip: {
        id: 'datagrip',
        name: 'DataGrip',
        category: 'Admin',
        language: 'Java',
        releaseDate: '2015-12-01',
        description: 'Database IDE by JetBrains',
        authors: ['JetBrains'],
        repository: 'https://github.com/JetBrains/intellij-community'
    },

    // ETL Tools
    spark: {
        id: 'spark',
        name: 'Apache Spark',
        category: 'ETL',
        language: 'Scala',
        releaseDate: '2014-05-30',
        description: 'Unified analytics engine for large-scale data processing',
        authors: ['Apache Software Foundation'],
        repository: 'https://github.com/apache/spark'
    },
    flink: {
        id: 'flink',
        name: 'Apache Flink',
        category: 'ETL',
        language: 'Java',
        releaseDate: '2011-01-01',
        description: 'Stream processing framework for distributed, high-performing data streaming applications',
        authors: ['Apache Software Foundation'],
        repository: 'https://github.com/apache/flink'
    },
    dbt: {
        id: 'dbt',
        name: 'dbt',
        category: 'ETL',
        language: 'Python',
        releaseDate: '2016-12-01',
        description: 'Data transformation tool that enables data analysts and engineers to transform data',
        authors: ['dbt Labs'],
        repository: 'https://github.com/dbt-labs/dbt-core'
    },

    // BI tools
    grafana: {
        id: 'grafana',
        name: 'Grafana',
        category: 'BI',
        language: 'TypeScript',
        releaseDate: '2014-01-01',
        description: 'Open source analytics & monitoring solution',
        authors: ['Grafana Labs'],
        repository: 'https://github.com/grafana/grafana'
    },
    superset: {
        id: 'superset',
        name: 'Apache Superset',
        category: 'BI',
        language: 'Python',
        releaseDate: '2015-10-01',
        description: 'Modern data exploration and visualization platform',
        authors: ['Airbnb', 'Apache Software Foundation'],
        repository: 'https://github.com/apache/superset'
    }
}; 