// src/components/Timeline/TimelineDependency.tsx
import React, { useState, useEffect } from 'react';
import { Framework, Dependency } from '../../data/types';
import { languageColors } from '../../utils/colors';
import styles from './TimelineDependency.module.css';

interface TimelineDependencyProps {
    dependency: Dependency;
    frameworks: Framework[];
    expandedCategories: Record<string, boolean>;
    frameworksByCategory: Record<string, Framework[]>;
    selectedDb: string;
    isHighlighted?: boolean;
}

const TimelineDependency: React.FC<TimelineDependencyProps> = ({
                                                                   dependency,
                                                                   frameworks,
                                                                   expandedCategories,
                                                                   frameworksByCategory,
                                                                   selectedDb,
                                                                   isHighlighted = false
                                                               }) => {
    const sourceFramework = frameworks.find(f => f.id === dependency.source);
    const targetFramework = frameworks.find(f => f.id === dependency.target);

    const [points, setPoints] = useState({ sourceX: 0, sourceY: 0, targetX: 0, targetY: 0 });
    const [isVisible, setIsVisible] = useState(false);

    // Обновленная функция поиска точек фреймворка в DOM
    const findFrameworkPoints = () => {
        if (!sourceFramework || !targetFramework) {
            return null;
        }

        if (!expandedCategories[sourceFramework.category] || !expandedCategories[targetFramework.category]) {
            return null;
        }

        // Находим все строки фреймворков
        const frameworkRows = document.querySelectorAll('[data-framework-id]');
        if (!frameworkRows || frameworkRows.length === 0) {
            return null;
        }

        // Создаем словарь для быстрого поиска
        const frameworkMap = new Map<string, HTMLElement>();
        frameworkRows.forEach(row => {
            const id = row.getAttribute('data-framework-id');
            if (id) {
                frameworkMap.set(id, row as HTMLElement);
            }
        });

        // Проверяем наличие исходного и целевого фреймворков
        if (!frameworkMap.has(sourceFramework.id)) {
            return null;
        }

        if (!frameworkMap.has(targetFramework.id)) {
            return null;
        }

        // Получаем DOM-элементы
        const sourceRow = frameworkMap.get(sourceFramework.id)!;
        const targetRow = frameworkMap.get(targetFramework.id)!;

        // Получаем линии фреймворков
        const sourceLines = sourceRow.querySelectorAll('[class*="frameworkLine"]');
        const targetLines = targetRow.querySelectorAll('[class*="frameworkLine"]');

        if (sourceLines.length === 0 || targetLines.length === 0) {
            return null;
        }

        // Берем цветную линию (обычно она последняя)
        const sourceColoredLine = sourceLines[sourceLines.length - 1] as HTMLElement;
        const targetColoredLine = targetLines[targetLines.length - 1] as HTMLElement;

        // Получаем размеры и позиции
        const timelineContainer = document.querySelector('.timelineContainer') as HTMLElement;
        if (!timelineContainer) {
            return null;
        }

        const containerRect = timelineContainer.getBoundingClientRect();
        const sourceLineRect = sourceColoredLine.getBoundingClientRect();
        const targetLineRect = targetColoredLine.getBoundingClientRect();
        const sourceRowRect = sourceRow.getBoundingClientRect();
        const targetRowRect = targetRow.getBoundingClientRect();

        // Учитываем прокрутку
        const scrollLeft = timelineContainer.scrollLeft || 0;

        // Вычисляем координаты точек начала линий
        const sourceX = sourceLineRect.left - containerRect.left + scrollLeft;
        const sourceY = sourceRowRect.top + sourceRowRect.height / 2 - containerRect.top;

        const targetX = targetLineRect.left - containerRect.left + scrollLeft;
        const targetY = targetRowRect.top + targetRowRect.height / 2 - containerRect.top;

        return { sourceX, sourceY, targetX, targetY };
    };

    // Обновляем точки при изменении данных
    useEffect(() => {
        // Задержка для уверенности, что DOM обновился
        const timer = setTimeout(() => {
            const result = findFrameworkPoints();
            if (result) {
                setPoints(result);
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [sourceFramework, targetFramework, expandedCategories, selectedDb]);

    // Если точки не найдены, не рендерим
    if (!isVisible || !sourceFramework || !targetFramework) {
        return null;
    }

    const { sourceX, sourceY, targetX, targetY } = points;
    const color = languageColors[sourceFramework.language];

    // Находим границы прямоугольника между точками
    const minX = Math.min(sourceX, targetX);
    const maxX = Math.max(sourceX, targetX);
    const minY = Math.min(sourceY, targetY);
    const maxY = Math.max(sourceY, targetY);

    // Размеры прямоугольника
    const rectWidth = maxX - minX;
    const rectHeight = maxY - minY;

    // Тип доминирующего направления
    const isHorizontalDominant = rectWidth > rectHeight;

    // Расчет контрольных точек для кривой Безье
    let control1X, control1Y, control2X, control2Y;

    if (isHorizontalDominant) {
        // Для горизонтальных линий
        const xStep = rectWidth / 3;

        if (sourceX < targetX) {
            control1X = sourceX + xStep;
            control2X = targetX - xStep;
        } else {
            control1X = sourceX - xStep;
            control2X = targetX + xStep;
        }

        control1Y = sourceY;
        control2Y = targetY;
    } else {
        // Для вертикальных линий
        const yStep = rectHeight / 3;

        if (sourceY < targetY) {
            control1Y = sourceY + yStep;
            control2Y = targetY - yStep;
        } else {
            control1Y = sourceY - yStep;
            control2Y = targetY + yStep;
        }

        control1X = sourceX;
        control2X = targetX;
    }

    // Путь кривой Безье
    const mainPath = `
    M ${sourceX} ${sourceY}
    C ${control1X} ${control1Y},
      ${control2X} ${control2Y},
      ${targetX} ${targetY}
  `;

    // Расчет угла стрелки
    // Для кривой Безье направление в конечной точке определяется вектором от второй контрольной точки к концу
    const arrowDirX = targetX - control2X;
    const arrowDirY = targetY - control2Y;
    const arrowAngleRad = Math.atan2(arrowDirY, arrowDirX);
    const arrowAngleDeg = arrowAngleRad * (180 / Math.PI);

    return (
        <g className={`${styles.dependencyPath} ${isHighlighted ? styles.highlightedDependency : ''}`}>
            {/* Основная пунктирная линия */}
            <path
                d={mainPath}
                stroke={color}
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="6,4"
                className={`${styles.dependencyLine} ${isHighlighted ? styles.highlightedLine : ''}`}
            />

            {/* Стрелка */}
            <g
                transform={`translate(${targetX},${targetY}) rotate(${arrowAngleDeg})`}
            >
                <path
                    d="M -18,-6 L 0,0 L -18,6 L -14,0 Z"
                    fill={color}
                    strokeWidth="1"
                    stroke={color}
                    className={`${styles.arrowhead} ${isHighlighted ? styles.highlightedArrow : ''}`}
                />
            </g>
        </g>
    );
};

export default TimelineDependency;
