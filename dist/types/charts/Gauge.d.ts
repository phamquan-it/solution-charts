import React from 'react';
type GaugeChartProps = {
    value: number;
    min?: number;
    max?: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    bgColor?: string;
};
declare const GaugeChart: React.FC<GaugeChartProps>;
export default GaugeChart;
