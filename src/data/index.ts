// src/data/index.ts
import { TimelineData, Database } from './types';
import ydbData from './ydb';

const databaseData: Record<Database, TimelineData> = {
    ydb: ydbData,
};

export default databaseData;
