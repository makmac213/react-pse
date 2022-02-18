import { useQuery } from 'react-query';
import backend from "./backend";

export const getStock = async (symbol) => {
  const response = await backend.post(`/stocks/${symbol}.json`);
  return response.data;
};

export const getStocks = async () => {
  const response = await backend.post(`/stocks.json`);
  return response.data;
};

export const useStock = (symbol) => {
  const result = useQuery(
    ['stocks', symbol],
    () => getStock(symbol),
    {
      refetchInterval: 10000,
      refetchIntervalInBackground: true
    }
  );
  return result;
};