import React from 'react';
import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import {
  useFonts,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { AppRoutes } from './src/screens/routes/app.routes'

export function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}