import CustomHeader from '@/components/shared/CustomHeader';
import BaseChip from '@/components/ui/BaseChip';
import BaseListItem from '@/components/ui/BaseListItem';
import { useCharacters } from '@/hooks/useCharacters';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CharacterScreen = () => {
  // const { width, height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const { rickAndMorty } = useCharacters();
  const characters = rickAndMorty.data?.pages.flatMap((page) => page.results);
  const totalCount = rickAndMorty.data?.pages[0]?.info.count ?? 0;
  const isLoading = useRef(false);

  const [status, setStatus] = useState('Todos');

  const tags = ['Todos', 'Vivo', 'Muerto', 'Humano'];

  const handleSelectTag = (tag: string) => {
    setStatus(tag);
  };

  const handleSelectCharacter = (id: number) => {
    router.push(`/(tabs)/character/${id}`);
  };

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
    // rickAndMorty.fetchNextPage().finally(() => {
    //   isLoading.current = false;
    // });
    rickAndMorty.fetchNextPage().then((result) => {
      if (!result.isError) {
        isLoading.current = false; // solo se libera si la respuesta fue OK (200)
      }
      // si hubo error, isLoading.current queda en true -> no deja disparar más fetch por scroll
    });
  };

  if (rickAndMorty.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View
      className="bg-white"
      style={{ flex: 1, paddingTop: top, paddingHorizontal: 15 }}
    >
      <CustomHeader title="personajes" count={totalCount} />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-5"
        contentContainerStyle={{ gap: 8 }}
      >
        {tags.map((tag, index) => (
          <BaseChip
            key={index}
            containerClassName={`${status === tag ? 'bg-ink border-ink' : 'bg-white border-gray-200 active:bg-red-200'}`}
            textClassName={`${status === tag ? 'text-white' : ''}`}
            onPress={() => {
              handleSelectTag(tag);
            }}
          >
            {tag}
          </BaseChip>
        ))}
      </ScrollView>

      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        onScroll={onScroll}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BaseListItem
            onPress={() => handleSelectCharacter(item.id)}
            prefix={
              <Image
                source={{ uri: item.image }}
                contentFit="cover"
                style={{ width: 64, height: 64, borderRadius: 8 }}
                placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
                transition={200}
                cachePolicy="memory-disk"
              />
            }
            suffix={
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color="#A6AEB6"
              />
            }
          >
            <View className="flex-col py-1.5 flex-1">
              <View className="flex-1">
                <Text
                  className="text-ink font-semibold"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.name}
                </Text>
              </View>
              <View className="flex-row gap-x-5">
                <View className="flex-row justify-center items-center gap-x-1">
                  <View
                    className={`rounded-full size-1.5 ${item.status === 'Alive' ? 'bg-status-alive' : item.status === 'Dead' ? 'bg-status-dead' : 'bg-status-unknown'}`}
                  />
                  <Text className="text-sm">{item.status}</Text>
                </View>
                <Text
                  className="text-sm text-ink-soft"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.species}
                </Text>
              </View>
            </View>
          </BaseListItem>
        )}
      />
    </View>
  );
};

export default CharacterScreen;
