import React from 'react';
import { View, Text } from 'react-native';

const MainScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/* logo */}
      {/* motivational quote text */}
      {/* share button */}
      {/* direct motivation button */}
      {/* configuration button */}
    </View>
  );
};

const AddMotivationScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/* text input for user to add their own motivation */}
      {/* button to submit the motivation */}
    </View>
  );
};

const ConfigScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      {/* configuration options */}
    </View>
  );
};

export { MainScreen, AddMotivationScreen, ConfigScreen };