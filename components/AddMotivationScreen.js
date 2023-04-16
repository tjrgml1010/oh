import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AddMotivationSentenceScreen({ navigation }) {
  const [sentence, setSentence] = useState("");

  const handleAddSentence = () => {
    // TODO: Implement saving the sentence to the database
    // and navigating back to the main screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your motivational sentence here"
        value={sentence}
        onChangeText={setSentence}
        multiline
        autoFocus
      />
      <Button title="Add" onPress={handleAddSentence} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  textInput: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    height: 200,
  },
});