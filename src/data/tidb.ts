// src/data/tidb.ts
import { TimelineData } from './types';

const tidbData: TimelineData = {
    database: 'tidb',
    displayName: 'TiDB',
    frameworks: [
        // Стандарты API
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2016-04-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '2016-04-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2016-01-01',
            description: 'Go standard database interface',
            authors: ['Go Team']
        },
        {
            id: 'odbc',
            name: 'ODBC',
            category: 'Standard',
            language: 'C',
            releaseDate: '1992-01-01',
            dbSupportDate: '2018-11-01',
            description: 'Open Database Connectivity standard',
            authors: ['Microsoft']
        },
        {
            id: 'pdo',
            name: 'PDO',
            category: 'Standard',
            language: 'PHP',
            releaseDate: '2005-06-01',
            dbSupportDate: '2016-04-01',
            description: 'PHP Data Objects interface',
            authors: ['PHP Group']
        },

        // Драйверы
        {
            id: 'tidb-mysql-connector-java',
            name: 'MySQL Connector/J for TiDB',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2016-04-01',
            description: 'MySQL JDBC driver compatible with TiDB',
            authors: ['MySQL AB', 'Oracle', 'PingCAP']
        },
        {
            id: 'tidb-mysql-client',
            name: 'MySQL Client for TiDB',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2016-04-01',
            description: 'MySQL database connector compatible with TiDB',
            authors: ['Community', 'PingCAP']
        },
        {
            id: 'go-mysql-driver-tidb',
            name: 'Go MySQL Driver for TiDB',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2016-01-01',
            description: 'MySQL driver for Go\'s database/sql package, compatible with TiDB',
            authors: ['Julien Schmidt', 'PingCAP']
        },
        {
            id: 'tidb-odbc',
            name: 'TiDB ODBC Driver',
            category: 'Driver',
            language: 'C',
            releaseDate: '2018-11-01',
            description: 'ODBC driver for TiDB',
            authors: ['PingCAP']
        },
        {
            id: 'tidb-pdo-mysql',
            name: 'PDO_MySQL for TiDB',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2016-04-01',
            description: 'PDO driver for MySQL, compatible with TiDB',
            authors: ['PHP Group', 'PingCAP']
        },

        // Special drivers
        {
            id: 'go-tidb-driver',
            name: 'Go TiDB Driver',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2016-09-01',
            description: 'Go driver for TiDB with specialized features',
            authors: ['PingCAP']
        },
        {
            id: 'tikv-client-java',
            name: 'TiKV Java Client',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2018-05-01',
            description: 'Java client for TiKV (the key-value store component of TiDB)',
            authors: ['PingCAP']
        },
        {
            id: 'tikv-client-go',
            name: 'TiKV Go Client',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2017-10-01',
            description: 'Go client for TiKV (the key-value store component of TiDB)',
            authors: ['PingCAP']
        },

        // ORM frameworks
        {
            id: 'hibernate-tidb',
            name: 'Hibernate for TiDB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2017-01-01',
            description: 'Hibernate ORM compatible with TiDB',
            authors: ['Gavin King', 'Community', 'PingCAP']
        },
        {
            id: 'mybatis-tidb',
            name: 'MyBatis for TiDB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2017-03-01',
            description: 'MyBatis SQL mapper compatible with TiDB',
            authors: ['MyBatis Team', 'PingCAP']
        },
        {
            id: 'sqlalchemy-tidb',
            name: 'SQLAlchemy for TiDB',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2017-02-01',
            description: 'SQLAlchemy dialect for TiDB',
            authors: ['Michael Bayer', 'Community', 'PingCAP']
        },
        {
            id: 'django-tidb',
            name: 'Django for TiDB',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2017-05-01',
            description: 'Django ORM compatible with TiDB',
            authors: ['Django Software Foundation', 'PingCAP']
        },
        {
            id: 'gorm-tidb',
            name: 'GORM for TiDB',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2017-06-01',
            description: 'GORM dialect for TiDB',
            authors: ['Jinzhu', 'PingCAP']
        },

        // Admin tools
        {
            id: 'tidb-dashboard',
            name: 'TiDB Dashboard',
            category: 'Admin',
            language: 'TypeScript',
            releaseDate: '2020-01-01',
            description: 'Built-in dashboard for monitoring and managing TiDB',
            authors: ['PingCAP']
        },
        {
            id: 'tiup',
            name: 'TiUP',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2020-04-01',
            description: 'Package manager for TiDB ecosystem',
            authors: ['PingCAP']
        },
        {
            id: 'dbeaver-tidb',
            name: 'DBeaver for TiDB',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2017-01-01',
            description: 'Universal database tool with TiDB support',
            authors: ['Serge Rider', 'Community']
        },
        {
            id: 'tidb-cli',
            name: 'TiDB CLI',
            category: 'Admin',
            language: 'Go',
            releaseDate: '2016-04-01',
            description: 'Command-line client for TiDB',
            authors: ['PingCAP']
        },

        // Migration tools
        {
            id: 'tidb-lightning',
            name: 'TiDB Lightning',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2018-07-01',
            description: 'Tool for fast full import of large data into TiDB',
            authors: ['PingCAP']
        },
        {
            id: 'tidb-data-migration',
            name: 'TiDB Data Migration',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2018-03-01',
            description: 'Tool for migrating data from MySQL/MariaDB to TiDB',
            authors: ['PingCAP']
        },
        {
            id: 'flyway-tidb',
            name: 'Flyway for TiDB',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2017-08-01',
            description: 'Database migration tool compatible with TiDB',
            authors: ['Axel Fontaine', 'Redgate', 'PingCAP']
        },
        {
            id: 'liquibase-tidb',
            name: 'Liquibase for TiDB',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2017-10-01',
            description: 'Database schema change management compatible with TiDB',
            authors: ['Nathan Voxland', 'PingCAP']
        },

        // Server-side features
        {
            id: 'tiflash',
            name: 'TiFlash',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2020-02-01',
            description: 'Columnar storage engine for TiDB with HTAP capabilities',
            authors: ['PingCAP']
        },
        {
            id: 'titandb',
            name: 'TitanDB',
            category: 'Server-side feature',
            language: 'C++',
            releaseDate: '2019-07-01',
            description: 'Key-value storage engine for handling large values in TiKV',
            authors: ['PingCAP']
        },
        {
            id: 'tidb-binlog',
            name: 'TiDB Binlog',
            category: 'Server-side feature',
            language: 'Go',
            releaseDate: '2016-12-01',
            description: 'Tool to collect binary logs from TiDB for replication and restoration',
            authors: ['PingCAP']
        },

        // BI инструменты
        {
            id: 'metabase-tidb',
            name: 'Metabase for TiDB',
            category: 'BI',
            language: 'Java',
            releaseDate: '2017-11-01',
            description: 'Open source business intelligence tool with TiDB support',
            authors: ['Metabase Team', 'PingCAP']
        },
        {
            id: 'superset-tidb',
            name: 'Apache Superset for TiDB',
            category: 'BI',
            language: 'Python',
            releaseDate: '2018-05-01',
            description: 'Modern data exploration and visualization platform with TiDB support',
            authors: ['Apache Software Foundation', 'PingCAP']
        },
        {
            id: 'tableau-tidb',
            name: 'Tableau for TiDB',
            category: 'BI',
            language: 'C++',
            releaseDate: '2018-09-01',
            description: 'Visual analytics platform with TiDB support',
            authors: ['Tableau Software', 'PingCAP']
        },

        // Message Broker
        {
            id: 'tidb-kafka-connector',
            name: 'TiDB Kafka Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2019-03-01',
            description: 'Kafka connector for TiDB',
            authors: ['PingCAP']
        },
        {
            id: 'canal-tidb',
            name: 'Canal for TiDB',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2018-11-01',
            description: 'Incremental data sync from TiDB to other databases or message queues',
            authors: ['Alibaba', 'PingCAP']
        }
    ],
    dependencies: [
        // Зависимости драйверов от стандартов
        {
            source: 'tidb-mysql-connector-java',
            target: 'jdbc',
            description: 'TiDB\'s MySQL-compatible JDBC driver implements JDBC standard'
        },
        {
            source: 'tidb-mysql-client',
            target: 'dbapi',
            description: 'TiDB\'s MySQL-compatible Python driver implements DB-API specification'
        },
        {
            source: 'go-mysql-driver-tidb',
            target: 'database-sql',
            description: 'TiDB\'s MySQL-compatible Go driver implements database/sql interface'
        },
        {
            source: 'tidb-odbc',
            target: 'odbc',
            description: 'TiDB ODBC driver implements ODBC standard'
        },
        {
            source: 'tidb-pdo-mysql',
            target: 'pdo',
            description: 'TiDB\'s MySQL-compatible PDO driver implements PDO interface'
        },

        // ORM dependencies
        {
            source: 'tidb-mysql-connector-java',
            target: 'hibernate-tidb',
            description: 'Hibernate for TiDB uses MySQL-compatible JDBC driver'
        },
        {
            source: 'tidb-mysql-connector-java',
            target: 'mybatis-tidb',
            description: 'MyBatis for TiDB uses MySQL-compatible JDBC driver'
        },
        {
            source: 'tidb-mysql-client',
            target: 'sqlalchemy-tidb',
            description: 'SQLAlchemy for TiDB uses MySQL-compatible Python driver'
        },
        {
            source: 'tidb-mysql-client',
            target: 'django-tidb',
            description: 'Django for TiDB uses MySQL-compatible Python driver'
        },
        {
            source: 'go-mysql-driver-tidb',
            target: 'gorm-tidb',
            description: 'GORM for TiDB uses MySQL-compatible Go driver'
        },

        // Migration tools
        {
            source: 'tidb-mysql-connector-java',
            target: 'flyway-tidb',
            description: 'Flyway for TiDB uses MySQL-compatible JDBC driver'
        },
        {
            source: 'tidb-mysql-connector-java',
            target: 'liquibase-tidb',
            description: 'Liquibase for TiDB uses MySQL-compatible JDBC driver'
        },

        // Server-side features
        {
            source: 'titandb',
            target: 'tidb-lightning',
            description: 'TiDB Lightning leverages TitanDB for fast data import'
        },
        {
            source: 'tidb-binlog',
            target: 'tidb-data-migration',
            description: 'TiDB Data Migration can utilize TiDB Binlog'
        },
        {
            source: 'tidb-binlog',
            target: 'canal-tidb',
            description: 'Canal for TiDB can use TiDB Binlog for data sync'
        },

        // Admin tools
        {
            source: 'tidb-dashboard',
            target: 'tiup',
            description: 'TiUP can manage TiDB Dashboard'
        },

        // BI tools
        {
            source: 'tidb-mysql-connector-java',
            target: 'metabase-tidb',
            description: 'Metabase uses MySQL-compatible JDBC driver to connect to TiDB'
        },
        {
            source: 'tidb-mysql-client',
            target: 'superset-tidb',
            description: 'Superset uses MySQL-compatible Python driver to connect to TiDB'
        },
        {
            source: 'tidb-odbc',
            target: 'tableau-tidb',
            description: 'Tableau uses ODBC driver to connect to TiDB'
        },

        // Message broker
        {
            source: 'tidb-mysql-connector-java',
            target: 'tidb-kafka-connector',
            description: 'TiDB Kafka Connector uses MySQL-compatible JDBC driver'
        }
    ]
};

export default tidbData;
