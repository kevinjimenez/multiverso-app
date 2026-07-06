import InfoTable from '@/components/shared/InfoTable';
import BaseBadge from '@/components/ui/BaseBadge';
import CharacterEpisodesCount from '@/features/characters/components/CharacterEpisodesCount';
import CharacterHeader from '@/features/characters/components/CharacterHeader';
import CharacterStatus from '@/features/characters/components/CharacterStatus';
import { useCharacter } from '@/features/characters/hooks/useCharacter';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CharacterScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const safeArea = useSafeAreaInsets();

  const { character } = useCharacter(+id);

  const info = [
    {
      label: 'Especie',
      value: character.data?.species,
    },
    {
      label: 'Género',
      value: character.data?.gender,
    },
    {
      label: 'Origen',
      value: character.data?.origin.name,
    },
    {
      label: 'Ubicación',
      value: character.data?.location.name,
    },
  ];

  const goToback = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)/character');
    }
  };

  if (character.isLoading || !character.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="accent" size={30} />
      </View>
    );
  }

  return (
    <ScrollView style={{ paddingTop: safeArea.top }}>
      <CharacterHeader image={character.data.image} onPress={goToback} />

      <View className="px-6">
        <View className="flex flex-col my-5 gap-y-3">
          <Text className="font-bold text-3xl">{character.data.name}</Text>
          <View className="flex flex-row items-center gap-x-3">
            <BaseBadge classNameContainer="bg-gray-300/50 px-3">
              <CharacterStatus
                status={character.data.status}
                classNameContainer="gap-x-2"
                classNameStatus="size-2"
                classNameLabel="text-[0.95rem] font-semibold"
              />
            </BaseBadge>
            <Text className="font-semibold text-ink-muted text-[0.95rem]">
              {character.data.species}
            </Text>
          </View>
        </View>

        <View className="gap-y-4">
          <InfoTable data={info} />
          <CharacterEpisodesCount total={character.data.episode.length} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterScreen;
