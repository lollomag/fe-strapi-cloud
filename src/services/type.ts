export enum MethodType {
  "GET" = "GET",
  "POST" = "POST",
  "PUT" = "PUT",
  "DELETE" = "DELETE",
  "PATCH" = "PATCH",
}

export interface ResponseInterface<T> {
  data?: T;
  message?: string;
  status: number;
  headers?: any;
}