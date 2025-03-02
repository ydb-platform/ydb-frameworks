import React, { useState } from 'react';

interface SearchProps {
    onSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div className="search-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search frameworks..."
                        value={searchTerm}
                        onChange={handleChange}
                        className="search-input"
                    />
                    {searchTerm && (
                        <button
                            type="button"
                            className="clear-search"
                            onClick={handleClear}
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}
                </div>
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
};

export default Search;
