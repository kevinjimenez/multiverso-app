import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../global.css';

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // return <Slot />
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

// useEffect(() => {
//   SplashScreen.hideAsync()
// }, [])

export default RootLayout;
