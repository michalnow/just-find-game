import React from "react";
import LoginForm from "../components/Login/LoginForm";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Linking,
  Text,
  TouchableOpacity
} from "react-native";

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#74b9ff" barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/logo.png")} />
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate("Home")}
          >
            <Text style={styles.buttonText}> Login </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoContainer}>
          <Text
            style={{ color: "blue", textAlign: "center" }}
            onPress={() => navigate("Registration")}
          >
            Dont't have account ? Click here to registry.
          </Text>
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
    height: 100
  },
  buttonContainer: {
    backgroundColor: "#74b9ff",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 12
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 20
  }
});
