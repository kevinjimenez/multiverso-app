import InfoTable from '@/components/shared/InfoTable';
import ThumbnailImage from '@/components/shared/ThumbnailImage';
import BaseButton from '@/components/ui/BaseButton';
import { useEpisode } from '@/features/episodes/hooks/useEpisode';
import { formatEpisodeCode } from '@/helper/format-episode-code';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';

const ByIdModal = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { episode } = useEpisode(+id);

  const info = [
    {
      label: 'Código',
      value: episode.data?.episode,
    },
    {
      label: 'Temporada',
      value: ((episode.data?.episode ?? '') as string)
        .split('E')[0]
        .split('S')[1],
    },
    {
      label: 'Emisión',
      value: episode.data?.air_date,
    },
    {
      label: 'Personajes',
      value: episode.data?.characters.length,
    },
  ];

  const closeModal = () => {
    router.dismiss();
  };

  if (episode.isLoading) {
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
          <ThumbnailImage
            fallbackText={formatEpisodeCode(episode.data?.episode as string)}
          />
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
              {episode.data?.name}
            </Text>
          </View>
        </View>

        <InfoTable classNameContainer="py-2" data={info} />
      </View>
      <BaseButton onPress={closeModal}>Cerrar</BaseButton>
    </View>
  );
};

export default ByIdModal;
