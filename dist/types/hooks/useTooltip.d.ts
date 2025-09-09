export declare function useTooltip<T>(): {
    tooltip: {
        x: number;
        y: number;
        data: T;
    } | null;
    showTooltip: (x: number, y: number, data: T) => void;
    hideTooltip: () => void;
};
