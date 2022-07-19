import { AxiosResponse } from 'axios';
import { httpGet } from './HTTP-Service';
import { API_ASSET_DETAILS, API_ASSET_INTERVAL, API_RATES } from '../Api/Api';
import { AssetIntervalInterface } from '../Api/AssetIntervalInterfaces';
import { AssetsInterface } from '../Api/AssetsInterfaces';
import { RatesInterface } from '../Api/RatesInterfaces';

const getRates = (): Promise<RatesInterface> => httpGet(API_RATES)
  .then((data: AxiosResponse) => data.data);

const getAssetDetails = (): Promise<AssetsInterface> => httpGet(API_ASSET_DETAILS)
  .then((data: AxiosResponse) => data.data);

const getAssetInterval = (): Promise<AssetIntervalInterface> => httpGet(API_ASSET_INTERVAL)
  .then((data: AxiosResponse) => data.data);

const CoincapService = {
  getRates,
  getAssetDetails,
  getAssetInterval,
};

export default CoincapService;
