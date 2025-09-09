import React from 'react';

type AreaChartDataPoint = {
    x: string | number;
    y: number;
};

type AreaChartProps = {
    data: AreaChartDataPoint[];
    width?: number;
    height?: number;
    fillColor?: string;
    strokeColor?: string;
};

const AreaChart: React.FC<AreaChartProps> = ({
    data,
    width = 600,
    height = 300,
    fillColor = '#007bff',
    strokeColor = '#0056b3',
}) => {
    if (!data || data.length === 0) return null;

    const maxY = Math.max(...data.map(d => d.y));
    const minY = Math.min(...data.map(d => d.y));

    const points = data.map((d, i) => {
        const x = (i / (data.length - 1)) * width;
        const y = height - ((d.y - minY) / (maxY - minY)) * height;
        return { x, y };
    });

    const areaPath = [
        `M ${points[0].x} ${height}`,
        ...points.map(p => `L ${p.x} ${p.y}`),
        `L ${points[points.length - 1].x} ${height} Z`,
    ].join(' ');

    const linePath = [`M ${points[0].x} ${points[0].y}`, ...points.slice(1).map(p => `L ${p.x} ${p.y}`)].join(' ');

    return (
        <svg width={width} height={height}>
            <path d={areaPath} fill={fillColor} opacity={0.3} />
            <path d={linePath} stroke={strokeColor} strokeWidth={2} fill="none" />
        </svg>
    );
};

export default AreaChart;

