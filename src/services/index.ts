import {
  GetHistoryProps,
  GetStocksListProps,
  StocksList,
  TimeSeries,
} from '@/types';
import { fetchGET } from '@/utils';

const API_URL = import.meta.env.VITE_API_URL;

const API_ROUTES = {
  allStocks: function ({
    exchange = 'NYSE',
    options = '',
  }: GetStocksListProps) {
    return `stocks?source=docs&exchange=${exchange}${options}`;
  },
  history: function ({
    symbol = 'NFLX',
    interval = '5min',
    start_date,
    end_date,
    date,
    options = '',
  }: GetHistoryProps) {
    return `time_series?symbol=${symbol}&interval=${interval}${
      !!date
        ? `&date=${date}`
        : !!start_date && !!end_date
          ? `&start_date=${start_date}&end_date=${end_date}`
          : ''
    }${options}`;
  },
};

export async function getStocksList({
  exchange = 'NYSE',
  options = '',
}: GetStocksListProps) {
  const resp = await fetchGET(
    API_URL + API_ROUTES.allStocks({ exchange, options })
  );
  const data: StocksList = await resp.json();
  return data;
}

export async function getHistoryStock({
  symbol = 'NFLX',
  interval = '5min',
  start_date,
  end_date,
  date,
  options = '',
}: GetHistoryProps) {
  const resp = await fetchGET(
    API_URL +
      API_ROUTES.history({
        symbol,
        interval,
        start_date,
        end_date,
        date,
        options,
      })
  );
  const data: TimeSeries = await resp.json();
  return data;
}
