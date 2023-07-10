import { Alert, Dimensions, ImageBackground, Pressable, StyleSheet, View, Image, Text } from 'react-native'
import React, { useState } from 'react'


const OnboardingScreenThree = ({navigation}) => {
    return (

        <ImageBackground
            source={require('../assets/2.png')}
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
                    Difruta de la mejor experiencia
                </Text>
                <Text style={styles.text} >
                    junto a la más completa comunidad
                </Text>
                <Text style={styles.text} >
                    de actividad física y salud.
                </Text>

            </View>

            <View style={styles.bottomView} >
                {/* <Pressable >
                    <Text style={styles.bottomText} >
                        ÚNETE AHORA
                    </Text>
                </Pressable> */}
                <Image
                    style={styles.bottomImage}
                    source={require('../assets/logo-home.png')}
                    resizeMode='contain'
                />
                <Pressable onPress={() => navigation.navigate('LoginScreen')} >
                    <Text style={styles.bottomText} >
                        INICIAR SESIÓN
                    </Text>
                </Pressable>
            </View>

        </ImageBackground>

    );
}

export default OnboardingScreenThree

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
        marginBottom: 140
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
    },
    bottomView: {
        backgroundColor: '#090915',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70

    },
    bottomText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
    },
    bottomImage: {
        width: '30%',
    }
});