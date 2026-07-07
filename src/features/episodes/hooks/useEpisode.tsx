import { useQuery } from '@tanstack/react-query';
import { episodeByIdAction } from '../../../core/actions/episodes/episode-by-id.action';

export const useEpisode = (id: number) => {
  const episode = useQuery({
    queryKey: ['rick_and_morty', 'episode', id],
    queryFn: () => episodeByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    episode,
  };
};
