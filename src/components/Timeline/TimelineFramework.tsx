// src/components/Timeline/TimelineFramework.tsx
import React from 'react';
import { Framework, Database } from '../../data/types';
import { getPositionForDate, parseDate } from '../../utils/dateUtils';
import { languageColors, getColorWithOpacity } from '../../utils/colors';
import styles from './TimelineFramework.module.css';

interface TimelineFrameworkProps {
    framework: Framework;
    startDate: Date;
    endDate: Date;
    width: number;
    selectedDb: Database;
    onTooltipShow: (framework: Framework, position: { x: number; y: number }) => void;
    onTooltipHide: () => void;
}

const TimelineFramework: React.FC<TimelineFrameworkProps> = ({
                                                                 framework,
                                                                 startDate,
                                                                 endDate,
                                                                 width,
                                                                 selectedDb,
                                                                 onTooltipShow,
                                                                 onTooltipHide
                                                             }) => {
    const now = new Date();
    const frameworkReleaseDate = parseDate(framework.releaseDate);
    const dbSupportDate = framework.dbSupportDate ? parseDate(framework.dbSupportDate) : frameworkReleaseDate;
    const endSupportDate = framework.endSupportDate ? parseDate(framework.endSupportDate) : now;

    const releasePosition = getPositionForDate(frameworkReleaseDate, startDate, endDate, width);
    const dbSupportPosition = getPositionForDate(dbSupportDate, startDate, endDate, width);
    const endSupportPosition = getPositionForDate(endSupportDate, startDate, endDate, width);
    const nowPosition = getPositionForDate(now, startDate, endDate, width);

    // Оценка ширины стрелочки (примерно 15px)
    const arrowWidth = 15;

    // Рассчитываем скорректированную позицию для конца цветной линии,
    // учитывая ширину стрелочки "продолжается в будущее"
    const adjustedNowPosition = nowPosition - arrowWidth;

    const isDbSpecific = !framework.dbSupportDate; // Если нет dbSupportDate, то фреймворк специфичен для выбранной БД

    const handleMouseEnter = (event: React.MouseEvent) => {
        onTooltipShow(framework, {
            x: event.clientX,
            y: event.clientY
        });
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        onTooltipShow(framework, {
            x: event.clientX,
            y: event.clientY
        });
    };

    const color = languageColors[framework.language];

    // Определяем, продолжается ли поддержка в настоящее время
    const isOngoing = !framework.endSupportDate;

    return (
        <div className={styles.frameworkRow} data-framework-id={framework.id}>
            <div className={styles.frameworkLabel}>
                {framework.name}
            </div>
            <div className={styles.frameworkTimeline} style={{ width: `${width}px` }}>
                {/* Gray line for framework existence before DB support */}
                {!isDbSpecific && (
                    <div
                        className={styles.frameworkLine}
                        style={{
                            left: `${releasePosition}px`,
                            width: `${dbSupportPosition - releasePosition}px`,
                            backgroundColor: 'var(--gray-line)'
                        }}
                    >
                        <div
                            className={`${styles.releasePoint} releasePoint`}
                            style={{ backgroundColor: getColorWithOpacity(color, 0.5) }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={onTooltipHide}
                            onMouseMove={handleMouseMove}
                            data-tooltip-type="release"
                        ></div>
                    </div>
                )}

                {/* Colored line for active DB support */}
                <div
                    className={styles.frameworkLine}
                    style={{
                        left: `${isDbSpecific ? releasePosition : dbSupportPosition}px`,
                        width: isOngoing
                            ? `${adjustedNowPosition - (isDbSpecific ? releasePosition : dbSupportPosition)}px` // До позиции now - ширина стрелки
                            : `${endSupportPosition - (isDbSpecific ? releasePosition : dbSupportPosition)}px`, // До конца поддержки
                        backgroundColor: color
                    }}
                >
                    {/* Точка поддержки выбранной БД */}
                    <div
                        className={`${styles.supportPoint} supportPoint`}
                        style={{
                            backgroundColor: color,
                            left: '0px'
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={onTooltipHide}
                        onMouseMove={handleMouseMove}
                        data-tooltip-type="dbSupport"
                    ></div>

                    {/* Support end point or arrow for ongoing support */}
                    {!isOngoing ? (
                        <div
                            className={`${styles.endPoint} endPoint`}
                            style={{
                                right: '0px',
                                backgroundColor: color
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={onTooltipHide}
                            onMouseMove={handleMouseMove}
                            data-tooltip-type="endSupport"
                        ></div>
                    ) : (
                        <div
                            className={styles.arrowEnd}
                            style={{
                                right: '-15px',
                                color: color
                            }}
                        >↠</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimelineFramework;
