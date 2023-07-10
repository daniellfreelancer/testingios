import { ImageBackground, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react'
import { Avatar, Button, Center, Divider, Heading, HStack, IconButton, ScrollView, Text, VStack, } from 'native-base';
import { useDispatch, useSelector } from 'react-redux'

import Edad from '../../assets/edad.png'
import Peso from '../../assets/peso.png'
import Estatura from '../../assets/altura.png'
import IMC from '../../assets/indicemc.png'


const ProfileScreen = ({ navigation }) => {

  const windowHeight = Dimensions.get('window').height;
  const user = useSelector((state) => state.auth.user)
  const profilePicture = useSelector((state) => state.auth.profilePhoto)

  console.log(user)
  console.log(profilePicture)

  let imageSource = profilePicture
    ? { uri: 'https://vmtestphotos.s3.sa-east-1.amazonaws.com/' + profilePicture }
    : require('../../assets/iconoUser.png');

  const heightInMeters = user?.size / 100;
  const weightInKg = user?.weight;
  const imcValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);



  const USER_DETAILS = [
    {
      title: 'Edad',
      value: `${user?.age ? user?.age : "--" } Años`,
      icon: Edad
    },
    {
      title: 'Peso',
      value: `${user?.weight ? user?.weight : "--"} Kg`,
      icon: Peso
    },
    {
      title: 'Estatura',
      value: `${user?.size ? user?.size : "--"} Cm`,
      icon: Estatura
    },
    {
      title: 'IMC',
      value: imcValue > 0 ? imcValue : "--",
      icon: IMC
    },
  ];

  return (


    <ScrollView>
      <ImageBackground
        source={require('../../assets/homeb.png')}
        style={{ width: '100%', minHeight: windowHeight }}
        resizeMode="cover"
      >
        <HStack pt={'20%'} pb={8} space={20} justifyContent="flex-end">
          <Center h="10" w="40">
            <Heading size="lg" >Perfil</Heading>
          </Center>
          <Center h="10" w="10" pr={10}>
            <IconButton
              icon={<Image source={require('../../assets/more.png')} style={styles.icons} />}
              variant="ghost"
              onPress={() => navigation.navigate('SettingsProfile')}
            />
          </Center>
        </HStack>
        <VStack space={1} alignItems="center">
          <Center>
            <Avatar
              padding={0.5}
              mb={5}
              bg="#0AD98B"
              size="xl"
              source={imageSource}>
            </Avatar>
          </Center>
          <Center>
            <Text bold>{user?.role === "ESTU" ? `Estudiante` : `Profesor`}</Text>
          </Center>
          <Center>
            <Text color="#2CA335" fontSize="lg" fontWeight={'bold'} >{`${user?.name} ${user?.lastName}`}</Text>
          </Center>
          <Center w="80">
            <Text fontSize="xs" textAlign={'center'} mx={10} >
              {user?.bio ? user?.bio : ''}
            </Text>
            <Text fontSize="xs" textAlign={'center'} mx={10} >
              Programa / Escuela
            </Text>
            <Text fontSize="xs" textAlign={'center'} mx={10} >
              Taller / Curso
            </Text>
          </Center>
        </VStack>
        <Divider bg="#0AD98B" mt={5} mb={5} />

        <VStack space={5} alignItems="center">
          <Center>
            <HStack space={8} justifyContent="center">
              {USER_DETAILS.map((ele) => (
                <Center key={ele.title} w="70">
                  <VStack>
                    <Center>
                      <IconButton
                        size={'lg'}
                        icon={<Image source={ele.icon} style={styles.icons} />}

                      />
                    </Center>
                    <Center>
                      <Text bold fontSize="md">
                        {ele.value}
                      </Text>
                    </Center>
                    <Center>
                      <Text fontSize="xs">{ele.title}</Text>
                    </Center>

                  </VStack>
                </Center>
              ))}
            </HStack>
          </Center>

          <Center mt={5} >
            <Button
              variant="ghost"
              size="lg"
              _text={{ color: "#0AD98B", fontSize: 17, fontWeight: 700 }}
              endIcon={<Image source={require('../../assets/geo.png')} style={styles.icons} />}>
              Santiago, Chile
            </Button>
          </Center>
        </VStack>

        <Button
          mt={5}
          variant="outline"
          borderColor="#0AD98B"
          _text={{ color: '#FFF' }}
          borderRadius={15}
          mx={6}
          onPress={() => navigation.navigate('EditProfile')}
        >
          Editar perfil
        </Button>
        {/* 
        <Divider bg="#0AD98B" mt={5} mb={5} /> */}

        {/* <View style={styles.contentImages}>
          {[1, 2].map((ele) => (
            <Center key={ele} m={1}>
              <Image
                source={ require('../../assets/imgPost.jpg') }
                alt="img post"
                resizeMode='cover'
                style={styles.imgPost}
              />
            </Center>
          ))}
        </View> */}
      </ImageBackground>
    </ScrollView>
  )
}

export default ProfileScreen

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
    width: 25,
    height: 25
  }
});