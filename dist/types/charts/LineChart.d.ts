import React from 'react';
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
declare const LineChart: React.FC<LineChartProps>;
export default LineChart;
