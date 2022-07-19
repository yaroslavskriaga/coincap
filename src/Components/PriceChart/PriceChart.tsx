import React, { ReactElement, useCallback, useState } from 'react';
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
import {
  Box, LinearProgress, Typography, useTheme,
} from '@mui/material';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { formatTime } from '../../Shared/Utils/Helpers';
import { useStylesPriceChart } from './Styles/PriceChartStyles';
import { InfoLabel } from '../InfoLabel/InfoLabel';

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

export function PriceChart({ chartData, timestamp, updateChart }: ChartInterface): ReactElement {
  const [delay, setDelay] = useState<boolean>(false);
  const theme = useTheme();

  const handleUpdateChart = useCallback((): void => {
    updateChart();
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 1000);
  }, [delay]);

  return (
    <Box sx={useStylesPriceChart(theme).chart}>
      <Button
        disabled={delay}
        endIcon={<RefreshIcon />}
        variant="contained"
        type="button"
        size="small"
        onClick={handleUpdateChart}
      >
        Update information
      </Button>
      <Box mb={2} />
      <InfoLabel value={formatTime(timestamp)} labelName="Last updated" />
      <Box mb={2} />
      {delay ? (
        <Box height="200px">
          <LinearProgress />
        </Box>
      ) : (
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
      )}
    </Box>
  );
}
