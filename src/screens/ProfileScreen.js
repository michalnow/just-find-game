import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/avatar-default-icon.png")}
          />
          <Text style={styles.text}>TestName</Text>
          <Text style={styles.text}>SurnameTest</Text>
          <Text style={styles.text}>1999.12.24</Text>
          <Text style={styles.text}>Football</Text>
          <Text style={styles.text}>test@test.com</Text>
          <Text style={styles.text}>Remind about events: yes</Text>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigate("ProfileEdit")}
          >
            <Text style={styles.buttonText}> Edit profile </Text>
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
    height: 200,
    marginBottom: 30
  },
  buttonContainer: {
    backgroundColor: "#74b9ff",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
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
