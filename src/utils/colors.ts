// src/utils/colors.ts
import { ProgrammingLanguage } from '../data/types';

/**
 * Maps programming languages to specific colors
 */
export const languageColors: Record<ProgrammingLanguage, string> = {
    'JavaScript': '#b0a631',
    'TypeScript': '#007acc',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'C#': '#178600',
    'C': '#555555',
    'C++': '#f34b7d',
    'Ruby': '#701516',
    'PHP': '#4F5D95',
    'Rust': '#dea584',
    'Kotlin': '#A97BFF',
    'Swift': '#ffac45',
    'Scala': '#c22d40',
    'YAML': '#c92d90',
    'SQL': '#678600',
    'XML': '#807219',
    'Dart': '#5ea584',
    'JSON': '#6F5D95',
    'Erlang': '#B83998',
    'Elixir': '#6B4893',
    'Haskell': '#5d4f85',
    'Clojure': '#db5855',
    'Lua': '#000080'
};

/**
 * Get color with opacity
 */
export const getColorWithOpacity = (color: string, opacity: number): string => {
    // Parse hex color to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Generate a contrasting text color (black or white) based on background color
 */
export const getContrastColor = (backgroundColor: string): string => {
    // Parse hex color
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Calculate luminance - standard formula for calculating perceived brightness
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for bright colors, white for dark colors
    return luminance > 0.5 ? '#000000' : '#ffffff';
};
