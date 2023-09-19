import apiClient from "../services/api_client";
import { useQuery } from "@tanstack/react-query";

export interface Game {
  name: string;
  id: number;
  background_image: string;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const useGames = () => {
  const fetchGames = () =>
    apiClient.get<FetchGames>("/games").then((res) => res.data);

  const { data: games, error } = useQuery<FetchGames, Error>({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  return { games, error };
};

export default useGames;
