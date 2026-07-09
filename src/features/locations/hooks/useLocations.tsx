import { useInfiniteQuery } from '@tanstack/react-query';
import { locationsAction } from '../actions/locations.action';

export const useLocations = () => {
  const locations = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['rick_and_morty', 'locations'],
    queryFn: ({ pageParam }) => {
      console.log({ pageParam });
      return locationsAction({ page: pageParam });
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 horas
    getNextPageParam: (lastPage, pages) => {
      console.log({ next: lastPage.info.next, pages: pages.length });
      // return lastPage.info.next ? pages.length + 1 : undefined;
      return pages.length + 1;
    },
    // retry: (failureCount, error: any) => {
    //   if (error?.response?.status === 429) return false;
    //   return failureCount < 2;
    // },
  });

  return {
    locations,
  };
};
