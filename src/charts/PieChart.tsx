import React, { useEffect, useState } from "react";

export interface PieChartProps {
    data: number[];
    colors?: string[];
    size?: number;
    animationDuration?: number;
}

export const PieChart: React.FC<PieChartProps> = ({
    data,
    colors = ["#4caf50", "#2196f3", "#ff9800", "#f44336"],
    size = 200,
    animationDuration = 1000,
}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start: number | null = null;
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = (timestamp: number) => {
            if (!start) start = timestamp;
            const t = Math.min((timestamp - start) / animationDuration, 1);
            setProgress(easeOutCubic(t));
            if (t < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [animationDuration]);

    let cumulative = 0;
    const total = data.reduce((sum, val) => sum + val, 0);

    return (
        <svg width={size} height={size} viewBox="0 0 36 36">
            {data.map((value, i) => {
                const animatedValue = value * progress;
                const start = (cumulative / total) * 360;
                const end = ((cumulative + animatedValue) / total) * 360;
                cumulative += animatedValue;

                const largeArc = end - start > 180 ? 1 : 0;
                const x1 = 18 + 16 * Math.cos((Math.PI / 180) * start);
                const y1 = 18 + 16 * Math.sin((Math.PI / 180) * start);
                const x2 = 18 + 16 * Math.cos((Math.PI / 180) * end);
                const y2 = 18 + 16 * Math.sin((Math.PI / 180) * end);

                const pathData = `M18 18 L${x1} ${y1} A16 16 0 ${largeArc} 1 ${x2} ${y2} Z`;

                return <path key={i} d={pathData} fill={colors[i % colors.length]} />;
            })}
        </svg>
    );
};

