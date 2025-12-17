import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { languageColors, categoryColors, getStatusCategory } from '../data/products';
import './ProductCard.css';

const ProductCard = ({ product, width, height, isHighlighted, hasHighlight }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  
  const language = product["Язык программирования"];
  const colors = languageColors[language] || { bg: "#666", text: "#fff" };
  const statusArray = Array.isArray(product["Статус"]) ? product["Статус"] : [product["Статус"]];
  const statusCategory = getStatusCategory(statusArray);
  const quality = product.quality ?? 50;
  const helpers = product["Кто еще может помочь"] || [];
  const categories = product.categories || [];
  const hasRepo = product.repository && product.repository.length > 0;
  
  // Quality affects background opacity (0 = very transparent, 100 = fully opaque)
  const bgOpacity = 0.3 + (quality / 100) * 0.7;
  
  const getBorderStyle = () => {
    switch (statusCategory) {
      case 'production': return '2px solid';
      case 'development': return '2px dashed';
      default: return '2px dotted';
    }
  };
  
  // Handle click to open repository
  const handleClick = () => {
    if (hasRepo) {
      window.open(product.repository, '_blank', 'noopener,noreferrer');
    }
  };
  
  // Calculate tooltip position
  useEffect(() => {
    if (isHovered && cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      let x = rect.left + rect.width / 2;
      let y = rect.bottom + 8;
      
      // Adjust if tooltip would go off screen
      if (y + 200 > viewportHeight) {
        y = rect.top - 8;
      }
      
      setTooltipPos({ x, y });
    }
  }, [isHovered]);
  
  // Calculate font size based on card dimensions
  const fontSize = Math.max(7, Math.min(11, Math.min(width / 10, height / 4)));
  const showStatusIndicator = width > 35 && height > 25;

  return (
    <>
      <div 
        ref={cardRef}
        className={`product-card status-${statusCategory} ${hasHighlight && isHighlighted ? 'card-highlighted' : ''} ${hasRepo ? 'clickable' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.bg,
          opacity: bgOpacity,
          border: getBorderStyle(),
          borderColor: 'rgba(255,255,255,0.4)',
          cursor: hasRepo ? 'pointer' : 'default'
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="product-name" 
          style={{ 
            color: colors.text, 
            fontSize: `${fontSize}px`,
            opacity: 1 / bgOpacity 
          }}
        >
          {product["Продукт"]}
        </div>
        
        {showStatusIndicator && (
          <div className={`status-indicator ${statusCategory}`} title={statusArray.join(', ')}>
            {statusCategory === 'production' && '✓'}
            {statusCategory === 'development' && '⚙'}
          </div>
        )}
      </div>
      
      {isHovered && createPortal(
        <div 
          className="product-tooltip-portal"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
          }}
        >
          <h4>{product["Продукт"]}</h4>
          <div className="tooltip-row">
            <span className="tooltip-label">Язык:</span>
            <span className="tooltip-value">{language}</span>
          </div>
          {categories.length > 0 && (
            <div className="tooltip-row">
              <span className="tooltip-label">Категории:</span>
              <span className="tooltip-categories">
                {categories.map(cat => (
                  <span 
                    key={cat} 
                    className="tooltip-category-tag"
                    style={{ borderColor: categoryColors[cat] || '#888' }}
                  >
                    {cat}
                  </span>
                ))}
              </span>
            </div>
          )}
          <div className="tooltip-row">
            <span className="tooltip-label">Ответственный:</span>
            <span className="tooltip-value">{product["Ответственный"] || "Не назначен"}</span>
          </div>
          {helpers.length > 0 && (
            <div className="tooltip-row">
              <span className="tooltip-label">Помощники:</span>
              <span className="tooltip-value">{helpers.join(', ')}</span>
            </div>
          )}
          <div className="tooltip-row">
            <span className="tooltip-label">Статус:</span>
            <span className="tooltip-value">{statusArray.join(', ')}</span>
          </div>
          {hasRepo && (
            <div className="tooltip-hint">
              👆 Кликните, чтобы открыть репозиторий
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
};

export default ProductCard;
