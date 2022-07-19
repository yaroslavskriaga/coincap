import React, {
  ReactElement, useCallback, useMemo, useState,
} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Box, LinearProgress, useTheme } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { formatCurrency, formatTime } from '../../Shared/Utils/Helpers';
import { RatesItemInterface } from '../../Api/RatesInterfaces';
import { USD_CURRENCY_TICKER } from '../../Shared/Config';
import { useStylesInfoCard } from './Styles/InfoCardStyles';
import { InfoLabel } from '../InfoLabel/InfoLabel';
import { InfoLabelRow } from '../InfoLabelRow/InfoLabelRow';

interface InfoCardInterface{
  cryptoItem: RatesItemInterface | undefined;
  timestamp: number | undefined;
  updateRates(): void;
}

export function InfoCard({ cryptoItem, timestamp, updateRates }: InfoCardInterface): ReactElement {
  const theme = useTheme();
  const [delay, setDelay] = useState<boolean>(false);
  const handleUpdateRates = useCallback(() => {
    updateRates();
    setDelay(true);
    setTimeout(() => {
      setDelay(false);
    }, 1000);
  }, [delay]);

  return (
    <Card sx={useStylesInfoCard(theme).card}>
      <CardContent sx={useStylesInfoCard(theme).cardContent}>
        {delay ? (
          <>
            <Box mt={1} />
            <LinearProgress />
          </>
        ) : (
          <>
            <InfoLabelRow
              labelName="Currency"
              value={`${cryptoItem?.currencySymbol}[${cryptoItem?.symbol}]`}
              labelSx={useStylesInfoCard(theme).label}
            />
            <InfoLabelRow
              labelName={`Price, ${USD_CURRENCY_TICKER}`}
              value={formatCurrency.format(Number(cryptoItem?.rateUsd))}
              labelSx={useStylesInfoCard(theme).label}
            />
          </>
        )}
      </CardContent>
      <Box mt={2} />
      <CardActions>
        <Box>
          <Button
            disabled={delay}
            endIcon={<RefreshIcon />}
            variant="contained"
            type="button"
            size="small"
            onClick={handleUpdateRates}
          >
            Update information
          </Button>
          <Box mb={1} />
          <InfoLabel labelName="Last updated" value={formatTime(timestamp)} />
        </Box>
      </CardActions>
    </Card>
  );
}
