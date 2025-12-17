import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { languageColors, categoryColors, getStatusCategory } from '../data/products';
import './ProductCard.css';

// Convert hex color to rgba with given alpha
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ProductCard = ({ product, width, height, isHighlighted, hasHighlight }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, above: false });
  const cardRef = useRef(null);
  const tooltipRef = useRef(null);
  
  const language = product["Язык программирования"];
  const colors = languageColors[language] || { bg: "#666666", text: "#ffffff" };
  const statusArray = Array.isArray(product["Статус"]) ? product["Статус"] : [product["Статус"]];
  const statusCategory = getStatusCategory(statusArray);
  const quality = product.quality ?? 50;
  const helpers = product["Кто еще может помочь"] || [];
  const categories = product.categories || [];
  const hasRepo = product.repository && product.repository.length > 0;
  
  // Quality affects background opacity (0 = very transparent, 100 = fully opaque)
  const bgOpacity = 0.3 + (quality / 100) * 0.7;
  const bgColorWithOpacity = hexToRgba(colors.bg, bgOpacity);
  
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
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Estimate tooltip dimensions (will be refined after render)
      const tooltipHeight = tooltipRef.current?.offsetHeight || 180;
      const tooltipWidth = tooltipRef.current?.offsetWidth || 280;
      
      let x = rect.left + rect.width / 2;
      let y = rect.bottom + 8;
      let above = false;
      
      // Check if tooltip would go below viewport
      if (y + tooltipHeight > viewportHeight) {
        y = rect.top - tooltipHeight - 8;
        above = true;
      }
      
      // Ensure tooltip doesn't go above viewport
      if (y < 8) {
        y = 8;
        above = false;
      }
      
      // Ensure tooltip doesn't go off left/right edges
      const halfWidth = tooltipWidth / 2;
      if (x - halfWidth < 8) {
        x = halfWidth + 8;
      } else if (x + halfWidth > viewportWidth - 8) {
        x = viewportWidth - halfWidth - 8;
      }
      
      setTooltipPos({ x, y, above });
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
          backgroundColor: bgColorWithOpacity,
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
            fontSize: `${fontSize}px`
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
          ref={tooltipRef}
          className={`product-tooltip-portal ${tooltipPos.above ? 'above' : 'below'}`}
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
