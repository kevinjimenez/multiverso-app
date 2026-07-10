import { Pagination } from './pagination.interface';

export interface Filter extends Pagination {
  status?: string;
  species?: string;
  gender?: string;
}
