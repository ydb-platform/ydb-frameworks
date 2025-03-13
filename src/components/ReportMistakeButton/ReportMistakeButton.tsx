import React from 'react';
import { Database } from '../../data/types';
import styles from './ReportMistakeButton.module.css';

interface ReportMistakeButtonProps {
    selectedDb: Database;
}

const ReportMistakeButton: React.FC<ReportMistakeButtonProps> = ({ selectedDb }) => {
    // Формируем URL для редактирования файла на GitHub
    const getEditUrl = () => {
        // Базовый URL репозитория
        const repoUrl = 'https://github.com/ydb-platform/ydb-frameworks';
        
        // Путь к файлу данных выбранной базы данных
        const filePath = `src/data/${selectedDb}.ts`;
        
        // URL для редактирования файла (переход на страницу редактирования)
        const editUrl = `${repoUrl}/edit/main/${filePath}`;
        
        return editUrl;
    };

    return (
        <a 
            href={getEditUrl()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.reportButton}
            title="Fix mistake"
        >
            <span className={styles.icon}>✍️</span>
            <span className={styles.text}>I see a mistake</span>
        </a>
    );
};

export default ReportMistakeButton; 