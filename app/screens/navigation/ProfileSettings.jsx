import { ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity, } from 'react-native';
import React from 'react'
import { Avatar, Divider, HStack, ScrollView, Text, VStack, Pressable,} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { useToast } from 'react-native-toast-notifications';
import { useSignOutUserMutation } from '../../data/userAPI';
import { deleteCredentials } from '../../data/userAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default ProfileSettings = ({ navigation }) => {

    const windowHeight = Dimensions.get('window').height;
    const user = useSelector((state) => state.auth.user)
    const profilePicture = useSelector((state) => state.auth.profilePhoto)
    const dispatch = useDispatch()
    const [signoutUser] = useSignOutUserMutation();
    const toast = useToast()

    let imageSource = profilePicture
    ? { uri: 'https://vmtestphotos.s3.sa-east-1.amazonaws.com/' + profilePicture }
    : require('../../assets/iconoUser.png');

    let userMail = {
        email : user?.email
    }

    async function clearAsyncStorage() {
        try {
          await AsyncStorage.clear();
          console.log('AsyncStorage has been successfully cleared!');
        } catch (error) {
          console.log('Error clearing AsyncStorage:', error);
        }
      }

      async function logoutUser() {

        signoutUser(userMail).then((res)=>{
            if (res.error){
                let dataError = res.error;
                let dataMessage = dataError.data; 
                toast.show(dataMessage, {type: 'normal'})
            } else {
                let dataResponse = res.data;
                let dataSuccess = dataResponse.message;
                toast.show(`Hasta luego 👋🏻`, {type: 'success'})
                clearAsyncStorage()
                dispatch(deleteCredentials())
                navigation.navigate("LoginScreen")
            }
        })

    }

  
    return (
        <ScrollView>
            <ImageBackground
                source={require('../../assets/homeb.png')}
                style={{ width: '100%', minHeight: windowHeight, flex: 1 }}
                resizeMode="cover"
            >
                <HStack pt={12} justifyContent="flex-start" alignItems={'center'} ml={5} mb={6} >
                    <Pressable bg="white" rounded={'full'} padding={1} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={() => navigation.navigate('Profile')} >
                        <Image source={require('../../assets/back.png')} style={styles.cameraIcon} />


                    </Pressable>
                    <Text ml={4} fontWeight={'black'} fontSize={'2xl'}  >VitalMove</Text>
                </HStack>


                <HStack space={1} justifyContent={'flex-start'} alignItems="center" margin={5} marginBottom={5} >

                    <Avatar
                        padding={0.5}
                        bg="#0AD98B"
                        size='lg'
                        source={imageSource}>
                    </Avatar>


                    <VStack ml={4}  >
                        <Text color="white" marginY={1} >@{`${user?.name} ${user?.lastName}`}</Text>
                        <Text color="#10b543" fontWeight={'medium'} >{user?.role === "ESTU" ? `Estudiante` : `Profesor`}</Text>
                    </VStack>

                </HStack>

                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'}  >
                    <Pressable bg="#10b543" rounded={'full'} padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={() => navigation.navigate('PrivacityScreen')}  >
                        <Image source={require('../../assets/privacity.png')} style={styles.cameraIcon} />

                    </Pressable>
                    <Text color="white" fontSize={'xl'} ml={5} onPress={() => navigation.navigate('PrivacityScreen')}   >
                        Privacidad
                    </Text>
                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                <Pressable bg="#10b543" rounded={'full'} padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={() => navigation.navigate('SecurityScreen')}  > 
                        <Image source={require('../../assets/security.png')} style={styles.cameraIcon} />

                    </Pressable>
                    <Text color="white" fontSize={'xl'} ml={5} onPress={() => navigation.navigate('SecurityScreen')}  >
                        Seguridad
                    </Text>

                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                <Pressable bg="#10b543" rounded={'full'} padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={() => alert('cambiar foto de perfil')} >
                        <Image source={require('../../assets/help.png')} style={styles.cameraIcon} />

                    </Pressable>
                    <Text color="white" fontSize={'xl'} ml={5} >
                        Ayuda
                    </Text>
                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                <Pressable bg="#10b543" rounded={'full'} padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={() => navigation.navigate('OursScreen')}> 
                        <Image source={require('../../assets/ours.png')} style={styles.cameraIcon} />

                    </Pressable>
                    <Text color="white" fontSize={'xl'} ml={5} onPress={() => navigation.navigate('OursScreen')} >
                        Nosotros
                    </Text>

                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />



                <TouchableOpacity style={styles.buttonTouchable} onPress={logoutUser} >
                    <Text color="white" fontSize={'lg'} textAlign={'center'} >Desconectar de @{`${user?.name} ${user?.lastName}`}</Text>
                </TouchableOpacity>




            </ImageBackground>
        </ScrollView>
    )

}

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
    }
});
