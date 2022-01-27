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