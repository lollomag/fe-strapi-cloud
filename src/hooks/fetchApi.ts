import { fetcher } from "@/services/config";
import { MethodType } from "@/services/type";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export function getData(url: string) {
  const { data, error } = useSWR(url , () => {
    return fetcher(url, MethodType.GET)
  });
  return {
    data,
    error
  }
}

export function postData(url: string) {
  const { data, trigger, error } = useSWRMutation(url , (url, params) => {
    return fetcher(url, MethodType.POST, params.arg)
  });
  return {
    data,
    trigger,
    error
  }
}