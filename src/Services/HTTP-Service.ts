import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_BASE } from '../Shared/Config';

export async function localGet(url: string): Promise<AxiosResponse<unknown>> {
  const request = axios.create({
    headers: {
      'Content-type': 'application/json',
    },
  }).get(url);

  request.catch((error) => {
    let errorMessage = '[HTTP-Service LOCAL-GET Internal Error]';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
  });

  return request;
}

export async function httpGet(url: string): Promise<AxiosResponse<unknown>> {
  const request = axios.create({
    baseURL: API_BASE,
    headers: {
      'Content-type': 'application/json',
    },
  }).get(url);

  request.catch((error) => {
    let errorMessage = '[HTTP-Service GET Internal Error]';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
  });

  return request;
}

export async function httpPost(url: string, data: any): Promise<AxiosResponse<unknown>> {
  const request = axios.create({
    baseURL: API_BASE,
    headers: {
      'Content-type': 'application/json',
    },
  }).post(url, data);

  request.catch((error) => {
    let errorMessage = '[HTTP-Service POST Internal Error]';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
  });

  return request;
}

export async function httpPut(url: string, data: any): Promise<AxiosResponse<unknown>> {
  const request = axios.create({
    baseURL: API_BASE,
    headers: {
      'Content-type': 'application/json',
    },
  }).put(url, data);

  request.catch((error) => {
    let errorMessage = '[HTTP-Service PUT Internal Error]';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
  });

  return request;
}

export async function httpDelete(url: string): Promise<AxiosResponse<unknown>> {
  const request = axios.create({
    baseURL: API_BASE,
    headers: {
      'Content-type': 'application/json',
    },
  }).delete(url);

  request.catch((error) => {
    let errorMessage = '[HTTP-Service DELETE Internal Error]';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error(errorMessage);
  });

  return request;
}
