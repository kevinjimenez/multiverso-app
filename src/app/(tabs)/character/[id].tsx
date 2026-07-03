import { useCharacter } from '@/hooks/useCharacter';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CharacterID = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { rickAndMortyById } = useCharacter(+id);

  const goToback = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)/character');
    }
  };

  if (rickAndMortyById.isLoading || !rickAndMortyById.data) {
    return (
      <View className="flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="accent" size={30} />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={goToback}>
          <Ionicons name="chevron-back-outline" size={20} color={'gray'} />
        </Pressable>
        <Image
          source={{ uri: rickAndMortyById.data.image }}
          style={{ width: 'auto', height: 300 }}
          contentFit="cover"
        />
        <Text>{rickAndMortyById.data.name}</Text>
        <Text>{rickAndMortyById.data.status}</Text>
        <Text>{rickAndMortyById.data.species}</Text>
        <Text>{rickAndMortyById.data.gender}</Text>
        <Text>{rickAndMortyById.data.origin.name}</Text>
        <Text>{rickAndMortyById.data.location.name}</Text>
        <Text>Aparce en {rickAndMortyById.data.episode.length} Episodios</Text>
      </View>
    </SafeAreaView>
  );
};

export default CharacterID;
