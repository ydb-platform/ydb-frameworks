import { languageColors, categoryColors, getCategories, products } from '../data/products';
import './Legend.css';

const Legend = ({ 
  highlightLanguage, setHighlightLanguage, 
  highlightPerson, setHighlightPerson,
  highlightCategory, setHighlightCategory,
  highlightStatus, setHighlightStatus
}) => {
  const categories = getCategories();
  
  // Check if staff parameter is in query string
  const showPersons = new URLSearchParams(window.location.search).has('staff');
  
  // Get unique responsible persons
  const responsiblePersons = [...new Set(products.filter(p => p["Ответственный"]).map(p => p["Ответственный"]))].sort();
  
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

  return (
    <div className="legend">
      <div className="legend-section languages">
        {Object.entries(languageColors).map(([lang, colors]) => (
          <button
            key={lang}
            className={`legend-lang-btn ${highlightLanguage === lang ? 'active' : ''}`}
            style={{ 
              backgroundColor: colors.bg, 
              color: colors.text,
              opacity: hasActiveHighlight && highlightLanguage !== lang ? 0.4 : 1
            }}
            onClick={() => handleLanguageClick(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
      
      <div className="legend-section categories">
        {categories.map(category => (
          <button
            key={category}
            className={`legend-category-btn ${highlightCategory === category ? 'active' : ''}`}
            style={{
              borderColor: categoryColors[category] || '#888',
              color: highlightCategory === category ? '#fff' : 'var(--text-color)',
              backgroundColor: highlightCategory === category ? (categoryColors[category] || '#888') : 'transparent',
              opacity: hasActiveHighlight && highlightCategory !== category ? 0.4 : 1
            }}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {showPersons && (
        <div className="legend-section persons">
          {responsiblePersons.map(person => (
            <button
              key={person}
              className={`legend-person-btn ${highlightPerson === person ? 'active' : ''}`}
              style={{
                opacity: hasActiveHighlight && highlightPerson !== person ? 0.4 : 1
              }}
              onClick={() => handlePersonClick(person)}
            >
              {getShortName(person)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Legend;
