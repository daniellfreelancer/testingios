import React, {useEffect, useState} from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import {combineReducers} from "redux"; 
import userAPI from './app/data/userAPI';
import authReducer from './app/data/userAuth'
import { StatusBar, StyleSheet} from 'react-native';
import { NativeBaseProvider, Box, extendTheme, Spinner } from "native-base";
import AuthStack from './app/stacks/AuthStack';
import { ToastProvider } from 'react-native-toast-notifications'

function App() {

  const theme = extendTheme({
    config: {
      initialColorMode: 'dark',
    },
  })

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    try {
      const jsonValue = AsyncStorage.getItem('token')
      if (jsonValue != null) {
        console.log(JSON.parse(jsonValue))
        console.log(`there is a token`)
        setIsLogin(true)
      } else {
        console.log(`async is clean`)
        return null
      }
    } catch(e) {
      // error reading value
    }
  }, [isLogin])


  const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
  }
  const rootReducer = combineReducers({
    auth: authReducer,
    [userAPI.reducerPath]: userAPI.reducer,
   });

  
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(userAPI.middleware),
  })
  
  let persistor = persistStore(store)
  
  




  return (
    <ToastProvider 
    placement='top'
    duration={3000}
    animationType='zoom-in'
    offsetTop={30}
    swipeEnabled={true}
    style={{
      width:'90%',
      height:'100%'
    }}>
    <NativeBaseProvider theme={theme}  >
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
 
      <StatusBar
        translucent={true}
        barStyle="default"
        backgroundColor="transparent"

      />
      <AuthStack />
    
    </PersistGate>
    </Provider>
    </NativeBaseProvider>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
