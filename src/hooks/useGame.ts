import apiClient from "../services/api_client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "./../App";

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
  next: string | null;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = ({ pageParam = 1 }) =>
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

          ...(gameQuery.searchText && { search: gameQuery.searchText }),
          page: pageParam,
        },
      })
      .then((res) => res.data);

  const {
    data: games,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<FetchGames, Error>({
    queryKey: [
      "games",
      `pageParam`,
      `genre-${gameQuery.genre?.id ?? "no-genre"}`,
      `platform-${gameQuery.platform?.id}`,
      `ordering-${gameQuery.sortOrder}`,
      `search-${gameQuery.searchText}`,
    ],
    queryFn: fetchGames,
    keepPreviousData: false,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

  return {
    games,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  };
};

export default useGames;
