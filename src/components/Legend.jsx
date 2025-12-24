import { useMemo, useState, useEffect } from 'react';
import { languageColors, categoryColors, getCategories, getFilteredFrameworks, isAppTeamMember } from '../data/frameworks';
import './Legend.css';

// Get display name for sorting
const getItemDisplayName = (item) => {
  if (item.type === 'language') return item.lang;
  if (item.type === 'category') return item.category;
  if (item.type === 'person') return item.person || '';
  return '';
};

// Case-insensitive sort
const sortItems = (array) => {
  return [...array].sort((a, b) => 
    getItemDisplayName(a).toLowerCase().localeCompare(getItemDisplayName(b).toLowerCase())
  );
};

// Hook to detect mobile portrait mode
const useIsMobilePortrait = () => {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  
  useEffect(() => {
    const checkMobilePortrait = () => {
      const isPortrait = window.matchMedia('(orientation: portrait)').matches;
      const isMobile = window.innerWidth <= 768;
      setIsMobilePortrait(isMobile && isPortrait);
    };
    
    checkMobilePortrait();
    window.addEventListener('resize', checkMobilePortrait);
    window.addEventListener('orientationchange', checkMobilePortrait);
    
    return () => {
      window.removeEventListener('resize', checkMobilePortrait);
      window.removeEventListener('orientationchange', checkMobilePortrait);
    };
  }, []);
  
  return isMobilePortrait;
};

const Legend = ({ 
  highlightLanguage, setHighlightLanguage, 
  highlightPerson, setHighlightPerson,
  highlightCategory, setHighlightCategory,
  highlightStatus, setHighlightStatus
}) => {
  const categories = getCategories();
  const isMobilePortrait = useIsMobilePortrait();
  
  // Check if persons parameter is enabled (persons=1 or persons=true)
  const showPersons = (() => {
    const params = new URLSearchParams(window.location.search);
    const value = params.get('persons');
    return value === '1' || value === 'true';
  })();
  
  // Get all frameworks
  const filteredFrameworks = useMemo(() => getFilteredFrameworks(), []);
  
  // Get unique persons from filtered frameworks (both responsible and helpers)
  const allPersons = useMemo(() => {
    const persons = new Set();
    filteredFrameworks.forEach(f => {
      if (f["Ответственный"]) {
        persons.add(f["Ответственный"]);
      }
      const helpers = f["Кто еще может помочь"] || [];
      helpers.forEach(h => persons.add(h));
    });
    return [...persons].sort();
  }, [filteredFrameworks]);
  

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
  
  // Check if AppTeam category is active (to highlight all AppTeam members)
  const isAppTeamActive = highlightCategory === 'AppTeam';

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
      allPersons.forEach(person => {
        items.push({ type: 'person', key: `person-${person}`, person });
      });
    }
    
    return sortItems(items);
  }, [categories, showPersons, allPersons]);

  // Get current selected value for mobile select
  const currentSelectValue = useMemo(() => {
    if (highlightLanguage) return `lang-${highlightLanguage}`;
    if (highlightCategory) return `cat-${highlightCategory}`;
    if (highlightPerson) return `person-${highlightPerson}`;
    return '';
  }, [highlightLanguage, highlightCategory, highlightPerson]);

  // Handle select change
  const handleSelectChange = (e) => {
    const value = e.target.value;
    clearAll();
    
    if (!value) return;
    
    if (value.startsWith('lang-')) {
      setHighlightLanguage(value.replace('lang-', ''));
    } else if (value.startsWith('cat-')) {
      setHighlightCategory(value.replace('cat-', ''));
    } else if (value.startsWith('person-')) {
      setHighlightPerson(value.replace('person-', ''));
    }
  };

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
      // Special styling for AppTeam - render like person button
      if (item.category === 'AppTeam') {
        return (
          <button
            key={item.key}
            className={`legend-person-btn legend-appteam-btn ${highlightCategory === 'AppTeam' ? 'active' : ''}`}
            style={{
              opacity: hasActiveHighlight && highlightCategory !== 'AppTeam' ? 0.4 : 1
            }}
            onClick={() => handleCategoryClick(item.category)}
          >
            {item.category}
          </button>
        );
      }
      
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
      const isPersonAppTeamMember = isAppTeamMember(item.person);
      const isHighlightedByAppTeam = isAppTeamActive && isPersonAppTeamMember;
      const isActive = highlightPerson === item.person || isHighlightedByAppTeam;
      
      // When AppTeam is selected, show all persons (AppTeam members highlighted, others visible but not highlighted)
      // Only dim persons when a specific person or non-AppTeam filter is active
      const shouldDim = hasActiveHighlight && !isActive && !isAppTeamActive;
      
      return (
        <button
          key={item.key}
          className={`legend-person-btn ${isActive ? 'active' : ''} ${isAppTeamActive && !isPersonAppTeamMember ? 'non-appteam' : ''}`}
          style={{
            opacity: shouldDim ? 0.4 : 1
          }}
          onClick={() => handlePersonClick(item.person)}
        >
          {item.person}
        </button>
      );
    }
    
    return null;
  };

  // Mobile portrait: render select
  if (isMobilePortrait) {
    // Group items by type for optgroups
    const languages = allItems.filter(item => item.type === 'language');
    const categoriesItems = allItems.filter(item => item.type === 'category');
    const persons = allItems.filter(item => item.type === 'person');
    
    return (
      <div className="legend legend-mobile">
        <select 
          className="legend-select"
          value={currentSelectValue}
          onChange={handleSelectChange}
        >
          <option value="">— Фильтр —</option>
          <optgroup label="Языки">
            {languages.map(item => (
              <option key={item.key} value={item.key}>{item.lang}</option>
            ))}
          </optgroup>
          <optgroup label="Категории">
            {categoriesItems.map(item => (
              <option key={item.key} value={item.key}>{item.category}</option>
            ))}
          </optgroup>
          {showPersons && persons.length > 0 && (
            <optgroup label="Разработчики">
              {persons.map(item => (
                <option key={item.key} value={item.key}>{item.person}</option>
              ))}
            </optgroup>
          )}
        </select>
      </div>
    );
  }

  // Desktop/landscape: render buttons
  return (
    <div className="legend">
      {allItems.map(renderItem)}
    </div>
  );
};

export default Legend;
