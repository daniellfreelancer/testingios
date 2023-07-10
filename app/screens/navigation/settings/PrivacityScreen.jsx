import { ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react'
import {
    Avatar,
    Button,
    Center,
    Divider,
    FormControl,
    Heading,
    HStack,
    Icon,
    IconButton,
    Input,
    TextArea,
    ScrollView,
    Text,
    VStack,
    Pressable,
    Switch,
} from 'native-base';
import { Switch as RNDSwitch } from 'react-native';
const PrivacityScreen = ({navigation}) => {
    const windowHeight = Dimensions.get('window').height;

    const [showData, setShowData] = useState(true)

    const [isPrivate, setIsPrivate] = useState(false);

    const handleSwitchChange = () => {
        setIsPrivate(!isPrivate);
      };

  return (
    <ScrollView>
    <ImageBackground
        source={require('../../../assets/homeb.png')}
        style={{ width: '100%', minHeight: windowHeight, flex: 1 }}
        resizeMode="cover"
    >
        <HStack pt={12} justifyContent="flex-start" alignItems={'center'} ml={5} mb={6} >
            <Pressable bg="white" rounded={'full'} padding={1} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={() => navigation.navigate('SettingsProfile')} >
                <Image source={require('../../../assets/back.png')} style={styles.cameraIcon} />


            </Pressable>
            <Text ml={4} fontWeight={'black'} fontSize={'2xl'}  >Privacidad</Text>
        </HStack>



        <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

        <HStack display={'flex'} flexDirection={'row'} justifyContent='space-between' alignItems={'center'} marginX={3} height={'12'}  >
            <Pressable bg="#10b543" rounded={'full'} padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Image source={require('../../../assets/privacity.png')} style={styles.cameraIcon} />

            </Pressable>
            <Text color="white" fontSize={'xl'} ml={5} >
                Privacidad de la cuenta
            </Text>

                  {
                      showData ? (
                          <Pressable padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={()=> setShowData(false) } >
                              <Image source={require('../../../assets/up-arrow.png')} style={styles.cameraIcon} />
                          </Pressable>
                      ) : (
                          <Pressable padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={()=> setShowData(true) } >
                              <Image source={require('../../../assets/down-arrow.png')} style={styles.cameraIcon} />
                          </Pressable>
                      )
                  }










        </HStack>
        <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
        {
            showData ? (
                <>
              

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} ml={3} height={'20'} pt={4}>
                    <VStack width={'80%'}>
                        <Heading size={'md'}>Cuenta privada</Heading>
                        <Text fontSize={'xs'} width={'80%'} height={'100%'} color={'gray.200'} pt={2}>
                            Al tener tu cuenta privada, solo los usuarios que apruebes podrán ver tus fotos y videos
                        </Text>
                    </VStack>
        
                    <VStack bg="#ebf6f7" borderRadius={20} height={6} justifyContent={'center'}>
                        <RNDSwitch
                            trackColor={{ false: '#ebf6f7', true: '#ebf6f7' }}
                            thumbColor={isPrivate ? '#10b543' : '#cc452f'}
                            value={isPrivate}
                            onValueChange={handleSwitchChange}
                        />
                    </VStack>
                </HStack>
        
          <Divider bg="#0AD98B" marginY={6} height={'0.1%'} />
          </>
            ) : null
        }

    </ImageBackground>
</ScrollView>
  )
}

export default PrivacityScreen



const styles = StyleSheet.create({
    contentImages: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    imgPost: {
        width: 150,
        height: 150
    },
    icons: {
        width: 20,
        height: 20
    },
    buttonTouchable: {
        margin: 7,
        marginHorizontal: 24,
        borderColor: "#08c67d",
        borderRadius: 15,
        textAlign: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        marginTop: 140
    },

    inputStyle: {
        borderColor: 'white',
        fontSize: 12
    },
    cameraIcon: {
        width: 22,
        height: 22
    },
    switchStyle:{
        backgroundColor:'gray.400'
    }
});
