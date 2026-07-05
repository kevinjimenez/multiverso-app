import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';

interface Options {
  page?: number;
}

export const episodesRickAndMortyAction = async ({ page = 1 }: Options) => {
  try {
    const { data } = await rickAndMortyApi.get<any>('/episode', {
      params: {
        page,
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
