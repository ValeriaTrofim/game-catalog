import apiClient from "../services/api_client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  name: string;
  id: number;
  slug: string;
}
export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const useGames = () => {
  const fetchGames = () =>
    apiClient.get<FetchGames>("/games").then((res) => res.data);

  const {
    data: games,
    error,
    isLoading,
  } = useQuery<FetchGames, Error>({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  return { games, error, isLoading };
};

export default useGames;
