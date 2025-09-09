import React from "react";
import { BarProps } from "./Bar.types";
import { Bar } from "./Bar";

export interface BarChartProps {
    data: { label: string; value: number }[];
    width?: number;
    height?: number;
    barColor?: string;
    showValue?: boolean;
    yTicks?: number; // number of ticks on the Y axis
    yAxisPosition?: "left" | "right"; // position of Y axis
}

export const BarChart: React.FC<BarChartProps> = ({
    data,
    width = 400,
    height = 200,
    barColor = "#2389FF",
    showValue = true,
    yTicks = 5,
    yAxisPosition = "left",
}) => {
    const maxValue = Math.max(...data.map((d) => d.value));
    const chartHeight = height - 30; // leave some space at the bottom for labels
    const yAxisWidth = 40; // reserved space for the Y axis
    const barWidth = (width - yAxisWidth) / data.length;

    // Horizontal offset depends on whether the Y axis is on the left or right
    const offsetX = yAxisPosition === "left" ? yAxisWidth : 0;

    return (
        <svg width={width} height={height}>
            {/* Y axis + ticks */}
            {Array.from({ length: yTicks + 1 }).map((_, i) => {
                const y = chartHeight - (i / yTicks) * chartHeight;
                const value = Math.round((i / yTicks) * maxValue);

                return (
                    <g key={i}>
                        {/* grid line */}
                        <line
                            x1={0 + offsetX}
                            y1={y}
                            x2={width - (yAxisPosition === "right" ? yAxisWidth : 0)}
                            y2={y}
                            stroke="#e0e0e0"
                            strokeWidth={1}
                        />
                        {/* value label on Y axis */}
                        <text
                            x={
                                yAxisPosition === "left"
                                    ? yAxisWidth - 5
                                    : width - yAxisWidth + 35
                            }
                            y={y + 4}
                            textAnchor={yAxisPosition === "left" ? "end" : "start"}
                            fontSize="10"
                            fill="#555"
                        >
                            {value}
                        </text>
                    </g>
                );
            })}

            {/* Bars */}
            {data.map((d, i) => {
                const barHeight = (d.value / maxValue) * chartHeight;
                const x = offsetX + i * barWidth;
                const y = chartHeight - barHeight;

                const barProps: BarProps = {
                    x,
                    y,
                    width: barWidth - 8,
                    height: barHeight,
                    color: barColor,
                    label: d.label,
                    value: d.value,
                    showValue,
                    chartHeight,
                    chartWidth: width,
                };

                return <Bar key={i} value={barProps} />;
            })}
        </svg>
    );
};

