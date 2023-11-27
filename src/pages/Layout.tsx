import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { Box, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import useThemeContext from "../components/theme/useThemeContext";
import InputContext from "../components/InputContext";
import { GameQuery } from "../entities/GameQuery";

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <InputContext.Provider value={{ gameQuery, setGameQuery }}>
        <Grid item xs={16} sx={{ pb: 5 }}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </Grid>
        <Box>
          <Outlet />
        </Box>
      </InputContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
