export const API_USERS = 'Data/Users.json';
export const API_TOKENS = 'Data/Tokens.json';
export const API_RATES = (crypto: string) => `rates/${crypto}`;
export const API_ASSET_DETAILS = (crypto: string) => `assets/${crypto}`;
export const API_ASSET_INTERVAL = (crypto: string) => `assets/${crypto}/history?interval=d1`;
