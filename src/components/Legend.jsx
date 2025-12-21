import { useMemo } from 'react';
import { languageColors, categoryColors, getCategories, getFilteredProducts } from '../data/products';
import './Legend.css';

// Get short name from full name
const getShortName = (fullName) => {
  if (!fullName) return "?";
  const match = fullName.match(/\(([^)]+)\)/);
  if (match) return match[1];
  return fullName.split(' ')[0];
};

// Get display name for sorting (uses short name for persons)
const getItemDisplayName = (item) => {
  if (item.type === 'language') return item.lang;
  if (item.type === 'category') return item.category;
  if (item.type === 'person') return getShortName(item.person);
  return '';
};

// Case-insensitive sort
const sortItems = (array) => {
  const sorted = [...array].sort((a, b) => 
    getItemDisplayName(a).toLowerCase().localeCompare(getItemDisplayName(b).toLowerCase())
  );
  console.log('Sorted legend items:', sorted.map(item => getItemDisplayName(item)));
  return sorted;
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
    
    return sortItems(items);
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
