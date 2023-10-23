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
  ordering: string;
}

interface FetchGames {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () =>
    apiClient
      .get<FetchGames>("/games", {
        params: {
          ...(gameQuery.genre?.id && {
            genres: gameQuery.genre?.id,
          }),
          ...(gameQuery.platform?.id && {
            parent_platforms: gameQuery.platform?.id,
          }),
          ...(gameQuery.sortOrder && { ordering: gameQuery.sortOrder }),
        },
      })
      .then((res) => res.data);

  const {
    data: games,
    error,
    isFetching,
  } = useQuery<FetchGames, Error>({
    queryKey: [
      "games",
      `genre-${gameQuery.genre?.id ?? "no-genre"}`,
      `platform-${gameQuery.platform?.id}`,
      `ordering-${gameQuery.sortOrder}`,
    ],
    queryFn: fetchGames,
    keepPreviousData: false,
  });

  return { games, error, isFetching };
};

export default useGames;
