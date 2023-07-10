import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';

const NewPostScreen = ({ navigation }) => {

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);


  const [errors, setErrors] = useState(null);
  const [description, setDescription] = useState('');

  return (
    <ImageBackground
      source={require('../../assets/homeb.png')}
      resizeMode="cover">
      <View style={styles.viewContent}>
      </View>
    </ImageBackground>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  progressBarContainer: {
    marginTop: 20,
  },

  viewContent: {
    padding: 20,
  },
});
