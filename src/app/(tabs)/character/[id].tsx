import Ionicons from '@react-native-vector-icons/ionicons';
import { router, useLocalSearchParams } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const CharacterID = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const goToback = () => {
    if (router.canGoBack()) {
      router.back()
    } else {
      router.replace('/(tabs)/character')
    }
  }

  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={goToback}>
          <Ionicons name="chevron-back-outline" size={20} color={'gray'} />
        </Pressable>
        <Text>Character {id}</Text>
      </View>
    </SafeAreaView>
  )
}

export default CharacterID
