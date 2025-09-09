import React from 'react';

interface BarChartProps {
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
declare const BarChart: React.FC<BarChartProps>;

interface PieChartProps {
    data: number[];
    colors?: string[];
    size?: number;
    animationDuration?: number;
}
declare const PieChart: React.FC<PieChartProps>;

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

type Candle = {
    time: string | number;
    open: number;
    high: number;
    low: number;
    close: number;
};
type CandlestickChartProps = {
    data: Candle[];
    width?: number;
    height?: number;
    bullishColor?: string;
    bearishColor?: string;
};
declare const CandlestickChart: React.FC<CandlestickChartProps>;

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

type HeatmapData = number[][];
type HeatmapProps = {
    data: HeatmapData;
    width?: number;
    height?: number;
    colors?: string[];
};
declare const Heatmap: React.FC<HeatmapProps>;

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

export { AreaChart, BarChart, BubbleChart, CandlestickChart, GaugeChart, Heatmap, LineChart, PieChart, RadarChart, ScatterChart };
