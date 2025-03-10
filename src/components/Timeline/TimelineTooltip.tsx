// src/components/Timeline/TimelineTooltip.tsx
import React from 'react';
import { Framework, Database } from '../../data/types';
import { formatDate, parseDate } from '../../utils/dateUtils';
import styles from './TimelineTooltip.module.css';

interface TimelineTooltipProps {
    framework: Framework;
    position: { x: number; y: number };
    db: Database;
}

const TimelineTooltip: React.FC<TimelineTooltipProps> = ({ framework, position, db }) => {
    const frameworkReleaseDate = parseDate(framework.releaseDate);
    const dbSupportDate = framework.dbSupportDate ? parseDate(framework.dbSupportDate) : frameworkReleaseDate;
    const endSupportDate = framework.endSupportDate ? parseDate(framework.endSupportDate) : null;

    return (
        <div className={styles.tooltip} style={{ top: `${position.y + 10}px`, left: `${position.x + 10}px` }}>
            <h3>{framework.name}</h3>

            <div className={styles.tooltipDetails}>
                <div className={styles.tooltipRow}>
                    <span className={styles.tooltipLabel}>Category:</span>
                    <span>{framework.category}</span>
                </div>

                <div className={styles.tooltipRow}>
                    <span className={styles.tooltipLabel}>Language:</span>
                    <span>{framework.language}</span>
                </div>

                <div className={styles.tooltipRow}>
                    <span className={styles.tooltipLabel}>Initial Release:</span>
                    <span>{formatDate(frameworkReleaseDate)}</span>
                </div>

                {framework.dbSupportDate && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>{db} Support:</span>
                        <span>{formatDate(dbSupportDate)}</span>
                    </div>
                )}

                {framework.dbImplementationName && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Implementation:</span>
                        <span>{framework.dbImplementationName}</span>
                    </div>
                )}

                {framework.version && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Version:</span>
                        <span>{framework.version}</span>
                    </div>
                )}

                {endSupportDate && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>End of Support:</span>
                        <span>{formatDate(endSupportDate)}</span>
                    </div>
                )}

                {framework.authors && framework.authors.length > 0 && (
                    <div className={styles.tooltipRow}>
                        <span className={styles.tooltipLabel}>Authors:</span>
                        <span>{framework.authors.join(', ')}</span>
                    </div>
                )}

                <div className={styles.tooltipDescription}>
                    {framework.description}
                </div>
            </div>
        </div>
    );
};

export default TimelineTooltip;
