import axios, { InternalAxiosRequestConfig } from "axios";


import { MethodType, ResponseInterface } from "./type";

//instance creation
export const axiosInstance = axios.create({
  baseURL: `http://localhost:1337/api`, // https://eloquent-freedom-d513154e73.strapiapp.com/api
  headers: {
    "content-type": "application/json",
  },
});

export async function fetcher<T = any>(
  url: string,
  method: MethodType,
  body?: T,
  queryParameters?: { [x: string]: any }
) {
  const res = await customApi(url, method, body, queryParameters);
  return res.data;
}

export function customApi<T = any>(
  url: string,
  method: MethodType,
  body?: any,
  queryParameters?: { [x: string]: any },
  config?: InternalAxiosRequestConfig<any>
): Promise<ResponseInterface<T>> {
  switch (method) {
    case MethodType.POST: {
      return axiosInstance.post(url, body, config);
    }
    case MethodType.PUT: {
      return axiosInstance.put(url, body, config);
    }
    case MethodType.PATCH: {
      return axiosInstance.patch(url, body, config);
    }
    case MethodType.DELETE: {
      return axiosInstance.delete(url, { params: body });
    }
    case MethodType.GET:
    default: {
      return axiosInstance.get(url, {
        ...config,
        ...{ params: queryParameters },
      });
    }
  }
}