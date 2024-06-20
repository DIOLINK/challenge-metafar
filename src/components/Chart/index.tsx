import { useHistoryStock } from '@/contexts/HistoryStockContext';
import { useStocksList } from '@/contexts/StocksListContext';
import { formatValues } from '@/utils';
import * as Highstock from 'highcharts/highstock';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
export const Chart = () => {
  const { stockInfo } = useStocksList();
  const { values, meta } = useHistoryStock();

  useEffect(() => {
    Highstock.stockChart('chart', {
      rangeSelector: {
        enabled: false,
      },
      title: { text: `${meta.symbol}&nbsp;${stockInfo.name}` },
      series: [
        {
          data: formatValues(values),
          name: stockInfo.name,
          type: 'line',
        },
      ],
    });
  }, [values]);
  return <Container id="chart" className="w-100 "></Container>;
};
