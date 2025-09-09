import React from 'react';
type AreaChartDataPoint = {
    x: string | number;
    y: number;
};
type AreaChartProps = {
    data: AreaChartDataPoint[];
    width?: number;
    height?: number;
    fillColor?: string;
    strokeColor?: string;
};
declare const AreaChart: React.FC<AreaChartProps>;
export default AreaChart;
