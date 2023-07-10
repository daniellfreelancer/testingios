import { ImageBackground, Image, StyleSheet, Dimensions, TouchableOpacity, View } from 'react-native';
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
const OursScreen = ({ navigation }) => {
    const windowHeight = Dimensions.get('window').height;
    const [showData, setShowData] = useState(true)
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
                    <Text ml={4} fontWeight={'black'} fontSize={'2xl'}  >Nosotros</Text>


                </HStack>



                <Divider bg="#0AD98B" marginY={2} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="space-between" alignItems={'center'} marginX={3} height={'12'}  >
                    <Pressable bg="#10b543" rounded={'full'} padding={2.5} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                        <Image source={require('../../../assets/privacity.png')} style={styles.cameraIcon} />

                    </Pressable>
                    <Text color="white" fontSize={'xl'} ml={5} >
                        Nosotros
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

<HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} height={'56'} ml={6} pt={4}>
                    <VStack width={'100%'}>
                        <Heading size={'sm'}>Términos y condiciones</Heading>
                        <Text fontSize={'xs'} width={'100%'} height={'100%'} color={'gray.200'} pr={5}>
                            El Usuario acepta expresamente los Términos y Condiciones, siendo condición esencial para la utilizacion de la aplicación. En el evento en que se encuentre en desacuerdo con estos Términos y Condiciones, solicitamos abandonar la aplicación inmediatamente. Vital Move podrá modificar los presentes Términos y Condiciones, avisando a los usuarios de la aplicacion mediante publicación en la página web www.vitalmove.cl o mediante difusión de las modificaciones por algún medio electrónico, redes sociales, SMS y/o correo electrónico, lo cual se entenderá aceptado por el usuario si éste continua con el uso de la aplicacion.
                        </Text>
                    </VStack>
                </HStack>

                <Divider bg="#0AD98B" marginY={6} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} ml={6} height={'16'} pt={3}>
                    <VStack width={'100%'}>
                        <Heading size={'sm'}>Jurisdicción</Heading>
                        <Text fontSize={'xs'} width={'100%'} height={'100%'} color={'gray.200'} pr={5}>
                           Estos términos y condiciones y todo lo que tenga que ver con esta aplicación, se rigen por las leyes de Chile.
                        </Text>
                    </VStack>
                </HStack>
                
                <Divider bg="#0AD98B" marginY={6} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} ml={6} height={'32'} pt={4}>
                    <VStack width={'100%'}>
                        <Heading size={'sm'}>Uso de Información no Personal</Heading>
                        <Text fontSize={'xs'} width={'100%'} height={'100%'} color={'gray.200'} pr={5}>
                            Vital Move tambien recolecta Información no personal en forma agregada para seguimiento de datos como el número total de descargas de la aplicación. Utilizamos esta información, que permanece en forma agregada para entender el comportamiento de la aplicación.
                        </Text>
                    </VStack>
                </HStack>
                
                <Divider bg="#0AD98B" marginY={6} height={'0.1%'} />

                <HStack display={'flex'} flexDirection={'row'} justifyContent="flex-start" alignItems={'center'} ml={6} height={'20'} pt={4}>
                    <VStack width={'100%'}>
                        <Heading size={'sm'}>Uso de Direcciones IP</Heading>
                        <Text fontSize={'xs'} width={'100%'} height={'100%'} color={'gray.200'} pr={5}>
                            Una dirección de Protocolo de Internet (IP) es un conjunto de números que se asigna automáticamente a  su dispositivo móvil cuando usted...
                        </Text>
                    </VStack>
                </HStack>
                
                <Divider bg="#0AD98B" marginY={6} height={'0.1%'} />

                <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  height={'72'} ml={6} pt={2}>
                   
                        <Heading size={'sm'}>Seguridad</Heading>
                        <Text fontSize={'xs'} width={'100%'}  color={'gray.200'}  pr={5}>
                            Vital Move está comprometido en la protección de la seguridad de su información personal. Vital Move tiene implementados mecanismos de seguridad que aseguran la protección de la información personal, asi como los accesos únicamente al personal y sistemas autorizados también contra la pérdida, uso indebido y alteración de sus datos de usuario bajo nuestro control.
                        </Text>
                        <Text fontSize={'xs'} width={'100%'} color={'gray.200'} pt={4} pr={5}>
                        Excepto como se indica a continuación, sólo personal autorizado tiene acceso a la información que nos proporciona. Además, hemos impuesto reglas estructas a los empleados de Skandia con acceso a las bases de datos que almacenan información del usuario o a los servidores que hospedan nuestrso servicios.
                        </Text>


                </Box>

                <Divider bg="#0AD98B" marginY={6} height={'0.1%'} />

                <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}  height={'56'} ml={6} pt={4}>
                   
                   <Heading size={'sm'}>Licencia para Copiar para Uso Personal</Heading>
                   <Text fontSize={'xs'} width={'100%'}  color={'gray.200'}  pr={5} pb={2} >
                       Usted podrá leer, visualizar, imprimir y descargar el material de sus productos.
                   </Text>
                   <Text fontSize={'xs'} width={'100%'} color={'gray.200'} pt={2} pr={5}>
                   Ninguna parte de la aplicación podrá ser reproducida o transmitida o almacenada en otro sitio web o en otra forma de sistema de recuperación electrónico.
                   </Text>
                   <Text fontSize={'xs'} width={'100%'} color={'gray.200'} pt={2} pr={5}>
                   Ya sea que se reconozca especificamente o no, las marcas comerciales, las marcas de servicio y los logos visualizados en esta aplicación pertenecen al grupo de compañías Vital Move, sus socios promocionales u otros terceros.
                   </Text>

                  


           </Box>

           <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'}  width={'100%'} paddingY={4} >
           <Image source={require('../../../assets/logo-home.png')} style={styles.logoVM}  />
           </Box>
                        </>

                    ): null
                }



            </ImageBackground>
        </ScrollView>
    )
}

export default OursScreen


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
    switchStyle: {
        backgroundColor: 'gray.400'
    },
    logoVM:{
        width:150,
        height:60,
    }
});
