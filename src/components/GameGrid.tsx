import Typography from "@mui/material/Typography";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import Grid from "@mui/material/Unstable_Grid2";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Typography>{error.message}</Typography>;

  return (
    <Grid sx={{ columns: { xs: 1, sm: 2, md: 3 } }}>
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
};

export default GameGrid;
