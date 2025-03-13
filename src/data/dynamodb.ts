// src/data/dynamodb.ts
import { TimelineData } from './types';

const dynamodbData: TimelineData = {
    database: 'dynamodb',
    displayName: 'Amazon DynamoDB',
    frameworks: [
        // Драйверы
        {
            id: 'aws-sdk-dynamodb-js',
            name: 'AWS SDK for JavaScript DynamoDB',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2012-12-01',
            description: 'Official AWS SDK for JavaScript with DynamoDB support',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-sdk-dynamodb-java',
            name: 'AWS SDK for Java DynamoDB',
            category: 'Driver',
            language: 'Java',
            releaseDate: '2012-01-01',
            description: 'Official AWS SDK for Java with DynamoDB support',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-sdk-dynamodb-python',
            name: 'AWS SDK for Python (Boto3) DynamoDB',
            category: 'Driver',
            language: 'Python',
            releaseDate: '2015-06-22',
            description: 'Official AWS SDK for Python with DynamoDB support',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-sdk-dynamodb-go',
            name: 'AWS SDK for Go DynamoDB',
            category: 'Driver',
            language: 'Go',
            releaseDate: '2015-12-01',
            description: 'Official AWS SDK for Go with DynamoDB support',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-sdk-dynamodb-dotnet',
            name: 'AWS SDK for .NET DynamoDB',
            category: 'Driver',
            language: 'C#',
            releaseDate: '2012-11-01',
            description: 'Official AWS SDK for .NET with DynamoDB support',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-sdk-dynamodb-ruby',
            name: 'AWS SDK for Ruby DynamoDB',
            category: 'Driver',
            language: 'Ruby',
            releaseDate: '2012-11-01',
            description: 'Official AWS SDK for Ruby with DynamoDB support',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-sdk-dynamodb-php',
            name: 'AWS SDK for PHP DynamoDB',
            category: 'Driver',
            language: 'PHP',
            releaseDate: '2012-11-01',
            description: 'Official AWS SDK for PHP with DynamoDB support',
            authors: ['Amazon Web Services']
        },

        // Higher-level libraries
        {
            id: 'dynamodb-document-client-js',
            name: 'DynamoDB Document Client for JavaScript',
            category: 'Driver',
            language: 'JavaScript',
            releaseDate: '2015-01-01',
            description: 'Higher-level document interface for DynamoDB in JavaScript',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodbmapper-java',
            name: 'DynamoDB Mapper for Java',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2013-01-01',
            description: 'Object mapper for DynamoDB in Java',
            authors: ['Amazon Web Services']
        },
        {
            id: 'enhanced-dynamodb-client-java',
            name: 'Enhanced DynamoDB Client for Java',
            category: 'ORM',
            language: 'Java',
            releaseDate: '2020-03-01',
            description: 'Enhanced high-level client for DynamoDB in Java v2 SDK',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-datamodel-python',
            name: 'DynamoDB DataModel for Python',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2015-06-22',
            description: 'Data modeling for DynamoDB in Python SDK',
            authors: ['Amazon Web Services']
        },

        // ORM frameworks
        {
            id: 'dynamoose',
            name: 'Dynamoose',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2014-05-16',
            description: 'Mongoose-inspired DynamoDB modeling for Node.js',
            authors: ['Charlie Fish', 'Community']
        },
        {
            id: 'typeorm-dynamodb',
            name: 'TypeORM DynamoDB',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2020-01-01',
            description: 'TypeORM support for DynamoDB',
            authors: ['Community']
        },
        {
            id: 'dynamodb-toolbox',
            name: 'DynamoDB Toolbox',
            category: 'ORM',
            language: 'JavaScript',
            releaseDate: '2020-01-01',
            description: 'Utility library for working with DynamoDB in JavaScript',
            authors: ['Jeremy Daly', 'Community']
        },
        {
            id: 'pynamodb',
            name: 'PynamoDB',
            category: 'ORM',
            language: 'Python',
            releaseDate: '2014-01-01',
            description: 'Pythonic interface for DynamoDB',
            authors: ['Jharrod LaFon', 'Community']
        },
        {
            id: 'dynamo-easy',
            name: 'Dynamo Easy',
            category: 'ORM',
            language: 'TypeScript',
            releaseDate: '2018-01-01',
            description: 'Type-safe and easy-to-use DynamoDB mapper for TypeScript',
            authors: ['Michael Wittwer', 'Community']
        },
        {
            id: 'dynamomapper-dotnet',
            name: 'DynamoMapper for .NET',
            category: 'ORM',
            language: 'C#',
            releaseDate: '2017-01-01',
            description: 'Object mapper for DynamoDB in .NET',
            authors: ['Community']
        },

        // Admin tools
        {
            id: 'aws-console-dynamodb',
            name: 'AWS Console for DynamoDB',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2012-01-01',
            description: 'Web-based management interface for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-cli-dynamodb',
            name: 'AWS CLI for DynamoDB',
            category: 'Admin',
            language: 'Python',
            releaseDate: '2013-09-02',
            description: 'Command-line interface for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-local',
            name: 'DynamoDB Local',
            category: 'Admin',
            language: 'Java',
            releaseDate: '2013-08-12',
            description: 'Downloadable version of DynamoDB for local development',
            authors: ['Amazon Web Services']
        },
        {
            id: 'nosql-workbench-dynamodb',
            name: 'NoSQL Workbench for DynamoDB',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2019-09-16',
            description: 'Client-side GUI application for DynamoDB data modeling and visualization',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-admin',
            name: 'dynamodb-admin',
            category: 'Admin',
            language: 'JavaScript',
            releaseDate: '2017-05-18',
            description: 'GUI for DynamoDB Local and remote DynamoDB instances',
            authors: ['Aaron Burden', 'Community']
        },

        // Migration tools
        {
            id: 'aws-dms',
            name: 'AWS Database Migration Service',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2016-03-15',
            description: 'Managed migration service with DynamoDB support',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-import-export',
            name: 'DynamoDB Import/Export',
            category: 'Migration',
            language: 'Java',
            releaseDate: '2016-01-01',
            description: 'Import/export tools for DynamoDB using S3',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-glue-dynamodb',
            name: 'AWS Glue for DynamoDB',
            category: 'Migration',
            language: 'Python',
            releaseDate: '2017-08-14',
            description: 'ETL service with DynamoDB connectors',
            authors: ['Amazon Web Services']
        },

        // Server-side features
        {
            id: 'dynamodb-streams',
            name: 'DynamoDB Streams',
            category: 'Server-side feature',
            language: 'Java',
            releaseDate: '2015-07-14',
            description: 'Change data capture for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-transactions',
            name: 'DynamoDB Transactions',
            category: 'Server-side feature',
            language: 'Java',
            releaseDate: '2018-11-27',
            description: 'ACID transactions for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-global-tables',
            name: 'DynamoDB Global Tables',
            category: 'Server-side feature',
            language: 'Java',
            releaseDate: '2017-11-29',
            description: 'Multi-region, multi-active replication for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-on-demand',
            name: 'DynamoDB On-Demand',
            category: 'Server-side feature',
            language: 'Java',
            releaseDate: '2018-11-28',
            description: 'Pay-per-request billing option for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-encryption',
            name: 'DynamoDB Encryption Client',
            category: 'Server-side feature',
            language: 'Java',
            releaseDate: '2018-05-01',
            description: 'Client-side encryption for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-dax',
            name: 'DynamoDB Accelerator (DAX)',
            category: 'Server-side feature',
            language: 'Java',
            releaseDate: '2017-06-19',
            description: 'In-memory cache for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-time-to-live',
            name: 'DynamoDB Time to Live (TTL)',
            category: 'Server-side feature',
            language: 'Java',
            releaseDate: '2017-02-27',
            description: 'Automatic item expiration for DynamoDB',
            authors: ['Amazon Web Services']
        },

        // BI инструменты
        {
            id: 'aws-quicksight-dynamodb',
            name: 'Amazon QuickSight for DynamoDB',
            category: 'BI',
            language: 'JavaScript',
            releaseDate: '2018-11-01',
            description: 'Business analytics service with DynamoDB connectivity',
            authors: ['Amazon Web Services']
        },
        {
            id: 'tableau-dynamodb',
            name: 'Tableau for DynamoDB',
            category: 'BI',
            language: 'Java',
            releaseDate: '2019-01-01',
            description: 'Tableau connector for DynamoDB via AWS Glue',
            authors: ['Tableau Software', 'Amazon Web Services']
        },

        // Приложения с абстрактным хранилищем
        {
            id: 'aws-amplify-dynamodb',
            name: 'AWS Amplify DataStore',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2019-12-01',
            description: 'Client library with DynamoDB storage adapter',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-appsync-dynamodb',
            name: 'AWS AppSync with DynamoDB',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2017-11-28',
            description: 'Managed GraphQL service with DynamoDB data source',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-cdk-dynamodb',
            name: 'AWS CDK DynamoDB Constructs',
            category: 'Apps with abstract storage',
            language: 'TypeScript',
            releaseDate: '2019-07-11',
            description: 'Infrastructure as code for DynamoDB',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-sam-dynamodb',
            name: 'AWS SAM with DynamoDB',
            category: 'Apps with abstract storage',
            language: 'YAML',
            releaseDate: '2018-04-01',
            description: 'Serverless application model with DynamoDB resources',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-lambda-dynamodb-triggers',
            name: 'AWS Lambda DynamoDB Triggers',
            category: 'Apps with abstract storage',
            language: 'JavaScript',
            releaseDate: '2015-07-14',
            description: 'Lambda function triggers for DynamoDB Streams',
            authors: ['Amazon Web Services']
        },

        // Логирование
        {
            id: 'aws-cloudtrail-dynamodb',
            name: 'AWS CloudTrail for DynamoDB',
            category: 'Logging',
            language: 'Java',
            releaseDate: '2014-04-01',
            description: 'API auditing for DynamoDB API operations',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-cloudwatch-dynamodb',
            name: 'Amazon CloudWatch for DynamoDB',
            category: 'Logging',
            language: 'Java',
            releaseDate: '2012-01-01',
            description: 'Monitoring service with DynamoDB metrics',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-xray-dynamodb',
            name: 'AWS X-Ray for DynamoDB',
            category: 'Logging',
            language: 'Java',
            releaseDate: '2016-12-01',
            description: 'Distributed tracing system with DynamoDB integration',
            authors: ['Amazon Web Services']
        },

        // Message Broker
        {
            id: 'dynamodb-streams-kinesis-adapter',
            name: 'DynamoDB Streams Kinesis Adapter',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2015-07-14',
            description: 'Library for consuming DynamoDB Streams using Kinesis Client Library',
            authors: ['Amazon Web Services']
        },
        {
            id: 'aws-lambda-dynamodb-event-source',
            name: 'AWS Lambda DynamoDB Event Source',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2015-07-14',
            description: 'Event source mapping between DynamoDB Streams and Lambda',
            authors: ['Amazon Web Services']
        },
        {
            id: 'dynamodb-events-eventbridge',
            name: 'DynamoDB Events for EventBridge',
            category: 'Message broker',
            language: 'Java',
            releaseDate: '2019-07-11',
            description: 'DynamoDB change events in Amazon EventBridge',
            authors: ['Amazon Web Services']
        }
    ],
    dependencies: [
        // SDK Base dependencies
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'dynamodb-document-client-js',
            description: 'DynamoDB Document Client is built on AWS SDK for JavaScript'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'dynamoose',
            description: 'Dynamoose uses AWS SDK for JavaScript'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'typeorm-dynamodb',
            description: 'TypeORM DynamoDB adapter uses AWS SDK for JavaScript'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'dynamodb-toolbox',
            description: 'DynamoDB Toolbox is built on AWS SDK for JavaScript'
        },
        {
            source: 'aws-sdk-dynamodb-java',
            target: 'dynamodbmapper-java',
            description: 'DynamoDB Mapper is built on AWS SDK for Java'
        },
        {
            source: 'aws-sdk-dynamodb-java',
            target: 'enhanced-dynamodb-client-java',
            description: 'Enhanced DynamoDB Client is built on AWS SDK for Java v2'
        },
        {
            source: 'aws-sdk-dynamodb-python',
            target: 'dynamodb-datamodel-python',
            description: 'DynamoDB DataModel is built on AWS SDK for Python'
        },
        {
            source: 'aws-sdk-dynamodb-python',
            target: 'pynamodb',
            description: 'PynamoDB uses AWS SDK for Python'
        },
        {
            source: 'aws-sdk-dynamodb-dotnet',
            target: 'dynamomapper-dotnet',
            description: 'DynamoMapper for .NET uses AWS SDK for .NET'
        },

        // Admin tools
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'aws-console-dynamodb',
            description: 'AWS Console uses AWS SDK internally to manage DynamoDB'
        },
        {
            source: 'aws-sdk-dynamodb-python',
            target: 'aws-cli-dynamodb',
            description: 'AWS CLI uses AWS SDK for Python internally'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'dynamodb-admin',
            description: 'dynamodb-admin uses AWS SDK for JavaScript'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'nosql-workbench-dynamodb',
            description: 'NoSQL Workbench uses AWS SDK for JavaScript'
        },

        // Migration tools
        {
            source: 'aws-sdk-dynamodb-java',
            target: 'aws-dms',
            description: 'AWS DMS uses AWS SDK for Java internally for DynamoDB connectivity'
        },
        {
            source: 'aws-sdk-dynamodb-java',
            target: 'dynamodb-import-export',
            description: 'DynamoDB Import/Export uses AWS SDK for Java'
        },
        {
            source: 'aws-sdk-dynamodb-python',
            target: 'aws-glue-dynamodb',
            description: 'AWS Glue uses AWS SDK for Python for DynamoDB connectivity'
        },

        // Server-side feature dependencies
        {
            source: 'dynamodb-streams',
            target: 'dynamodb-global-tables',
            description: 'DynamoDB Global Tables use DynamoDB Streams for replication'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'dynamodb-encryption',
            description: 'DynamoDB Encryption Client uses AWS SDK'
        },
        {
            source: 'aws-sdk-dynamodb-java',
            target: 'dynamodb-dax',
            description: 'DAX client interfaces with AWS SDK'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'dynamodb-time-to-live',
            description: 'TTL is configured via AWS SDK'
        },

        // BI tool dependencies
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'aws-quicksight-dynamodb',
            description: 'QuickSight uses AWS SDK for DynamoDB connectivity'
        },
        {
            source: 'aws-glue-dynamodb',
            target: 'tableau-dynamodb',
            description: 'Tableau connects to DynamoDB through AWS Glue'
        },

        // Application dependencies
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'aws-amplify-dynamodb',
            description: 'AWS Amplify DataStore uses AWS SDK for JavaScript'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'aws-appsync-dynamodb',
            description: 'AWS AppSync uses AWS SDK for JavaScript for DynamoDB resolvers'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'aws-cdk-dynamodb',
            description: 'AWS CDK DynamoDB constructs generate CloudFormation for DynamoDB'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'aws-lambda-dynamodb-triggers',
            description: 'Lambda functions use AWS SDK to interact with DynamoDB'
        },

        // Logging dependencies
        {
            source: 'aws-sdk-dynamodb-java',
            target: 'aws-cloudtrail-dynamodb',
            description: 'CloudTrail logs DynamoDB API calls made through AWS SDK'
        },
        {
            source: 'aws-sdk-dynamodb-java',
            target: 'aws-cloudwatch-dynamodb',
            description: 'CloudWatch monitors DynamoDB metrics'
        },
        {
            source: 'aws-sdk-dynamodb-js',
            target: 'aws-xray-dynamodb',
            description: 'X-Ray traces AWS SDK calls to DynamoDB'
        },

        // Message broker dependencies
        {
            source: 'dynamodb-streams',
            target: 'dynamodb-streams-kinesis-adapter',
            description: 'Kinesis Adapter consumes DynamoDB Streams'
        },
        {
            source: 'dynamodb-streams',
            target: 'aws-lambda-dynamodb-event-source',
            description: 'Lambda event source mapping reads from DynamoDB Streams'
        },
        {
            source: 'dynamodb-streams',
            target: 'dynamodb-events-eventbridge',
            description: 'EventBridge can receive events from DynamoDB Streams'
        }
    ]
};

export default dynamodbData;
