import React, { ReactElement, useCallback } from 'react';
import { Box, Link, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { formatTime } from '../../Shared/Utils/Helpers';
import { AssetsItemInterface } from '../../Api/AssetsInterfaces';
import { USD_CURRENCY_TICKER } from '../../Shared/Config';

interface InfoBoxInterface {
    cryptoItem: AssetsItemInterface | undefined;
    timestamp: number | undefined;
    updateAsset():void;

}

export function InfoBox({ cryptoItem, timestamp, updateAsset }:InfoBoxInterface): ReactElement {
  const handleUpdateAsset = useCallback(() => {
    updateAsset();
  }, []);

  return (
    <Paper elevation={3}>
      Time -
      {' '}
      {formatTime(timestamp)}
      <br />
      <Box>
        <Box>Rank</Box>
        <Box>{cryptoItem?.rank}</Box>
      </Box>
      <Box>
        <Box>Crypto</Box>
        <Box>
          {cryptoItem?.name}
          [
          {cryptoItem?.symbol}
          ]
        </Box>
      </Box>
      <Box>
        <Box>Supply</Box>
        <Box>{cryptoItem?.supply}</Box>
      </Box>
      <Box>
        <Box>Max Supply</Box>
        <Box>{cryptoItem?.maxSupply}</Box>
      </Box>
      <Box>
        <Box>
          Market Cap,
          {USD_CURRENCY_TICKER}
        </Box>
        <Box>{cryptoItem?.marketCapUsd}</Box>
      </Box>
      <Box>
        <Box>
          Volume 24h,
          {USD_CURRENCY_TICKER}
        </Box>
        <Box>{cryptoItem?.volumeUsd24Hr}</Box>
      </Box>
      <Box>
        <Box>
          Price,
          {USD_CURRENCY_TICKER}
        </Box>
        <Box>{cryptoItem?.priceUsd}</Box>
      </Box>
      <Box>
        <Box>Change(%), 24h</Box>
        <Box>{cryptoItem?.changePercent24Hr}</Box>
      </Box>
      <Box>
        <Box>
          Volume-Weighted Average Price (VWAP),
          {USD_CURRENCY_TICKER}
        </Box>
        <Box>{cryptoItem?.vwap24Hr}</Box>
      </Box>
      <Box>
        <Box>Explore</Box>
        <Box>
          <Link href={cryptoItem?.explorer} underline="hover">
            {cryptoItem?.explorer}
          </Link>
        </Box>
      </Box>
      <Button variant="contained" type="button" size="small" onClick={handleUpdateAsset}>Refresh</Button>
    </Paper>
  );
}
