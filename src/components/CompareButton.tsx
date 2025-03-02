import React from 'react';

interface CompareButtonProps {
    onClick: () => void;
    disabled: boolean;
}

const CompareButton: React.FC<CompareButtonProps> = ({ onClick, disabled }) => {
    return (
        <button
            className="compare-button"
            onClick={onClick}
            disabled={disabled}
        >
            Compare Frameworks
        </button>
    );
};

export default CompareButton;
