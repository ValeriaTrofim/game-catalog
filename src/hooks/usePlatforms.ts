import APIClient, { FetchResponse } from "../services/api_client";
import { useQuery } from "@tanstack/react-query";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => {
  const {
    data: platforms,
    error,
    isFetching,
  } = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
  });

  return { platforms, error, isFetching };
};

export default usePlatforms;
