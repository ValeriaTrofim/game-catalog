import apiClient from "../services/api_client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenres {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const fetchGenres = () =>
    apiClient.get<FetchGenres>("/genres").then((res) => res.data);

  const {
    data: genres,
    error,
    isFetching,
  } = useQuery<FetchGenres, Error>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
  });

  return { genres, error, isFetching };
};

export default useGenres;
