import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

export const useGet = (url: string) => {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["Posts"],
    queryFn: async () =>
      await axios.get(url).then((res: AxiosResponse) => {
        return res.data;
      }),
  });
  return { data, isPending, error, isError };
};