import React from "react";

type HeatmapData = number[][]; // 2D array of values

type HeatmapProps = {
    data: HeatmapData;
    width?: number; // SVG width
    height?: number; // SVG height
    colors?: string[]; // Gradient colors
};

const Heatmap: React.FC<HeatmapProps> = ({
    data,
    width = 400,
    height = 400,
    colors = ["#f0f9e8", "#bae4bc", "#7bccc4", "#43a2ca", "#0868ac"], // light → dark
}) => {
    const rows = data.length;
    const cols = data[0]?.length || 0;

    if (!rows || !cols) return null;

    // Find min and max for scaling
    const flatValues = data.flat();
    const minValue = Math.min(...flatValues);
    const maxValue = Math.max(...flatValues);

    // Map value to color
    const getColor = (value: number) => {
        const index = Math.floor(
            ((value - minValue) / (maxValue - minValue)) * (colors.length - 1)
        );
        return colors[index];
    };

    const cellWidth = width / cols;
    const cellHeight = height / rows;

    return (
        <svg width={width} height={height}>
            {data.map((row, i) =>
                row.map((value, j) => (
                    <rect
                        key={`${i}-${j}`}
                        x={j * cellWidth}
                        y={i * cellHeight}
                        width={cellWidth}
                        height={cellHeight}
                        fill={getColor(value)}
                        stroke="#fff"
                        strokeWidth={1}
                    />
                ))
            )}
        </svg>
    );
};

export default Heatmap;
