// src/data/cassandra.ts
import { TimelineData } from './types';

const cassandraData: TimelineData = {
    database: 'cassandra',
    displayName: 'Apache Cassandra',
    frameworks: [
        // Стандарты API (Cassandra в основном использует свои собственные API,
        // но некоторые стандартные интерфейсы тоже поддерживаются)
        {
            id: 'jdbc',
            name: 'JDBC',
            category: 'Standard',
            language: 'Java',
            releaseDate: '1997-02-19',
            dbSupportDate: '2011-05-01',
            description: 'Java Database Connectivity API',
            authors: ['Sun Microsystems']
        },
        {
            id: 'jpa',
            name: 'JPA',
            category: 'Standard',
            language: 'Java',
            releaseDate: '2006-05-11',
            dbSupportDate: '2012-01-23',
            description: 'Java Persistence API',
            authors: ['Sun Microsystems', 'Oracle']
        },

        // Драйверы
        {
            id: 'cassandra-driver-java',
            name: 'DataStax Java Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2012-09-28',
            description: 'Java client driver for Apache Cassandra',
            authors: ['DataStax']
        },
        {
            id: 'cassandra-driver-python',
            name: 'DataStax Python Driver',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2013-08-19',
            description: 'Python client driver for Apache Cassandra',
            authors: ['DataStax']
        },
        {
            id: 'cassandra-driver-nodejs',
            name: 'DataStax Node.js Driver',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2014-01-15',
            description: 'Node.js client driver for Apache Cassandra',
            authors: ['DataStax']
        },
        {
            id: 'gocql',
            name: 'gocql',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2013-03-05',
            description: 'Go client for Apache Cassandra',
            authors: ['gocql team']
        },
        {
            id: 'cassandra-driver-csharp',
            name: 'DataStax C# Driver',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2014-05-08',
            description: 'C# client driver for Apache Cassandra',
            authors: ['DataStax']
        },
        {
            id: 'cassandra-jdbc',
            name: 'Cassandra JDBC Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2011-05-01',
            description: 'JDBC driver for Apache Cassandra',
            authors: ['DataStax', 'Community']
        },

        // ORM frameworks
        {
            id: 'phantom',
            name: 'Phantom',
            category: 'ORM',
            language: 'Scala',
            releaseDate: '2013-11-02',
            description: 'Scala client and ORM for Apache Cassandra',
            authors: ['outworkers']
        },
        {
            id: 'cassandra-gorm',
            name: 'Cassandra GORM',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2017-04-11',
            description: 'GORM adapter for Cassandra',
            authors: ['GORM community']
        },
        {
            id: 'cassandra-kundera',
            name: 'Kundera',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2012-01-23',
            description: 'JPA-compliant ORM for NoSQL databases including Cassandra',
            authors: ['Impetus Technologies']
        },
        {
            id: 'spring-data-cassandra',
            name: 'Spring Data Cassandra',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2014-03-31',
            description: 'Spring Data module for Apache Cassandra',
            authors: ['Spring Team', 'Pivotal']
        },

        // Query Languages / Builders
        {
            id: 'cassandra-cql',
            name: 'CQL',
            category: 'Query Builder',
            language: 'Java',
            releaseDate: '2011-08-08',
            description: 'Cassandra Query Language',
            authors: ['Apache Cassandra team']
        },

        // Admin tools
        {
            id: 'cassandra-reaper',
            name: 'Cassandra Reaper',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2014-10-01',
            description: 'Management tool for Apache Cassandra repair operations',
            authors: ['Spotify', 'The Last Pickle']
        },
        {
            id: 'datastax-studio',
            name: 'DataStax Studio',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2016-08-03',
            description: 'Interactive developer tool for Apache Cassandra and DSE',
            authors: ['DataStax']
        },

        // Migration tools
        {
            id: 'cassandra-migration',
            name: 'Cassandra Migration',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2016-09-12',
            description: 'Database migration tool for Apache Cassandra inspired by Flyway',
            authors: ['Contrast Security']
        },

        // BI инструменты
        {
            id: 'metabase',
            name: 'Metabase',
            category: 'BI',
            language: 'Java',
            releaseDate: '2015-10-01',
            dbSupportDate: '2018-06-01',
            description: 'Open source business intelligence tool with Cassandra support',
            authors: ['Metabase Team']
        },
        {
            id: 'superset',
            name: 'Apache Superset',
            category: 'BI',
            language: 'Python',
            releaseDate: '2015-12-17',
            dbSupportDate: '2019-01-15',
            description: 'Modern data exploration and visualization platform with Cassandra support',
            authors: ['Airbnb', 'Apache Software Foundation']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'stargate',
            name: 'Stargate',
            category: 'Apps with abstract storage',
            language: 'Java',
            releaseDate: '2020-09-16',
            description: 'Data API gateway that provides REST, GraphQL, and Document API access to Cassandra',
            authors: ['DataStax']
        },
        {
            id: 'killrvideo',
            name: 'KillrVideo',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2015-07-14',
            description: 'Reference application showing how to use Cassandra in a video sharing platform',
            authors: ['DataStax']
        },

        // Логирование
        {
            id: 'fluentd',
            name: 'Fluentd',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2011-10-01',
            dbSupportDate: '2013-08-01',
            description: 'Open source data collector with Cassandra output plugin',
            authors: ['Treasure Data']
        },
        {
            id: 'logstash',
            name: 'Logstash',
            category: 'Logging',
            language: 'Ruby',
            releaseDate: '2010-08-02',
            dbSupportDate: '2013-09-01',
            description: 'Data processing pipeline with Cassandra input/output support',
            authors: ['Jordan Sissel', 'Elastic']
        },

        // Message Broker
        {
            id: 'kafka-connect-cassandra',
            name: 'Kafka Connect Cassandra',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2016-04-01',
            description: 'Kafka Connect sink connector for Apache Cassandra',
            authors: ['DataStax', 'Community']
        },
        {
            id: 'pulsar-cassandra',
            name: 'Apache Pulsar Cassandra Connector',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2018-09-01',
            description: 'Apache Pulsar connector for Cassandra',
            authors: ['StreamNative', 'Apache Software Foundation']
        },

        // Node.js фреймворки и библиотеки
        {
            id: 'cassandra-driver-nodejs-express',
            name: 'Express.js with Cassandra',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2015-03-01',
            description: 'Express.js web framework with Cassandra integration',
            authors: ['Community', 'DataStax'],
            repository: 'https://github.com/datastax/nodejs-driver'
        },
        {
            id: 'nestjs-cassandra',
            name: 'NestJS with Cassandra',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2018-05-01',
            description: 'Progressive Node.js framework with Cassandra support',
            authors: ['Kamil Myśliwiec', 'Community'],
            repository: 'https://github.com/nestjs/nest'
        },
        {
            id: 'express-cassandra',
            name: 'Express-Cassandra',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2016-01-15',
            description: 'Cassandra ORM/ODM/OGM for Node.js with Express.js integration',
            authors: ['Mahafuzur Rahman', 'Community'],
            repository: 'https://github.com/masumsoft/express-cassandra'
        },
        {
            id: 'cassandra-store',
            name: 'cassandra-store',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2015-07-01',
            description: 'Cassandra session store for Express.js',
            authors: ['João Jerónimo', 'Community'],
            repository: 'https://github.com/webcc/cassandra-store'
        },
        {
            id: 'cassandra-migration',
            name: 'cassandra-migration',
            category: 'Migration',
            language: 'JavaScript',
            releaseDate: '2017-02-01',
            description: 'Node.js migration tool for Apache Cassandra',
            authors: ['Tomas Della Vedova', 'Community'],
            repository: 'https://github.com/gocql/gocql'
        },
        {
            id: 'typeorm-cassandra',
            name: 'TypeORM for Cassandra',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2018-01-01',
            description: 'TypeORM support for Cassandra',
            authors: ['Umed Khudoiberdiev', 'Community'],
            repository: 'https://github.com/typeorm/typeorm'
        },
        {
            id: 'cassanknex',
            name: 'CassanKnex',
            category: 'Query Builder',
            language: 'JavaScript',
            releaseDate: '2015-08-01',
            description: 'Knex.js inspired query builder for Cassandra CQL',
            authors: ['Austin Delamar', 'Community'],
            repository: 'https://github.com/azuqua/cassanknex'
        },
        {
            id: 'priam-js',
            name: 'Priam.js',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2016-05-01',
            description: 'Node.js ORM for Cassandra inspired by Netflix Priam',
            authors: ['Community'],
            repository: 'https://github.com/godaddy/priam'
        }
    ],
    dependencies: [
        // Зависимости от стандартов к драйверам
        {
            source: 'cassandra-jdbc',
            target: 'jdbc',
            description: 'Cassandra JDBC Driver implements JDBC standard'
        },
        {
            source: 'cassandra-kundera',
            target: 'jpa',
            description: 'Kundera implements JPA standard for Cassandra'
        },

        // ORM зависимости
        {
            source: 'cassandra-driver-java',
            target: 'spring-data-cassandra',
            description: 'Spring Data Cassandra uses DataStax Java driver'
        },
        {
            source: 'cassandra-driver-java',
            target: 'cassandra-kundera',
            description: 'Kundera uses DataStax Java driver for Cassandra support'
        },
        {
            source: 'gocql',
            target: 'cassandra-gorm',
            description: 'GORM Cassandra adapter uses gocql'
        },

        // Driver зависимости
        {
            source: 'cassandra-cql',
            target: 'cassandra-driver-java',
            description: 'Java driver implements CQL protocol'
        },
        {
            source: 'cassandra-cql',
            target: 'cassandra-driver-python',
            description: 'Python driver implements CQL protocol'
        },
        {
            source: 'cassandra-cql',
            target: 'cassandra-driver-nodejs',
            description: 'Node.js driver implements CQL protocol'
        },
        {
            source: 'cassandra-cql',
            target: 'gocql',
            description: 'gocql implements CQL protocol'
        },

        // Admin tools
        {
            source: 'cassandra-driver-java',
            target: 'cassandra-reaper',
            description: 'Cassandra Reaper uses DataStax Java driver'
        },
        {
            source: 'cassandra-driver-java',
            target: 'datastax-studio',
            description: 'DataStax Studio uses Java driver'
        },

        // BI tools
        {
            source: 'cassandra-jdbc',
            target: 'metabase',
            description: 'Metabase uses JDBC for Cassandra integration'
        },
        {
            source: 'cassandra-driver-python',
            target: 'superset',
            description: 'Apache Superset uses Python driver for Cassandra'
        },

        // Abstract storage apps
        {
            source: 'cassandra-driver-java',
            target: 'stargate',
            description: 'Stargate uses Java driver internally'
        },

        // Logging
        {
            source: 'cassandra-driver-java',
            target: 'logstash',
            description: 'Logstash Cassandra plugin uses Java driver'
        },

        // Message brokers
        {
            source: 'cassandra-driver-java',
            target: 'kafka-connect-cassandra',
            description: 'Kafka Connect Cassandra uses Java driver'
        },
        {
            source: 'cassandra-driver-java',
            target: 'pulsar-cassandra',
            description: 'Pulsar Cassandra connector uses Java driver'
        }
    ]
};

export default cassandraData;
