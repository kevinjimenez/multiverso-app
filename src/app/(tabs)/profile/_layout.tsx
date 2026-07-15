import { Stack } from 'expo-router';

const ProfileLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Personajes' }} />
      <Stack.Screen name="account" options={{ title: 'Cuenta' }} />
      <Stack.Screen name="appearance" options={{ title: 'Cuenta' }} />
      <Stack.Screen name="notification" options={{ title: 'Cuenta' }} />
    </Stack>
  );
};

export default ProfileLayout;
