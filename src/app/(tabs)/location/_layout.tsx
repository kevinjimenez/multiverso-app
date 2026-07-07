import { Stack } from 'expo-router';

const LocationsStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // headerShadowVisible: false
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default LocationsStackLayout;
