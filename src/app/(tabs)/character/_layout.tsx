import { Stack } from 'expo-router';

const CharacterStackLayout = () => {
  return (
    <Stack screenOptions={{
      headerShown: false,
      // headerShadowVisible: false
    }}>
      <Stack.Screen name="index" options={{ title: 'incio' }} />
    </Stack>
  )
}

export default CharacterStackLayout
