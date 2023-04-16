import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const MainScreen = ({ navigation }) => {

  const handleShare = () => {
    // handle share functionality
  }

  const handleAddMotivation = () => {
    navigation.navigate('AddMotivation');
  }

  const handleConfig = () => {
    navigation.navigate('Config');
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>"Exercise is a celebration of what your body can do. Not a punishment for what you ate."</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleShare}>
          <AntDesign name="sharealt" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddMotivation}>
          <AntDesign name="pluscircleo" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.configButton} onPress={handleConfig}>
        <AntDesign name="setting" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginBottom: 50
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 50
  },
  configButton: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
});

export default MainScreen;