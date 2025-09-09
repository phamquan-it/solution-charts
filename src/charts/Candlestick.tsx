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
    bullishColor?: string; // Close >= Open
    bearishColor?: string; // Close < Open
};

const CandlestickChart: React.FC<CandlestickChartProps> = ({
    data,
    width = 600,
    height = 300,
    bullishColor = "#00b050",
    bearishColor = "#ff4d4f",
}) => {
    if (!data || data.length === 0) return null;

    const maxPrice = Math.max(...data.map((d) => d.high));
    const minPrice = Math.min(...data.map((d) => d.low));

    const candleWidth = (width / data.length) * 0.6; // 60% of each slot

    return (
        <svg width={width} height={height}>
            {data.map((d, i) => {
                const x = (i / data.length) * width + candleWidth / 2;
                const yOpen =
                    height -
                    ((d.open - minPrice) / (maxPrice - minPrice)) * height;
                const yClose =
                    height -
                    ((d.close - minPrice) / (maxPrice - minPrice)) * height;
                const yHigh =
                    height -
                    ((d.high - minPrice) / (maxPrice - minPrice)) * height;
                const yLow =
                    height -
                    ((d.low - minPrice) / (maxPrice - minPrice)) * height;

                const color = d.close >= d.open ? bullishColor : bearishColor;
                const top = Math.min(yOpen, yClose);
                const bottom = Math.max(yOpen, yClose);

                return (
                    <g key={i}>
                        {/* Wick */}
                        <line
                            x1={x}
                            x2={x}
                            y1={yHigh}
                            y2={yLow}
                            stroke={color}
                            strokeWidth={1}
                        />
                        {/* Body */}
                        <rect
                            x={x - candleWidth / 2}
                            y={top}
                            width={candleWidth}
                            height={bottom - top}
                            fill={color}
                        />
                    </g>
                );
            })}
        </svg>
    );
};

export default CandlestickChart;
