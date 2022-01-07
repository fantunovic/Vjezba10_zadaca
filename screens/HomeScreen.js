import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import * as Google from "expo-google-app-auth";
import { FontAwesome5 } from '@expo/vector-icons';

export function HomeScreen({ route, navigation }) {
  const handleGoogleSignIn = () => {
    const config = {
      iosClientId:
        "3800510974-jed14ng3mm8vbsucsaqofn0168ailrqq.apps.googleusercontent.com",
      androidClientId:
        "3800510974-jvnec8skp4tt71b96vjnvgfvtn3j4jfv.apps.googleusercontent.com",
      scopes: ["profile", "email"],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == "success") {
          const { email, name, photoUrl } = user;
          console.log("Signin successfull");
          setTimeout(
            () => navigation.navigate("Settings", { email, name, photoUrl }),
            1000
          );
        } else {
          console.log("Siging not successfull");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
      <Text style={styles.text}>{`Prijava putem,\nGoogle računa!`}</Text>

<FontAwesome5.Button style={styles.googleButton} name="google" onPress={handleGoogleSignIn}>
  <Text style={styles.googleText}>Log In With Google</Text>
</FontAwesome5.Button>

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
  googleButton: {
    backgroundColor: "rgb(77,121,53)",
    justifyContent: "center",
  },

  googleText: {
    color: "white"
  },

  button: {
    color: "black",
    width: 200,
    height: 200,
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
});
