import { Pagination } from './pagination.interface';

export interface Filter extends Pagination {
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}
