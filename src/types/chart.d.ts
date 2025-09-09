// src/types/chart.d.ts
export type ChartType =
    | 'line'
    | 'bar'
    | 'column'
    | 'pie'
    | 'donut'
    | 'area'
    | 'scatter'
    | 'bubble'
    | 'radar'
    | 'heatmap'
    | 'candlestick'
    | 'gauge';

export interface ChartDataPoint {
    x?: string | number | Date; // for line, bar, scatter, etc.
    y: number;
    size?: number; // for bubble chart
    category?: string; // for pie/donut
    open?: number; // for candlestick
    high?: number;
    low?: number;
    close?: number;
}

export interface ChartProps {
    type: ChartType;
    data: ChartDataPoint[];
    width?: number | string;
    height?: number | string;
    title?: string;
    colors?: string[];
    xAxisLabel?: string;
    yAxisLabel?: string;
    showLegend?: boolean;
    tooltip?: boolean;
}

