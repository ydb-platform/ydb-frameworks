// src/components/ContributorsFilter/ContributorsFilter.tsx
import React from 'react';
import { ContributorType } from '../../data/types';
import styles from './ContributorsFilter.module.css';

interface ContributorsFilterProps {
    selectedContributors: ContributorType[];
    onContributorsChange: (contributors: ContributorType[]) => void;
    availableContributors: ContributorType[];
}

const ContributorsFilter: React.FC<ContributorsFilterProps> = ({
                                                                   selectedContributors,
                                                                   onContributorsChange,
                                                                   availableContributors
                                                               }) => {
    // Словарь с понятными названиями
    const typeLabels: Record<ContributorType, string> = {
        'open-source': 'Open Source Contributors',
        'student': 'Student Contributors',
        'staff': 'Staff Contributors',
        'freelance': 'Freelance Contributors'
    };

    // Словарь с цветами для типов
    const typeColors: Record<ContributorType, string> = {
        'open-source': '#4CAF50', // Зеленый
        'student': '#2196F3',    // Синий
        'staff': '#FF9800',       // Оранжевый
        'freelance': '#FFEB3B'    // Желтый
    };

    // Проверяем, выбраны ли все типы
    const allSelected = availableContributors.length === selectedContributors.length;

    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterHeader}>
                <h3 className={styles.filterTitle}>Contributors</h3>
                <button
                    className={styles.selectAllButton}
                    onClick={() => onContributorsChange(availableContributors)}
                    disabled={allSelected}
                >
                    {allSelected ? 'All Selected' : 'Select All'}
                </button>
            </div>
            <div className={styles.filterOptions}>
                {availableContributors.map(type => (
                    <div key={type} className={styles.contributorItem}>
                        <label className={styles.filterOption}>
                            <input
                                type="checkbox"
                                checked={selectedContributors.includes(type)}
                                onChange={() => onContributorsChange(selectedContributors.includes(type) ? selectedContributors.filter(t => t !== type) : [...selectedContributors, type])}
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
