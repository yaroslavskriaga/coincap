import React, { ReactElement, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { formatTime } from '../../Shared/Utils/Helpers';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartInterface {
  chartData: any
  updateChart():void;
  timestamp:number;
}

export function PriceChart({ chartData, timestamp, updateChart }:ChartInterface):ReactElement {
  const handleUpdateChart = useCallback((): void => {
    updateChart();
  }, []);

  return (
    <>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'BTC price',
            },
            legend: {
              display: false,
            },
          },
        }}
      />
      Time -
      {' '}
      {formatTime(timestamp)}
      <Box my={2} />
      <Button variant="contained" type="button" size="small" onClick={handleUpdateChart}>Refresh</Button>
    </>
  );
}
