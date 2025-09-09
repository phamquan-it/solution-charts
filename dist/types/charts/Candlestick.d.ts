import React from "react";
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
export default CandlestickChart;
