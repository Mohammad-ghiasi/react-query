import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { cardInfo } from "../types/cardinfo";

type stat = null | "buy" | "sell";

export const useGet = (url: string, type?: stat) => {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["Posts", type],
    queryFn: async (): Promise<any> => {
      let addres = url;

      if (type) {
        addres = addres +  `?ad_type=${type}`
      }
      const datas: cardInfo[] = await axios.get(addres).then((res: AxiosResponse) => {
        return res.data;
      });
      return datas;
    },
  });
  return { data, isPending, error, isError };
};
