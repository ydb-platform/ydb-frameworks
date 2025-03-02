import React from 'react';

interface TimelineLegendProps {
    categories: { id: string; name: string; color: string }[];
}

const TimelineLegend: React.FC<TimelineLegendProps> = ({ categories }) => {
    return (
        <div className="timeline-legend">
            <h3>Legend</h3>
            <div className="legend-items">
                {categories.map(category => (
                    <div key={category.id} className="legend-item">
            <span
                className="legend-color"
                style={{ backgroundColor: category.color }}
            ></span>
                        <span className="legend-name">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelineLegend;
