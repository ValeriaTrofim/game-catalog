import APIClient, { FetchResponse } from "../services/api_client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Game } from "../entities/Game";
import { GameQuery } from "../entities/GameQuery";

const apiClient = new APIClient<Game>("/games");

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
