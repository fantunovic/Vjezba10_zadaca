import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from "react-native";

export function SettingsScreen({ route, navigation }) {
  const { name } = route.params;
  const { email } = route.params;
  const { photoUrl } = route.params;
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.screen}>
  
      <Text style={styles.text}>Login successfull</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.textmail}>{email}</Text>
       <Image
        style={styles.image}
        source={{uri: photoUrl}}
      />
      <View style={styles.btn}>
      <Button title="Logout" onPress={handleHomePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AEFC84",
  },
  image: {
    width: 200,
    height: 200,
    margin: 5,
    padding: 5
  },
  text: {
    color: "black",
    margin: 5,
    padding: 5,
    textAlign: "center",
    fontSize: 25,
    color: "black",
    fontWeight: "bold"
  },

  textmail: {
    color: "black",
    margin: 5,
    padding: 5,
    textAlign: "center",
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },

  btn: {
    margin: 5,
    padding: 5
  },
 
});
