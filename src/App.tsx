import useThemeContext from "./components/theme/useThemeContext";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./components/SortSelector";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import "./App.css";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const { theme } = useThemeContext();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid item xs={16} sx={{ pb: 5 }}>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
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
          <Grid
            sx={{ flexGrow: 1, alignItems: "center", pb: 2 }}
            container
            spacing={2}
          >
            <Grid item sx={{ p: 0 }}>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Grid>
            <Grid item>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Grid>
          </Grid>
          <GameGrid gameQuery={gameQuery} />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
