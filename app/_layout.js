import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SpashScreen from 'expo-splash-screen'

SpashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf')

  })

  onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SpashScreen.hideAsync()
    }
  })

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView} />
}

export default Layout
