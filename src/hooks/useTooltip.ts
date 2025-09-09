import { useState } from "react";

export function useTooltip<T>() {
    const [tooltip, setTooltip] = useState<{ x: number; y: number; data: T } | null>(null);

    const showTooltip = (x: number, y: number, data: T) => setTooltip({ x, y, data });
    const hideTooltip = () => setTooltip(null);

    return { tooltip, showTooltip, hideTooltip };
}

