import React, { useState } from 'react';
import { Framework } from '../types';

interface FrameworkComparisonProps {
    frameworks: Framework[];
    onClose: () => void;
}

const FrameworkComparison: React.FC<FrameworkComparisonProps> = ({
                                                                     frameworks,
                                                                     onClose
                                                                 }) => {
    const [framework1, setFramework1] = useState<string>(frameworks[0]?.id || '');
    const [framework2, setFramework2] = useState<string>(frameworks.length > 1 ? frameworks[1]?.id : '');

    const framework1Data = frameworks.find(f => f.id === framework1);
    const framework2Data = frameworks.find(f => f.id === framework2);

    // Calculate time difference between frameworks in years
    const getTimeDifference = () => {
        if (!framework1Data || !framework2Data) return 'N/A';

        const date1 = framework1Data.releaseDate;
        const date2 = framework2Data.releaseDate;
        const diffInMs = Math.abs(date2.getTime() - date1.getTime());
        const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

        return `${diffInYears.toFixed(1)} years`;
    };

    // Check if one framework depends on the other
    const getDependencyRelationship = () => {
        if (!framework1Data || !framework2Data) return 'None';

        if (framework1Data.dependencies.includes(framework2)) {
            return `${framework1Data.name} depends on ${framework2Data.name}`;
        } else if (framework2Data.dependencies.includes(framework1)) {
            return `${framework2Data.name} depends on ${framework1Data.name}`;
        }

        return 'No direct dependency';
    };

    // Check if frameworks are in the same category
    const getSameCategoryStatus = () => {
        if (!framework1Data || !framework2Data) return 'N/A';

        return framework1Data.category === framework2Data.category ? 'Yes' : 'No';
    };

    return (
        <div className="framework-comparison">
            <div className="comparison-header">
                <h2>Framework Comparison</h2>
                <button className="close-button" onClick={onClose}>×</button>
            </div>

            <div className="selector-container">
                <div className="framework-selector">
                    <label htmlFor="framework1">Framework 1:</label>
                    <select
                        id="framework1"
                        value={framework1}
                        onChange={(e) => setFramework1(e.target.value)}
                    >
                        {frameworks.map(framework => (
                            <option
                                key={framework.id}
                                value={framework.id}
                                disabled={framework.id === framework2}
                            >
                                {framework.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="framework-selector">
                    <label htmlFor="framework2">Framework 2:</label>
                    <select
                        id="framework2"
                        value={framework2}
                        onChange={(e) => setFramework2(e.target.value)}
                    >
                        {frameworks.map(framework => (
                            <option
                                key={framework.id}
                                value={framework.id}
                                disabled={framework.id === framework1}
                            >
                                {framework.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {framework1Data && framework2Data && (
                <div className="comparison-content">
                    <table className="comparison-table">
                        <thead>
                        <tr>
                            <th>Feature</th>
                            <th>{framework1Data.name}</th>
                            <th>{framework2Data.name}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Release Date</td>
                            <td>{framework1Data.releaseDate.toLocaleDateString()}</td>
                            <td>{framework2Data.releaseDate.toLocaleDateString()}</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>{getCategoryName(framework1Data.category)}</td>
                            <td>{getCategoryName(framework2Data.category)}</td>
                        </tr>
                        <tr>
                            <td>Dependencies Count</td>
                            <td>{framework1Data.dependencies.length}</td>
                            <td>{framework2Data.dependencies.length}</td>
                        </tr>
                        <tr>
                            <td>Same Category</td>
                            <td colSpan={2} className="centered">{getSameCategoryStatus()}</td>
                        </tr>
                        <tr>
                            <td>Time Difference</td>
                            <td colSpan={2} className="centered">{getTimeDifference()}</td>
                        </tr>
                        <tr>
                            <td>Dependency Relationship</td>
                            <td colSpan={2} className="centered">{getDependencyRelationship()}</td>
                        </tr>
                        </tbody>
                    </table>

                    <div className="comparison-descriptions">
                        <div className="description-column">
                            <h4>Description</h4>
                            <p>{framework1Data.description}</p>
                            <a
                                href={framework1Data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="visit-link"
                            >
                                Visit Website
                            </a>
                        </div>
                        <div className="description-column">
                            <h4>Description</h4>
                            <p>{framework2Data.description}</p>
                            <a
                                href={framework2Data.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="visit-link"
                            >
                                Visit Website
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    function getCategoryName(category: string): string {
        switch(category) {
            case 'driver': return 'Database Driver';
            case 'orm': return 'ORM';
            case 'admin': return 'Administration';
            case 'etl': return 'ETL';
            case 'analytics': return 'Analytics';
            default: return category;
        }
    }
};

export default FrameworkComparison;
