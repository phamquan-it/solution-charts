import React from 'react';

type RadarChartDataPoint = {
    category: string;
    value: number;
};

type RadarChartProps = {
    data: RadarChartDataPoint[];
    maxValue?: number; // Maximum value for scaling
    size?: number;     // SVG width & height
    strokeColor?: string;
    fillColor?: string;
    fillOpacity?: number;
    strokeWidth?: number;
};

const RadarChart: React.FC<RadarChartProps> = ({
    data,
    maxValue,
    size = 300,
    strokeColor = '#007bff',
    fillColor = '#007bff',
    fillOpacity = 0.3,
    strokeWidth = 2,
}) => {
    if (!data || data.length < 3) return null; // Need at least 3 points

    const n = data.length;
    const center = size / 2;
    const radius = size / 2 * 0.8; // leave margin
    const max = maxValue ?? Math.max(...data.map(d => d.value));

    // Calculate points
    const points = data.map((d, i) => {
        const angle = (i / n) * 2 * Math.PI - Math.PI / 2; // start top
        const r = (d.value / max) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return { x, y };
    });

    const path = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') + ' Z';

    // Draw axes
    const axes = data.map((d, i) => {
        const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
        const x = center + radius * Math.cos(angle);
        const y = center + radius * Math.sin(angle);
        return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="#ccc" strokeWidth={1} />;
    });

    return (
        <svg width={size} height={size}>
            {/* Axes */}
            {axes}
            {/* Radar shape */}
            <path d={path} stroke={strokeColor} strokeWidth={strokeWidth} fill={fillColor} fillOpacity={fillOpacity} />
            {/* Dots */}
            {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={4} fill={strokeColor} />
            ))}
            {/* Category labels */}
            {data.map((d, i) => {
                const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
                const x = center + (radius + 20) * Math.cos(angle);
                const y = center + (radius + 20) * Math.sin(angle);
                return (
                    <text key={i} x={x} y={y} textAnchor="middle" alignmentBaseline="middle" fontSize={12}>
                        {d.category}
                    </text>
                );
            })}
        </svg>
    );
};

export default RadarChart;

