// src/components/Timeline/TimelineTooltip.tsx
import React from 'react';
import {Framework, Database} from '../../data/types';
import {formatDate, parseDate} from '../../utils/dateUtils';
import styles from './TimelineTooltip.module.css';

interface TimelineTooltipProps {
    framework: Framework;
    position: { x: number; y: number };
    db: Database;
    tooltipType?: 'frameworkLine' | 'dbSupport' | 'endSupport';
}

const TimelineTooltip: React.FC<TimelineTooltipProps> = ({framework, position, db, tooltipType}) => {
    const frameworkReleaseDate = parseDate(framework.releaseDate);
    const dbSupportDate = framework.implementation?.releaseDate ? parseDate(framework.implementation?.releaseDate) : frameworkReleaseDate;

    // Определяем, в какой части экрана находится курсор
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isRightHalf = position.x > screenWidth / 2;
    const isBottomHalf = position.y > screenHeight / 2;
    
    // Оценка размеров тултипа
    const tooltipWidth = 300;
    const tooltipHeight = 200; // Примерная высота
    // Отступы от курсора
    const cursorOffsetX = 15;
    const cursorOffsetY = 20;
    
    // Рассчитываем позицию тултипа
    const tooltipStyle = {
        top: isBottomHalf 
            ? `${position.y - tooltipHeight - cursorOffsetY}px` // Над курсором
            : `${position.y + cursorOffsetY}px`, // Под курсором
        left: isRightHalf 
            ? `${position.x - tooltipWidth - cursorOffsetX}px` // Слева от курсора
            : `${position.x + cursorOffsetX}px`, // Справа от курсора
        boxShadow: '0 3px 14px rgba(0, 0, 0, 0.25)',
        backgroundColor: 'var(--tooltip-bg)',
        backdropFilter: 'blur(2px)',
    };

    // Определяем, показывать ли информацию о базовом фреймворке или о реализации для БД
    const showimplementation = framework.implementation && framework.implementation?.releaseDate && tooltipType === 'dbSupport';
    const dbImpl = framework.implementation;

    return (
        <div className={styles.tooltip} style={tooltipStyle}>
            <h3>{showimplementation && dbImpl ? dbImpl.name : framework.name}</h3>

            <div className={styles.tooltipDetails}>
                <div className={styles.tooltipRow}>
                    <span className={styles.tooltipLabel}>Category:</span>
                    <span>{framework.category}</span>
                </div>

                <div className={styles.tooltipRow}>
                    <span className={styles.tooltipLabel}>Language:</span>
                    <span>{framework.language}</span>
                </div>

                {!showimplementation && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Initial Release:</span>
                        <span>{formatDate(frameworkReleaseDate)}</span>
                    </div>
                )}

                {showimplementation && framework.implementation?.releaseDate && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>{db} Support:</span>
                        <span>{formatDate(dbSupportDate)}</span>
                    </div>
                )}

                {showimplementation && dbImpl?.authors && dbImpl.authors.length > 0 && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Authors:</span>
                        <span>{dbImpl.authors.join(', ')}</span>
                    </div>
                )}

                {!showimplementation && framework.authors && framework.authors.length > 0 && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Authors:</span>
                        <span>{framework.authors.join(', ')}</span>
                    </div>
                )}

                {showimplementation && dbImpl?.repository && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Repository:</span>
                        <span>
                            <a 
                                href={dbImpl.repository} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.tooltipLink}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {dbImpl.repository.replace(/^https?:\/\/(www\.)?/, '')}
                            </a>
                        </span>
                    </div>
                )}

                {!showimplementation && framework.repository && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Repository:</span>
                        <span>
                            <a 
                                href={framework.repository} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={styles.tooltipLink}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {framework.repository.replace(/^https?:\/\/(www\.)?/, '')}
                            </a>
                        </span>
                    </div>
                )}

                {showimplementation && dbImpl?.contributorsType && dbImpl.contributorsType.length > 0 && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Contributors:</span>
                        <span>
                          {dbImpl.contributorsType.map(type => {
                              let label = '';
                              switch (type) {
                                  case 'open-source':
                                      label = 'Open Source';
                                      break;
                                  case 'student':
                                      label = 'Students';
                                      break;
                                  case 'staff':
                                      label = 'Staff';
                                      break;
                                  default:
                                      label = type;
                              }
                              return label;
                          }).join(', ')}
                        </span>
                    </div>
                )}

                {!showimplementation && framework.implementation?.contributorsType && framework.implementation?.contributorsType.length > 0 && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Contributors:</span>
                        <span>
                          {framework.implementation?.contributorsType?.map(type => {
                              let label = '';
                              switch (type) {
                                  case 'open-source':
                                      label = 'Open Source';
                                      break;
                                  case 'student':
                                      label = 'Students';
                                      break;
                                  case 'staff':
                                      label = 'Staff';
                                      break;
                                  default:
                                      label = type;
                              }
                              return label;
                          }).join(', ')}
                        </span>
                    </div>
                )}

                <div className={styles.tooltipDescription}>
                    {showimplementation && dbImpl ? dbImpl.description : framework.description}
                </div>
            </div>
        </div>
    );
};

export default TimelineTooltip;
