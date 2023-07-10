import React, { useState } from 'react';
import { Box, Center, Checkbox, FormControl, Heading, HStack, Input, ScrollView, Text,} from 'native-base';
import { ImageBackground, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSignInUserMutation } from '../../data/userAPI';
import { useToast } from "react-native-toast-notifications";
import { setCredentials, setPhotoState } from '../../data/userAuth';
import AsyncStorage from '@react-native-async-storage/async-storage'
const LoginScreen = ({ navigation }) => {

  const windowHeight = Dimensions.get('window').height;
  const toast = useToast()
  const [signInUser] = useSignInUserMutation()
  const dispatch = useDispatch()

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  function redirect() {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 1000)
  }


  const signIn = async () => {

    if (!email || !password) {
      toast.show('Por favor, completa todos los campos', { type: 'warning' });
      return;
    }

    const lowercaseEmail = email.toLowerCase();

    signInUser({ email: lowercaseEmail, password })
      .then((res) => {
        if (res.error) {
          let dataError = res.error;
          let dataMessage = dataError.data;
          toast.show(`${dataMessage.message}`, { type: 'danger' })
          console.log(dataMessage)
        } else {
          if (isChecked) {
            let dataResponse = res.data;
            console.log(dataResponse)
            toast.show(`${res?.data.message}`, { type: 'success' })
            dispatch(setCredentials(res?.data.response.student ||res?.data.response.admin ))
            dispatch(setPhotoState(res?.data.response.student?.imgUrl || res?.data.response.admin?.imgUrl))
            AsyncStorage.setItem('token', JSON.stringify(res?.data.response.token))
            redirect()
            setUserInfo({
              email: '',
              password: ''
            })
          } else {
            toast.show(`Acepta los términos y politicas de privacidad para iniciar sesión`, { type: 'warning' })
          }

        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const [isChecked, setIsChecked] = useState(true); // Estado inicial: marcado como true
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Invierte el valor del estado al hacer clic en el Checkbox
  };



  return (
    <ImageBackground
      source={require('../../assets/login.png')}
      style={{ width: '100%', minHeight: windowHeight, flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView>
        <Box safeAreaTop flex={1} margin={5}>
          <Center>
            <Center height={50} width={100} marginTop={12} >
              <Image
                source={require('../../assets/logo.png')}
                alt="vital Move"
                size="lg"
                resizeMode="contain"
                style={styles.imageStyle}
              />
            </Center>
          </Center>

          <Heading marginBottom={3} marginTop={2} color="white">
            Ingresar
          </Heading>

          <Text fontSize="md" marginBottom={2} color="white">
            Atrévete a mejorar y construye tu mejor versión uniéndote ahora
          </Text>

          <Box>
            <FormControl isRequired>
              <FormControl.Label>
                <Text color="white" fontWeight="bold">
                  Email
                </Text>
              </FormControl.Label>
              <Input
                variant="underlined"
                keyboardType="email-address"
                defaultValue={email}
                onChangeText={value => handleOnChangeText(value, 'email')}
                autoCapitalize="none"
                marginBottom={4}
                style={styles.inputStyle}
                borderBottomColor={'white'}
                placeholderTextColor={'gray.100'}
                placeholder="Ingresa tu email"
              />
            </FormControl>

            <FormControl isRequired>
              <FormControl.Label>
                <Text color="white" fontWeight="bold">
                  Contraseña
                </Text>
              </FormControl.Label>
              <Input
                variant="underlined"
                type="password"
                autoCapitalize="none"
                defaultValue={password}
                marginBottom={2}
                onChangeText={value => handleOnChangeText(value, 'password')}
                style={styles.inputStyle}
                borderBottomColor={'white'}
                placeholderTextColor={'gray.100'}
                placeholder="Ingresa tu contraseña"
              />
            </FormControl>
          </Box>

          <Box marginY={5} marginTop={20} >
            <HStack safeAreaBottom justifyContent="center">
              <Center marginLeft={2}  >
                {/* <Button
                  variant="unstyled"
                  color="white"
                //   onPress={() => navigation.navigate('RegisterScreen')}
                  >
                  <Text color="white">¿No tienes cuenta? Registrate</Text>
                </Button> */}
              </Center>
              <Center marginRight={5}>
                <Text color="white">¿Olvidaste tu contraseña?</Text>
              </Center>
            </HStack>
          </Box>

          <Box>
            {/* <Button
              marginBottom={7}
              backgroundColor="#08c67d"
              borderRadius={10}
              onPress={() => navigation.navigate('Home')}>
             <Text color="white" fontSize={'lg'} >Iniciar sesión</Text>
              
            </Button> */}
            <TouchableOpacity style={styles.buttonTouchable} onPress={signIn} >
              <Text color="white" fontSize={'lg'} textAlign={'center'}  >Iniciar sesión</Text>
            </TouchableOpacity>
            {/* <Button
              variant="outline"
              borderColor="#07C67D"
              height={12}
              marginBottom={7}
              borderRadius={10}
              display={'flex'}
              justifyContent={'flex-start'}
              leftIcon={
                <Image
                 style={styles.socialIcon}
                    resizeMode='contain'
                  source={require('../../assets/google.png')}
                  alt="google img"
                />
              }>
              <Text color="white" fontSize={'lg'} marginLeft={10}  >Continuar con Google</Text>
            </Button>
            <Button
              marginBottom={7}
              backgroundColor="#254689"
              borderRadius={10}
              height={12}
              display={'flex'}
              justifyContent={'flex-start'}
              leftIcon={
                <Image
                 style={styles.socialIcon}
                    resizeMode='contain'
                  source={require('../../assets/facebook.png')}
                  alt="google img"
                />
              }>
                <Text color="white" fontSize={'lg'} marginLeft={10} >Continuar con Facebook</Text>
              
            </Button> */}
          </Box>
          <HStack space={6}>
          <Checkbox
        marginTop={7}
        shadow={2}
        colorScheme="green"
        accessibilityLabel="Check para aceptar los términos y políticas de privacidad"
        isChecked={isChecked}
        onChange={handleCheckboxChange}
      >
              <Text color="#D7DDD8" >
                Acepto los términos y politicas de privacidad.
              </Text>
            </Checkbox>
          </HStack>

        </Box>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    justifyContent: 'center',
  },

  inputStyle: {
    borderColor: 'white',
    fontSize: 12
  },
  socialIcon: {
    width: 24

  },
  imageStyle: {
    // Estilos de la imagen
    width: 100,
    height: 70,
    marginTop: 12,
    marginBottom: 10
  },
  buttonTouchable: {
    margin: 7,
    backgroundColor: "#08c67d",
    borderRadius: 10,
    textAlign: 'center',
    paddingVertical: 10,
  }
});

export default LoginScreen;
