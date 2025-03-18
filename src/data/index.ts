// src/data/index.ts
import ydbData from './ydb';
import postgresqlData from './postgresql';
import mysqlData from './mysql';
import mssqlData from './mssql';
import oracleData from './oracle';
import mongodbData from './mongodb';
import dynamodbData from './dynamodb';
import greenplumData from './greenplum';
import verticaData from './vertica';
import tidbData from './tidb';
import cosmosdbData from './cosmosdb';
import bigtableData from './bigtable';
import spannerData from './spanner';
import sqlite3Data from './sqlite3';
import yugabytedbData from './yugabytedb';
import cockroachdbData from './cockroachdb';
import redisData from './redis';

export * from './types';

export const databases = {
    ydb: ydbData,
    postgresql: postgresqlData,
    mysql: mysqlData,
    mssql: mssqlData,
    oracle: oracleData,
    mongodb: mongodbData,
    dynamodb: dynamodbData,
    greenplum: greenplumData,
    vertica: verticaData,
    tidb: tidbData,
    cosmosdb: cosmosdbData,
    bigtable: bigtableData,
    spanner: spannerData,
    sqlite3: sqlite3Data,
    yugabytedb: yugabytedbData,
    cockroachdb: cockroachdbData,
    redis: redisData,
};

export {
    ydbData,
    postgresqlData,
    mysqlData,
    mssqlData,
    oracleData,
    mongodbData,
    dynamodbData,
    greenplumData,
    verticaData,
    tidbData,
    cosmosdbData,
    bigtableData,
    spannerData,
    sqlite3Data,
    yugabytedbData,
    cockroachdbData
};
