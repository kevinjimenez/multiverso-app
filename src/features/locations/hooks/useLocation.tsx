import { useQuery } from '@tanstack/react-query';
import { locationByIdAction } from '../actions/location-by-id.action';

export const useLocation = (id: number) => {
  const location = useQuery({
    queryKey: ['rick_and_morty', 'location', id],
    queryFn: () => locationByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    location,
  };
};
