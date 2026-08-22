import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { languageColors, categoryColors, getStatusCategory, getFrameworkMaturity } from '../data/frameworks';
import './FrameworkCard.css';

// Convert hex color to rgba with given alpha
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Check if persons should be shown (persons=1 or persons=true in URL)
const shouldShowPersons = () => {
  const params = new URLSearchParams(window.location.search);
  const value = params.get('persons');
  return value === '1' || value === 'true';
};

// Check if device is mobile (touch device)
const isMobileDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

const FrameworkCard = ({ framework, width, height, isHighlighted, hasHighlight, isNew = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileTooltipVisible, setIsMobileTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, above: false });
  const cardRef = useRef(null);
  const tooltipRef = useRef(null);
  
  const isMobile = isMobileDevice();
  const showPersons = shouldShowPersons();
  const language = framework["Язык программирования"];
  const colors = languageColors[language] || { bg: "#666666", text: "#ffffff" };
  const statusArray = Array.isArray(framework["Статус"]) ? framework["Статус"] : [framework["Статус"]];
  const maturity = getFrameworkMaturity(framework);
  const statusCategory = getStatusCategory(framework);
  const hasQuality = Number.isFinite(framework.quality);
  const qualityForOpacity = hasQuality ? framework.quality : 50;
  const helpers = framework["Кто еще может помочь"] || [];
  const categories = framework.categories || [];
  const hasRepo = framework.repository && framework.repository.length > 0;
  
  // Quality affects background opacity (0 = very transparent, 100 = fully opaque)
  const bgOpacity = 0.3 + (qualityForOpacity / 100) * 0.7;
  const bgColorWithOpacity = hexToRgba(colors.bg, bgOpacity);
  
  const getBorderStyle = () => {
    switch (statusCategory) {
      case 'production': return '1px solid ' + colors.text;
      case 'development': return '1.5px dashed red';
      default: return '2px dotted';
    }
  };
  
  // Handle click - on mobile: toggle tooltip, on desktop: open repository
  const handleClick = (e) => {
    if (isMobile) {
      e.preventDefault();
      setIsMobileTooltipVisible(prev => !prev);
    } else if (hasRepo) {
      window.open(framework.repository, '_blank', 'noopener,noreferrer');
    }
  };
  
  // Close mobile tooltip when clicking outside
  useEffect(() => {
    if (!isMobile || !isMobileTooltipVisible) return;
    
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target) &&
          tooltipRef.current && !tooltipRef.current.contains(e.target)) {
        setIsMobileTooltipVisible(false);
      }
    };
    
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobile, isMobileTooltipVisible]);
  
  // Determine if tooltip should be visible
  const showTooltip = isMobile ? isMobileTooltipVisible : isHovered;
  
  // Calculate tooltip position
  useEffect(() => {
    if (showTooltip && cardRef.current) {
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
      
      const animationFrame = requestAnimationFrame(() => setTooltipPos({ x, y, above }));
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [showTooltip]);
  
  // Calculate font size based on card dimensions
  const fontSize = Math.max(7, Math.min(11, Math.min(width / 10, height / 4)));
  const showStatusIndicator = width > 35 && height > 25;

  return (
    <>
      <div 
        ref={cardRef}
        className={`framework-card status-${statusCategory} ${hasHighlight && isHighlighted ? 'card-highlighted' : ''} ${hasRepo ? 'clickable' : ''} ${isNew ? 'is-new' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: bgColorWithOpacity,
          border: getBorderStyle(),
          cursor: hasRepo ? 'pointer' : 'default'
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="framework-name" 
          style={{ 
            color: colors.text, 
            fontSize: `${fontSize}px`
          }}
        >
          {framework["Продукт"]}
        </div>
        
        {showStatusIndicator && (
          <div className={`status-indicator ${statusCategory}`} title={`Maturity: ${maturity}`}>
            {statusCategory === 'production' && '✓'}
            {statusCategory === 'development' && '⚙'}
          </div>
        )}
      </div>
      
      {showTooltip && createPortal(
        <div 
          ref={tooltipRef}
          className={`framework-tooltip-portal ${tooltipPos.above ? 'above' : 'below'}`}
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
          }}
        >
          <h4>{framework["Продукт"]}</h4>
          {framework.description && (
            <div className="tooltip-description">{framework.description}</div>
          )}
          <div className="tooltip-row">
            <span className="tooltip-label">Maturity:</span>
            <span className="tooltip-value">{framework.maturityApplies === false ? 'not applicable' : maturity}</span>
          </div>
          {framework.integrationType && (
            <div className="tooltip-row">
              <span className="tooltip-label">Тип:</span>
              <span className="tooltip-value">{framework.integrationType}</span>
            </div>
          )}
          {framework.maintenance?.length > 0 && (
            <div className="tooltip-row">
              <span className="tooltip-label">Сопровождение:</span>
              <span className="tooltip-value">{framework.maintenance.join(', ')}</span>
            </div>
          )}
          {framework.compatibility && (
            <div className="tooltip-row">
              <span className="tooltip-label">Мин. версия YDB:</span>
              <span className="tooltip-value">{framework.compatibility.minimumYdbVersion ?? 'не установлена'}</span>
            </div>
          )}
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
          <div className="tooltip-metrics">
            <div className="tooltip-metric" title="Востребованность">
              <span className="metric-icon">📈</span>
              <span className="metric-label">Востребованность:</span>
              <span className="metric-value">{Number.isFinite(framework.impact) ? `${framework.impact}/10` : 'не оценено'}</span>
            </div>
            <div className="tooltip-metric" title="Требует внимания">
              <span className="metric-icon">⚠️</span>
              <span className="metric-label">Требует внимания:</span>
              <span className="metric-value">{Number.isFinite(framework.attention) ? `${framework.attention}/10` : 'не оценено'}</span>
            </div>
            <div className="tooltip-metric" title="Legacy visual score; не является maturity или качеством доказательств">
              <span className="metric-icon">✅</span>
              <span className="metric-label">Legacy completeness:</span>
              <span className="metric-value">{hasQuality ? `${framework.quality}%` : 'не оценено'}</span>
            </div>
          </div>
          {showPersons && (
            <div className="tooltip-row">
              <span className="tooltip-label">Ответственный:</span>
              <span className="tooltip-value">{framework["Ответственный"] || "Не назначен"}</span>
            </div>
          )}
          {showPersons && helpers.length > 0 && (
            <div className="tooltip-row">
              <span className="tooltip-label">Помощники:</span>
              <span className="tooltip-value">{helpers.join(', ')}</span>
            </div>
          )}
          <div className="tooltip-row">
            <span className="tooltip-label">Legacy статус:</span>
            <span className="tooltip-value">{statusArray.join(', ')}</span>
          </div>
          {hasRepo && !isMobile && (
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

export default FrameworkCard;
