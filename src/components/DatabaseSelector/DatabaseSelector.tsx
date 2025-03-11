// src/components/DatabaseSelector/DatabaseSelector.tsx
import React from 'react';
import { Database } from '../../data/types';
import styles from './DatabaseSelector.module.css';

interface DatabaseSelectorProps {
    databases: Database[];
    selectedDb: Database;
    onDbChange: (db: Database) => void;
}

const DatabaseSelector: React.FC<DatabaseSelectorProps> = ({
                                                               databases,
                                                               selectedDb,
                                                               onDbChange
                                                           }) => {
    const formatDbName = (db: string): string => {
        // Convert database name to Title Case
        return db.charAt(0).toUpperCase() + db.slice(1);
    };

    return (
        <div className={styles.selectorContainer}>
            <div className={styles.options}>
                {databases.map(db => (
                    <button
                        key={db}
                        className={`${styles.option} ${selectedDb === db ? styles.selected : ''}`}
                        onClick={() => onDbChange(db)}
                    >
                        {formatDbName(db)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DatabaseSelector;
