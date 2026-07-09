import { Stack } from 'expo-router';

const EpisodesStackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // headerShadowVisible: false
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="detail"
        options={{
          presentation: 'formSheet',
          sheetAllowedDetents: [0.55, 0.55], // 50% y 90% de la pantalla
          sheetInitialDetentIndex: 0,
          sheetGrabberVisible: true, // la barrita gris de arriba
          sheetCornerRadius: 24, // esquinas redondeadas
        }}
      />
    </Stack>
  );
};

export default EpisodesStackLayout;
