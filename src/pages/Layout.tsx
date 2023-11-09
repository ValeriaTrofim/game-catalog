import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { GameQuery } from "./HomePage";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import useThemeContext from "../components/theme/useThemeContext";

const Layout = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const { theme } = useThemeContext();
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid item xs={16} sx={{ pb: 5 }}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </Grid>
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Layout;
