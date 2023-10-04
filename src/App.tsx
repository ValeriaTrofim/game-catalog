import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useThemeContext from "./components/theme/useThemeContext";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import "./App.css";
import GenreList from "./components/GenreList";

function App() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={16}>
          <NavBar />
        </Grid>
        <Grid item xs={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <GenreList />
        </Grid>
        <Grid item padding={5} xs={16} sm={8} md={8}>
          <GameGrid />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
