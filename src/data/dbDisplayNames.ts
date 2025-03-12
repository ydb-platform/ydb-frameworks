import { Database } from './types';

// Отображение технических имен баз данных на понятные пользователю имена
const dbDisplayNames: Record<Database, string> = {
    postgresql: 'PostgreSQL',
    mysql: 'MySQL',
    mongodb: 'MongoDB',
    ydb: 'YDB',
    cassandra: 'Apache Cassandra',
    oracle: 'Oracle Database',
    spanner: 'Google Cloud Spanner',
    yugabyte: 'YugabyteDB',
    cockroach: 'CockroachDB',
    tidb: 'TiDB',
    cosmosdb: 'Azure Cosmos DB',
    dynamodb: 'Amazon DynamoDB',
    sqlite3: 'SQLite',
    firebase: 'Firebase Realtime Database',
    db2: 'IBM Db2',
};

export default dbDisplayNames; 