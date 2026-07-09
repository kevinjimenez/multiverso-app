import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';
import { Pagination } from '@/interfaces/pagination.interface';
import { Episode } from '../interfaces/episode.interface';
import { ApiResponse } from '@/interfaces/api-response.interface';

export const episodesAction = async ({ page = 1 }: Pagination) => {
  try {
    const { data } = await rickAndMortyApi.get<ApiResponse<Episode[]>>(
      '/episode',
      {
        params: {
          page,
        },
      },
    );

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
