import { createTheme, Theme } from "@mui/material";
import { createContext, FC, PropsWithChildren } from "react";
import useColorTheme from "./use-color-theme";

interface ThemeContext {
  mode: string;
  toggleColorMode: () => void;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContext>({
  mode: "light",
  toggleColorMode: () => {},
  theme: createTheme(),
});

export const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
