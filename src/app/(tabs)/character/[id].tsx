import { useCharacter } from '@/hooks/useCharacter';
import Ionicons from '@react-native-vector-icons/ionicons';
import { router, useLocalSearchParams } from 'expo-router';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const CharacterID = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { height: screenHeight } = useWindowDimensions();
  const safeArea = useSafeAreaInsets();

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
    <ScrollView style={{ paddingTop: safeArea.top }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 99,
          elevation: 9,
          top: 15,
          left: 15,
        }}
      >
        <Pressable
          onPress={goToback}
          className="bg-white rounded-full size-10 items-center justify-center shadow"
          style={{ elevation: 9 }}
        >
          <Ionicons name="chevron-back-outline" size={22} color={'black'} />
        </Pressable>
      </View>
      <View style={{ height: screenHeight * 0.4 }}>
        <View className="flex-1 rounded-b-[25px] overflow-hidden">
          <Image
            source={{ uri: rickAndMortyById.data.image }}
            resizeMode="cover"
            className="flex-1"
          />
        </View>
      </View>

      <View className="px-6">
        <View className="flex flex-col my-5 gap-y-3">
          <Text className="font-bold text-3xl">
            {rickAndMortyById.data.name}
          </Text>
          <View className="flex flex-row items-center gap-x-3">
            <View className="flex-row items-center gap-x-2 bg-gray-200 rounded-xl px-2 py-1">
              <View
                className={`rounded-full size-2 ${rickAndMortyById.data.status === 'Alive' ? 'bg-status-alive' : rickAndMortyById.data.status === 'Dead' ? 'bg-status-dead' : 'bg-status-unknown'}`}
              />
              <Text className="text-[0.95rem] font-semibold">
                {rickAndMortyById.data.status}
              </Text>
            </View>
            <Text className="font-semibold text-ink-faint text-[0.95rem]">
              {rickAndMortyById.data.species}
            </Text>
          </View>
        </View>

        <View className="gap-y-4">
          <View>
            <View className="justify-between flex-row px-4 py-3 border-t rounded-t-xl border-l border-r items-center border-gray-300">
              <Text className="text-ink-faint font-bold">Especie</Text>
              <Text className="text-lg font-bold">
                {rickAndMortyById.data.species}
              </Text>
            </View>
            <View className="justify-between flex-row px-4 py-3 border-t border-l border-r items-center border-gray-300">
              <Text className="text-ink-faint font-bold">Género</Text>
              <Text className="text-lg font-bold">
                {rickAndMortyById.data.gender}
              </Text>
            </View>
            <View className="justify-between flex-row px-4 py-3 border-t border-b border-l border-r items-center border-gray-300">
              <Text className="text-ink-faint font-bold flex-1">Origen</Text>
              <Text
                className="text-lg font-bold"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {rickAndMortyById.data.origin.name}
              </Text>
            </View>
            <View className="justify-between flex-row px-4 py-3 border-b border-l border-r items-center rounded-b-xl border-gray-300">
              <Text className="text-ink-faint font-bold flex-1">Ubicación</Text>
              <Text
                className="text-lg font-bold"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {rickAndMortyById.data.location.name}
              </Text>
            </View>
          </View>

          <View className="bg-gray-200 rounded-xl p-4">
            <Text className="font-semibold text-ink-soft text-[0.95rem]">
              Aparce en{' '}
              <Text className="text-[1.1rem] text-accent font-bold">
                {rickAndMortyById.data.episode.length} Episodios
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CharacterID;
