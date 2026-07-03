import { characterRickAndMortyByIdAction } from '@/core/actions/characters/character-by-id.action';
import { useQuery } from '@tanstack/react-query';

export const useCharacter = (id: number) => {
  const rickAndMortyById = useQuery({
    queryKey: ['rick_and_morty', 'characters', id],
    queryFn: () => characterRickAndMortyByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    rickAndMortyById,
  };
};
