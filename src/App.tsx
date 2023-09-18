import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeContext } from "./components/theme/ThemeContextProvider";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import "./App.css";

function App() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={16}>
          <NavBar />
        </Grid>
        <Grid item xs={6} sx={{ display: { xs: "none", sm: "block" } }}>
          Aside
        </Grid>
        <Grid item xs={16} sm={6} md={6}>
          <GameGrid />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
