import React, {
  ReactElement, useCallback, useEffect, useState,
} from 'react';
import { Dashboard } from './Dashboard';
import CoincapService from '../../Services/Coincap-Service';
import { AssetsInterface } from '../../Api/AssetsInterfaces';
import { RatesInterface } from '../../Api/RatesInterfaces';
import { AssetIntervalInterface, AssetItemIntervalInterface } from '../../Api/AssetIntervalInterfaces';
import { formatDate } from '../../Shared/Utils/Helpers';
import { ChartDataInterface } from '../../Components/PriceChart/Utils/PriceChartInterfaces';

export function DashboardPage(): ReactElement {
  const [ratesData, setRatesData] = useState<RatesInterface | undefined>();
  const [assetData, setAssetData] = useState<AssetsInterface | undefined>();
  const [chartData, setChartData] = useState<ChartDataInterface>();
  const [chartTimestampData, setChartTimestampData] = useState<number>();

  const handleGetRates = useCallback((): void => {
    CoincapService
      .getRates()
      .then((data: RatesInterface) => {
        setRatesData(data);
      });
  }, []);

  const handleGetAssetDetails = useCallback((): void => {
    CoincapService
      .getAssetDetails()
      .then((data: AssetsInterface) => {
        setAssetData(data);
      });
  }, []);

  const handleGetAssetInterval = useCallback((): void => {
    CoincapService
      .getAssetInterval()
      .then((data: AssetIntervalInterface) => {
        setChartTimestampData(data.timestamp);
        setChartData({
          labels: data.data.map((assetItem: AssetItemIntervalInterface) => formatDate(assetItem.time)),
          datasets: [
            {
              label: 'Price in USD',
              data: data.data.map((assetItem: AssetItemIntervalInterface) => assetItem.priceUsd),
              backgroundColor: [
                '#ffbb11',
              ],
            },
          ],
        });
      });
  }, []);

  useEffect(() => {
    handleGetRates();
    handleGetAssetDetails();
    handleGetAssetInterval();
  }, []);

  return (
    <Dashboard
      chartTimestamp={chartTimestampData}
      chartData={chartData}
      assetData={assetData}
      ratesData={ratesData}
      refreshRates={handleGetRates}
      refreshAsset={handleGetAssetDetails}
      refreshChart={handleGetAssetInterval}
    />
  );
}
