import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    apiClient
      .get<FetchGames>("/games", {
        ...(gameQuery.genre?.id && {
          params: {
            genres: gameQuery.genre?.id,
          },
        }),
      })
      .then((res) => res.data);

  const {
    data: games,
    error,
    isFetching,
  } = useQuery<FetchGames, Error>({
    queryKey: ["games", `genre-${gameQuery.genre?.id ?? "no-genre"}`],
    queryFn: fetchGames,
    keepPreviousData: false,
  });

  return { games, error, isFetching };
};

export default useGames;
