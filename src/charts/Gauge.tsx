import React from 'react';

type GaugeChartProps = {
    value: number;       // Current value
    min?: number;        // Minimum value, default 0
    max?: number;        // Maximum value, default 100
    size?: number;       // SVG size, default 200
    strokeWidth?: number;// Thickness of the gauge, default 20
    color?: string;      // Fill color
    bgColor?: string;    // Background color
};

const GaugeChart: React.FC<GaugeChartProps> = ({
    value,
    min = 0,
    max = 100,
    size = 200,
    strokeWidth = 20,
    color = '#007bff',
    bgColor = '#eee',
}) => {
    const radius = (size - strokeWidth) / 2;
    const center = size / 2;
    const angle = ((value - min) / (max - min)) * 180; // half-circle gauge

    // Describe the arc path
    const describeArc = (startAngle: number, endAngle: number) => {
        const polarToCartesian = (angle: number) => {
            const rad = (angle * Math.PI) / 180;
            return {
                x: center + radius * Math.cos(rad),
                y: center - radius * Math.sin(rad),
            };
        };

        const start = polarToCartesian(endAngle);
        const end = polarToCartesian(startAngle);

        const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
    };

    return (
        <svg width={size} height={size / 2}>
            {/* Background arc */}
            <path
                d={describeArc(0, 180)}
                stroke={bgColor}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
            />
            {/* Value arc */}
            <path
                d={describeArc(0, angle)}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
            />
            {/* Text in center */}
            <text
                x={center}
                y={center / 1.2}
                textAnchor="middle"
                fontSize={size * 0.15}
                fill="#333"
            >
                {Math.round(value)}
            </text>
        </svg>
    );
};

export default GaugeChart;

