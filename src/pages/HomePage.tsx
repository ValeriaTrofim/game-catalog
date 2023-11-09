import { useState } from "react";
import useThemeContext from "../components/theme/useThemeContext";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";
import PlatformSelector from "../components/PlatformSelector";
import GameGrid from "../components/GameGrid";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGame";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  page: number;
  sortOrder: string;
  searchText: string;
}

const HomePage = () => {
  const { theme } = useThemeContext();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
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
          <GameHeading gameQuery={gameQuery} />
          <Grid sx={{ alignItems: "center", pb: 2 }} container spacing={2}>
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
};

export default HomePage;
