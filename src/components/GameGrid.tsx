import Typography from "@mui/material/Typography";
import useGames from "../hooks/useGame";

const GameGrid = () => {
  const { games, error } = useGames();

  if (error) return <Typography>{error.message}</Typography>;

  return (
    <ul>
      {games?.results.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
