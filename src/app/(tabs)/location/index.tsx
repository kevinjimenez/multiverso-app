import ScreenHeader from '@/components/shared/ScreenHeader';
import ScreenMainContainer from '@/components/shared/ScreenMainContainer';
import LocationListItem from '@/features/locations/components/LocationListItem';
import { useLocations } from '@/features/locations/hooks/useLocations';
import { router } from 'expo-router';
import { ActivityIndicator, FlatList, View } from 'react-native';

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

  if (locations.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScreenMainContainer>
      <ScreenHeader title="lugares" count={count} classNameContainer="mb-3" />

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
    </ScreenMainContainer>
  );
};

export default LocationScreen;
