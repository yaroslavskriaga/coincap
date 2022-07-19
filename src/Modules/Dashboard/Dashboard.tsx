import React, {
  ReactElement, useCallback, useEffect, useMemo,
} from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';
import { Box, LinearProgress } from '@mui/material';
import Button from '@mui/material/Button';
import { ClearSessionAction, SystemActionTypes } from '../../Shared/System/SystemTypes';
import { clearSession } from '../../Shared/System/State/SystemActions';
import { AppRoutes } from '../../Shared/Router/Routes';
import { InfoCard } from '../../Components/InfoCard/InfoCard';
import { InfoBox } from '../../Components/InfoBox/InfoBox';
import { AssetsInterface } from '../../Api/AssetsInterfaces';
import { RatesInterface } from '../../Api/RatesInterfaces';
import { ChartDataInterface } from '../../Components/PriceChart/Utils/PriceChartInterfaces';
import { PriceChart } from '../../Components/PriceChart/PriceChart';

interface DashboardInterface {
  ratesData: RatesInterface | undefined;
  assetData: AssetsInterface | undefined;
  chartTimestamp:number | undefined;
  chartData: ChartDataInterface | undefined;
  refreshRates(): void;
  refreshAsset():void;
  refreshChart():void;
}

export function Dashboard({
  chartData, ratesData, refreshRates, assetData, refreshAsset, chartTimestamp, refreshChart,
}:DashboardInterface): ReactElement {
  const dispatch = useDispatch<Dispatch<ClearSessionAction>>();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    const dispatchAction = dispatch as Dispatch<SystemActionTypes>;
    dispatchAction(clearSession());
    navigate(AppRoutes.Login);
  }, []);

  const isLoading = useMemo(
    ():boolean => (ratesData === undefined) || (assetData === undefined || chartData === undefined),
    [ratesData, assetData, chartData],
  );

  return useMemo(() => {
    if (isLoading) return <LinearProgress />;
    return (
      <>
        Dashboard Page
        <Button variant="contained" type="button" onClick={handleLogout}>Logout</Button>
        <InfoCard updateRates={refreshRates} cryptoItem={ratesData?.data} timestamp={ratesData?.timestamp} />
        <Box my={2} />
        <InfoBox cryptoItem={assetData?.data} timestamp={assetData?.timestamp} updateAsset={refreshAsset} />
        <Box my={2} />
        <PriceChart updateChart={refreshChart} chartData={chartData} timestamp={chartTimestamp || 0} />
      </>
    );
  }, [ratesData, assetData, chartData]);
}
