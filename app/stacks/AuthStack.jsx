import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import OnboardingScreen from '../onboarding/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OnboardingScreenOne from '../onboarding/OnboardingScreenOne';
import OnboardingScreenTwo from '../onboarding/OnboardingScreenTwo';
import OnboardingScreenThree from '../onboarding/OnboardingScreenThree';

import HomeScreen from '../screens/navigation/HomeScreen';
import BottomStack from './BottomStack';
import DrawerStack from './DrawerStack';

const RootAuthStack = createNativeStackNavigator();


const AuthStack = (props) => (

  <NavigationContainer>
    <RootAuthStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <RootAuthStack.Screen name="OnBoardingOne" component={OnboardingScreenOne} />
      <RootAuthStack.Screen name="OnBoardingTwo" component={OnboardingScreenTwo} />
      <RootAuthStack.Screen name="OnBoardingThree" component={OnboardingScreenThree} />
      <RootAuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <RootAuthStack.Screen name="Home" component={BottomStack} />


    </RootAuthStack.Navigator>
  </NavigationContainer>
);

export default AuthStack;
