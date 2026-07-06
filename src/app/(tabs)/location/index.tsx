import ScreenHeader from '@/components/shared/ScreenHeader';
import ScreenMainContainer from '@/components/shared/ScreenMainContainer';
import { useLocations } from '@/hooks/useLocations';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';

const LocationScreen = () => {
  const { locations } = useLocations();

  const data = locations.data?.pages.flatMap((page) => page.results);
  const count = locations.data?.pages[0]?.info.count ?? 0;

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
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.6}
        onEndReached={() => {
          if (locations.hasNextPage && !locations.isFetchingNextPage) {
            locations.fetchNextPage();
          }
        }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              // router.push('/location/modal');
              router.push({
                pathname: '/location/modal',
                params: { id: item.id },
              });
            }}
            className="justify-between flex-row items-center border border-gray-300 my-1 px-3.5 py-2 rounded-xl"
          >
            <View className="flex-row gap-4 flex-1">
              <Image
                source={require('../../../../assets/images/location-icon.png')}
                className="size-16 rounded-lg"
                resizeMode="cover"
              />
              <View className="flex-col py-1.5 flex-1">
                <View className="flex-1">
                  <Text
                    className="text-ink font-semibold text-lg"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                </View>
                <Text
                  className="text-[0.95rem] text-ink-soft font-light"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.dimension}
                </Text>
              </View>

              <View className="rounded-full bg-accent-50 flex-row items-center gap-1 px-3 py-1.5 self-center">
                <Ionicons name="person-outline" size={14} color="#11B0A3" />
                <Text className="text-accent font-semibold">
                  {item.residents.length}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </ScreenMainContainer>
  );
};

export default LocationScreen;
