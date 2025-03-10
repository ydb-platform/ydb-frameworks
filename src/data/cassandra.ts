// src/data/cassandra.ts
import { TimelineData } from './types';

const cassandraData: TimelineData = {
    database: 'cassandra',
    frameworks: [
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
            id: 'phantom',
            name: 'Phantom',
            category: 'ORM',
            language: 'Scala',
            releaseDate: '2013-11-02',
            description: 'Scala client and ORM for Apache Cassandra',
            authors: ['outworkers']
        },
        {
            id: 'gorm',
            name: 'GORM',
            category: 'ORM',
            language: 'Go',
            releaseDate: '2013-10-25',
            dbSupportDate: '2017-04-11',
            description: 'The fantastic ORM library for Golang. Cassandra support was added through GORM Cassandra adapter.',
            authors: ['Jinzhu', 'GORM community'],
            dbImplementationName: 'GORM Cassandra Adapter'
        },
        {
            id: 'jpa',
            name: 'JPA',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2006-05-11',
            dbSupportDate: '2012-01-23',
            description: 'Java Persistence API. Cassandra support was added through Kundera, a JPA-compliant ORM for NoSQL databases.',
            authors: ['Sun Microsystems', 'Impetus Technologies'],
            dbImplementationName: 'Kundera'
        },
        {
            id: 'spring-data',
            name: 'Spring Data',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2010-03-01',
            dbSupportDate: '2014-03-31',
            description: 'Spring Data provides a consistent approach to data access. Cassandra support was added through Spring Data Cassandra module.',
            authors: ['Spring Team', 'Pivotal'],
            dbImplementationName: 'Spring Data Cassandra'
        },
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
            id: 'cassandra-cql',
            name: 'CQL',
            category: 'Query Builder',
            language: 'Java',
            releaseDate: '2011-08-08',
            description: 'Cassandra Query Language',
            authors: ['Apache Cassandra team']
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
        {
            id: 'cassandra-migration',
            name: 'Cassandra Migration',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2016-09-12',
            description: 'Database migration tool for Apache Cassandra inspired by Flyway',
            authors: ['Contrast Security']
        },
        {
            id: 'express-cassandra',
            name: 'Express Cassandra',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2015-03-01',
            description: 'Mongoose-like ODM for Apache Cassandra for Node.js',
            authors: ['Masumba']
        }
    ],
    dependencies: [
        {
            source: 'cassandra-driver-java',
            target: 'spring-data',
            description: 'Spring Data Cassandra uses DataStax Java driver'
        },
        {
            source: 'cassandra-driver-java',
            target: 'jpa',
            description: 'Kundera uses DataStax Java driver for Cassandra support'
        },
        {
            source: 'gocql',
            target: 'gorm',
            description: 'GORM Cassandra adapter uses gocql'
        },
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
        }
    ]
};

export default cassandraData;
