import { useQuery } from "@tanstack/react-query";
import { QueryKey, StaleTime } from "../../Queries/Config";
import { getProductById } from "../../Queries/Currencies";

export const useCurrency = (coin?: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKey.CURRENCIES, coin],
    queryFn: () => getProductById(coin),
    enabled: !!coin,
    staleTime: StaleTime.CURRENCIES_TIME,
  });

  return { data, isLoading, error};
};
