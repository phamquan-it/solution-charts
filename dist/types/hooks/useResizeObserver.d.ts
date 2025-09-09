export declare function useResizeObserver<T extends HTMLElement>(): {
    ref: import("react").RefObject<T | null>;
    size: {
        width: number;
        height: number;
    };
};
