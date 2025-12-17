import { useState } from 'react';
import { products, getStatusCategory } from './data/products';
import { ThemeProvider } from './context/ThemeContext';
import TreeMapView from './components/TreeMapView';
import Legend from './components/Legend';
import YdbIcon from './components/YdbIcon';
import './App.css';

function AppContent() {
  const [highlightLanguage, setHighlightLanguage] = useState(null);
  const [highlightPerson, setHighlightPerson] = useState(null);
  const [highlightCategory, setHighlightCategory] = useState(null);
  const [highlightStatus, setHighlightStatus] = useState(null);
  
  // Count products by status
  const statusCounts = { production: 0, development: 0 };
  products.forEach(p => {
    statusCounts[getStatusCategory(p["Статус"])]++;
  });

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
      <header className="app-header">
        <div className="logo-block">
          <div className="logo">
            <YdbIcon size={28} className="logo-icon" />
            <div className="logo-text">
              <h1>AppTeam</h1>
              <p>{products.length} продуктов</p>
            </div>
          </div>
          <div className="status-buttons">
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
      </header>
      
      <main className="app-main">
        <TreeMapView 
          products={products} 
          highlightLanguage={highlightLanguage}
          highlightPerson={highlightPerson}
          highlightCategory={highlightCategory}
          highlightStatus={highlightStatus}
        />
      </main>
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
