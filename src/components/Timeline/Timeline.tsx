// src/components/Timeline/Timeline.tsx
// Добавим массив с определенным порядком категорий и функцию сортировки

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Framework, Dependency, Database, FrameworkCategory } from '../../data/types';
import TimelineAxis from './TimelineAxis';
import TimelineFramework from './TimelineFramework';
import TimelineDependency from './TimelineDependency';
import { getTimelineBounds, parseDate } from '../../utils/dateUtils';
import styles from './Timeline.module.css';

// Определяем порядок категорий сверху вниз
const categoryOrder: FrameworkCategory[] = [
    'Server-side feature',
    'Standard',
    'Driver',
    'ORM',
    'Migration',
    'Connection Pool',
    'Query Builder',
    'Admin',
    'BI',
    'Visualization',
    'ETL',
    'Apps with abstract storage',
    'Logging',
    'Message broker'
];

// Функция для получения индекса приоритета категории
const getCategoryPriority = (category: string): number => {
    const index = categoryOrder.indexOf(category as FrameworkCategory);
    return index >= 0 ? index : categoryOrder.length; // Если категория не найдена, ставим её в конец
};

interface TimelineProps {
    frameworks: Framework[];
    dependencies: Dependency[];
    selectedDb: Database;
}

const Timeline: React.FC<TimelineProps> = ({ frameworks, dependencies, selectedDb }) => {
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
    const [timelineWidth, setTimelineWidth] = useState<number>(0);
    const timelineRef = useRef<HTMLDivElement>(null);

    // Group frameworks by category
    const frameworksByCategory = useMemo(() => {
        const grouped: Record<string, Framework[]> = {};

        frameworks.forEach(framework => {
            if (!grouped[framework.category]) {
                grouped[framework.category] = [];
            }
            grouped[framework.category].push(framework);
        });

        // Sort frameworks within each category by release date
        Object.keys(grouped).forEach(category => {
            grouped[category].sort((a, b) => {
                const dateA = parseDate(a.releaseDate);
                const dateB = parseDate(b.releaseDate);
                return dateA.getTime() - dateB.getTime();
            });
        });

        return grouped;
    }, [frameworks]);

    // Initialize expanded state for categories
    useEffect(() => {
        const initialExpandedState: Record<string, boolean> = {};
        Object.keys(frameworksByCategory).forEach(category => {
            initialExpandedState[category] = true;
        });
        setExpandedCategories(initialExpandedState);
    }, [frameworksByCategory]);

    // Update timeline width on resize
    useEffect(() => {
        const updateDimensions = () => {
            if (timelineRef.current) {
                setTimelineWidth(timelineRef.current.clientWidth - 200); // 200px for the category labels
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    const { startDate, endDate } = getTimelineBounds(frameworks);

    const toggleCategory = (category: string) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    // Сортируем категории в соответствии с установленным порядком
    const sortedCategories = useMemo(() => {
        return Object.entries(frameworksByCategory).sort((a, b) => {
            return getCategoryPriority(a[0]) - getCategoryPriority(b[0]);
        });
    }, [frameworksByCategory]);

    return (
        <div className={`${styles.timelineContainer} timelineContainer`} ref={timelineRef}>
            <TimelineAxis
                startDate={startDate}
                endDate={endDate}
                width={timelineWidth}
            />

            <div className={styles.timeline}>
                {sortedCategories.map(([category, categoryFrameworks]) => (
                    <div key={category} className={styles.categoryContainer}>
                        <div
                            className={styles.categoryHeader}
                            onClick={() => toggleCategory(category)}
                        >
                            <span className={styles.categoryName}>{category}</span>
                            <span className={styles.expandIcon}>
                {expandedCategories[category] ? '▼' : '▶'}
              </span>
                        </div>

                        {expandedCategories[category] && (
                            <div className={styles.frameworksContainer}>
                                {categoryFrameworks.map(framework => (
                                    <TimelineFramework
                                        key={framework.id}
                                        framework={framework}
                                        startDate={startDate}
                                        endDate={endDate}
                                        width={timelineWidth}
                                        selectedDb={selectedDb}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <svg
                className={`${styles.dependenciesSvg} timelineSvg`}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none'
                }}
            >
                {dependencies.map((dependency, index) => (
                    <TimelineDependency
                        key={`${dependency.source}-${dependency.target}-${index}`}
                        dependency={dependency}
                        frameworks={frameworks}
                        expandedCategories={expandedCategories}
                        frameworksByCategory={frameworksByCategory}
                        selectedDb={selectedDb}
                    />
                ))}
            </svg>
        </div>
    );
};

export default Timeline;
