import React, { useMemo } from 'react';

type LineChartDataPoint = {
    x: number | string;
    y: number;
};

type LineChartProps = {
    data: LineChartDataPoint[];
    width?: number;
    height?: number;
    strokeColor?: string;
    strokeWidth?: number;
    showDots?: boolean;
    dotColor?: string;
};

const LineChart: React.FC<LineChartProps> = ({
    data,
    width = 600,
    height = 300,
    strokeColor = '#007bff',
    strokeWidth = 2,
    showDots = true,
    dotColor = '#007bff',
}) => {
    if (!data || data.length === 0) return null;

    const points = useMemo(() => {
        const yValues = data.map(d => d.y);
        const maxY = Math.max(...yValues);
        const minY = Math.min(...yValues);

        return data.map((d, i) => {
            const x = (i / (data.length - 1)) * width;
            const y = height - ((d.y - minY) / (maxY - minY)) * height;
            return { x, y };
        });
    }, [data, width, height]);

    const path = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');

    return (
        <svg width={width} height={height}>
            {/* Line path */}
            <path d={path} stroke={strokeColor} strokeWidth={strokeWidth} fill="none" />
            {/* Optional dots */}
            {showDots &&
                points.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r={4} fill={dotColor} />
                ))}
        </svg>
    );
};

export default LineChart;

