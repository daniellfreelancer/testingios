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
    Box
} from 'native-base';
const SecurityScreen = ({ navigation }) => {

    const windowHeight = Dimensions.get('window').height;
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showData, setShowData] = useState(true)



    const [showPassword, setShowPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)





    const validatePassword = () => {
        // Expresiones regulares para verificar los requisitos de la contraseña
        const uppercaseRegex = /[A-Z]/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        // Verificar la longitud de la contraseña
        if (password.length <= 4) {
            setPasswordError('La contraseña debe tener más de 4 dígitos');
            return false;
        }

        // Verificar si hay al menos una letra mayúscula
        if (!uppercaseRegex.test(password)) {
            setPasswordError('La contraseña debe contener al menos una letra mayúscula');
            return false;
        }

        // Verificar si hay al menos un carácter especial
        if (!specialCharRegex.test(password)) {
            setPasswordError('La contraseña debe contener al menos un carácter especial');
            return false;
        }

        if (password !== confirmPassword) {
            setPasswordError('Las contraseñas no coinciden');
            return false;
        }



        // La contraseña cumple con los requisitos
        setPasswordError('');
        return true;
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
                    <Text ml={4} fontWeight={'black'} fontSize={'2xl'}  >Seguridad</Text>
                </HStack>

                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent='flex-start' alignItems={'center'} marginX={3} height={'12'}  >
                    <Pressable bg="#10b543" rounded={'full'} padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <Image source={require('../../../assets/key.png')} style={styles.cameraIcon} />
                    </Pressable>
                    <Text color="white" fontSize={'xl'} ml={5} >
                        Contraseña
                    </Text>

                    {
                        showData ? (
                            <Pressable padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} alignSelf={'flex-end'} ml={32} onPress={() => setShowData(false)} >
                                <Image source={require('../../../assets/up-arrow.png')} style={styles.cameraIcon} />
                            </Pressable>
                        ) : (
                            <Pressable padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} alignSelf={'flex-end'} ml={32} onPress={() => setShowData(true)} >
                                <Image source={require('../../../assets/down-arrow.png')} style={styles.cameraIcon} />
                            </Pressable>
                        )
                    }
                </HStack>
                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                {
                    showData ? (
                        <>
                            <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} ml={3} height={'12'} pt={5} width={'100%'} >

                                <FormControl width={'80%'}  >
                                    <FormControl.Label>
                                        <Text color="white" fontWeight="bold">
                                            Contraseña actual
                                        </Text>
                                    </FormControl.Label>
                                    <Input
                                        variant="underlined"
                                        type={showPassword ? "text" : "password"}
                                        autoCapitalize="none"
                                        defaultValue={""}
                                        style={styles.inputStyle}
                                        borderBottomWidth={0}a
                                        placeholderTextColor={'gray.200'}
                                        cursorColor={'white'}

                                    />
                                </FormControl>

                                <Pressable padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} alignSelf={'center'} onPress={()=> setShowPassword(!showPassword) }  >
                                <Image source={showPassword ? require('../../../assets/hide-pass.png') : require('../../../assets/view-pass.png') } style={styles.cameraIcon} />
                            </Pressable>

                            </HStack>
                            <Divider bg="#0AD98B" marginY={4} height={'0.1%'} />
                            <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} ml={3} height={'10'} pt={0}>
                                <FormControl >
                                    <FormControl.Label>
                                        <Text color="white" fontWeight="bold">
                                            Nueva contraseña
                                        </Text>
                                    </FormControl.Label>
                                    <Input
                                        variant="underlined"
                                        type="text"
                                        autoCapitalize="none"
                                        defaultValue={""}
                                        style={styles.inputStyle}
                                        borderBottomWidth={0}
                                        placeholder='Ingrese su nueva contraseña'
                                        placeholderTextColor={'gray.200'}
                                        cursorColor={'white'}
                                        onChangeText={text => setPassword(text)}
                                        onBlur={validatePassword}
                                    />
                                </FormControl>
                            </HStack>
                            <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />
                            <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} ml={3} height={'10'} pt={4}>
                                <FormControl >
                                    <FormControl.Label>
                                        <Text color="white" fontWeight="bold">
                                            Confirmar contraseña
                                        </Text>
                                    </FormControl.Label>
                                    <Input
                  variant="underlined"
                  type="text"
                  autoCapitalize="none"
                  defaultValue={""}
                  style={styles.inputStyle}
                  borderBottomWidth={0}
                  placeholder='Confirme su nueva contraseña'
                  placeholderTextColor={'gray.200'}
                  cursorColor={'white'}
                  onChangeText={text => setConfirmPassword(text)}
                  onBlur={validatePassword}
                                    />
                                </FormControl>
                            </HStack>

                            <Divider bg="#0AD98B" marginY={4} height={'0.1%'} />

                            <Box >
                                {
                                    passwordError ? (
                                        <>
                                            <Text style={styles.textWarning}>La contraseña no cumple con los parámetros especificados</Text>
                                            <Text style={styles.textWarning}>Debe contener:</Text>
                                            <Text style={styles.textWarning}>{passwordError}</Text>
                                        </>
                                    ) : null
                                }

                            </Box>

                            <TouchableOpacity
                                style={styles.buttonTouchable}
                                onPress={() => {
                                    if (validatePassword()) {
                                        navigation.navigate('Profile');
                                    }
                                }}
                                disabled={passwordError !== ''}
                            >
                                <Text color="white" fontSize={'lg'} textAlign={'center'} >Confirmar</Text>
                            </TouchableOpacity>
                        </>
                    ) : null
                }
            </ImageBackground>
        </ScrollView>
    )
}

export default SecurityScreen

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
        backgroundColor: "#08c67d",
        borderColor: "#08c67d",
        borderRadius: 15,
        textAlign: 'center',
        paddingVertical: 10,
        borderWidth: 1,
        marginTop: 60
    },

    inputStyle: {
        borderColor: 'white',
        fontSize: 12
    },
    cameraIcon: {
        width: 22,
        height: 22
    },
    switchStyle: {
        backgroundColor: 'gray.400'
    },
    textWarning: {
        color: "#10b543",
        marginHorizontal: 10,
        fontSize: 12,
        lineHeight: 14
    }
});
