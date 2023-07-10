import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  useDrawerProgress,
} from '@react-navigation/drawer';
import BottomStack from './BottomStack';
import {
  Avatar,
  Box,
  Button,
  FlatList,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
} from 'native-base';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchScreen from '../screens/navigation/SearchScreen';
import NotificationScreen from '../screens/navigation/NotificationScreen';
import ProfileScreen from '../screens/navigation/ProfileScreen';


const Drawer = createDrawerNavigator();

const data = [
  {
    icon: 'account-question',
    label: 'Acerca de nosotros',
  },
  {
    icon: 'logout',
    label: 'Salir',
  },
];

const ROUTES = [
  {
    name: 'Home',
    label: 'Inicio',
    icon: 'home',
    iconFocus: 'home-outline',
    headerShown: true,
    component: BottomStack,
  },
  {
    name: 'Search',
    label: 'Búsqueda',
    icon: 'magnify-plus',
    headerShown: true,
    iconFocus: 'magnify-plus-outline',
    component: SearchScreen,
  },
  {
    name: 'VM',
    label: 'VitalMov',
    icon: 'magnify-plus',
    headerShown: true,
    iconFocus: 'magnify-plus-outline',
    component: BottomStack,
  },
  {
    name: 'Notification',
    label: 'Notificaciones',
    icon: 'bell',
    headerShown: true,
    iconFocus: 'bell-outline',
    component: NotificationScreen,
  },
  {
    name: 'Profile',
    label: 'Perfil',
    icon: 'account',
    headerShown: true,
    iconFocus: 'account-outline',
    component: ProfileScreen,
  },
];

const CustomHeaderBar = ({ navigation }) => {
  const headerBarTitle = 1212;
  return (
    <SafeAreaView style={{ backgroundColor: '#0E253B' }}>
      <Box py="2">
        <HStack space={[2, 3]} justifyContent="space-around">
          <HStack
            space={[2, 3]}
            justifyContent="space-around"
            alignItems="center">
            <IconButton
              size="lg"
              onPress={() => navigation.openDrawer()}
              icon={<Icon as={MCI} name="menu" color="#FFF" />}
            />
            <Image
              source={require('../assets/logo-home.png')}
              alt="Alternate Text"
              size="xl"
              width={130}
              height={70}
            />
          </HStack>
          <HStack
            space={[2, 3]}
            justifyContent="space-around"
            alignItems="center">
            <IconButton
              size="lg"
              icon={<Icon as={MCI} name="plus-box-outline" color="#FFF" />}
              onPress={() => navigation.navigate('NewPostScreen')}
            />
            <Avatar
              size="md"
              bg="green.500"
              style={styles.customHeaderBarAvatar}
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              AJ
            </Avatar>
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

const CustonDrawerContent = (props) => {
  const progress = useDrawerProgress();


  return (
    <LinearGradient
      colors={['#0ad98b63', '#131429', '#081101']}
      style={styles.drawerContentContainer}>
      <DrawerContentScrollView
        {...props}
        style={styles.container}
        contentContainerStyle={styles.drawerContentContainer}>
        <View style={styles.header}>
          <Avatar
            bg="green.500"
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}>
            AJ
          </Avatar>
          <Text fontSize="xl">Nombre Apellido</Text>
          <Text fontSize="sm">@francomontler</Text>
        </View>
        <View>
          <DrawerItemList {...props} />
        </View>

        <View style={styles.drawerContentContainerFooter}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Box py="2" alignItems="flex-start">
                <Button
                  variant="unstyled"
                  onPress={() => {
                    if (item.icon === 'logout') {
                      app.currentUser?.logOut();
                    }
                  }}>
                  <HStack space={[2, 3]}>
                    <Icon as={MCI} name={item.icon} color="#FFF" size={5} />
                    <VStack>
                      <Text
                        _dark={{
                          color: 'warmGray.50',
                        }}
                        color="coolGray.800"
                        bold>
                        {item.label}
                      </Text>
                    </VStack>
                  </HStack>
                </Button>
              </Box>
            )}
            keyExtractor={item => item.icon}
          />
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustonDrawerContent {...props} />}>
      {ROUTES.map(ele => (
        <Drawer.Screen
          key={ele.name}
          name={ele.name}
          component={ele.component}
          options={({ route, navigation }) => ({
            headerShown: ele.headerShown,
            drawerLabel: ele.label,
            drawerActiveBackgroundColor: '#ffffff2b',
            drawerActiveTintColor: '#FFF',
            header: props => (
              <CustomHeaderBar {...props} navigation={navigation} />
            ),
            drawerIcon: ({ focused }) => (
              <Icon
                as={MCI}
                name={focused ? ele.icon : ele.iconFocus}
                color="#FFF"
                size={5}
              />
            ),
          })}
        />
      ))}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  header: {
    paddingStart: 10,
    paddingBottom: 30,
    marginBottom: 20,
    borderBottomColor: '#1BC488',
  },

  drawerContentContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },

  drawerContentContainerFooter: {
    marginBottom: 100,
    paddingStart: 20,
  },

  customHeaderBar: {
    flex: 1,
    justifyContent: 'space-around',
  },

  customHeaderBarAvatar: {
    borderWidth: 2,
    borderColor: '#10CA83',
  },
});
