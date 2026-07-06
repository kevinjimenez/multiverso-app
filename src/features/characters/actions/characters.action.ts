import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';
import { ApiResponse } from '@/interfaces/api-response.interface';
import { Pagination } from '@/interfaces/pagination.interface';
import { Character } from '../interfaces/character.interface';

export const charactersAction = async ({ page = 1 }: Pagination) => {
  try {
    const { data } = await rickAndMortyApi.get<ApiResponse<Character[]>>(
      '/character',
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
