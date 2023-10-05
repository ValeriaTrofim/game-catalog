import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useThemeContext from "./components/theme/useThemeContext";
import Grid from "@mui/material/Grid";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import "./App.css";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

export interface GameQuery {
  genre: Genre | null;
}

function App() {
  const { theme } = useThemeContext();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={16}>
          <NavBar />
        </Grid>
        <Grid
          item
          paddingTop={3}
          xs={3}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Grid>
        <Grid item padding={5} xs={16} sm={8} md={8}>
          <GameGrid gameQuery={gameQuery} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
