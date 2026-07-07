import InfoTable from '@/components/shared/InfoTable';
import BaseBadge from '@/components/ui/BaseBadge';
import CharacterEpisodesCount from '@/features/characters/components/CharacterEpisodesCount';
import CharacterHeader from '@/features/characters/components/CharacterHeader';
import CharacterStatus from '@/features/characters/components/CharacterStatus';
import { GENDERS_LABELS } from '@/features/characters/constants/genders-labels.constants';
import { SPECIES_LABELS } from '@/features/characters/constants/species-labels.constants';
import { useCharacter } from '@/features/characters/hooks/useCharacter';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CharacterScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { character } = useCharacter(+id);

  const info = [
    {
      label: 'Especie',
      value: character.data?.species
        ? (SPECIES_LABELS[character.data?.species] ?? character.data?.species)
        : character.data?.species,
    },
    {
      label: 'Género',
      value: character.data?.gender
        ? (GENDERS_LABELS[character.data?.gender] ?? character.data?.gender)
        : character.data?.gender,
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
              {SPECIES_LABELS[character.data.species] ?? character.data.species}
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
