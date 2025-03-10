// src/utils/dateUtils.ts
/**
 * Converts an ISO date string to a JavaScript Date object
 */
export const parseDate = (dateString: string): Date => {
    return new Date(dateString);
};

/**
 * Calculates the position on the timeline for a date
 * @param date The date to calculate position for
 * @param startDate The start date of the timeline
 * @param endDate The end date of the timeline
 * @param width The width of the timeline in pixels
 * @returns Position in pixels from the left edge
 */
export const getPositionForDate = (
    date: Date,
    startDate: Date,
    endDate: Date,
    width: number
): number => {
    const timeRange = endDate.getTime() - startDate.getTime();
    const timeSinceStart = date.getTime() - startDate.getTime();
    return (timeSinceStart / timeRange) * width;
};

/**
 * Formats a date for display
 * @param date Date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

/**
 * Gets the earliest and latest dates in the frameworks array
 */
export const getTimelineBounds = (frameworks: {
    releaseDate: string;
    dbSupportDate?: string;
    endSupportDate?: string;
}[]): { startDate: Date; endDate: Date } => {
    const now = new Date();
    const dates: Date[] = [];

    frameworks.forEach(framework => {
        dates.push(parseDate(framework.releaseDate));

        if (framework.dbSupportDate) {
            dates.push(parseDate(framework.dbSupportDate));
        }

        if (framework.endSupportDate) {
            dates.push(parseDate(framework.endSupportDate));
        }
    });

    const earliestDate = new Date(Math.min(...dates.map(d => d.getTime())));
    // Добавляем небольшой буфер к началу временной шкалы (1 год)
    earliestDate.setFullYear(earliestDate.getFullYear() - 1);

    // Для конечной даты используем текущую дату + небольшой буфер (3 месяца)
    const latestDate = new Date(now);
    latestDate.setMonth(latestDate.getMonth() + 3);

    return { startDate: earliestDate, endDate: latestDate };
};
