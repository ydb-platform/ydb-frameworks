import React from 'react';
import { Framework } from '../types';

interface CategoryFilterProps {
    frameworks: Framework[];
    selectedCategories: string[];
    onCategoryChange: (categories: string[]) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
                                                           frameworks,
                                                           selectedCategories,
                                                           onCategoryChange
                                                       }) => {
    // Get unique categories from frameworks
    const categories = Array.from(new Set(frameworks.map(f => f.category)));

    const handleCategoryToggle = (category: string) => {
        if (selectedCategories.includes(category)) {
            onCategoryChange(selectedCategories.filter(c => c !== category));
        } else {
            onCategoryChange([...selectedCategories, category]);
        }
    };

    const handleSelectAll = () => {
        onCategoryChange(categories);
    };

    const handleClearAll = () => {
        onCategoryChange([]);
    };

    return (
        <div className="category-filter">
            <h3>Filter by Category</h3>
            <div className="filter-actions">
                <button onClick={handleSelectAll}>Select All</button>
                <button onClick={handleClearAll}>Clear All</button>
            </div>
            <div className="category-options">
                {categories.map(category => (
                    <label key={category} className="category-option">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryToggle(category)}
                        />
                        <span className="category-name">{getCategoryName(category)}</span>
                        <span className="category-count">
              ({frameworks.filter(f => f.category === category).length})
            </span>
                    </label>
                ))}
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
};

export default CategoryFilter;
