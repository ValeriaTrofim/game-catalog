import apiClient from "../services/api_client";
import { useQuery } from "@tanstack/react-query";
import Typography from "@mui/material/Typography";

interface Game {
  name: string;
  id: number;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const fetchGames = () =>
    apiClient.get<FetchGames>("/games").then((res) => res.data);

  const { data: games, error } = useQuery<FetchGames, Error>({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

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
