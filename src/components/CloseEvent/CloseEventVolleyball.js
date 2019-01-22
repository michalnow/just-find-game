import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";

export default class CloseEventVolleyball extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../images/voll.jpg")}
        >
          <Text style={styles.text}>Missing: 3</Text>
          <Text style={styles.text}>Level: Hard</Text>
          <Text style={styles.text}>10 pm. 24.01</Text>
          <Text style={styles.text}>ul. Wielicka 10</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 0,
    marginRight: 18,
    marginLeft: 15
  },
  image: {
    width: 300,
    height: 200,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
