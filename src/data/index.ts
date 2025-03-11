// src/data/index.ts
import { TimelineData, Database } from './types';
import postgresqlData from './postgresql';
import mysqlData from './mysql';
import mongodbData from './mongodb';
import ydbData from './ydb';
import cassandraData from './cassandra';
import oracleData from "./oracle";
import spannerData from "./spanner";
import yugabytedb from "./yugabyte";
import yugabyteData from "./yugabyte";
import cockroachData from "./cockroach";
import sqlite3Data from "./sqlite3";
import tidbData from "./tidb";
import cosmosdbData from "./cosmosdb";
import dynamodbData from "./dynamodb";
import firebaseData from "./firebase";
import db2Data from "./db2";

const databaseData: Record<Database, TimelineData> = {
    postgresql: postgresqlData,
    mysql: mysqlData,
    mongodb: mongodbData,
    ydb: ydbData,
    cassandra: cassandraData,
    oracle: oracleData,
    spanner: spannerData,
    yugabyte: yugabyteData,
    cockroach: cockroachData,
    sqlite3: sqlite3Data,
    tidb: tidbData,
    cosmosdb: cosmosdbData,
    dynamodb: dynamodbData,
    firebase: firebaseData,
    db2: db2Data,
};

export default databaseData;
