import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default class CloseEventVolleyball extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../images/football1.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15
  },
  image: {
    width: 300,
    height: 210,
    opacity: 0.4
  }
});
