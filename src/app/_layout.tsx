import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';

// SplashScreen.preventAutoHideAsync();
//
const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="location/by-id"
            options={{ presentation: 'modal' }}
          />
          <Stack.Screen name="character/[id]" />
        </Stack>
        <StatusBar style="dark" />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

// useEffect(() => {
//   SplashScreen.hideAsync()
// }, [])

export default RootLayout;
