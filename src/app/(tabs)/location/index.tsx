import ErrorView from '@/components/shared/ErrorView';
import LoadingView from '@/components/shared/LoadingView';
import ScreenHeader from '@/components/shared/ScreenHeader';
import ScreenMainContainer from '@/components/shared/ScreenMainContainer';
import LocationListItem from '@/features/locations/components/LocationListItem';
import { useLocations } from '@/features/locations/hooks/useLocations';
import { router } from 'expo-router';
import { FlatList } from 'react-native';

const LocationScreen = () => {
  const { locations } = useLocations();

  const data = locations.data?.pages.flatMap((page) => page.results);
  const count = locations.data?.pages[0]?.info.count ?? 0;

  const goToLocation = (id: number) => {
    router.push({
      pathname: '/detail-location/id',
      params: { id },
    });
  };
  const loadNextPage = () => {
    if (locations.hasNextPage && !locations.isFetchingNextPage) {
      locations.fetchNextPage();
    }
  };

  return (
    <ScreenMainContainer>
      <ScreenHeader title="lugares" count={count} classNameContainer="mb-3" />

      {locations.isLoading ? (
        <LoadingView />
      ) : locations.error ? (
        <ErrorView
          message="Algo salió mal"
          description="No pudimos conectar con la API de Rick and Morty. Revisa tu conexión e inténtalo de nuevo."
          onRetry={() => locations.refetch()}
        />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={loadNextPage}
          onEndReachedThreshold={0.6}
          renderItem={({ item, index }) => (
            <LocationListItem
              key={index}
              name={item.name}
              dimension={item.dimension}
              total={item.residents.length}
              onPress={() => goToLocation(item.id)}
            />
          )}
        />
      )}
    </ScreenMainContainer>
  );
};

export default LocationScreen;
