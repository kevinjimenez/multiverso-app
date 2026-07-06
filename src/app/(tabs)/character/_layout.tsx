import { Stack } from 'expo-router';

const CharacterStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Personajes' }} />
    </Stack>
  );
};

export default CharacterStackLayout;
