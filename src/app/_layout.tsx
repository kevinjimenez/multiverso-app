import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// SplashScreen.preventAutoHideAsync();
//
const queryClient = new QueryClient();

const RootLayout = () => {
  // return <Slot />
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

// useEffect(() => {
//   SplashScreen.hideAsync()
// }, [])

export default RootLayout;
