import React from "react";
export interface BarChartProps {
    data: {
        label: string;
        value: number;
    }[];
    width?: number;
    height?: number;
    barColor?: string;
    showValue?: boolean;
    yTicks?: number;
    yAxisPosition?: "left" | "right";
}
export declare const BarChart: React.FC<BarChartProps>;
