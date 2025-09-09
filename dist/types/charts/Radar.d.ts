import React from 'react';
type RadarChartDataPoint = {
    category: string;
    value: number;
};
type RadarChartProps = {
    data: RadarChartDataPoint[];
    maxValue?: number;
    size?: number;
    strokeColor?: string;
    fillColor?: string;
    fillOpacity?: number;
    strokeWidth?: number;
};
declare const RadarChart: React.FC<RadarChartProps>;
export default RadarChart;
