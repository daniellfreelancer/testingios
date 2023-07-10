import { Alert, Dimensions, ImageBackground, Pressable, StyleSheet, View, Image, Text } from 'react-native'
import React, { useState } from 'react'

const OnboardingScreenTwo = ({navigation}) => {

    return (
        <Pressable onPress={() => navigation.navigate('OnBoardingThree')} >
          <ImageBackground
            source={require('../assets/1.png')}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          >
            <View style={styles.elements} >
              <Image
                source={require('../assets/logo.png')}
                alt='vitalmove'
                size="xl"
                resizeMode='contain'
                style={styles.image}
              />
              <Text style={styles.text} >
                Diseñada para cumplir tus
              </Text>
              <Text style={styles.text} >
               objetivos de forma transversal sin
              </Text>
              <Text style={styles.text} >
                importar edad y lugar.
              </Text>

            </View>
          </ImageBackground>
        </Pressable>
      );
}


const styles = StyleSheet.create({
    elements: {
      flex: 1,
      justifyContent: 'center',
      height: Dimensions.get('window').height - 80,
      alignItems: 'center',
      paddingHorizontal: 10,
      marginTop: 90
  
    },
    image: {
      marginBottom:140
    },
    text: {
      fontSize: 20,
      color: 'white',
      textAlign: 'center',
      fontWeight: '700',
      
    },
  });
export default OnboardingScreenTwo