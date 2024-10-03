'use client';
import { SWRConfig } from 'swr';

const cacheProvider = () => new Map();

export const SWRProvider = ({ children }: any) => {
  return <SWRConfig value={{
    provider: cacheProvider,
    fetcher: (resource, init) => fetch(resource, init).then((res) => res.json())
  }}>{children}</SWRConfig>
};