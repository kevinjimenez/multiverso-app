import { episodeByIdAction } from '@/core/actions/episodes/episode-by-id.action';
import { useQuery } from '@tanstack/react-query';

export const useEpisode = (id: number) => {
  const episodeById = useQuery({
    queryKey: ['rick_and_morty', 'episode', id],
    queryFn: () => episodeByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    episodeById,
  };
};
