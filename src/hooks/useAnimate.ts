import { useEffect, useRef, useState } from "react";

export function useAnimate(targetValue: number, duration = 500) {
    const [value, setValue] = useState(0);
    const start = useRef<number | null>(null);

    useEffect(() => {
        const step = (timestamp: number) => {
            if (!start.current) start.current = timestamp;
            const progress = Math.min((timestamp - start.current) / duration, 1);
            setValue(targetValue * progress);
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [targetValue, duration]);

    return value;
}

