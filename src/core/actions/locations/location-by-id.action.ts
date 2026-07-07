import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';
import { Location } from '../../../features/locations/interfaces/location.interface';

export const locationByIdAction = async (id: number | string) => {
  try {
    const { data } = await rickAndMortyApi.get<Location>(`/location/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
