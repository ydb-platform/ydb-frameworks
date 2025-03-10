// src/components/LanguageFilter/LanguageFilter.tsx
import React from 'react';
import { ProgrammingLanguage } from '../../data/types';
import { languageColors } from '../../utils/colors';
import styles from './LanguageFilter.module.css';

interface LanguageFilterProps {
    languages: ProgrammingLanguage[];
    selectedLanguages: ProgrammingLanguage[];
    onToggle: (language: ProgrammingLanguage) => void;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({
                                                           languages,
                                                           selectedLanguages,
                                                           onToggle
                                                       }) => {
    return (
        <div className={styles.filterContainer}>
            <h3 className={styles.filterTitle}>Languages</h3>
            <div className={styles.filterOptions}>
                {languages.map(language => (
                    <div key={language} className={styles.languageItem}>
                        <label className={styles.filterOption}>
                            <input
                                type="checkbox"
                                checked={selectedLanguages.includes(language)}
                                onChange={() => onToggle(language)}
                                className={styles.checkbox}
                            />
                            <div
                                className={styles.colorBox}
                                style={{ backgroundColor: languageColors[language] }}
                            ></div>
                            <span className={styles.label}>{language}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageFilter;
