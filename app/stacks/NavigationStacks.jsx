import React, { useState } from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AuthStack from './AuthStack';
import BottomStack from './BottomStack';
import DrawerStack from './DrawerStack';

const NavigationStacks = () => {
  const theme = DarkTheme;
  const [login, setlogin] = useState(true)

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        {
          login ?   <AuthStack/> : <BottomStack />
        }

       
        {/* <DrawerStack /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationStacks;
