// src/components/ThemeToggle/ThemeToggle.tsx
import React from 'react';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
    isDarkTheme: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkTheme, onToggle }) => {
    return (
        <div className={styles.toggleContainer} onClick={onToggle}>
            <div className={`${styles.toggle} ${isDarkTheme ? styles.dark : ''}`}>
                <div className={styles.toggleHandle}></div>
                <div className={styles.icons}>
                    <span className={styles.sunIcon}>☀️</span>
                    <span className={styles.moonIcon}>🌙</span>
                </div>
            </div>
        </div>
    );
};

export default ThemeToggle;
