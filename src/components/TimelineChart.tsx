import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Framework } from '../types';
import TimelineLegend from "./TimelineLegend";

// Updated src/components/TimelineChart.tsx - modify the component props and options
interface TimelineChartProps {
    frameworks: Framework[];
    selectedFramework: string | null;
    onFrameworkSelect: (id: string | null) => void;
    isDarkMode: boolean;  // Новый параметр в интерфейсе
}

const TimelineChart: React.FC<TimelineChartProps> = ({
                                                         frameworks,
                                                         selectedFramework,
                                                         onFrameworkSelect,
                                                         isDarkMode
                                                     }) => {
    const chartRef = useRef<HighchartsReact.RefObject>(null);

    // Prepare data for Highcharts
    const categories = ['Drivers', 'ORM', 'Admin Tools', 'ETL', 'Analytics'];
    const seriesData = frameworks.map(framework => {
        const categoryIndex = getCategoryIndex(framework.category);
        return {
            x: framework.releaseDate.getTime(),
            y: categoryIndex,
            name: framework.name,
            id: framework.id,
            description: framework.description,
            selected: framework.id === selectedFramework
        };
    });

    function getCategoryIndex(category: string): number {
        switch(category) {
            case 'driver': return 0;
            case 'orm': return 1;
            case 'admin': return 2;
            case 'etl': return 3;
            case 'analytics': return 4;
            default: return 0;
        }
    }

    const options: Highcharts.Options = {
        chart: {
            type: 'networkgraph',
            height: 400,
            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff'
        },
        title: {
            text: 'YDB Framework Dependencies',
            style: {
                color: isDarkMode ? '#ffffff' : '#333333'
            }
        },
        xAxis: {
            type: 'datetime',
            title: {
                text: 'Release Date'
            }
        },
        yAxis: {
            categories: categories,
            title: {
                text: 'Framework Type'
            }
        },
        tooltip: {
            formatter: function() {
                const point = this.point as any;
                return `<b>${point.name}</b><br/>
                Released: ${Highcharts.dateFormat('%b %e, %Y', point.x)}<br/>
                ${point.description}`;
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 8,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        // Вместо этого:
                        // marker: {
                        //   enabled: false
                        // }

                        // Используйте:
                        halo: {
                            size: 9,
                            opacity: 0.2
                        }
                    }
                },
                events: {
                    click: function(event) {
                        const point = event.point as any;
                        onFrameworkSelect(point.id);
                    }
                }
            }
        },
        series: [{
            name: 'PostgreSQL Frameworks',
            data: seriesData,
            turboThreshold: 0
        }] as any
    };

    useEffect(() => {
        if (chartRef.current && chartRef.current.chart) {
            const chart = chartRef.current.chart;
            // Update points selection on selectedFramework change
            chart.series[0].points.forEach(point => {
                const isSelected = (point as any).id === selectedFramework;
                point.select(isSelected, true);
            });
        }
    }, [selectedFramework]);

    // Updated src/components/TimelineChart.tsx - add this after options const
    const legendCategories = [
        { id: 'driver', name: 'Database Drivers', color: '#7cb5ec' },
        { id: 'orm', name: 'ORM Tools', color: '#90ed7d' },
        { id: 'admin', name: 'Administration Tools', color: '#f7a35c' },
        { id: 'etl', name: 'ETL Tools', color: '#8085e9' },
        { id: 'analytics', name: 'Analytics Engines', color: '#f15c80' }
    ];

// Then modify the return statement
    return (
        <div className="timeline-chart-container">
            <div className="timeline-chart">
                <HighchartsReact
                    highcharts={Highcharts}
                    options={options}
                    ref={chartRef}
                />
            </div>
            <TimelineLegend categories={legendCategories} />
        </div>
    );
};

export default TimelineChart;
