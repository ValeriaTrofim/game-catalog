import APIClient, { FetchResponse } from "../services/api_client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Genre>("genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

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
