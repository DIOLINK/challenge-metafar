import { StockData } from '@/types';
const API_KEY = import.meta.env.VITE_API_KEY;
export function fetchGET(url: string) {
  return fetch(url, {
    method: 'GET',
    headers,
  });
}
export const headers: HeadersInit = {
  'content-type': 'application/json',
  Authorization: `apikey ${API_KEY}`,
};

export function isEmptyObject(obj: {}) {
  return Object.keys(obj).length === 0;
}
export function isEmptyArray(array: StockData[]) {
  return array.length === 0;
}

export function filterStockBySymbol(symbol: string, stockData: StockData[]) {
  if (symbol === '') return stockData;
  return stockData.filter((stock) =>
    stock.symbol.toLowerCase().includes(symbol.toLowerCase())
  );
}

export function idexToInterval(index: number): string {
  return `${3 * (index * index) + index + 1} min`;
}

export function getDateNow(): string {
  return new Date()
    .toISOString()
    .replace('T', '%20')
    .replace('Z', '')
    .slice(0, 21);
}

