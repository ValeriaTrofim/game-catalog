import APIClient, { FetchResponse } from "../services/api_client";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("genres");

const useGenres = () => {
  const {
    data: genres,
    error,
    isFetching,
  } = useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
  });

  return { genres, error, isFetching };
};

export default useGenres;
