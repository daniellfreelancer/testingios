import React from 'react';
import { Center, Text, VStack, Heading, Pressable, Image } from 'native-base';

const SlideComponent = ({ title, body, color, onPress }) => {
  return (
    <Pressable onPress={() => onPress()}>
    <VStack space={4} alignItems="center">
      <Image
        source={require('../assets/logo.png')}
        alt="vital Move"
        size="xl"
        resizeMode="contain"
      />
      <Center w="64" h="20">
        <Heading fontSize="5xl" color={color}>
          {title}
        </Heading>
      </Center>
      <Center w="80" h="200">
        <Text fontSize="lg" color={color} textAlign="center" fontWeight={800}>
          {body}
        </Text>
      </Center>
    </VStack>
  </Pressable>
  )
}

export default SlideComponent

