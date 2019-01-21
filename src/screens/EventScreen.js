import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";

export default class EventScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/logo.png")} />
          <Text style={styles.text}>Missing: 2</Text>
          <Text style={styles.text}>Level: medium</Text>
          <Text style={styles.text}>6 pm. 24.01</Text>
          <Text style={styles.text}>os.Kurdwanów 72 Orlik</Text>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate("Home")}
          >
            <Text style={styles.buttonText}> Enroll </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 2,
    justifyContent: "center"
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 50
  },
  buttonContainer: {
    backgroundColor: "#74b9ff",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 12,
    padding: 90
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 20
  },
  text: {
    fontSize: 25,
    fontWeight: "bold"
  }
});
