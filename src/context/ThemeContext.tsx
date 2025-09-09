// src/context/ThemeContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react";
import { SolutionTheme } from "../theme";

type ThemeType = typeof SolutionTheme;

interface ThemeContextProps {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: SolutionTheme,
    setTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>(SolutionTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

