import React, { useEffect, useRef, useState } from "react";
import { BarProps } from "./Bar.types";

export const Bar: React.FC<{ value: BarProps }> = ({ value }) => {
    const { x, y, width, height, color, label, value: barValue, showValue, chartHeight } = value;

    const [animatedHeight, setAnimatedHeight] = useState(0);
    const [animatedY, setAnimatedY] = useState(chartHeight);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const duration = 800; // animation duration in ms
        const start = performance.now();

        const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const currentHeight = height * progress;
            setAnimatedHeight(currentHeight);
            setAnimatedY(chartHeight - currentHeight);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current!);
    }, [height, chartHeight]);

    return (
        <g>
            <rect
                x={x}
                y={animatedY}
                width={width}
                height={animatedHeight}
                fill={color}
                rx={3}
            />
            {showValue && (
                <text
                    x={x + width / 2}
                    y={animatedY - 5}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#333"
                >
                    {barValue}
                </text>
            )}
            <text
                x={x + width / 2}
                y={chartHeight + 15}
                textAnchor="middle"
                fontSize="10"
                fill="#666"
            >
                {label}
            </text>
        </g>
    );
};

