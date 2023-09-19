import Typography from "@mui/material/Typography";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import Grid from "@mui/material/Unstable_Grid2";

const GameGrid = () => {
  const { games, error } = useGames();

  if (error) return <Typography>{error.message}</Typography>;

  return (
    <Grid sx={{ columns: { xs: 1, sm: 2, md: 3 } }}>
      {games?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
};

export default GameGrid;
