import { locationByIdAction } from '@/core/actions/locations/location-by-id.action';
import { useQuery } from '@tanstack/react-query';

export const useLocation = (id: number) => {
  const locationById = useQuery({
    queryKey: ['rick_and_morty', 'location', id],
    queryFn: () => locationByIdAction(id),
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    locationById,
  };
};
