import { useMemo } from 'react';
import { languageColors, categoryColors, getCategories, getFilteredProducts } from '../data/products';
import './Legend.css';

// Seeded random for consistent shuffle
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const shuffleArray = (array, seed = 42) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Legend = ({ 
  highlightLanguage, setHighlightLanguage, 
  highlightPerson, setHighlightPerson,
  highlightCategory, setHighlightCategory,
  highlightStatus, setHighlightStatus
}) => {
  const categories = getCategories();
  
  // Check if staff parameter is in query string
  const showPersons = new URLSearchParams(window.location.search).has('staff');
  
  // Get filtered products (excluding student projects unless ?students is in URL)
  const filteredProducts = useMemo(() => getFilteredProducts(), []);
  
  // Get unique responsible persons from filtered products
  const responsiblePersons = [...new Set(filteredProducts.filter(p => p["Ответственный"]).map(p => p["Ответственный"]))].sort();
  
  // Get short name from full name
  const getShortName = (fullName) => {
    if (!fullName) return "?";
    const match = fullName.match(/\(([^)]+)\)/);
    if (match) return match[1];
    return fullName.split(' ')[0];
  };

  const clearAll = () => {
    setHighlightLanguage(null);
    setHighlightPerson(null);
    setHighlightCategory(null);
    setHighlightStatus(null);
  };

  const handleLanguageClick = (lang) => {
    clearAll();
    setHighlightLanguage(highlightLanguage === lang ? null : lang);
  };

  const handlePersonClick = (person) => {
    clearAll();
    setHighlightPerson(highlightPerson === person ? null : person);
  };

  const handleCategoryClick = (category) => {
    clearAll();
    setHighlightCategory(highlightCategory === category ? null : category);
  };

  const hasActiveHighlight = highlightLanguage || highlightPerson || highlightCategory || highlightStatus;

  // Create all items and shuffle them
  const allItems = useMemo(() => {
    const items = [];
    
    // Add languages
    Object.entries(languageColors).forEach(([lang, colors]) => {
      items.push({ type: 'language', key: `lang-${lang}`, lang, colors });
    });
    
    // Add categories
    categories.forEach(category => {
      items.push({ type: 'category', key: `cat-${category}`, category });
    });
    
    // Add persons if enabled
    if (showPersons) {
      responsiblePersons.forEach(person => {
        items.push({ type: 'person', key: `person-${person}`, person });
      });
    }
    
    return shuffleArray(items, window.outerHeight+window.outerWidth);
  }, [categories, showPersons, responsiblePersons]);

  const renderItem = (item) => {
    if (item.type === 'language') {
      return (
        <button
          key={item.key}
          className={`legend-lang-btn ${highlightLanguage === item.lang ? 'active' : ''}`}
          style={{ 
            backgroundColor: item.colors.bg, 
            color: item.colors.text,
            opacity: hasActiveHighlight && highlightLanguage !== item.lang ? 0.4 : 1
          }}
          onClick={() => handleLanguageClick(item.lang)}
        >
          {item.lang}
        </button>
      );
    }
    
    if (item.type === 'category') {
      return (
        <button
          key={item.key}
          className={`legend-category-btn ${highlightCategory === item.category ? 'active' : ''}`}
          style={{
            borderColor: categoryColors[item.category] || '#888',
            color: highlightCategory === item.category ? '#fff' : 'var(--text-color)',
            backgroundColor: highlightCategory === item.category ? (categoryColors[item.category] || '#888') : 'transparent',
            opacity: hasActiveHighlight && highlightCategory !== item.category ? 0.4 : 1
          }}
          onClick={() => handleCategoryClick(item.category)}
        >
          {item.category}
        </button>
      );
    }
    
    if (item.type === 'person') {
      return (
        <button
          key={item.key}
          className={`legend-person-btn ${highlightPerson === item.person ? 'active' : ''}`}
          style={{
            opacity: hasActiveHighlight && highlightPerson !== item.person ? 0.4 : 1
          }}
          onClick={() => handlePersonClick(item.person)}
        >
          {getShortName(item.person)}
        </button>
      );
    }
    
    return null;
  };

  return (
    <div className="legend">
      {allItems.map(renderItem)}
    </div>
  );
};

export default Legend;
