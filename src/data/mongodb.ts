// src/data/mongodb.ts
import { TimelineData } from './types';

const mongodbData: TimelineData = {
    database: 'mongodb',
    displayName: 'MongoDB',
    frameworks: [
        // Драйверы (MongoDB не использует стандартные API, все драйверы - нативные)
        {
            id: 'mongodb-driver',
            name: 'MongoDB C Driver',
            category: 'Driver',
            language: 'C',
            releaseDate: '2009-02-11',
            description: 'Official MongoDB C driver (libmongoc)',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'mongodb-node',
            name: 'MongoDB Node.js Driver',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2010-02-15',
            description: 'Official MongoDB driver for Node.js',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'mongodb-java',
            name: 'MongoDB Java Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2009-06-15',
            description: 'Official MongoDB driver for Java',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'pymongo',
            name: 'PyMongo',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2009-04-01',
            description: 'Official MongoDB driver for Python',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'mongodb-csharp',
            name: 'MongoDB C# Driver',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2010-01-15',
            description: 'Official MongoDB driver for C#/.NET',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'mongo-go-driver',
            name: 'MongoDB Go Driver',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2016-09-25',
            description: 'Official MongoDB driver for Go',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'mgo',
            name: 'mgo',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2011-03-01',
            description: 'MongoDB driver for Go (now superseded by mongo-go-driver)',
            authors: ['Gustavo Niemeyer'],
            endSupportDate: '2018-05-01'
        },

        // ORM / ODM
        {
            id: 'mongoose',
            name: 'Mongoose',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2010-12-16',
            description: 'MongoDB object modeling for Node.js',
            authors: ['LearnBoost', 'Automattic']
        },
        {
            id: 'spring-data-mongodb',
            name: 'Spring Data MongoDB',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2011-03-02',
            description: 'Spring Data support for MongoDB',
            authors: ['SpringSource', 'Pivotal']
        },
        {
            id: 'mongoengine',
            name: 'MongoEngine',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2009-12-01',
            description: 'Document-Object Mapper for MongoDB and Python',
            authors: ['Harry Marr']
        },
        {
            id: 'mongoid',
            name: 'Mongoid',
            category: 'ORM',
            language: 'Ruby',
            releaseDate: '2009-12-01',
            description: 'ODM (Object-Document-Mapper) for MongoDB in Ruby',
            authors: ['Durran Jordan']
        },

        // Инструменты асинхронной работы
        {
            id: 'motor',
            name: 'Motor',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2012-09-06',
            description: 'Asynchronous Python driver for MongoDB',
            authors: ['A. Jesse Jiryu Davis', 'MongoDB Inc.']
        },

        // Admin tools
        {
            id: 'compass',
            name: 'MongoDB Compass',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2016-06-28',
            description: 'Official GUI for MongoDB',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'studio3t',
            name: 'Studio 3T',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2013-11-01',
            description: 'Professional GUI for MongoDB (formerly MongoChef)',
            authors: ['3T Software Labs']
        },

        // BI инструменты
        {
            id: 'mongodb-bi-connector',
            name: 'MongoDB BI Connector',
            category: 'BI',
            language: 'C++',
            releaseDate: '2016-11-29',
            description: 'Tool to use MongoDB as a data source for SQL-based BI and analytics platforms',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'metabase',
            name: 'Metabase',
            category: 'BI',
            language: 'Java',
            releaseDate: '2015-10-01',
            dbSupportDate: '2017-05-15',
            description: 'Open source business intelligence tool with MongoDB support',
            authors: ['Metabase Team']
        },
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-12-17',
            dbSupportDate: '2018-03-01',
            description: 'Modern data exploration and visualization platform with MongoDB support',
            authors: ['Airbnb', 'Apache Software Foundation']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'strapi',
            name: 'Strapi',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2015-09-14',
            description: 'Headless CMS with MongoDB support',
            authors: ['Strapi Solutions']
        },
        {
            id: 'keystonejs',
            name: 'KeystoneJS',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2013-07-19',
            description: 'CMS and web application framework with MongoDB as primary database',
            authors: ['Jed Watson', 'Thinkmill']
        },
        {
            id: 'nextcloud',
            name: 'Nextcloud',
            category: 'Apps with abstract storage',
            language: 'PHP',
            releaseDate: '2016-06-02',
            dbSupportDate: '2018-02-10',
            description: 'Self-hosted productivity platform with MongoDB support via extension',
            authors: ['Nextcloud GmbH', 'Community']
        },

        // Логирование
        {
            id: 'fluentd',
            name: 'Fluentd',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2011-10-01',
            description: 'Open source data collector with MongoDB output plugin',
            authors: ['Treasure Data']
        },
        {
            id: 'winston-mongodb',
            name: 'Winston MongoDB',
            category: 'Logging',
            language: 'JavaScript',
            releaseDate: '2011-03-20',
            description: 'MongoDB transport for Winston logger',
            authors: ['Charlie Robbins', 'Community']
        },
        {
            id: 'log4j-mongodb',
            name: 'Log4j MongoDB Appender',
            category: 'Logging',
            language: 'Java',
            releaseDate: '2012-05-17',
            description: 'MongoDB appender for Log4j',
            authors: ['Apache Software Foundation', 'Community']
        },

        // Message Broker
        {
            id: 'kafka-connect-mongodb',
            name: 'Kafka Connect MongoDB',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2016-08-01',
            description: 'Kafka Connect MongoDB Connector for CDC from MongoDB',
            authors: ['Hans-Peter Grahsl', 'MongoDB Inc.']
        },
        {
            id: 'mongodb-change-streams',
            name: 'MongoDB Change Streams',
            category: 'Message broker',
            language: 'JavaScript',
            releaseDate: '2018-02-07',
            description: 'Native feature for real-time notifications of data changes in MongoDB',
            authors: ['MongoDB Inc.']
        },

        // Node.js фреймворки и библиотеки
        {
            id: 'mongodb-core',
            name: 'mongodb-core',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2014-10-15',
            description: 'Core MongoDB driver functionality, low-level API',
            authors: ['MongoDB Inc.', 'Community'],
            repository: 'https://github.com/mongodb-js/mongodb-core'
        },
        {
            id: 'monk',
            name: 'Monk',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2012-08-24',
            description: 'Tiny layer that provides simple yet substantial usability improvements for MongoDB usage within Node.js',
            authors: ['Guillermo Rauch', 'Community'],
            repository: 'https://github.com/Automattic/monk'
        },
        {
            id: 'mongoist',
            name: 'Mongoist',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2017-09-15',
            description: 'Mongoose-like MongoDB API based on promises',
            authors: ['Philipp Thürwächter', 'Community'],
            repository: 'https://github.com/saintedlama/mongoist'
        },
        {
            id: 'nestjs-mongodb',
            name: 'NestJS with MongoDB',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2017-11-01',
            description: 'Progressive Node.js framework with MongoDB support',
            authors: ['Kamil Myśliwiec', 'Community'],
            repository: 'https://github.com/nestjs/nest'
        },
        {
            id: 'typegoose',
            name: 'Typegoose',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2017-06-01',
            description: 'Define Mongoose models using TypeScript classes',
            authors: ['Ben Grynhaus', 'Community'],
            repository: 'https://github.com/typegoose/typegoose'
        },
        {
            id: 'mongoose-paginate',
            name: 'mongoose-paginate',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2014-06-01',
            description: 'Pagination plugin for Mongoose',
            authors: ['Edward Hotchkiss', 'Community'],
            repository: 'https://github.com/edwardhotchkiss/mongoose-paginate'
        },
        {
            id: 'mongoose-aggregate-paginate',
            name: 'mongoose-aggregate-paginate',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2016-02-01',
            description: 'Mongoose plugin for pagination in aggregation framework',
            authors: ['Maheshkumar Kakade', 'Community'],
            repository: 'https://github.com/aravindnc/mongoose-aggregate-paginate-v2'
        },
        {
            id: 'connect-mongo',
            name: 'connect-mongo',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2011-04-30',
            description: 'MongoDB session store for Express.js',
            authors: ['Casey Banner', 'Community'],
            repository: 'https://github.com/jdesboeufs/connect-mongo'
        },
        {
            id: 'mongodb-memory-server',
            name: 'mongodb-memory-server',
            category: 'Driver',
            language: 'TypeScript',
            releaseDate: '2018-03-12',
            description: 'Spinning up mongod in memory for fast testing',
            authors: ['Nikolay Zhuravlev', 'Community'],
            repository: 'https://github.com/nodkz/mongodb-memory-server'
        },
        {
            id: 'drizzle-orm-mongodb',
            name: 'DrizzleORM for MongoDB',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2023-06-01',
            description: 'TypeScript ORM with MongoDB support (beta) focused on type-safety',
            authors: ['Drizzle Team', 'Community'],
            repository: 'https://github.com/drizzle-team/drizzle-orm'
        },
    ],
    dependencies: [
        // Зависимости ORM от драйверов
        {
            source: 'mongodb-node',
            target: 'mongoose',
            description: 'Mongoose builds on top of the MongoDB Node.js driver'
        },
        {
            source: 'mongodb-java',
            target: 'spring-data-mongodb',
            description: 'Spring Data MongoDB uses the MongoDB Java driver'
        },
        {
            source: 'pymongo',
            target: 'mongoengine',
            description: 'MongoEngine builds on PyMongo'
        },
        {
            source: 'pymongo',
            target: 'motor',
            description: 'Motor is built as an asynchronous wrapper around PyMongo'
        },

        // BI зависимости
        {
            source: 'mongodb-bi-connector',
            target: 'metabase',
            description: 'Metabase can use MongoDB BI Connector for SQL-based querying'
        },
        {
            source: 'mongodb-bi-connector',
            target: 'superset',
            description: 'Superset can use MongoDB BI Connector for SQL-based querying'
        },

        // Приложения
        {
            source: 'mongodb-node',
            target: 'strapi',
            description: 'Strapi uses MongoDB Node.js driver'
        },
        {
            source: 'mongodb-node',
            target: 'keystonejs',
            description: 'KeystoneJS uses MongoDB Node.js driver'
        },

        // Логирование
        {
            source: 'mongodb-node',
            target: 'winston-mongodb',
            description: 'Winston MongoDB transport uses Node.js driver'
        },
        {
            source: 'mongodb-java',
            target: 'log4j-mongodb',
            description: 'Log4j MongoDB appender uses Java driver'
        }
    ]
};

export default mongodbData;
