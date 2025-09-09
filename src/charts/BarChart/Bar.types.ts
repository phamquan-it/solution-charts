export interface BaseProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface BarShapeProps extends BaseProps {
    color: string;
    value: number;
}

export interface LabelProps {
    label: string;
    showValue?: boolean; // optional
}

export interface ChartContextProps {
    chartHeight: number;
    chartWidth: number;
}

export type BarProps = BarShapeProps & LabelProps & ChartContextProps;

