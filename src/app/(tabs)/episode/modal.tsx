import { formatEpisodeCode } from '@/helper/format-episode-code';
import { useEpisode } from '@/hooks/useEpisode';
import { router, useLocalSearchParams } from 'expo-router';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

const Modal = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { episodeById } = useEpisode(+id);

  if (episodeById.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View className="py-10 px-7 flex-1 bg-white">
      <View className="flex-1">
        <View className="flex-row gap-4">
          <View className="size-16 rounded-lg bg-accent-50 items-center justify-center">
            <Text className="text-accent font-semibold">
              {formatEpisodeCode(episodeById.data?.episode)}
            </Text>
          </View>
          <View className="flex-col py-1.5 flex-1 gap-1">
            <Text
              className="text-sm text-accent font-medium uppercase"
              style={{ letterSpacing: 1 }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Episodio
            </Text>
            <Text
              className="text-ink font-bold text-2xl"
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {episodeById.data?.name}
            </Text>
          </View>
        </View>

        <View className="py-2">
          <View className="justify-between flex-row px-4 py-3 border-t rounded-t-xl border-l border-r items-center border-gray-300">
            <Text className="text-ink-faint font-semibold">Código</Text>
            <Text className="text-lg font-semibold">
              {episodeById.data.episode}
            </Text>
          </View>
          <View className="justify-between flex-row px-4 py-3 border-t border-l border-r items-center border-gray-300">
            <Text className="text-ink-faint font-semibold">Temporada</Text>
            <Text className="text-lg font-semibold">
              {(episodeById.data.episode as string).split('E')[0].split('S')[1]}
            </Text>
          </View>
          <View className="justify-between flex-row px-4 py-3 border-t border-b border-l border-r items-center border-gray-300">
            <Text className="text-ink-faint font-semibold flex-1">Emisión</Text>
            <Text
              className="text-lg font-semibold"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {episodeById.data.air_date}
            </Text>
          </View>
          <View className="justify-between flex-row px-4 py-3 border-b border-l border-r items-center rounded-b-xl border-gray-300">
            <Text className="text-ink-faint font-semibold flex-1">
              Personajes
            </Text>
            <Text
              className="text-lg font-semibold"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {episodeById.data.characters.length}
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        className="py-4 rounded-xl active:opacity-80 bg-accent mt-8"
        onPress={() => router.dismiss()}
      >
        <Text className="text-center text-white font-bold text-lg">Cerrar</Text>
      </Pressable>
    </View>
  );
};

export default Modal;
