import React from "react";
export interface PieChartProps {
    data: number[];
    colors?: string[];
    size?: number;
    animationDuration?: number;
}
export declare const PieChart: React.FC<PieChartProps>;
