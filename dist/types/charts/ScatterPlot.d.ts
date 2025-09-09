import React from 'react';
type ScatterChartDataPoint = {
    x: number;
    y: number;
    size?: number;
    color?: string;
};
type ScatterChartProps = {
    data: ScatterChartDataPoint[];
    width?: number;
    height?: number;
    defaultPointSize?: number;
    defaultColor?: string;
};
declare const ScatterChart: React.FC<ScatterChartProps>;
export default ScatterChart;
