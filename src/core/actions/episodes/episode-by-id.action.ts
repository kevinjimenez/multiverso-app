import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';
import { Episode } from '../../../features/episodes/interfaces/episode.interface';

export const episodeByIdAction = async (id: number | string) => {
  try {
    const { data } = await rickAndMortyApi.get<Episode>(`/episode/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
