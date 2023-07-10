import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../../screens/navigation/HomeScreen';
import NewPostScreen from '../../screens/posts/NewPostScreen';

const RootHomeStack = createNativeStackNavigator();

const HomeStack = () => (
  <RootHomeStack.Navigator initialRouteName="HomeScreen">
    <RootHomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ title: 'Home', headerShown: false }}
    />
    <RootHomeStack.Screen
      name="NewPostScreen"
      component={NewPostScreen}
      options={{ title: 'New Post', headerShown: false, header: undefined }}
    />
  </RootHomeStack.Navigator>
);

export default HomeStack;
