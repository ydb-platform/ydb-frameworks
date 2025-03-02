import React, { useState } from 'react';
import { Framework } from '../types';

interface ExportButtonProps {
    frameworks: Framework[];
}

const ExportButton: React.FC<ExportButtonProps> = ({ frameworks }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const exportAsJSON = () => {
        // Prepare data for export
        const data = frameworks.map(framework => ({
            id: framework.id,
            name: framework.name,
            releaseDate: framework.releaseDate.toISOString(),
            description: framework.description,
            dependencies: framework.dependencies,
            category: framework.category,
            url: framework.url
        }));

        // Create and download file
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        downloadFile(url, 'postgresql-frameworks.json');

        setShowDropdown(false);
    };

    const exportAsCSV = () => {
        // Prepare headers
        const headers = ['id', 'name', 'releaseDate', 'description', 'dependencies', 'category', 'url'];

        // Prepare rows
        const rows = frameworks.map(framework => [
            framework.id,
            framework.name,
            framework.releaseDate.toISOString(),
            `"${framework.description.replace(/"/g, '""')}"`,
            `"${framework.dependencies.join(',')}"`,
            framework.category,
            framework.url
        ]);

        // Combine headers and rows
        const csv = [
            headers.join(','),
            ...rows.map(row => row.join(','))
        ].join('\n');

        // Create and download file
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        downloadFile(url, 'postgresql-frameworks.csv');

        setShowDropdown(false);
    };

    const downloadFile = (url: string, filename: string) => {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="export-dropdown">
            <button className="export-button" onClick={toggleDropdown}>
                Export Data
            </button>

            {showDropdown && (
                <div className="dropdown-menu">
                    <button onClick={exportAsJSON}>Export as JSON</button>
                    <button onClick={exportAsCSV}>Export as CSV</button>
                </div>
            )}
        </div>
    );
};

export default ExportButton;
