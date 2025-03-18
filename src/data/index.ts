// src/data/index.ts
import ydbData from './ydb';
import postgresqlData from './postgresql';
import mysqlData from './mysql';
import mssqlData from './mssql';
import oracleData from './oracle';

export * from './types';

export const databases = {
    ydb: ydbData,
    postgresql: postgresqlData,
    mysql: mysqlData,
    mssql: mssqlData,
    oracle: oracleData
};
