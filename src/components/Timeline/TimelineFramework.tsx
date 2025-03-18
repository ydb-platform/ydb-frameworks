// src/components/Timeline/TimelineFramework.tsx
import React from 'react';
import { Framework, Database } from '../../data/types';
import { getPositionForDate, parseDate } from '../../utils/dateUtils';
import { languageColors } from '../../utils/colors';
import styles from './TimelineFramework.module.css';

interface TimelineFrameworkProps {
    framework: Framework;
    startDate: Date;
    endDate: Date;
    width: number;
    selectedDb: Database;
    onTooltipShow: (framework: Framework, position: { x: number; y: number }, tooltipType: 'frameworkLine' | 'dbSupport' | 'endSupport') => void;
    onTooltipHide: () => void;
    isHighlighted?: boolean;
    onClick?: (frameworkId: string) => void;
}

const TimelineFramework: React.FC<TimelineFrameworkProps> = ({
    framework,
    startDate,
    endDate,
    width,
    onTooltipShow,
    onTooltipHide,
    isHighlighted = false,
    onClick
}) => {
    const frameworkReleaseDate = parseDate(framework.releaseDate);
    
    // Если есть implementation и есть releaseDate - используем его, иначе используем дату релиза фреймворка
    const dbSupportDate = framework.implementation?.releaseDate 
        ? parseDate(framework.implementation.releaseDate) 
        : frameworkReleaseDate;

    const releasePosition = getPositionForDate(frameworkReleaseDate, startDate, endDate, width);
    const dbSupportPosition = getPositionForDate(dbSupportDate, startDate, endDate, width);
    
    // Используем endDate вместо now для расчета конца линии
    const endPosition = getPositionForDate(endDate, startDate, endDate, width);

    // Оценка ширины стрелочки (примерно 15px)
    const arrowWidth = 15;

    // Рассчитываем скорректированную позицию для конца цветной линии
    const adjustedEndPosition = endPosition - arrowWidth;

    const hasimplementation = !!framework.implementation;
    const hasDbSupportDate = !!framework.implementation?.releaseDate;

    const handleMouseEnter = (event: React.MouseEvent, tooltipType: 'frameworkLine' | 'dbSupport' | 'endSupport') => {
        onTooltipShow(framework, {
            x: event.clientX,
            y: event.clientY
        }, tooltipType);
    };

    const handleMouseLeave = () => {
        onTooltipHide();
    };

    const handleMouseMove = (event: React.MouseEvent, tooltipType: 'frameworkLine' | 'dbSupport' | 'endSupport') => {
        onTooltipShow(framework, {
            x: event.clientX,
            y: event.clientY
        }, tooltipType);
    };

    const color = languageColors[framework.language];

    // Определяем классы для элементов на основе статуса подсветки и наличия обработчика клика
    const frameworkLabelClass = `${styles.frameworkLabel} ${isHighlighted ? styles.highlighted : ''} ${onClick ? styles.clickable : ''}`;
    const frameworkRowClass = `${styles.frameworkRow} ${isHighlighted ? styles.highlightedLabel : ''} ${onClick ? styles.clickable : ''}`;
    const frameworkLineClass = `${styles.frameworkLine} ${isHighlighted ? styles.highlightedLine : ''}`;
    const supportPointClass = `${styles.supportPoint} supportPoint ${isHighlighted ? styles.highlightedPoint : ''}`;
    const endPointClass = `${styles.endPoint} endPoint ${isHighlighted ? styles.highlightedPoint : ''}`;

    // Обработчик клика по фреймворку
    const handleClick = () => {
        if (onClick) {
            onClick(framework.id);
        }
    };

    return (
        <div
            className={frameworkRowClass}
            data-framework-id={framework.id}
            onClick={handleClick}
        >
            <div className={frameworkLabelClass}>
                {framework.name}
            </div>
            <div className={styles.frameworkTimeline} style={{ width: `${width}px` }}>
                {/* Пунктирная линия до момента поддержки */}
                {hasimplementation && hasDbSupportDate && (
                    <div
                        className={frameworkLineClass}
                        style={{
                            left: `${releasePosition}px`,
                            width: `${dbSupportPosition - releasePosition}px`,
                            borderTop: `2px dashed ${color}`,
                            backgroundColor: 'transparent'
                        }}
                        onMouseEnter={(e) => handleMouseEnter(e, 'frameworkLine')}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={(e) => handleMouseMove(e, 'frameworkLine')}
                        data-tooltip-type="frameworkLine"
                    />
                )}

                {/* Цветная линия после момента поддержки или пунктирная, если нет поддержки */}
                <div
                    className={frameworkLineClass}
                    style={{
                        left: hasimplementation && hasDbSupportDate ? `${dbSupportPosition}px` : `${releasePosition}px`,
                        width: hasimplementation && hasDbSupportDate 
                            ? `${adjustedEndPosition - dbSupportPosition}px`
                            : `${adjustedEndPosition - releasePosition}px`,
                        backgroundColor: hasimplementation && hasDbSupportDate ? color : 'transparent',
                        borderTop: (!hasimplementation || !hasDbSupportDate) ? `2px dashed ${color}` : 'none'
                    }}
                    onMouseEnter={(e) => handleMouseEnter(e, 'dbSupport')}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={(e) => handleMouseMove(e, 'dbSupport')}
                    data-tooltip-type="dbSupport"
                >
                    {/* Точка начала поддержки */}
                    {hasimplementation && hasDbSupportDate && (
                        <div
                            className={supportPointClass}
                            style={{
                                backgroundColor: color,
                                left: '0px',
                                display: 'block'
                            }}
                            onMouseEnter={(e) => handleMouseEnter(e, 'dbSupport')}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={(e) => handleMouseMove(e, 'dbSupport')}
                            data-tooltip-type="dbSupport"
                        />
                    )}

                    {/* Точка конца или стрелка для продолжающейся поддержки */}
                    {hasimplementation && hasDbSupportDate && (
                        <div
                            className={endPointClass}
                            style={{
                                right: '0px',
                                backgroundColor: color,
                                display: 'block'
                            }}
                            onMouseEnter={(e) => handleMouseEnter(e, 'endSupport')}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={(e) => handleMouseMove(e, 'endSupport')}
                            data-tooltip-type="endSupport"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineFramework;
