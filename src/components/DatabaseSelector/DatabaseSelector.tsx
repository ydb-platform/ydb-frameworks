// src/components/DatabaseSelector/DatabaseSelector.tsx
import React, { useState, useRef, useEffect } from 'react';
import { Database } from '../../data/types';
import styles from './DatabaseSelector.module.css';
import databaseData from '../../data/index';

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
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Закрываем выпадающий список при клике вне компонента
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Закрываем выпадающий список по клавише Escape
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    // Фокусируемся на поле поиска при открытии выпадающего списка
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setSearchTerm('');
        }
    };

    const handleSelect = (db: Database) => {
        onDbChange(db);
        setIsOpen(false);
        setSearchTerm('');
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Фильтруем базы данных по поисковому запросу
    const filteredDatabases = databases.filter(db => 
        databaseData[db].displayName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.selectorContainer} ref={dropdownRef}>
            <div className={styles.selectedOption} onClick={toggleDropdown}>
                <span>{databaseData[selectedDb].displayName}</span>
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>
                        <div className={styles.dropdownTitle}>Выберите базу данных</div>
                        <input
                            ref={searchInputRef}
                            type="text"
                            className={styles.searchInput}
                            placeholder="Поиск..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    <div className={styles.optionsContainer}>
                        {filteredDatabases.length > 0 ? (
                            filteredDatabases.map(db => (
                                <div
                                    key={db}
                                    className={`${styles.option} ${selectedDb === db ? styles.selected : ''}`}
                                    onClick={() => handleSelect(db)}
                                >
                                    {databaseData[db].displayName}
                                </div>
                            ))
                        ) : (
                            <div className={styles.noResults}>Ничего не найдено</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DatabaseSelector;
