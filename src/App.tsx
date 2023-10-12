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
import PlatformSelector from "./components/PlatformSelector";

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
        <Grid item xs={16} sx={{ pb: 5 }}>
          <NavBar />
        </Grid>
        <Grid
          item
          xs={2.5}
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
          xs={16}
          sm={16}
          md={9}
        >
          <PlatformSelector />
          <GameGrid gameQuery={gameQuery} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
