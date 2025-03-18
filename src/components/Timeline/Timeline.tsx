// src/components/Timeline/Timeline.tsx
import React, {useState, useRef, useEffect, useMemo} from 'react';
import {Framework, Dependency, Database, FrameworkCategory} from '../../data/types';
import TimelineAxis from './TimelineAxis';
import TimelineDependency from './TimelineDependency';
import TimelineTooltip from './TimelineTooltip';
import {getTimelineBounds, parseDate} from '../../utils/dateUtils';
import styles from './Timeline.module.css';
import TimelineCategory from './TimelineCategory';

// Определяем порядок категорий сверху вниз
const categoryOrder: FrameworkCategory[] = [
    'Server-side feature',
    'Standard API',
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
    showDependencies: boolean;
}

const Timeline: React.FC<TimelineProps> = ({frameworks, dependencies, selectedDb, showDependencies}) => {
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
    const [timelineWidth, setTimelineWidth] = useState<number>(0);
    const timelineRef = useRef<HTMLDivElement>(null);

    // Добавим состояние для тултипов
    const [tooltips, setTooltips] = useState<{
        framework: Framework;
        position: { x: number; y: number };
        tooltipType: 'frameworkLine' | 'dbSupport' | 'endSupport';
    } | null>(null);

    // Добавляем состояние для выделенного фреймворка
    const [highlightedFramework, setHighlightedFramework] = useState<string | null>(null);

    // Добавляем состояние для связанных фреймворков (для подсветки зависимостей)
    const [relatedFrameworks, setRelatedFrameworks] = useState<Set<string>>(new Set());

    // Group frameworks by category
    const frameworksByCategory = useMemo(() => {
        const grouped: Record<string, Framework[]> = {};

        // Всегда инициализируем категорию "Server-side feature", даже если в данных нет фреймворков с этой категорией
        grouped['Server-side feature'] = [];

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

    // Сбрасываем выделение фреймворка при отключении зависимостей
    useEffect(() => {
        if (!showDependencies) {
            setHighlightedFramework(null);
            setRelatedFrameworks(new Set());
        }
    }, [showDependencies]);

    const {startDate, endDate} = getTimelineBounds(frameworks);

    // Сортируем категории в соответствии с установленным порядком
    const sortedCategories = useMemo(() => {
        return Object.entries(frameworksByCategory).sort((a, b) => {
            return getCategoryPriority(a[0]) - getCategoryPriority(b[0]);
        });
    }, [frameworksByCategory]);

    // Функция для отображения тултипа
    const showTooltip = (
        framework: Framework,
        position: { x: number; y: number },
        tooltipType: 'frameworkLine' | 'dbSupport' | 'endSupport'
    ) => {
        setTooltips({ framework, position, tooltipType });
    };

    return (
        <div className={`${styles.timelineContainer} timelineContainer`} ref={timelineRef}>
            <TimelineAxis
                startDate={startDate}
                endDate={endDate}
                width={timelineWidth}
            />

            <div className={styles.timeline}>
                {sortedCategories.map(([category, categoryFrameworks]) => (
                    // Не отображаем категорию, если в ней нет фреймворков
                    categoryFrameworks.length > 0 ? (
                        <div key={category} className={styles.categoryContainer}>
                            <TimelineCategory
                                category={category as FrameworkCategory}
                                frameworks={categoryFrameworks}
                                startDate={startDate}
                                endDate={endDate}
                                width={timelineWidth}
                                selectedDb={selectedDb}
                                onTooltipShow={showTooltip}
                                onTooltipHide={() => setTooltips(null)}
                            />
                        </div>
                    ) : null
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
                {showDependencies && dependencies.map((dependency, index) => (
                    <TimelineDependency
                        key={`${dependency.source}-${dependency.target}-${index}`}
                        dependency={dependency}
                        frameworks={frameworks}
                        expandedCategories={expandedCategories}
                        frameworksByCategory={frameworksByCategory}
                        selectedDb={selectedDb}
                        isHighlighted={
                            (highlightedFramework === dependency.source && relatedFrameworks.has(dependency.target)) ||
                            (highlightedFramework === dependency.target && relatedFrameworks.has(dependency.source)) ||
                            (relatedFrameworks.has(dependency.source) && relatedFrameworks.has(dependency.target))
                        }
                    />
                ))}
            </svg>

            {/* Контейнер для тултипов поверх всего остального */}
            {tooltips && (
                <div className={styles.tooltipContainer}>
                    <TimelineTooltip
                        framework={tooltips.framework}
                        position={tooltips.position}
                        db={selectedDb}
                        tooltipType={tooltips.tooltipType}
                    />
                </div>
            )}
        </div>
    );
};

export default Timeline;
