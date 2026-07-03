import { characterRickAndMortyAction } from '@/core/actions/characters/characters.action';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

export const useCharacters = () => {
  // const rickAndMorty = useQuery({
  //   queryKey: ['rick_and_morty', 'characters'],
  //   queryFn: characterRickAndMortyAction,
  //   staleTime: 1000 * 60 * 60 * 24,
  // });
  //
  const rickAndMorty = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['rick_and_morty', 'characters'],
    queryFn: ({ pageParam }) => {
      console.log({ pageParam });
      return characterRickAndMortyAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => {
      console.log({ next: lastPage.info.next, pages: pages.length });
      // return lastPage.info.next ? pages.length + 1 : undefined;
      return pages.length + 1;
    },
    retry: (failureCount, error: any) => {
      if (error?.response?.status === 429) return false;
      return failureCount < 2;
    },
  });

  return {
    rickAndMorty,
  };
};
