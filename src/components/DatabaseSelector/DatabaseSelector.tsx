// src/components/DatabaseSelector/DatabaseSelector.tsx
import React from 'react';
import { Database } from '../../data/types';
import styles from './DatabaseSelector.module.css';
import dbDisplayNames from '../../data/dbDisplayNames';

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
    return (
        <div className={styles.selectorContainer}>
            <div className={styles.options}>
                {databases.map(db => (
                    <button
                        key={db}
                        className={`${styles.option} ${selectedDb === db ? styles.selected : ''}`}
                        onClick={() => onDbChange(db)}
                    >
                        {dbDisplayNames[db]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DatabaseSelector;
