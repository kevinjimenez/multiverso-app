import { Filter } from '@/interfaces/filter.interface';
import { useInfiniteQuery } from '@tanstack/react-query';
import { charactersAction } from '../actions/characters.action';

export const useCharacters = ({
  status,
  species,
  gender,
  name,
}: Filter = {}) => {
  const characters = useInfiniteQuery({
    initialPageParam: 1,
    // El filtro va dentro del queryKey: cada combinación es una query distinta,
    // así que al cambiar de tag React Query arranca de cero desde la página 1
    // en vez de seguir paginando sobre el filtro anterior.
    queryKey: [
      'rick_and_morty',
      'characters',
      { status, species, gender, name },
    ],
    queryFn: ({ pageParam }) => {
      // console.log({ pageParam });
      return charactersAction({
        page: pageParam,
        species,
        status,
        gender,
        name,
      });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => {
      // console.log({ next: lastPage.info.next, pages: pages.length });
      // return lastPage.info.next ? pages.length + 1 : undefined;
      return pages.length + 1;
    },
    // retry: (failureCount, error: any) => {
    //   if (error?.response?.status === 429) return false;
    //   return failureCount < 2;
    // },
  });

  return {
    characters,
  };
};
