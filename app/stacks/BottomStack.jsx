import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
import SearchScreen from '../screens/navigation/SearchScreen';
import NotificationScreen from '../screens/navigation/NotificationScreen';
import ProfileScreen from '../screens/navigation/ProfileScreen';
import { Box } from 'native-base';
import VMClass from '../screens/navigation/VMClass';
import HomeScreen from '../screens/navigation/HomeScreen';
import ProfileEdit from '../screens/navigation/ProfileEdit';
import ProfileSettings from '../screens/navigation/ProfileSettings';
import PrivacityScreen from '../screens/navigation/settings/PrivacityScreen';
import OursScreen from '../screens/navigation/settings/OursScreen';
import SecurityScreen from '../screens/navigation/settings/SecurityScreen';

const RootBottomStack = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      initialRouteName={true}
      component={ ProfileScreen }
      options={{ headerShown: false }}
    />
    <ProfileStack.Screen
      name="EditProfile"
      component={ ProfileEdit }
      options={{ headerShown: false }}
    />
        <ProfileStack.Screen
      name="SettingsProfile"
      component={ ProfileSettings }
      options={{ headerShown: false }}
    />
            <ProfileStack.Screen
      name="PrivacityScreen"
      component={ PrivacityScreen }
      options={{ headerShown: false }}
    />
                <ProfileStack.Screen
      name="OursScreen"
      component={ OursScreen }
      options={{ headerShown: false }}
    />
                    <ProfileStack.Screen
      name="SecurityScreen"
      component={ SecurityScreen }
      options={{ headerShown: false }}
    />
  </ProfileStack.Navigator>
);

const BottomStack = ({ navigation }) => (
  <RootBottomStack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        let iconName;
        let iconStyle = { width: 25, height: 25, marginBottom:10 };

        if (route.name === 'HomeScreen') {
          iconName = focused ? require('../assets/homepage.png') : require('../assets/homepage.png');
        } else if (route.name === 'SearchScreen') {
          iconName = focused ? require('../assets/search.png') : require('../assets/search.png');
        } else if (route.name === 'NotificationScreen') {
          iconName = focused ? require('../assets/bell.png') : require('../assets/bell.png');
        } else if (route.name === 'ProfileScreen') {
          iconName = focused ? require('../assets/user.png') : require('../assets/user.png');
        } else if (route.name === 'VMScreen') {
          iconName = 'VMScreen';
        }

        if (iconName === 'VMScreen') {
          return (
            <View >
            <Image
              source={require('../assets/logobar.png')}
              alt="Alternate Text"
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
            />
            <Box style={focused ? { alignItems: 'center', justifyContent: 'center', borderBottomWidth: 4, borderBottomColor: '#FFFFFF', borderRadius:10 } : null}></Box>
            </View>
          );
        }

        if (focused) {
          iconStyle = { ...iconStyle };
        }

        return (
          <View>
          <Image
            style={iconStyle}
            source={iconName}
            alt="Alternate Text"
            resizeMode="contain"
          />
          <Box style={focused ? { alignItems: 'center', justifyContent: 'center', borderBottomWidth: 4, borderBottomColor: '#FFFFFF', borderRadius:10 } : null}></Box>
        </View>
        );
      },
      tabBarShowLabel: false,
      tabBarStyle: [
        {
          height: 80,
          borderTopColor: '#090915',
          backgroundColor: '#090915',
        },
      ],
      tabBarHideOnKeyboard: true,
    })}
  >
    <RootBottomStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ title: '', headerShown: false }}
    />
    <RootBottomStack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{ title: '', headerShown: false }}
    />
    <RootBottomStack.Screen
      name="VMScreen"
      component={VMClass}
      options={{ title: '', headerShown: false }}
    />
    <RootBottomStack.Screen
      name="NotificationScreen"
      component={NotificationScreen}
      options={{ title: '', headerShown: false }}
    />
    <RootBottomStack.Screen
      name="ProfileScreen"
     
      component={ProfileStackScreen}
      options={{ title: '', headerShown: false }}
    />
  </RootBottomStack.Navigator>
);

export default BottomStack;
