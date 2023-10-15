import apiClient from "../services/api_client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "./useGame";

interface FetchPlatforms {
  count: number;
  results: Platform[];
}

const usePlatforms = () => {
  const fetchPlatforms = () =>
    apiClient
      .get<FetchPlatforms>("/platforms/lists/parents")
      .then((res) => res.data);

  const {
    data: platforms,
    error,
    isFetching,
  } = useQuery<FetchPlatforms, Error>({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
  });

  return { platforms, error, isFetching };
};

export default usePlatforms;
