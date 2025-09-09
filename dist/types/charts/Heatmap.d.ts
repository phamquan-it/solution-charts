import React from "react";
type HeatmapData = number[][];
type HeatmapProps = {
    data: HeatmapData;
    width?: number;
    height?: number;
    colors?: string[];
};
declare const Heatmap: React.FC<HeatmapProps>;
export default Heatmap;
