// src/data/sqlite3.ts
import { TimelineData } from './types';

const sqlite3Data: TimelineData = {
    database: 'sqlite3',
    frameworks: [
        // Стандарты API
        {
            id: 'dbapi',
            name: 'DB-API',
            category: 'Standard',
            language: 'Python',
            releaseDate: '1996-10-01',
            dbSupportDate: '2000-08-01',
            description: 'Python Database API Specification (PEP 249)',
            authors: ['Python DB-SIG']
        },
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2003-02-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'adonet',
            name: 'ADO.NET',
            category: 'Standard',
            language: 'C#',
            releaseDate: '2000-01-01',
            dbSupportDate: '2006-08-08',
            description: 'Microsoft ADO.NET data provider',
            authors: ['Microsoft']
        },
        {
            id: 'database-sql',
            name: 'database/sql',
            category: 'Standard',
            language: 'Go',
            releaseDate: '2011-03-01',
            dbSupportDate: '2013-03-01',
            description: 'Go standard database interface',
            authors: ['Go Team']
        },
        {
            id: 'pdo',
            name: 'PDO',
            category: 'Standard',
            language: 'PHP',
            releaseDate: '2005-06-01',
            dbSupportDate: '2005-06-01',
            description: 'PHP Data Objects interface',
            authors: ['PHP Group']
        },

        // Драйверы - Native
        {
            id: 'sqlite3',
            name: 'SQLite C Library',
            category: 'Driver',
            language: 'C',
            releaseDate: '2000-05-29',
            description: 'SQLite core library and C interface',
            authors: ['D. Richard Hipp']
        },
        {
            id: 'pysqlite',
            name: 'pysqlite',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2000-08-01',
            description: 'SQLite binding for Python',
            authors: ['Gerhard Häring', 'Community']
        },
        {
            id: 'sqlite3-python',
            name: 'sqlite3',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2004-08-16',
            description: 'Built-in SQLite module for Python',
            authors: ['Python Core Team']
        },
        {
            id: 'jdbc-sqlite',
            name: 'SQLite JDBC Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2003-02-01',
            description: 'JDBC driver for SQLite',
            authors: ['David Crawshaw', 'Xerial']
        },
        {
            id: 'system-data-sqlite',
            name: 'System.Data.SQLite',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2006-08-08',
            description: 'ADO.NET provider for SQLite',
            authors: ['SQLite Team']
        },
        {
            id: 'microsoft-data-sqlite',
            name: 'Microsoft.Data.Sqlite',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2016-06-27',
            description: 'Microsoft implementation of ADO.NET provider for SQLite',
            authors: ['Microsoft']
        },
        {
            id: 'go-sqlite3',
            name: 'go-sqlite3',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2013-03-01',
            description: 'SQLite driver for Go using database/sql',
            authors: ['Yasuhiro Matsumoto']
        },
        {
            id: 'pdo-sqlite',
            name: 'PDO_SQLITE',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2005-06-01',
            description: 'PDO driver for SQLite',
            authors: ['PHP Group']
        },
        {
            id: 'node-sqlite3',
            name: 'node-sqlite3',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2011-05-06',
            description: 'Asynchronous, non-blocking SQLite3 bindings for Node.js',
            authors: ['MapBox', 'Community']
        },
        {
            id: 'better-sqlite3',
            name: 'better-sqlite3',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2016-06-10',
            description: 'The fastest and simplest library for SQLite3 in Node.js',
            authors: ['Joshua Wise']
        },

        // ORM frameworks
        {
            id: 'sqlalchemy-sqlite',
            name: 'SQLAlchemy SQLite Dialect',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2006-02-14',
            description: 'SQLite dialect for SQLAlchemy',
            authors: ['Michael Bayer']
        },
        {
            id: 'django-sqlite',
            name: 'Django SQLite Backend',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2005-07-21',
            description: 'SQLite backend for Django ORM',
            authors: ['Django Software Foundation']
        },
        {
            id: 'room',
            name: 'Room',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2017-05-17',
            description: 'Android SQLite database abstraction layer',
            authors: ['Google']
        },
        {
            id: 'entity-framework-sqlite',
            name: 'Entity Framework SQLite Provider',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2016-06-27',
            description: 'SQLite provider for Entity Framework Core',
            authors: ['Microsoft']
        },
        {
            id: 'sequelize-sqlite',
            name: 'Sequelize SQLite Dialect',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2011-07-18',
            description: 'SQLite dialect for Sequelize',
            authors: ['Sascha Depold', 'Community']
        },
        {
            id: 'gorm-sqlite',
            name: 'GORM SQLite Dialect',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2013-10-25',
            description: 'SQLite dialect for GORM',
            authors: ['Jinzhu']
        },
        {
            id: 'typeorm-sqlite',
            name: 'TypeORM SQLite Driver',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2016-01-01',
            description: 'SQLite driver for TypeORM',
            authors: ['Umed Khudoiberdiev']
        },
        {
            id: 'prisma-sqlite',
            name: 'Prisma SQLite Connector',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2019-06-01',
            description: 'SQLite connector for Prisma',
            authors: ['Prisma']
        },

        // Admin tools
        {
            id: 'sqlite-browser',
            name: 'SQLite Browser',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2003-08-01',
            description: 'Visual tool to create, design, and edit SQLite databases',
            authors: ['Mauricio Piacentini', 'Community']
        },
        {
            id: 'dbeaver-sqlite',
            name: 'DBeaver SQLite Support',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2010-06-01',
            description: 'Universal database tool with SQLite support',
            authors: ['Serge Rider']
        },
        {
            id: 'sqlite-studio',
            name: 'SQLiteStudio',
            category: 'Admin',
            language: 'C++',
            releaseDate: '2012-04-01',
            description: 'Multi-platform SQLite database manager',
            authors: ['Pawel Salawa']
        },
        {
            id: 'sqlite-cli',
            name: 'SQLite CLI',
            category: 'Admin',
            language: 'C',
            releaseDate: '2000-05-29',
            description: 'Command-line shell for SQLite',
            authors: ['D. Richard Hipp']
        },

        // Migration tools
        {
            id: 'alembic-sqlite',
            name: 'Alembic SQLite Support',
            category: 'Migration',
            language: 'Python',
            releaseDate: '2012-04-07',
            description: 'SQLite support for Alembic migrations',
            authors: ['Michael Bayer']
        },
        {
            id: 'flyway-sqlite',
            name: 'Flyway SQLite Support',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2010-06-29',
            dbSupportDate: '2012-10-01',
            description: 'Database migration tool with SQLite support',
            authors: ['Axel Fontaine', 'Redgate']
        },
        {
            id: 'dbmate-sqlite',
            name: 'dbmate SQLite Support',
            category: 'Migration',
            language: 'Go',
            releaseDate: '2016-02-06',
            description: 'Database migration tool with SQLite support',
            authors: ['Adrian Macneil']
        },

        // Server-side features
        {
            id: 'sqlite-fts',
            name: 'SQLite FTS',
            category: 'Server-side feature',
            language: 'C',
            releaseDate: '2005-12-01',
            description: 'Full-text search extension for SQLite',
            authors: ['D. Richard Hipp']
        },
        {
            id: 'sqlite-json',
            name: 'SQLite JSON Support',
            category: 'Server-side feature',
            language: 'C',
            releaseDate: '2015-05-20',
            description: 'JSON functions and storage in SQLite',
            authors: ['D. Richard Hipp']
        },
        {
            id: 'sqlite-rtree',
            name: 'SQLite R*Tree',
            category: 'Server-side feature',
            language: 'C',
            releaseDate: '2010-08-04',
            description: 'R-Tree extension for spatial indexing in SQLite',
            authors: ['D. Richard Hipp']
        },
        {
            id: 'sqlite-encryption',
            name: 'SQLite Encryption Extension',
            category: 'Server-side feature',
            language: 'C',
            releaseDate: '2008-09-01',
            description: 'Encryption support for SQLite databases',
            authors: ['SQLite Consortium']
        },

        // Specialized extensions
        {
            id: 'spatialite',
            name: 'SpatiaLite',
            category: 'Server-side feature',
            language: 'C',
            releaseDate: '2008-04-28',
            description: 'Spatial extension for SQLite',
            authors: ['Alessandro Furieri']
        },
        {
            id: 'sqlean',
            name: 'SQLean',
            category: 'Server-side feature',
            language: 'C',
            releaseDate: '2020-01-01',
            description: 'Collection of SQLite extensions',
            authors: ['Anton Zhiyanov']
        },

        // Mobile frameworks
        {
            id: 'sqlite-android',
            name: 'Android SQLite Support',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '2008-09-23',
            description: 'Built-in SQLite support in Android',
            authors: ['Google']
        },
        {
            id: 'core-data-sqlite',
            name: 'Core Data with SQLite',
            category: 'Apps with abstract storage',
            language: 'Swift',
            releaseDate: '2008-07-11',
            description: 'Core Data with SQLite persistent store in iOS',
            authors: ['Apple']
        },
        {
            id: 'realm-sqlite',
            name: 'Realm Database',
            category: 'Apps with abstract storage',
            language: 'C++',
            releaseDate: '2014-07-21',
            description: 'Mobile database alternative to SQLite',
            authors: ['Realm']
        },

        // Web frameworks
        {
            id: 'express-sqlite',
            name: 'Express.js with SQLite',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2010-11-16',
            description: 'Express.js web framework with SQLite storage',
            authors: ['TJ Holowaychuk', 'Community']
        },
        {
            id: 'flask-sqlite',
            name: 'Flask with SQLite',
            category: 'Apps with abstract storage',
            language: 'Python',
            releaseDate: '2010-04-01',
            description: 'Flask web framework with SQLite storage',
            authors: ['Armin Ronacher', 'Community']
        }
    ],
    dependencies: [
        // Стандарты и драйверы
        {
            source: 'sqlite3',
            target: 'pysqlite',
            description: 'pysqlite is a Python wrapper around SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'sqlite3-python',
            description: 'Python\'s built-in sqlite3 module is a wrapper around SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'jdbc-sqlite',
            description: 'SQLite JDBC driver uses SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'system-data-sqlite',
            description: 'System.Data.SQLite uses SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'microsoft-data-sqlite',
            description: 'Microsoft.Data.Sqlite uses SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'go-sqlite3',
            description: 'go-sqlite3 wraps SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'pdo-sqlite',
            description: 'PDO_SQLITE uses SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'node-sqlite3',
            description: 'node-sqlite3 is a wrapper around SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'better-sqlite3',
            description: 'better-sqlite3 is a wrapper around SQLite C library'
        },

        // Драйверы и стандарты
        {
            source: 'pysqlite',
            target: 'dbapi',
            description: 'pysqlite implements Python DB-API'
        },
        {
            source: 'sqlite3-python',
            target: 'dbapi',
            description: 'Python\'s sqlite3 module implements DB-API'
        },
        {
            source: 'jdbc-sqlite',
            target: 'jdbc',
            description: 'SQLite JDBC driver implements JDBC standard'
        },
        {
            source: 'system-data-sqlite',
            target: 'adonet',
            description: 'System.Data.SQLite implements ADO.NET'
        },
        {
            source: 'microsoft-data-sqlite',
            target: 'adonet',
            description: 'Microsoft.Data.Sqlite implements ADO.NET'
        },
        {
            source: 'go-sqlite3',
            target: 'database-sql',
            description: 'go-sqlite3 implements database/sql interface'
        },
        {
            source: 'pdo-sqlite',
            target: 'pdo',
            description: 'PDO_SQLITE implements PDO interface'
        },

        // ORM и драйверы
        {
            source: 'sqlite3-python',
            target: 'sqlalchemy-sqlite',
            description: 'SQLAlchemy SQLite dialect uses sqlite3 module'
        },
        {
            source: 'sqlite3-python',
            target: 'django-sqlite',
            description: 'Django SQLite backend uses sqlite3 module'
        },
        {
            source: 'system-data-sqlite',
            target: 'entity-framework-sqlite',
            description: 'Entity Framework SQLite can use System.Data.SQLite'
        },
        {
            source: 'microsoft-data-sqlite',
            target: 'entity-framework-sqlite',
            description: 'Entity Framework SQLite primarily uses Microsoft.Data.Sqlite'
        },
        {
            source: 'node-sqlite3',
            target: 'sequelize-sqlite',
            description: 'Sequelize SQLite dialect can use node-sqlite3'
        },
        {
            source: 'better-sqlite3',
            target: 'sequelize-sqlite',
            description: 'Sequelize SQLite dialect can use better-sqlite3'
        },
        {
            source: 'go-sqlite3',
            target: 'gorm-sqlite',
            description: 'GORM SQLite dialect uses go-sqlite3'
        },
        {
            source: 'node-sqlite3',
            target: 'typeorm-sqlite',
            description: 'TypeORM SQLite driver can use node-sqlite3'
        },
        {
            source: 'better-sqlite3',
            target: 'typeorm-sqlite',
            description: 'TypeORM SQLite driver can use better-sqlite3'
        },
        {
            source: 'node-sqlite3',
            target: 'prisma-sqlite',
            description: 'Prisma SQLite connector uses node-sqlite3 internally'
        },

        // Админ-инструменты
        {
            source: 'sqlite3',
            target: 'sqlite-browser',
            description: 'SQLite Browser interacts with the SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'sqlite-studio',
            description: 'SQLiteStudio interacts with the SQLite C library'
        },
        {
            source: 'sqlite3',
            target: 'sqlite-cli',
            description: 'SQLite CLI is built into the SQLite C library'
        },
        {
            source: 'jdbc-sqlite',
            target: 'dbeaver-sqlite',
            description: 'DBeaver uses JDBC to connect to SQLite'
        },

        // Миграционные инструменты
        {
            source: 'sqlalchemy-sqlite',
            target: 'alembic-sqlite',
            description: 'Alembic uses SQLAlchemy for SQLite migrations'
        },
        {
            source: 'jdbc-sqlite',
            target: 'flyway-sqlite',
            description: 'Flyway uses JDBC to connect to SQLite'
        },
        {
            source: 'go-sqlite3',
            target: 'dbmate-sqlite',
            description: 'dbmate uses go-sqlite3 for SQLite support'
        },

        // Расширения и функции
        {
            source: 'sqlite3',
            target: 'sqlite-fts',
            description: 'SQLite FTS is an extension to the core SQLite engine'
        },
        {
            source: 'sqlite3',
            target: 'sqlite-json',
            description: 'SQLite JSON support is built into the core SQLite engine'
        },
        {
            source: 'sqlite3',
            target: 'sqlite-rtree',
            description: 'SQLite R*Tree is an extension to the core SQLite engine'
        },
        {
            source: 'sqlite3',
            target: 'sqlite-encryption',
            description: 'SQLite Encryption Extension builds on the core SQLite engine'
        },
        {
            source: 'sqlite3',
            target: 'spatialite',
            description: 'SpatiaLite is built on top of SQLite'
        },
        {
            source: 'sqlite3',
            target: 'sqlean',
            description: 'SQLean extensions build on top of SQLite'
        },

        // Мобильные и веб-фреймворки
        {
            source: 'sqlite3',
            target: 'sqlite-android',
            description: 'Android\'s SQLite support is built on the SQLite engine'
        },
        {
            source: 'sqlite3',
            target: 'core-data-sqlite',
            description: 'Core Data with SQLite store uses the SQLite engine'
        },
        {
            source: 'node-sqlite3',
            target: 'express-sqlite',
            description: 'Express.js apps often use node-sqlite3 for SQLite support'
        },
        {
            source: 'sqlite3-python',
            target: 'flask-sqlite',
            description: 'Flask apps often use the sqlite3 module for SQLite support'
        },
        {
            source: 'jdbc-sqlite',
            target: 'room',
            description: 'Room uses SQLite JDBC driver internally'
        },
        {
            source: 'sqlite-android',
            target: 'room',
            description: 'Room is an abstraction layer over Android\'s SQLite support'
        }
    ]
};

export default sqlite3Data;
