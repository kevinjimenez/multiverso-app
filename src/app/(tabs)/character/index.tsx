import { useCharacters } from '@/hooks/useCharacters';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Image } from 'expo-image';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CharacterScreen = () => {
  // const { width, height } = useWindowDimensions();
  const [imageRetries, setImageRetries] = useState<Record<string, number>>({});
  const { top } = useSafeAreaInsets();
  const { rickAndMorty } = useCharacters();
  const characters = rickAndMorty.data?.pages.flatMap((page) => page.results);
  const totalCount = rickAndMorty.data?.pages[0]?.info.count ?? 0;
  const isLoading = useRef(false);

  const [status, setStatus] = useState('Todos');

  const tags = ['Todos', 'Vivo', 'Muerto', 'Humano'];

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached =
      contentOffset.y + layoutMeasurement.height + 600 >= contentSize.height;

    if (!isEndReached) return;
    if (!rickAndMorty.hasNextPage) return;

    isLoading.current = true;

    console.log('Carga pagina siguiente');

    // rickAndMorty.fetchNextPage && rickAndMorty.fetchNextPage();
    rickAndMorty.fetchNextPage().finally(() => {
      isLoading.current = false;
    });
  };

  if (rickAndMorty.isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      className="bg-white"
      style={{ flex: 1, paddingTop: top, paddingHorizontal: 15 }}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-col gap-y-0.5">
          <Text
            className="uppercase text-[0.85rem] font-semibold text-accent"
            style={{ letterSpacing: 1 }}
          >
            Multiverso
          </Text>
          <Text className="text-4xl font-bold text-ink">Personajes</Text>
        </View>
        <Text className="text-ink-muted font-medium text-sm">
          {totalCount} personajes
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-5"
        contentContainerStyle={{ gap: 8 }}
      >
        {tags.map((tag, index) => (
          <Pressable
            key={index}
            className={`h-8 justify-center px-4 py-1 rounded-2xl border ${
              status === tag
                ? 'bg-ink border-ink'
                : 'bg-white border-gray-200 active:bg-red-200'
            }`}
            onPress={() => {
              setStatus(tag);
            }}
          >
            <Text
              className={`text-sm font-medium ${status === tag ? 'text-white' : ''}`}
            >
              {tag}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            className="justify-between flex-row items-center border border-gray-300 my-1 px-3.5 py-2 rounded-xl"
            onPress={() => {
              router.push(`/(tabs)/character/${item.id}`);
            }}
          >
            <View className="flex-row gap-4">
              {/*<Image
                source={{ uri: item.image }}
                contentFit="cover"
                style={{ width: 64, height: 64, borderRadius: 8 }}
                placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
                transition={200}
                cachePolicy="memory-disk"
              />*/}
              <Image
                key={`${item.id}-${imageRetries[item.id] ?? 0}`}
                source={{ uri: item.image }}
                contentFit="cover"
                style={{ width: 64, height: 64, borderRadius: 8 }}
                placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
                transition={200}
                cachePolicy="memory-disk"
                onError={() => {
                  const count = imageRetries[item.id] ?? 0;
                  if (count >= 3) return; // máximo 3 intentos

                  setTimeout(
                    () => {
                      setImageRetries((prev) => ({
                        ...prev,
                        [item.id]: (prev[item.id] ?? 0) + 1,
                      }));
                    },
                    1000 * (count + 1), // 1s, 2s, 3s... backoff simple
                  );
                }}
              />
              <View className="flex-col py-1.5">
                <View className="flex-1">
                  <Text className="text-ink font-semibold">{item.name}</Text>
                </View>
                <View className="flex-row gap-x-5">
                  <View className="flex-row justify-center items-center gap-x-1">
                    <View
                      className={`rounded-full size-1.5 ${item.status === 'Alive' ? 'bg-status-alive' : item.status === 'Dead' ? 'bg-status-dead' : 'bg-status-unknown'}`}
                    />
                    <Text className="text-sm">{item.status}</Text>
                  </View>
                  <Text className="text-sm text-ink-soft">{item.species}</Text>
                </View>
              </View>
            </View>

            <Ionicons
              name="chevron-forward-outline"
              size={20}
              color="#A6AEB6"
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default CharacterScreen;
