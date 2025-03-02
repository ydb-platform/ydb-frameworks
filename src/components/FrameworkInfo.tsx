import React from 'react';
import { Framework } from '../types';

interface FrameworkInfoProps {
    framework: Framework;
}

const FrameworkInfo: React.FC<FrameworkInfoProps> = ({ framework }) => {
    return (
        <div className="framework-info">
            <h2>{framework.name}</h2>
            <p className="release-date">
                Released: {framework.releaseDate.toLocaleDateString()}
            </p>
            <p className="description">{framework.description}</p>
            <div className="category">
                <span className="label">Category:</span> {getCategoryName(framework.category)}
            </div>
            {framework.dependencies.length > 0 && (
                <div className="dependencies">
                    <span className="label">Dependencies:</span>
                    <ul>
                        {framework.dependencies.map(depId => (
                            <li key={depId}>
                                {getDependencyName(depId)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="links">
                <a href={framework.url} target="_blank" rel="noopener noreferrer">
                    Official Website
                </a>
            </div>
        </div>
    );

    function getCategoryName(category: string): string {
        switch(category) {
            case 'driver': return 'Database Driver';
            case 'orm': return 'Object-Relational Mapping';
            case 'admin': return 'Administration Tool';
            case 'etl': return 'Extract, Transform, Load';
            case 'analytics': return 'Analytics Engine';
            default: return category;
        }
    }

    function getDependencyName(depId: string): string {
        // This is a simplification - you would look up the name from your framework data
        return depId;
    }
};

export default FrameworkInfo;
