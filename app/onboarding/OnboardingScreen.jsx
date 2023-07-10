
import { Box, Center, HStack, Image, Pressable, Text } from 'native-base';
import React, { useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native';
import SlideComponent from '../components/SlideComponent';


const OnboardingScreen = ({ navigation }) => {
  const [elementVisible, setElementVisible] = useState(0);

  const sliders = [
    {
      component: (
        <SlideComponent
          title="Bienvenido"
          color="white"
          body="a tu guia virtual de entrenamiento, nutrición y bienestar"
          onPress={() => setElementVisible(1)}
        />
      ),
      image: require('../assets/0.png'),
    },
    {
      component: (
        <SlideComponent
          body="Diseñada para cumplir tus objectivos de forma transversal sin importar edad y lugar"
          color="white"
          onPress={() => setElementVisible(2)}
        />
      ),
      image: require('../assets/1.png'),
    },
    {
      component: (
        <SlideComponent
          body="Disfruta de la mejor experiencia junto a la mas compleja comunidad de actividad fisica y salud"
          color="white"
          onPress={() => setElementVisible(2)}
        />
      ),
      image: require('../assets/2.png'),
    },
  ];

  return (
    <ImageBackground
      source={sliders[elementVisible].image}
      resizeMode="cover"
      style={styles.containerImage}>
      <View style={styles.elements}>
        <Box safeAreaTop flex={1} alignItems="center" justifyContent="center">
          {sliders[elementVisible].component}
        </Box>
      </View>
      {elementVisible === 2 && (
        <View style={styles.contentFooter}>
          <HStack safeAreaBottom space={3} justifyContent="center">
            <Center>
              <Pressable
                // onPress={() => navigation.navigate('RegisterScreen')}
                style={styles.registerPressable}>
                <Text fontSize="lg" color="white">
                  Unete ahora
                </Text>
              </Pressable>
            </Center>
            <Center h="30" w="20">
              <Image
                source={require('../assets/logo-small.png')}
                alt="vital Move"
                size="xs"
                resizeMode="contain"
              />
            </Center>
            <Center>
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text fontSize="lg" color="white">
                  Iniciar sesión
                </Text>
              </Pressable>
            </Center>
          </HStack>
        </View>
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    justifyContent: 'center',
  },
  elements: {
    height: Dimensions.get('window').height - 80,
  },

  contentFooter: {
    backgroundColor: '#090915',
    flex: 1,
    justifyContent: 'center',
  },

  registerPressable: {
    borderBottomWidth: 3,
    borderBottomColor: 'white',
    borderRadius: 2,
  },
});

export default OnboardingScreen;
