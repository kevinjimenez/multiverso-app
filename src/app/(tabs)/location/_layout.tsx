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
      <Stack.Screen
        name="by-id"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  );
};

export default LocationsStackLayout;
