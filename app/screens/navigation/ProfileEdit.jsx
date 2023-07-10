import { ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity, PermissionsAndroid, Platform } from 'react-native';
import React, { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { request, PERMISSIONS } from 'react-native-permissions';
import { Avatar, Center, Divider, Heading, HStack, Input, TextArea, ScrollView, Text, VStack, Pressable, Select, CheckIcon} from 'native-base';
import { useToast } from 'react-native-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../../data/userAPI';

const ProfileEdit = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height;
    const user = useSelector((state) => state.auth.user)
    const profilePicture = useSelector((state) => state.auth.profilePhoto)
    const toast = useToast()
    const [updateUser] = useUpdateUserMutation()
    const dispatch = useDispatch()
    const [cameraPhoto, setCameraPhoto] = useState(null)

    // const [profilePicturePhone, setProfilePicturePhone] = useState(profilePicture
    //     ? { uri: 'https://vmtestphotos.s3.sa-east-1.amazonaws.com/' + profilePicture }
    //     : require('../../assets/iconoUser.png'));

    let imageSource = profilePicture
        ? { uri: 'https://vmtestphotos.s3.sa-east-1.amazonaws.com/' + profilePicture }
        : require('../../assets/iconoUser.png');

    let userRut = {
        rut: user?.rut
    }

    const genders = [
        { label: 'Mujer', value: 'female' },
        { label: 'Hombre', value: 'male' },
        { label: 'Otro', value: 'other' },
    ];

    const [selectedGender, setSelectedGender] = useState(user?.gender);

    const handleGenderChange = (value) => {
        setSelectedGender(value);
    };


    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Permiso para usar la cámara',
              message: 'La aplicación necesita permiso para acceder a la cámara.',
              buttonPositive: 'Aceptar',
              buttonNegative: 'Cancelar',
            }
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          const result = await request(PERMISSIONS.IOS.CAMERA);
          return result === 'granted';
        }
      };

      const openImagePicker = async () => {

        let options = {
            saveToPhotos: true,
            mediaType: 'image',
            quality: 0.5
        };


        const permissionGranted = await requestCameraPermission();

        if (permissionGranted) {
            const result = await launchCamera(options)

            if (result){
                setCameraPhoto({uri: result.assets[0].uri})
                console.log(result)
            } else {
                setCameraPhoto(imageSource)
            }



          
        } else if (!permissionGranted){
            return
        }
      
      
        // launchCamera(options, (response) => {
        //   if (response.didCancel) {
        //     console.log('Selección de imagen cancelada');
        //   } else if (response.error) {
        //     console.log('Error al seleccionar la imagen: ', response.error);
        //   } else {
        //     console.log(response)
        //     setProfilePicturePhone(response.assets[0].uri)
        //     console.log('Imagen seleccionada:', response.assets[0].uri);
        //   }
        // });
      }




    return (
        <ScrollView>
            <ImageBackground
                source={require('../../assets/homeb.png')}
                style={{ width: '100%', minHeight: windowHeight }}
                resizeMode="cover"
            >
                <HStack pt={12} justifyContent="flex-start" ml={2}>
                    <Pressable bg="white" rounded={'full'} padding={1} display={'flex'} justifyContent={'center'} alignItems={'center'} onPress={() => navigation.navigate('Profile')} >
                        <Image source={require('../../assets/back.png')} style={styles.cameraIcon} />

                    </Pressable>
                </HStack>


                <HStack pt={2} pb={2} space={20} justifyContent="center">
                    <Center h="10" w="40">
                        <Heading size="lg" >Perfil</Heading>
                    </Center>
                </HStack>
                <VStack space={1} alignItems="center" marginBottom={2}>
                    <Center>
                        {
                            cameraPhoto === null ? (
                                <Avatar
                                padding={0.5}
                                mb={4}
                                bg="#0AD98B"
                                size="xl"
                                source={imageSource}>
                            </Avatar>
                            ) : (
                                <Avatar
                                padding={0.5}
                                mb={4}
                                bg="#0AD98B"
                                size="xl"
                                source={cameraPhoto}>
                            </Avatar>
                            )
                        }

                        
                        <Pressable bg="#0AD98B" rounded={'full'} padding={1} display={'flex'} justifyContent={'center'} alignItems={'center'} style={{ position: 'absolute', top: 80 }} onPress={openImagePicker} >
                            <Image source={require('../../assets/camera.png')} style={styles.cameraIcon} />

                        </Pressable>

                    </Center>
                    <Center >
                        <Heading color="#10b543" size="md" fontWeight={'medium'} >Cambiar foto de perfil</Heading>
                    </Center>

                </VStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Nombre
                    </Text>
                    <Input
                        variant="underlined"
                        keyboardType="email-address"
                        defaultValue={user?.name}
                        autoCapitalize="none"
                        borderBottomWidth={0}
                        style={styles.inputStyle}
                        width={'80%'}
                        fontWeight={'medium'}
                    />
                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Apellido
                    </Text>
                    <Input
                        variant="underlined"
                        keyboardType="email-address"
                        defaultValue={user?.lastName}
                        autoCapitalize="none"
                        borderBottomWidth={0}
                        style={styles.inputStyle}
                        width={'80%'}
                        fontWeight={'medium'}
                    />
                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Bio
                    </Text>
                    <TextArea
                        variant="underlined"
                        keyboardType="email-address"
                        defaultValue={user?.bio ? user?.bio : ""}
                        numberOfLines={2}
                        width={'80%'}
                        fontWeight={'medium'}
                        borderBottomWidth={0}
                        marginTop={6}
                    />

                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                    <Text color="#10b543" fontWeight='medium' fontSize={'lg'} width={'100%'} >
                        Información personal
                    </Text>


                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Email
                    </Text>
                    <Input
                        variant="underlined"
                        keyboardType="email-address"
                        defaultValue={user?.email}
                        autoCapitalize="none"
                        borderBottomWidth={0}
                        style={styles.inputStyle}
                        width={'80%'}
                        fontWeight={'medium'}
                        isDisabled={true}
                    />
                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Teléfono
                    </Text>
                    <Input
                        variant="underlined"
                        keyboardType="email-address"
                        defaultValue={user?.phone ? user?.phone : ""}
                        autoCapitalize="none"
                        borderBottomWidth={0}
                        style={styles.inputStyle}
                        width={'80%'}
                        fontWeight={'medium'}
                    />
                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Sexo
                    </Text>
                    <Select
                        selectedValue={selectedGender}
                        minWidth={windowWidth / 1.4}
                        variant="underlined"
                        onValueChange={handleGenderChange}
                        placeholder="Seleccione el sexo"
                        _selectedItem={{
                            bg: 'teal.600',
                            endIcon: <CheckIcon size={4} />,
                        }}
                        borderBottomWidth={0}
                    >
                        {genders.map((gender, index) => (
                            <Select.Item key={index} label={gender.label} value={gender.value} />
                        ))}
                    </Select>
                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Edad
                    </Text>
                    <TextArea
                        variant="underlined"
                        keyboardType="number-pad"
                        defaultValue={`${user?.age ? user?.age : ""}`}
                        numberOfLines={2}
                        width={'80%'}
                        fontWeight={'medium'}
                        borderBottomWidth={0}
                        marginTop={12}
                        color={'white'}
                    />

                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Peso
                    </Text>
                    <TextArea
                        variant="underlined"
                        keyboardType="number-pad"
                        defaultValue={`${user?.weight ? user?.weight : ""}`}
                        numberOfLines={2}
                        width={'60%'}
                        fontWeight={'medium'}
                        borderBottomWidth={0}
                        marginTop={12}
                        color={'white'}
                    />
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Kg
                    </Text>

                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} marginX={3} height={'12'} >
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Estatura
                    </Text>
                    <TextArea
                        variant="underlined"
                        keyboardType="number-pad"
                        defaultValue={`${user?.size ? user?.size : ""}`}
                        numberOfLines={2}
                        width={'60%'}
                        fontWeight={'medium'}
                        borderBottomWidth={0}
                        marginTop={12}
                        color={'white'}
                    />
                    <Text color="white" fontWeight='medium' width={'20%'} >
                        Cm
                    </Text>

                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />



                <TouchableOpacity style={styles.buttonTouchable} onPress={() => navigation.navigate('Profile')} >
                    <Text color="white" fontSize={'lg'} textAlign={'center'} >Guardar cambios</Text>
                </TouchableOpacity>

            </ImageBackground>
        </ScrollView>
    )
}

export default ProfileEdit

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
        marginVertical: 7,
        marginHorizontal: 24,
        backgroundColor: "#08c67d",
        borderRadius: 15,
        textAlign: 'center',
        paddingVertical: 10,
    },

    inputStyle: {
        borderColor: 'white',
        fontSize: 12
    },
    cameraIcon: {
        width: 20,
        height: 20
    }
});