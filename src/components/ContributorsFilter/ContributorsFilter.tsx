// src/components/ContributorsFilter/ContributorsFilter.tsx
import React from 'react';
import { ContributorsType } from '../../data/types';
import styles from './ContributorsFilter.module.css';

interface ContributorsFilterProps {
    contributorsTypes: ContributorsType[];
    selectedTypes: ContributorsType[];
    onToggle: (type: ContributorsType) => void;
    onSelectAll: () => void;
}

const ContributorsFilter: React.FC<ContributorsFilterProps> = ({
                                                                   contributorsTypes,
                                                                   selectedTypes,
                                                                   onToggle,
                                                                   onSelectAll
                                                               }) => {
    // Словарь с понятными названиями
    const typeLabels: Record<ContributorsType, string> = {
        'open-source': 'Open Source Contributors',
        'student': 'Student Contributors',
        'staff': 'Staff Contributors'
    };

    // Словарь с цветами для типов
    const typeColors: Record<ContributorsType, string> = {
        'open-source': '#4CAF50', // Зеленый
        'student': '#2196F3',    // Синий
        'staff': '#FF9800'       // Оранжевый
    };

    // Проверяем, выбраны ли все типы
    const allSelected = contributorsTypes.length === selectedTypes.length;

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterHeader}>
                <h3 className={styles.filterTitle}>Contributors</h3>
                <button
                    className={styles.selectAllButton}
                    onClick={onSelectAll}
                    disabled={allSelected}
                >
                    {allSelected ? 'All Selected' : 'Select All'}
                </button>
            </div>
            <div className={styles.filterOptions}>
                {contributorsTypes.map(type => (
                    <div key={type} className={styles.contributorItem}>
                        <label className={styles.filterOption}>
                            <input
                                type="checkbox"
                                checked={selectedTypes.includes(type)}
                                onChange={() => onToggle(type)}
                                className={styles.checkbox}
                            />
                            <div
                                className={styles.colorBox}
                                style={{ backgroundColor: typeColors[type] }}
                            ></div>
                            <span className={styles.label}>{typeLabels[type]}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContributorsFilter;
