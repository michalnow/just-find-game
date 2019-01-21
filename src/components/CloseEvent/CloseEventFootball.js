import React from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";

export default class CloseEventFootball extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../images/football1.png")}
        >
          <Text style={styles.text}>Missing: 2</Text>
          <Text style={styles.text}>Level: medium</Text>
          <Text style={styles.text}>6 pm. 24.01</Text>
          <Text style={styles.text}>os.Kurdwanów 72 Orlik</Text>
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
    marginBottom: 0
  },
  image: {
    width: 300,
    height: 200,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
