import { rickAndMortyApi } from '@/core/api/rick-and-morty-api';
import { Character } from '../interfaces/character.interface';

export const characterByIdAction = async (id: number | string) => {
  try {
    const { data } = await rickAndMortyApi.get<Character>(`/character/${id}`);

    return data;
  } catch (error) {
    console.log(error);
    throw 'Error api';
  }
};
