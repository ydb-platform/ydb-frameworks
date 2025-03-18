import React, { useState } from 'react';
import { Framework, FrameworkCategory, Database } from '../../data/types';
import TimelineFramework from './TimelineFramework';
import styles from './TimelineCategory.module.css';

interface TimelineCategoryProps {
    category: FrameworkCategory;
    frameworks: Framework[];
    startDate: Date;
    endDate: Date;
    width: number;
    selectedDb: Database;
    onTooltipShow: (framework: Framework, position: { x: number; y: number }, tooltipType: 'frameworkLine' | 'dbSupport' | 'endSupport') => void;
    onTooltipHide: () => void;
}

export const TimelineCategory: React.FC<TimelineCategoryProps> = ({
    category,
    frameworks,
    startDate,
    endDate,
    width,
    selectedDb,
    onTooltipShow,
    onTooltipHide
}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleHeaderClick = () => {
        setIsCollapsed(!isCollapsed);
    };

    // Разделяем фреймворки на две группы: с поддержкой YDB и без
    const frameworksWithSupport = frameworks.filter(f => f.implementation);
    const frameworksWithoutSupport = frameworks.filter(f => !f.implementation);

    return (
        <div className={styles.category}>
            <div className={styles.categoryHeader} onClick={handleHeaderClick}>
                <span className={styles.categoryTitle}>{category}</span>
                <span className={styles.arrow}>{isCollapsed ? '▼' : '▲'}</span>
            </div>
            {!isCollapsed && (
                <div className={styles.frameworks}>
                    {/* Отображаем все фреймворки в нужном порядке */}
                    {[...frameworksWithSupport, ...frameworksWithoutSupport].map((framework) => (
                        <TimelineFramework
                            key={framework.id}
                            framework={framework}
                            startDate={startDate}
                            endDate={endDate}
                            width={width}
                            selectedDb={selectedDb}
                            onTooltipShow={onTooltipShow}
                            onTooltipHide={onTooltipHide}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TimelineCategory; 