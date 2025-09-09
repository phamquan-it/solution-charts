import React from 'react';
type BubbleChartDataPoint = {
    x: number;
    y: number;
    size: number;
    label?: string;
};
type BubbleChartProps = {
    data: BubbleChartDataPoint[];
    width?: number;
    height?: number;
    bubbleColor?: string;
};
declare const BubbleChart: React.FC<BubbleChartProps>;
export default BubbleChart;
