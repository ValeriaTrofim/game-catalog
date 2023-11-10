import { GameQuery } from "../pages/HomePage";
import APIClient, { FetchResponse } from "../services/api_client";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Game>("/games");

export interface Platform {
  name: string;
  id: number;
  slug: string;
}
export interface Game {
  name: string;
  id: number;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  ordering: string;
}

const useGames = (gameQuery: GameQuery) => {
  const {
    data: games,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      "games",
      `page`,
      `genre-${gameQuery.genre?.id ?? "no-genre"}`,
      `platform-${gameQuery.platform?.id}`,
      `ordering-${gameQuery.sortOrder}`,
      `search-${gameQuery.searchText}`,
    ],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
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
      }),
    keepPreviousData: false,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
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
