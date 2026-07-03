import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';

export const characterRickAndMortyByIdAction = async (id: number | string) => {
  try {
    const { data } = await rickAndMortyApi.get<any>(`/character/${id}`);

    // console.log(JSON.stringify(data.results, null, 2));

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
