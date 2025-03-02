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

    // Получаем временной диапазон в миллисекундах
    const timeRangeMs = latestDate.getTime() - earliestDate.getTime();

    // Создаем серии данных для разных категорий
    // Это позволит нам разместить фреймворки по категориям вертикально,
    // сохраняя правильное горизонтальное расположение по времени
    const categoryOrder = ['driver', 'orm', 'admin', 'etl', 'analytics'];
    const seriesData = categoryOrder.map(category => {
        return {
            name: getCategoryName(category),
            color: getColorByCategory(category),
            data: frameworks
                .filter(f => f.category === category)
                .map(framework => {
                    // Вычисляем точки для scatterplot
                    return {
                        x: framework.releaseDate.getTime(),
                        y: 0, // Все точки на базовой линии
                        id: framework.id,
                        name: framework.name,
                        releaseDate: framework.releaseDate.toLocaleDateString(),
                        releaseYear: framework.releaseDate.getFullYear(),
                        description: framework.description,
                        marker: {
                            radius: selectedFramework === framework.id ? 8 : 6,
                            symbol: 'circle'
                        }
                    };
                })
        };
    });

    // Создаем данные для отображения зависимостей
    const dependencySeriesData = frameworks.flatMap(framework => {
        return framework.dependencies.map(depId => {
            const source = framework;
            const target = frameworks.find(f => f.id === depId);

            if (!target) return null;

            return {
                from: source.releaseDate.getTime(), // X координата исходного фреймворка
                to: target.releaseDate.getTime(),  // X координата целевого фреймворка
                sourceId: source.id,
                targetId: depId,
                sourceName: source.name,
                targetName: target.name,
                sourceCategory: categoryOrder.indexOf(source.category),
                targetCategory: categoryOrder.indexOf(target.category)
            };
        }).filter(Boolean);
    }) as any[];

    // Подготовка данных для линий зависимостей
    const dependencies = dependencySeriesData.map(dep => {
        return {
            type: 'spline' as const,
            name: `${dep.sourceName} → ${dep.targetName}`,
            data: [
                [dep.from, dep.sourceCategory],
                [dep.to, dep.targetCategory]
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
            height: 550,
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
            categories: categoryOrder.map(c => getCategoryName(c)),
            gridLineColor: isDarkMode ? '#333333' : '#eeeeee',
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
                        fontWeight: 'normal'
                    }
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

    return (
        <div className="dependency-timeline">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                ref={chartRef}
            />

            <div className="timeline-legend">
                <div className="dependency-hint">
                    <span className="dash-line">- - - -</span>
                    <span>Dependency (framework depends on the one it points to)</span>
                </div>
            </div>
        </div>
    );

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
};

export default DependencyNetwork;
