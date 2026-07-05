import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Pressable,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEpisodes } from '@/hooks/useEpisodes';
import { formatEpisodeCode } from '@/helper/format-episode-code';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';

const EpisodeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { episodes } = useEpisodes();

  if (episodes.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  const data = episodes.data?.pages.flatMap((page) => page.results);
  const totalCount = episodes.data?.pages[0]?.info.count ?? 0;

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
          <Text className="text-4xl font-bold text-ink">Episodios</Text>
        </View>
        <Text className="text-ink-muted font-medium text-sm">
          {totalCount} episodios
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.6}
        onEndReached={() => {
          if (episodes.hasNextPage && !episodes.isFetchingNextPage) {
            episodes.fetchNextPage();
          }
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              router.push({
                pathname: '/episode/modal',
                params: { id: item.id },
              });
            }}
            className="justify-between flex-row items-center border border-gray-300 my-1 px-3.5 py-2 rounded-xl"
          >
            <View className="flex-row gap-4">
              <View className="size-16 rounded-lg bg-accent-50 items-center justify-center">
                <Text className="text-accent font-semibold">
                  {formatEpisodeCode(item.episode)}
                </Text>
              </View>
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
                  {item.air_date}
                </Text>
              </View>
              <View className="rounded-full bg-accent-50 flex-row items-center gap-1 px-3 py-1.5 self-center">
                <Ionicons name="person-outline" size={14} color="#11B0A3" />
                <Text className="text-accent font-semibold">
                  {item.characters.length}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default EpisodeScreen;
