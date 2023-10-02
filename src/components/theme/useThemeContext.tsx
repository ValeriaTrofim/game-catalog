import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default useThemeContext;
