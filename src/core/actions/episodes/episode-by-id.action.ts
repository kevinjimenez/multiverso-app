import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';

export const episodeByIdAction = async (id: number | string) => {
  try {
    const { data } = await rickAndMortyApi.get<any>(`/episode/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
