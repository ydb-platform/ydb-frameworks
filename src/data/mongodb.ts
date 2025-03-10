// src/data/mongodb.ts
import { TimelineData } from './types';

const mongodbData: TimelineData = {
    database: 'mongodb',
    frameworks: [
        {
            id: 'mongodb-driver',
            name: 'MongoDB Driver',
            category: 'Driver',
            language: 'C',
            releaseDate: '2009-02-11',
            description: 'Official MongoDB C driver (libmongoc)',
            authors: ['MongoDB Inc.']
        },
        {
            id: 'node-mongodb-native',
            name: 'Node.js MongoDB Driver',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2010-02-15',
            description: 'Official MongoDB driver for Node.js',
            authors: ['MongoDB Inc.']
        },
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
            id: 'mongo-java-driver',
            name: 'MongoDB Java Driver',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2009-06-15',
            description: 'Official MongoDB driver for Java',
            authors: ['MongoDB Inc.']
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
            id: 'pymongo',
            name: 'PyMongo',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2009-04-01',
            description: 'Official MongoDB driver for Python',
            authors: ['MongoDB Inc.']
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
            id: 'motor',
            name: 'Motor',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2012-09-06',
            description: 'Asynchronous Python driver for MongoDB',
            authors: ['A. Jesse Jiryu Davis', 'MongoDB Inc.']
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
            id: 'mongoid',
            name: 'Mongoid',
            category: 'ORM',
            language: 'Ruby',
            releaseDate: '2009-12-01',
            description: 'ODM (Object-Document-Mapper) for MongoDB in Ruby',
            authors: ['Durran Jordan']
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
        {
            id: 'mgo',
            name: 'mgo',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2011-03-01',
            description: 'MongoDB driver for Go (now superseded by mongo-go-driver)',
            authors: ['Gustavo Niemeyer'],
            endSupportDate: '2018-05-01'
        }
    ],
    dependencies: [
        {
            source: 'node-mongodb-native',
            target: 'mongoose',
            description: 'Mongoose builds on top of the MongoDB Node.js driver'
        },
        {
            source: 'mongo-java-driver',
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
        }
    ]
};

export default mongodbData;
