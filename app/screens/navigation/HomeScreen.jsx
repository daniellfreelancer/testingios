/* eslint-disable react-hooks/exhaustive-deps */
import {
    ImageBackground,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
  } from 'react-native';
  import React from 'react';
  import { Heading } from 'native-base';


  

const HomeScreen = ({navigation}) => {

    return (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            source={require('../../assets/homeb.png')}
            resizeMode="cover"
            style={styles.containerImage}>
            <ScrollView>
              <Heading size="sm" style={styles.momentsHeading}>
                Momentos
              </Heading>
              <ScrollView horizontal={true}>
                <View style={styles.moments}>
                </View>
              </ScrollView>
    
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      );
    };
    
    export default HomeScreen;
    
    const styles = StyleSheet.create({
      container: {},
    
      containerImage: {},
    
      momentsHeading: {
        marginTop: 30,
        marginLeft: 10,
      },
    
      moments: {
        flexDirection: 'row',
        marginBottom: 10,
      },
    });
    