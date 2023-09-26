import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ProfileScreen = () => {
  const [avatarSource, setAvatarSource] = useState(null);

  const handleImageUpload = () => {
    ImagePicker.showImagePicker((response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setAvatarSource({ uri: response.uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImageUpload} style={styles.avatarContainer}>
        {avatarSource ? (
          <Image source={avatarSource} style={styles.avatar} />
        ) : (
          <Text>Upload Profile Picture</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.header}>Your Name</Text>
      <Text style={styles.content}>
        Information about yourself goes here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: 'hidden',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  avatar: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
  },
});

export default ProfileScreen;
