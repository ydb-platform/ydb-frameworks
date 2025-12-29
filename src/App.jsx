import { useState, useMemo, useEffect } from 'react';
import { getFilteredFrameworks, getStatusCategory } from './data/frameworks';
import { ThemeProvider } from './context/ThemeContext';
import TreeMapView from './components/TreeMapView';
import Legend from './components/Legend';
import Player, { getFrameworksAtDate, getFrameworkStateAtDate } from './components/Player';
import YdbIcon from './components/YdbIcon';
import './App.css';

// Read highlight params from URL
const getHighlightFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    language: params.get('lang'),
    person: params.get('person'),
    category: params.get('category'),
    status: params.get('status'),
  };
};

// Check if player mode is enabled
const isPlayerEnabled = () => {
  const params = new URLSearchParams(window.location.search);
  const playerParam = params.get('player');
  return playerParam === 'true' || playerParam === '1';
};

// Get the earliest date from all frameworks' timelines
const getEarliestDate = (frameworks) => {
  let minDate = new Date();
  
  frameworks.forEach(f => {
    if (f.timeline && f.timeline.length > 0) {
      const date = new Date(f.timeline[0].date);
      if (date < minDate) minDate = date;
    }
  });

  // Set to first of month
  return new Date(minDate.getFullYear(), minDate.getMonth(), 1);
};

// Update URL with highlight params (preserving other params like persons)
const updateURL = (language, person, category, status) => {
  const params = new URLSearchParams(window.location.search);
  
  // Remove highlight params first
  params.delete('lang');
  params.delete('person');
  params.delete('category');
  params.delete('status');
  
  // Add active highlight param
  if (language) params.set('lang', language);
  if (person) params.set('person', person);
  if (category) params.set('category', category);
  if (status) params.set('status', status);
  
  const newURL = params.toString() 
    ? `${window.location.pathname}?${params.toString()}`
    : window.location.pathname;
  
  window.history.replaceState({}, '', newURL);
};

function AppContent() {
  // Initialize state from URL
  const initialHighlight = getHighlightFromURL();
  const [highlightLanguage, setHighlightLanguage] = useState(initialHighlight.language);
  const [highlightPerson, setHighlightPerson] = useState(initialHighlight.person);
  const [highlightCategory, setHighlightCategory] = useState(initialHighlight.category);
  const [highlightStatus, setHighlightStatus] = useState(initialHighlight.status);
  
  // Player mode state
  const playerEnabled = useMemo(() => isPlayerEnabled(), []);
  const allFrameworks = useMemo(() => getFilteredFrameworks(), []);
  const [currentDate, setCurrentDate] = useState(() => {
    if (playerEnabled) {
      return getEarliestDate(allFrameworks);
    }
    return new Date();
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  
  // Update URL when highlights change
  useEffect(() => {
    updateURL(highlightLanguage, highlightPerson, highlightCategory, highlightStatus);
  }, [highlightLanguage, highlightPerson, highlightCategory, highlightStatus]);
  
  // Get frameworks for current date (or all if player is disabled)
  const { filteredFrameworks, newFrameworkIds } = useMemo(() => {
    if (!playerEnabled) {
      return { filteredFrameworks: allFrameworks, newFrameworkIds: new Set() };
    }
    
    const visibleFrameworks = getFrameworksAtDate(currentDate, allFrameworks);
    const newIds = new Set();
    
    // Apply timeline state to each framework
    const frameworksWithState = visibleFrameworks.map(f => {
      const state = getFrameworkStateAtDate(f, currentDate);
      
      if (!state) return null;
      
      if (state.isNew) {
        newIds.add(f["Продукт"]);
      }
      
      return {
        ...f,
        quality: state.quality,
        attention: state.attention ?? f.attention,
        "Статус": state.status,
        _isNew: state.isNew,
        _timelineDescription: state.description
      };
    }).filter(Boolean);
    
    return { filteredFrameworks: frameworksWithState, newFrameworkIds: newIds };
  }, [playerEnabled, allFrameworks, currentDate]);
  
  // Count frameworks by status
  const statusCounts = useMemo(() => {
    const counts = { production: 0, development: 0 };
    filteredFrameworks.forEach(f => {
      counts[getStatusCategory(f["Статус"])]++;
    });
    return counts;
  }, [filteredFrameworks]);

  const hasActiveHighlight = highlightLanguage || highlightPerson || highlightCategory || highlightStatus;

  const clearAll = () => {
    setHighlightLanguage(null);
    setHighlightPerson(null);
    setHighlightCategory(null);
    setHighlightStatus(null);
  };

  const handleStatusClick = (status) => {
    clearAll();
    setHighlightStatus(highlightStatus === status ? null : status);
  };
  
  return (
    <div className="app">
      <header className={`app-header ${playerEnabled ? 'with-player' : ''}`}>
        <div className="header-top-row">
          <div className="logo-block">
            <div className="logo">
              <YdbIcon size={50} className="logo-icon" />
              <div className="logo-text">
                <h1>YDB<br/> client<br/> frameworks</h1>
              </div>
            </div>
            <div className="status-buttons">
              <a 
                href="https://github.com/ydb-platform/ydb-frameworks/blob/main/src/data/frameworks.js" 
                target="_blank" 
                rel="noopener noreferrer"
                className="edit-link"
                title="Редактировать данные"
              >
                ✏️
              </a>
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
          </div>
          <Legend 
            highlightLanguage={highlightLanguage}
            setHighlightLanguage={setHighlightLanguage}
            highlightPerson={highlightPerson}
            setHighlightPerson={setHighlightPerson}
            highlightCategory={highlightCategory}
            setHighlightCategory={setHighlightCategory}
            highlightStatus={highlightStatus}
            setHighlightStatus={setHighlightStatus}
          />
        </div>
      </header>
      
      <main className="app-main">
        <TreeMapView 
          frameworks={filteredFrameworks} 
          highlightLanguage={highlightLanguage}
          highlightPerson={highlightPerson}
          highlightCategory={highlightCategory}
          highlightStatus={highlightStatus}
          newFrameworkIds={newFrameworkIds}
        />
      </main>
      
      {playerEnabled && (
        <footer className="app-footer">
          <Player 
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            isEnabled={playerEnabled}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            speed={speed}
            setSpeed={setSpeed}
          />
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
