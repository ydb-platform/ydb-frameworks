// src/components/DependencyNetwork.tsx
import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Framework } from '../types';

interface DependencyNetworkProps {
    frameworks: Framework[];
    selectedFramework: string | null;
    onFrameworkSelect: (id: string) => void;
    isDarkMode: boolean;
}

const DependencyNetwork: React.FC<DependencyNetworkProps> = ({
                                                                 frameworks,
                                                                 selectedFramework,
                                                                 onFrameworkSelect,
                                                                 isDarkMode
                                                             }) => {
    const chartRef = useRef<HighchartsReact.RefObject>(null);

    // Сортировка фреймворков по дате выпуска
    const sortedFrameworks = [...frameworks].sort(
        (a, b) => a.releaseDate.getTime() - b.releaseDate.getTime()
    );

    // Определяем временной диапазон
    const earliestDate = new Date(sortedFrameworks[0]?.releaseDate);
    earliestDate.setMonth(0); // Устанавливаем январь
    earliestDate.setDate(1);  // Устанавливаем 1 число

    const latestDate = new Date(sortedFrameworks[sortedFrameworks.length - 1]?.releaseDate);
    latestDate.setMonth(11);   // Устанавливаем декабрь
    latestDate.setDate(31);    // Устанавливаем 31 число

    // Добавляем запас в 1 год с обеих сторон для более красивого отображения
    earliestDate.setFullYear(earliestDate.getFullYear() - 1);
    latestDate.setFullYear(latestDate.getFullYear() + 1);

    // Создаем серии данных для разных категорий
    const categoryOrder = ['driver', 'orm', 'admin', 'etl', 'analytics'];
    const seriesData = categoryOrder.map((category, categoryIndex) => {
        // Находим все фреймворки в этой категории
        const categoryFrameworks = frameworks.filter(f => f.category === category);

        // Сортируем по дате для последовательного размещения
        const sortedFrameworks = [...categoryFrameworks].sort(
            (a, b) => a.releaseDate.getTime() - b.releaseDate.getTime()
        );

        // Создаем карту дат, чтобы определить, где есть кластеры фреймворков
        const dateMap = new Map<number, Framework[]>();
        sortedFrameworks.forEach(f => {
            // Группируем по году и месяцу для выявления близких дат
            const yearMonth = new Date(
                f.releaseDate.getFullYear(),
                f.releaseDate.getMonth(),
                1
            ).getTime();

            if (!dateMap.has(yearMonth)) {
                dateMap.set(yearMonth, []);
            }
            dateMap.get(yearMonth)!.push(f);
        });

        // Распределяем Y-координаты для избежания наложений
        const data = sortedFrameworks.map(framework => {
            // Определяем группу (кластер) для этого фреймворка
            const yearMonth = new Date(
                framework.releaseDate.getFullYear(),
                framework.releaseDate.getMonth(),
                1
            ).getTime();

            const sameMonthFrameworks = dateMap.get(yearMonth)!;
            const frameworkIndex = sameMonthFrameworks.findIndex(f => f.id === framework.id);
            const totalInSameMonth = sameMonthFrameworks.length;

            // Определяем смещение по Y внутри категории
            // Если много фреймворков в одном месяце, распределяем их равномерно
            let yOffset = 0;
            if (totalInSameMonth > 1) {
                // Распределяем от -0.35 до 0.35 внутри категории
                const spreadFactor = 0.7;
                yOffset = -spreadFactor/2 + frameworkIndex * (spreadFactor / (totalInSameMonth - 1));
            }

            return {
                x: framework.releaseDate.getTime(),
                y: categoryIndex + yOffset, // Добавляем смещение к базовому индексу категории
                id: framework.id,
                name: framework.name,
                releaseDate: framework.releaseDate.toLocaleDateString(),
                releaseYear: framework.releaseDate.getFullYear(),
                description: framework.description,
                category: framework.category,
                marker: {
                    radius: selectedFramework === framework.id ? 8 : 6,
                    symbol: 'circle'
                }
            };
        });

        return {
            name: getCategoryName(category),
            color: getColorByCategory(category),
            data: data
        };
    });

    // Вспомогательная функция для поиска точки по ID
    function findPointInSeries(id: string) {
        for (const series of seriesData) {
            const point = series.data.find((p: any) => p.id === id);
            if (point) {
                return point;
            }
        }
        return null;
    }

    // Подготовка данных для линий зависимостей
    const dependencySeriesData = frameworks.flatMap(framework => {
        return framework.dependencies.map(depId => {
            const source = framework;
            const target = frameworks.find(f => f.id === depId);

            if (!target) return null;

            // Находим точную позицию источника и цели на графике
            const sourcePoint = findPointInSeries(source.id);
            const targetPoint = findPointInSeries(depId);

            if (!sourcePoint || !targetPoint) return null;

            return {
                from: sourcePoint.x,
                to: targetPoint.x,
                fromY: sourcePoint.y,
                toY: targetPoint.y,
                sourceId: source.id,
                targetId: depId,
                sourceName: source.name,
                targetName: target.name
            };
        }).filter(Boolean);
    }) as any[];

    // Создание линий зависимостей
    const dependencies = dependencySeriesData.map(dep => {
        return {
            type: 'spline' as const,
            name: `${dep.sourceName} → ${dep.targetName}`,
            data: [
                [dep.from, dep.fromY],
                [dep.to, dep.toY]
            ],
            lineWidth: 1,
            dashStyle: 'shortdot' as const,
            color: isDarkMode ? '#666666' : '#999999',
            enableMouseTracking: false,
            marker: {
                enabled: false
            },
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            showInLegend: false
        };
    });

    // Подготовка меток лет для оси X
    const startYear = earliestDate.getFullYear();
    const endYear = latestDate.getFullYear();
    const yearRange = endYear - startYear;

    // Определяем шаг для меток лет (1 или 2 года в зависимости от диапазона)
    const tickInterval = yearRange > 15
        ? 2 * 365 * 24 * 60 * 60 * 1000
        : 365 * 24 * 60 * 60 * 1000;

    const options: Highcharts.Options = {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            height: (window.innerHeight/window.innerWidth*100)+'%',
            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff'
        },
        title: {
            text: 'PostgreSQL Frameworks Timeline',
            style: {
                color: isDarkMode ? '#ffffff' : '#333333'
            }
        },
        subtitle: {
            text: 'Showing release dates and dependencies between frameworks',
            style: {
                color: isDarkMode ? '#cccccc' : '#666666'
            }
        },
        xAxis: {
            type: 'datetime',
            lineColor: isDarkMode ? '#666666' : '#cccccc',
            lineWidth: 2,
            tickWidth: 1,
            tickLength: 5,
            tickInterval: tickInterval,
            gridLineWidth: 1,
            gridLineColor: isDarkMode ? '#333333' : '#eeeeee',
            min: earliestDate.getTime(),
            max: latestDate.getTime(),
            labels: {
                format: '{value:%Y}',
                style: {
                    color: isDarkMode ? '#e0e0e0' : '#666666',
                    fontWeight: 'bold'
                }
            },
            title: {
                text: 'Release Year',
                style: {
                    color: isDarkMode ? '#ffffff' : '#333333',
                    fontWeight: 'bold'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Framework Category',
                style: {
                    color: isDarkMode ? '#ffffff' : '#333333'
                }
            },
            // Используем индексы категорий для меток на оси
            categories: categoryOrder.map(c => getCategoryName(c)),
            // Устанавливаем диапазон для правильного размещения точек
            min: -0.5,
            max: categoryOrder.length - 0.5,
            // Расположение меток категорий точно по центру
            tickPositions: categoryOrder.map((_, i) => i),
            gridLineColor: isDarkMode ? '#333333' : '#eeeeee',
            gridLineWidth: 1,
            labels: {
                style: {
                    color: isDarkMode ? '#e0e0e0' : '#666666'
                }
            }
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: `
        <tr><td colspan="2"><b>{point.name}</b></td></tr>
        <tr><td>Released:</td><td>{point.releaseDate}</td></tr>
        <tr><td colspan="2">{point.description}</td></tr>
        <tr><td colspan="2"><small>Click for more details</small></td></tr>
      `,
            footerFormat: '</table>',
            backgroundColor: isDarkMode ? 'rgba(50, 50, 50, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            style: {
                color: isDarkMode ? '#e0e0e0' : '#333333'
            }
        },
        legend: {
            enabled: true,
            itemStyle: {
                color: isDarkMode ? '#e0e0e0' : '#333333'
            },
            itemHoverStyle: {
                color: isDarkMode ? '#ffffff' : '#000000'
            }
        },
        plotOptions: {
            scatter: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name} ({point.releaseYear})',
                    style: {
                        color: isDarkMode ? '#e0e0e0' : '#333333',
                        textOutline: isDarkMode ? '1px #1e1e1e' : '1px #ffffff',
                        fontWeight: 'normal',
                        fontSize: '10px'
                    },
                    // Добавляем отступ чтобы метки не накладывались на точки
                    y: -18,
                    // Добавляем возможность смещения меток для избежания наложений
                    allowOverlap: false,
                    crop: false,
                    overflow: 'allow'
                },
                marker: {
                    symbol: 'circle',
                    radius: 6,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: isDarkMode ? '#ffffff' : '#000000'
                        }
                    }
                },
                events: {
                    click: function(event: any) {
                        if (event.point && event.point.id) {
                            onFrameworkSelect(event.point.id);
                        }
                    }
                },
                stickyTracking: false
            }
        },
        // Комбинируем серии фреймворков и зависимостей
        series: [
            ...seriesData,
            ...dependencies
        ] as any
    };

    // При изменении выбранного фреймворка
    useEffect(() => {
        if (chartRef.current && chartRef.current.chart) {
            const chart = chartRef.current.chart;

            // Обновляем маркеры всех серий
            chart.series.forEach((series: any) => {
                if (series.type === 'scatter') {
                    series.points.forEach((point: any) => {
                        const isSelected = point.id === selectedFramework;

                        // Обновляем размер и цвет маркера
                        point.update({
                            marker: {
                                radius: isSelected ? 10 : 6,
                                lineWidth: isSelected ? 2 : 0,
                                lineColor: isDarkMode ? '#ffffff' : '#000000',
                                fillColor: isSelected ? (isDarkMode ? '#ffffff' : '#000000') : undefined
                            }
                        }, false);
                    });
                }
            });

            // Перерисовываем график после всех обновлений
            chart.redraw();
        }
    }, [selectedFramework, isDarkMode]);

    // Функция для получения цвета на основе категории
    function getColorByCategory(category: string): string {
        switch(category) {
            case 'driver': return '#7cb5ec';
            case 'orm': return '#90ed7d';
            case 'admin': return '#f7a35c';
            case 'etl': return '#8085e9';
            case 'analytics': return '#f15c80';
            default: return '#e4d354';
        }
    }

    // Функция для получения названия категории
    function getCategoryName(category: string): string {
        switch(category) {
            case 'driver': return 'Database Drivers';
            case 'orm': return 'ORM Tools';
            case 'admin': return 'Administration Tools';
            case 'etl': return 'ETL Tools';
            case 'analytics': return 'Analytics Engines';
            default: return category;
        }
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartRef}
        />
    );
};

export default DependencyNetwork;
