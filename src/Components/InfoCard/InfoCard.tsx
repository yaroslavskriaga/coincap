import React, { ReactElement, useCallback } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { formatTime } from '../../Shared/Utils/Helpers';
import { RatesItemInterface } from '../../Api/RatesInterfaces';

interface InfoCardInterface{
  cryptoItem: RatesItemInterface | undefined;
  timestamp: number | undefined;
  updateRates():void;
}

export function InfoCard({ cryptoItem, timestamp, updateRates }:InfoCardInterface): ReactElement {
  const handleUpdateRates = useCallback(() => {
    updateRates();
  }, []);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>

        Time -
        {' '}
        {formatTime(timestamp)}
        <br />
        Currency -
        {' '}
        {cryptoItem?.currencySymbol}
        [
        {cryptoItem?.symbol}
        ]
        <br />
        Rate -
        {' '}
        {cryptoItem?.rateUsd}
        {' '}
        USD
      </CardContent>
      <CardActions>
        <Button variant="contained" type="button" size="small" onClick={handleUpdateRates}>Refresh</Button>
      </CardActions>
    </Card>
  );
}
