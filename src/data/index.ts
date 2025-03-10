// src/data/index.ts
import { TimelineData, Database } from './types';
import postgresqlData from './postgresql';
import mysqlData from './mysql';
import mongodbData from './mongodb';
import ydbData from './ydb';
import cassandraData from './cassandra';

const databaseData: Record<Database, TimelineData> = {
    postgresql: postgresqlData,
    mysql: mysqlData,
    mongodb: mongodbData,
    ydb: ydbData,
    cassandra: cassandraData,
};

export default databaseData;
