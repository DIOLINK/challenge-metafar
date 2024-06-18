export interface StocksList {
  data: StockData[];
  count: number;
  status: string;
}

export interface StockData {
  symbol: string;
  name: string;
  currency: Currency;
  exchange: string;
  mic_code: MicCode;
  country: Country;
  type: Type;
}

export enum Country {
  UnitedStates = 'United States',
}

export enum Currency {
  Usd = 'USD',
}

export enum MicCode {
  Arcx = 'ARCX',
  Xase = 'XASE',
  Xnys = 'XNYS',
}

export enum Type {
  AmericanDepositaryReceipt = 'American Depositary Receipt',
  ClosedEndFund = 'Closed-end Fund',
  CommonStock = 'Common Stock',
  DepositaryReceipt = 'Depositary Receipt',
  Etf = 'ETF',
  ExchangeTradedNote = 'Exchange-Traded Note',
  LimitedPartnership = 'Limited Partnership',
  PreferredStock = 'Preferred Stock',
  Reit = 'REIT',
  Trust = 'Trust',
  Unit = 'Unit',
  Warrant = 'Warrant',
}

export interface TimeSeries {
  meta: Meta;
  values: Value[];
  status: string;
}

export interface Meta extends Omit<StockData, 'name'> {
  interval: string;
  exchange_timezone: string;
}

export interface Value {
  datetime: Date;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface GetStocksListProps extends Pick<StockData, 'exchange'> {
  options?: string;
}

export interface GetHistoryProps
  extends Pick<Meta, 'interval'>,
    Pick<GetStocksListProps, 'options'>,
    Pick<StockData, 'symbol'> {
  start_date: string;
  end_date: string;
}

export interface FetchProps {
  loading: boolean;
  error?: Error | null;
}

export interface FetchStocksList extends Pick<StocksList, 'data'>, FetchProps {}
export interface FetchTimeSeries extends Omit<TimeSeries, 'status'>, FetchProps {}
