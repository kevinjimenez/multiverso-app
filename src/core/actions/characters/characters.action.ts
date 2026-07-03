import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';

interface Options {
  page?: number;
}

export const characterRickAndMortyAction = async ({ page = 1 }: Options) => {
  try {
    const { data } = await rickAndMortyApi.get<any>('/character', {
      params: {
        page,
      },
    });

    // console.log(JSON.stringify(data.results, null, 2));

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
