import React, { ReactNode } from "react";
import { SolutionTheme } from "../theme";
type ThemeType = typeof SolutionTheme;
interface ThemeContextProps {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}
export declare const ThemeContext: React.Context<ThemeContextProps>;
export declare const ThemeProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextProps;
export {};
