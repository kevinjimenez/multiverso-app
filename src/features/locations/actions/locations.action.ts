import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';
import { ApiResponse } from '@/interfaces/api-response.interface';
import { Location } from '../interfaces/location.interface';

interface Options {
  page?: number;
}

export const locationsAction = async ({ page = 1 }: Options) => {
  try {
    const { data } = await rickAndMortyApi.get<ApiResponse<Location[]>>(
      '/location',
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
