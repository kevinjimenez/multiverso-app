import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';

export const locationByIdAction = async (id: number | string) => {
  try {
    const { data } = await rickAndMortyApi.get<any>(`/location/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
