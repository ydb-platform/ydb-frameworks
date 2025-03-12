// src/components/Timeline/TimelineAxis.tsx
import React from 'react';
import { getPositionForDate } from '../../utils/dateUtils';
import styles from './TimelineAxis.module.css';

interface TimelineAxisProps {
    startDate: Date;
    endDate: Date;
    width: number;
}

const TimelineAxis: React.FC<TimelineAxisProps> = ({ startDate, endDate, width }) => {
    // Генерируем маркеры годов для оси
    const generateYearMarkers = () => {
        const yearMarkers = [];
        const startYear = startDate.getFullYear();
        const endYear = new Date().getFullYear(); // Используем текущий год как конечный

        for (let year = startYear; year <= endYear; year++) {
            const markerDate = new Date(year, 0, 1); // January 1st of the year

            // Пропускаем даты, которые выходят за пределы шкалы
            if (markerDate > endDate) continue;

            const position = getPositionForDate(markerDate, startDate, endDate, width);

            yearMarkers.push(
                <div
                    key={year}
                    className={styles.yearMarker}
                    style={{ left: `${position}px` }}
                >
                    <div className={styles.yearLine}></div>
                    <div className={styles.yearLabel}>{year}</div>
                </div>
            );
        }

        return yearMarkers;
    };

    return (
        <div className={styles.timelineAxis} style={{ width: `${width}px`, marginLeft: '200px' }}>
            <div className={styles.axisLine}></div>
            {generateYearMarkers()}
        </div>
    );
};

export default TimelineAxis;
