import { Alert, Dimensions, ImageBackground, Pressable, StyleSheet, View, Image, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const OnboardingScreenOne = ({ navigation }) => {
  const [elementVisible, setElementVisible] = useState(0);

  const [isLogin, setIsLogin] = useState(false)

  async function readLocal() {
    const jsonValue = await AsyncStorage?.getItem('token')
    if (jsonValue != null) {
      console.log(JSON.parse(jsonValue))
      console.log(`there is a token`)
      setIsLogin(true)
    } else {
      console.log(`async is clean`)
      setIsLogin(false)
    }
  }

  useEffect(() => {
    readLocal()
  }, [isLogin])


  function redirect() {
    setTimeout(() => {
      navigation.navigate('Home')
    },)
  }



  return (
    <>
      {isLogin ? redirect() : (
        <Pressable onPress={() => navigation.navigate('OnBoardingTwo')} >
          <ImageBackground
            source={require('../assets/0.png')}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.elements} >
              <Image
                source={require('../assets/logo.png')}
                alt='vitalmove'
                size="xl"
                resizeMode='contain'
              />
              <Text style={styles.title} >
                Bienvenido
              </Text>
              <Text style={styles.text} >
                A tu guía virtual de entrenamiento, nutrición y bienestar.
              </Text>
            </View>
          </ImageBackground>
        </Pressable>
      )}
    </>


  );
};

const styles = StyleSheet.create({
  elements: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height - 80,
    gap: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 90

  },
  title: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '700'
  },
});

export default OnboardingScreenOne;

