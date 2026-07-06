export type ApiResponse<T> = {
  info: Info;
  results: T;
};

type Info = {
  count: number;
  pages: number;
  next: string;
  prev: null;
};
