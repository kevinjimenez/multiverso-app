import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';
import { ApiResponse } from '@/interfaces/api-response.interface';
import { Filter } from '@/interfaces/filter.interface';
import { Character } from '../interfaces/character.interface';

export const charactersAction = async ({
  page = 1,
  name,
  species,
  status,
  gender,
}: Filter) => {
  try {
    const params = {
      page,
      ...(name && { name }),
      ...(status && { status }),
      ...(species && { species }),
      ...(gender && { gender }),
    };

    const { data } = await rickAndMortyApi.get<ApiResponse<Character[]>>(
      '/character',
      {
        params,
      },
    );

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
