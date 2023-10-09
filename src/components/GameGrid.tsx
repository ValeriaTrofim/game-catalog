import Typography from "@mui/material/Typography";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import { GameQuery } from "../App";
import GameCardSkeleton from "./GameCardSkeleton";
import Grid from "@mui/material/Grid";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isFetching } = useGames(gameQuery);
  const skeletons = [...Array(20).keys()];

  if (error) return <Typography>{error.message}</Typography>;

  return (
    <Grid sx={{ columns: { xs: 1, sm: 2, md: 3 } }}>
      {isFetching &&
        !games &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {games?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
};

export default GameGrid;
