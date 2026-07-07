import { useQuery } from '@tanstack/react-query';
import { characterByIdAction } from '../../../core/actions/characters/character-by-id.action';

export const useCharacter = (id: number) => {
  const character = useQuery({
    queryKey: ['rick_and_morty', 'character', id],
    queryFn: () => characterByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    character,
  };
};
