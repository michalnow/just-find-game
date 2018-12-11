import React from "react";

import RegisterForm from "../components/Login/RegisterForm";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";

class RegistrationScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#74b9ff" barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/logo.png")} />
        </View>
        <View style={styles.formContainer}>
          <RegisterForm />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={styles.buttonText}> Submit </Text>
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
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 52
  },
  formContainer: {
    alignItems: "center",
    flexGrow: 4,
    justifyContent: "center",
    marginBottom: 25
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
    borderRadius: 12,
    padding: 90
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 20
  }
});

export default RegistrationScreen;
