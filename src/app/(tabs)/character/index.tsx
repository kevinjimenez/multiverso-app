import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CharacterScreen = () => {
  // const { width, height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();

  const tags = ['Todos', 'Vivo', 'Muerto', 'Humano'];

  const data = [
    { id: '1', title: 'Elemento 1' },
    { id: '2', title: 'Elemento 2' },
    { id: '3', title: 'Elemento 3' },
    { id: '4', title: 'Elemento 1' },
    { id: '5', title: 'Elemento 2' },
    { id: '6', title: 'Elemento 3' },
    { id: '7', title: 'Elemento 1' },
    { id: '8', title: 'Elemento 2' },
    { id: '9', title: 'Elemento 3' },
    { id: '10', title: 'Elemento 1' },
    { id: '11', title: 'Elemento 2' },
    { id: '12', title: 'Elemento 3' },
    { id: '14', title: 'Elemento 1' },
    { id: '15', title: 'Elemento 2' },
    { id: '16', title: 'Elemento 3' },
    { id: '17', title: 'Elemento 1' },
    { id: '18', title: 'Elemento 2' },
    { id: '19', title: 'Elemento 3' },
    { id: '20', title: 'Elemento 1' },
    { id: '21', title: 'Elemento 2' },
    { id: '22', title: 'Elemento 3' },
    { id: '23', title: 'Elemento 1' },
    { id: '24', title: 'Elemento 2' },
    { id: '25', title: 'Elemento 3' },
  ];

  return (
    <View
      className="bg-white"
      style={{ flex: 1, paddingTop: top, paddingHorizontal: 15 }}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-col">
          <Text>Multiverso</Text>
          <Text>Personajes</Text>
        </View>
        <Text>20 personajes</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="py-5"
        contentContainerStyle={{ gap: 8 }}
      >
        {tags.map((tag, index) => (
          <View
            key={index}
            className="h-8 justify-center bg-white px-4 py-1 rounded-2xl border-gray-200 border"
          >
            <Text className="text-sm font-medium">{tag}</Text>
          </View>
        ))}
      </ScrollView>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            className="justify-between flex-row items-center border border-gray-300 my-1 px-3.5 py-2 rounded-xl"
            onPress={() => {
              router.push(`/(tabs)/character/${item.id}`);
            }}
          >
            <View className="flex-row gap-4">
              <View className="size-16 bg-yellow-300 rounded-lg" />
              <View className="flex-col py-1.5">
                <View className="flex-1">
                  <Text>{item.title}</Text>
                </View>
                <View className="flex-row gap-x-5">
                  <Text>{item.id}</Text>
                  <Text>{item.title}</Text>
                </View>
              </View>
            </View>

            <Ionicons name="chevron-forward-outline" size={20} color={'gray'} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default CharacterScreen;
