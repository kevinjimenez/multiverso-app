import { useEffect } from "react";
import "../global.css"
import { Redirect, Slot, SplashScreen } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  return <Slot />
  // return <GestureHandlerRootView style={{flex: 1}}>
  //   <Slot />
  // </GestureHandlerRootView>
}

// useEffect(() => {
//   SplashScreen.hideAsync()
// }, [])

export default RootLayout
