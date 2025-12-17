import { languageColors, categoryColors, getCategories, products, getStatusCategory } from '../data/products';
import { useTheme } from '../context/ThemeContext';
import './Legend.css';

const Legend = ({ 
  highlightLanguage, setHighlightLanguage, 
  highlightPerson, setHighlightPerson,
  highlightCategory, setHighlightCategory,
  highlightStatus, setHighlightStatus
}) => {
  const { theme, setTheme } = useTheme();
  const categories = getCategories();
  
  // Get unique responsible persons
  const responsiblePersons = [...new Set(products.filter(p => p["Ответственный"]).map(p => p["Ответственный"]))].sort();
  
  // Count products by status
  const statusCounts = { production: 0, development: 0 };
  products.forEach(p => {
    statusCounts[getStatusCategory(p["Статус"])]++;
  });
  
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

  const handleStatusClick = (status) => {
    clearAll();
    setHighlightStatus(highlightStatus === status ? null : status);
  };

  const hasActiveHighlight = highlightLanguage || highlightPerson || highlightCategory || highlightStatus;

  return (
    <div className="legend">
      <div className="legend-section status">
        <button
          className={`legend-status-btn production ${highlightStatus === 'production' ? 'active' : ''}`}
          style={{ opacity: hasActiveHighlight && highlightStatus !== 'production' ? 0.4 : 1 }}
          onClick={() => handleStatusClick('production')}
          title="Production ready"
        >
          ✓ {statusCounts.production}
        </button>
        <button
          className={`legend-status-btn development ${highlightStatus === 'development' ? 'active' : ''}`}
          style={{ opacity: hasActiveHighlight && highlightStatus !== 'development' ? 0.4 : 1 }}
          onClick={() => handleStatusClick('development')}
          title="В разработке"
        >
          ⚙ {statusCounts.development}
        </button>
      </div>

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
      
      <div className="legend-section theme">
        <button 
          className={theme === 'light' ? 'active' : ''} 
          onClick={() => setTheme('light')}
          title="Светлая тема"
        >☀️</button>
        <button 
          className={theme === 'dark' ? 'active' : ''} 
          onClick={() => setTheme('dark')}
          title="Тёмная тема"
        >🌙</button>
        <button 
          className={theme === 'system' ? 'active' : ''} 
          onClick={() => setTheme('system')}
          title="Системная тема"
        >💻</button>
      </div>
    </div>
  );
};

export default Legend;
