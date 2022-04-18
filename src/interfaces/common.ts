export interface DataMap<T> {
  [key: string]: T;
}

export interface Pagination {
  total: number;
}

export interface Response<T> {
  data: T;
}
