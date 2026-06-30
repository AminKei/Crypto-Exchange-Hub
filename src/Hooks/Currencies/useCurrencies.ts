import { useQuery } from "@tanstack/react-query";
import { QueryKey, StaleTime } from "../../Queries/Config";
import { getCurrencies } from "../../Queries/Currencies";

export const useCurrencies = (vs_currency?: string) => {
















































































  
  const { data, error, isLoading } = useQuery({
    queryKey: [QueryKey.CURRENCIES],
    queryFn: () => getCurrencies(vs_currency),
    staleTime: StaleTime.CURRENCIES_TIME,
  });

  return { data, isLoading, error};
};
