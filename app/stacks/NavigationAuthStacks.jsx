import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthStack from './AuthStack';

const NavigationAuthStacks = ({navigation}) => {
  const theme = DarkTheme;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationAuthStacks;
