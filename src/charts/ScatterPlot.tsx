import React from 'react';

type ScatterChartDataPoint = {
    x: number;
    y: number;
    size?: number; // optional size of point
    color?: string; // optional color of point
};

type ScatterChartProps = {
    data: ScatterChartDataPoint[];
    width?: number;
    height?: number;
    defaultPointSize?: number;
    defaultColor?: string;
};

const ScatterChart: React.FC<ScatterChartProps> = ({
    data,
    width = 600,
    height = 400,
    defaultPointSize = 8,
    defaultColor = '#007bff',
}) => {
    if (!data || data.length === 0) return null;

    const xValues = data.map(d => d.x);
    const yValues = data.map(d => d.y);

    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    const minY = Math.min(...yValues);
    const maxY = Math.max(...yValues);

    const scaleX = (x: number) => ((x - minX) / (maxX - minX)) * width;
    const scaleY = (y: number) => height - ((y - minY) / (maxY - minY)) * height;

    return (
        <svg width={width} height={height}>
            {data.map((d, i) => (
                <circle
                    key={i}
                    cx={scaleX(d.x)}
                    cy={scaleY(d.y)}
                    r={d.size ?? defaultPointSize}
                    fill={d.color ?? defaultColor}
                    fillOpacity={0.7}
                    stroke="#333"
                    strokeWidth={1}
                />
            ))}
        </svg>
    );
};

export default ScatterChart;

