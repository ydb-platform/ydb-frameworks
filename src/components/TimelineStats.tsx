import React from 'react';
import { Framework } from '../types';

interface TimelineStatsProps {
    frameworks: Framework[];
}

const TimelineStats: React.FC<TimelineStatsProps> = ({ frameworks }) => {
    // Calculate timespan from earliest to latest framework
    const sortedByDate = [...frameworks].sort((a, b) =>
        a.releaseDate.getTime() - b.releaseDate.getTime()
    );

    const earliestFramework = sortedByDate[0];
    const latestFramework = sortedByDate[sortedByDate.length - 1];

    // Categorize frameworks by type
    const categoryCounts = frameworks.reduce((acc, framework) => {
        acc[framework.category] = (acc[framework.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    // Calculate average dependencies
    const totalDependencies = frameworks.reduce(
        (sum, framework) => sum + framework.dependencies.length,
        0
    );
    const avgDependencies = totalDependencies / frameworks.length;

    // Find framework with most dependencies
    const frameworkWithMostDeps = frameworks.reduce(
        (max, framework) =>
            framework.dependencies.length > max.dependencies.length ? framework : max,
        frameworks[0]
    );

    return (
        <div className="timeline-stats">
            <h3>Timeline Statistics</h3>

            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-value">{frameworks.length}</div>
                    <div className="stat-label">Total Frameworks</div>
                </div>

                <div className="stat-item">
                    <div className="stat-value">
                        {earliestFramework?.releaseDate.getFullYear()} - {latestFramework?.releaseDate.getFullYear()}
                    </div>
                    <div className="stat-label">Time Span</div>
                </div>

                <div className="stat-item">
                    <div className="stat-value">{avgDependencies.toFixed(1)}</div>
                    <div className="stat-label">Avg Dependencies</div>
                </div>

                <div className="stat-item">
                    <div className="stat-value">{frameworkWithMostDeps?.name}</div>
                    <div className="stat-label">Most Dependencies</div>
                </div>
            </div>

            <div className="category-breakdown">
                <h4>Category Breakdown</h4>
                <div className="category-bars">
                    {Object.entries(categoryCounts).map(([category, count]) => (
                        <div key={category} className="category-bar-item">
                            <div className="category-name">
                                {getCategoryName(category)}
                            </div>
                            <div className="bar-container">
                                <div
                                    className="bar"
                                    style={{
                                        width: `${(count / frameworks.length) * 100}%`,
                                        backgroundColor: getCategoryColor(category)
                                    }}
                                ></div>
                                <span className="bar-value">{count}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    function getCategoryName(category: string): string {
        switch(category) {
            case 'driver': return 'Database Drivers';
            case 'orm': return 'ORM Tools';
            case 'admin': return 'Administration Tools';
            case 'etl': return 'ETL Tools';
            case 'analytics': return 'Analytics Engines';
            default: return category.charAt(0).toUpperCase() + category.slice(1);
        }
    }

    function getCategoryColor(category: string): string {
        switch(category) {
            case 'driver': return '#7cb5ec';
            case 'orm': return '#90ed7d';
            case 'admin': return '#f7a35c';
            case 'etl': return '#8085e9';
            case 'analytics': return '#f15c80';
            default: return '#e4d354';
        }
    }
};

export default TimelineStats;
