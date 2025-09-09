import React from 'react';

type BubbleChartDataPoint = {
    x: number;      // X-axis value
    y: number;      // Y-axis value
    size: number;   // Bubble radius or size
    label?: string; // Optional label
};

type BubbleChartProps = {
    data: BubbleChartDataPoint[];
    width?: number;
    height?: number;
    bubbleColor?: string;
};

const BubbleChart: React.FC<BubbleChartProps> = ({
    data,
    width = 600,
    height = 400,
    bubbleColor = '#007bff',
}) => {
    if (!data || data.length === 0) return null;

    const maxX = Math.max(...data.map(d => d.x));
    const minX = Math.min(...data.map(d => d.x));
    const maxY = Math.max(...data.map(d => d.y));
    const minY = Math.min(...data.map(d => d.y));
    const maxSize = Math.max(...data.map(d => d.size));

    return (
        <svg width={width} height={height}>
            {data.map((d, i) => {
                const cx = ((d.x - minX) / (maxX - minX)) * width;
                const cy = height - ((d.y - minY) / (maxY - minY)) * height;
                const r = (d.size / maxSize) * 30 + 5; // scale bubble radius

                return (
                    <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r={r}
                        fill={bubbleColor}
                        fillOpacity={0.6}
                        stroke="#0056b3"
                        strokeWidth={1}
                    />
                );
            })}
        </svg>
    );
};

export default BubbleChart;

