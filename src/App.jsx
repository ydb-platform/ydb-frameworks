import { useState } from 'react';
import { products } from './data/products';
import { ThemeProvider } from './context/ThemeContext';
import TreeMapView from './components/TreeMapView';
import Legend from './components/Legend';
import './App.css';

function AppContent() {
  const [highlightLanguage, setHighlightLanguage] = useState(null);
  const [highlightPerson, setHighlightPerson] = useState(null);
  const [highlightCategory, setHighlightCategory] = useState(null);
  const [highlightStatus, setHighlightStatus] = useState(null);
  
  return (
    <div className="app">
      <header className="app-header">
        <div className="logo">
          <div className="logo-icon">YDB</div>
          <div className="logo-text">
            <h1>AppTeam</h1>
            <p>{products.length} продуктов</p>
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
