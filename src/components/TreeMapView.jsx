import { useMemo, useRef, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { languageColors, hasCategory, getStatusCategory } from '../data/products';
import './TreeMapView.css';

// Squarified Treemap algorithm - fills all available space
const squarify = (items, x, y, width, height) => {
  if (items.length === 0) return [];
  if (width <= 0 || height <= 0) return [];
  
  const totalValue = items.reduce((sum, item) => sum + item.value, 0);
  if (totalValue === 0) return [];
  
  if (items.length === 1) {
    return [{ ...items[0], x, y, w: width, h: height }];
  }
  
  // Decide layout direction based on aspect ratio
  const isHorizontal = width >= height;
  
  // Find the best split using worst aspect ratio heuristic
  let bestSplit = 1;
  let bestRatio = Infinity;
  
  for (let i = 1; i < items.length; i++) {
    const firstGroup = items.slice(0, i);
    const firstValue = firstGroup.reduce((sum, item) => sum + item.value, 0);
    const ratio = firstValue / totalValue;
    
    // Calculate worst aspect ratio for this split
    const dim1 = isHorizontal ? width * ratio : width;
    const dim2 = isHorizontal ? height : height * ratio;
    
    let worstAspect = 0;
    
    for (const item of firstGroup) {
      const itemRatio = item.value / firstValue;
      const itemDim = isHorizontal ? dim2 * itemRatio : dim1 * itemRatio;
      const otherDim = isHorizontal ? dim1 : dim2;
      if (itemDim > 0) {
        const aspect = Math.max(otherDim / itemDim, itemDim / otherDim);
        worstAspect = Math.max(worstAspect, aspect);
      }
    }
    
    if (worstAspect < bestRatio) {
      bestRatio = worstAspect;
      bestSplit = i;
    }
  }
  
  const firstGroup = items.slice(0, bestSplit);
  const secondGroup = items.slice(bestSplit);
  const firstValue = firstGroup.reduce((sum, item) => sum + item.value, 0);
  const firstRatio = firstValue / totalValue;
  
  let results = [];
  
  if (isHorizontal) {
    // First group takes left portion
    const firstWidth = width * firstRatio;
    let currentY = y;
    
    for (const item of firstGroup) {
      const itemRatio = item.value / firstValue;
      const itemHeight = height * itemRatio;
      results.push({ ...item, x, y: currentY, w: firstWidth, h: itemHeight });
      currentY += itemHeight;
    }
    
    if (secondGroup.length > 0) {
      results = results.concat(squarify(secondGroup, x + firstWidth, y, width - firstWidth, height));
    }
  } else {
    // First group takes top portion
    const firstHeight = height * firstRatio;
    let currentX = x;
    
    for (const item of firstGroup) {
      const itemRatio = item.value / firstValue;
      const itemWidth = width * itemRatio;
      results.push({ ...item, x: currentX, y, w: itemWidth, h: firstHeight });
      currentX += itemWidth;
    }
    
    if (secondGroup.length > 0) {
      results = results.concat(squarify(secondGroup, x, y + firstHeight, width, height - firstHeight));
    }
  }
  
  return results;
};

const TreeMapView = ({ products, highlightLanguage, highlightPerson, highlightCategory, highlightStatus }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ 
          width: rect.width, 
          height: rect.height 
        });
      }
    };
    
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  // Group products by language and calculate layout
  const { languageLayouts } = useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) {
      return { languageLayouts: [] };
    }
    
    const gap = 2;
    
    // Group by language
    const byLanguage = {};
    products.forEach(product => {
      const lang = product["Язык программирования"];
      if (!byLanguage[lang]) byLanguage[lang] = [];
      byLanguage[lang].push(product);
    });
    
    // Calculate total area per language (area = attention * impact)
    const languageData = Object.entries(byLanguage).map(([lang, prods]) => {
      const totalArea = prods.reduce((sum, p) => {
        const attention = p.attention || 5;
        const impact = p.impact || 5;
        return sum + attention * impact;
      }, 0);
      return { language: lang, products: prods, value: totalArea };
    });
    
    // Sort by area descending
    languageData.sort((a, b) => b.value - a.value);
    
    // Use squarified treemap for language clusters - fill entire space
    const languageRects = squarify(languageData, 0, 0, dimensions.width, dimensions.height);
    
    // Now layout products within each language cluster
    const layouts = languageRects.map(langRect => {
      const innerPadding = 1;
      const innerWidth = langRect.w - innerPadding * 2;
      const innerHeight = langRect.h - innerPadding * 2;
      
      // Create product items with values (area = attention * impact)
      const productItems = langRect.products.map(product => ({
        product,
        value: (product.attention || 5) * (product.impact || 5)
      }));
      
      // Sort by value descending
      productItems.sort((a, b) => b.value - a.value);
      
      // Use squarified treemap for products
      const productRects = squarify(
        productItems, 
        langRect.x + innerPadding, 
        langRect.y + innerPadding, 
        innerWidth, 
        innerHeight
      );
      
      return {
        language: langRect.language,
        x: langRect.x,
        y: langRect.y,
        w: langRect.w,
        h: langRect.h,
        products: productRects.map(pr => ({
          ...pr,
          x: pr.x + gap / 2,
          y: pr.y + gap / 2,
          w: Math.max(pr.w - gap, 1),
          h: Math.max(pr.h - gap, 1)
        }))
      };
    });
    
    return { languageLayouts: layouts };
  }, [products, dimensions]);
  
  const isHighlighted = (product) => {
    if (!highlightLanguage && !highlightPerson && !highlightCategory && !highlightStatus) return true;
    
    if (highlightLanguage && product["Язык программирования"] === highlightLanguage) {
      return true;
    }
    
    if (highlightPerson) {
      if (product["Ответственный"] === highlightPerson) return true;
      const helpers = product["Кто еще может помочь"] || [];
      if (helpers.includes(highlightPerson)) return true;
    }
    
    if (highlightCategory && hasCategory(product, highlightCategory)) {
      return true;
    }
    
    if (highlightStatus && getStatusCategory(product["Статус"]) === highlightStatus) {
      return true;
    }
    
    return false;
  };
  
  const hasHighlight = highlightLanguage || highlightPerson || highlightCategory || highlightStatus;

  return (
    <div className="treemap-container" ref={containerRef}>
      <div className="treemap-canvas">
        {languageLayouts.map(langLayout => (
          <div 
            key={langLayout.language}
            className="language-cluster"
            style={{
              left: langLayout.x,
              top: langLayout.y,
              width: langLayout.w,
              height: langLayout.h,
              borderColor: languageColors[langLayout.language]?.bg || '#666'
            }}
          >
            <div 
              className="language-label"
              style={{ 
                backgroundColor: languageColors[langLayout.language]?.bg || '#666',
                border: '1px solid ' + (languageColors[langLayout.language]?.text || '#fff'),
                color: languageColors[langLayout.language]?.text || '#fff'
              }}
            >
              {langLayout.language}
            </div>
            
            {langLayout.products.map(item => {
              const highlighted = isHighlighted(item.product);
              return (
                <div
                  key={item.product["Продукт"]}
                  className={`treemap-item ${hasHighlight && !highlighted ? 'dimmed' : ''} ${hasHighlight && highlighted ? 'highlighted' : ''}`}
                  style={{
                    position: 'absolute',
                    left: item.x - langLayout.x,
                    top: item.y - langLayout.y,
                    width: item.w,
                    height: item.h
                  }}
                >
                  <ProductCard 
                    product={item.product} 
                    width={item.w} 
                    height={item.h}
                    isHighlighted={highlighted}
                    hasHighlight={hasHighlight}
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreeMapView;
