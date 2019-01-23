import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { CheckBox } from "react-native-elements";

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <TextInput
          placeholder="username"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="default"
          style={styles.input}
          onSubmitEditing={() => {
            this.emailInput.focus();
          }}
          onChangeText={name => this.setState({ name })}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="e-mail"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          style={styles.input}
          ref={input => {
            this.emailInput = input;
          }}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={email => this.setState({ email })}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          returnKeyType="next"
          ref={input => (this.passwordInput = input)}
          style={styles.input}
          onSubmitEditing={() => this.repeatPasswordInput.focus()}
          onChangeText={password => this.setState({ password })}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="repeat password"
          autoCapitalize="none"
          secureTextEntry={true}
          returnKeyType="go"
          ref={input => (this.repeatPasswordInput = input)}
          style={styles.input}
          onChangeText={repeatpassword => this.setState({ repeatpassword })}
        />

        <CheckBox
          center
          title="Remind about events"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={() =>
            this.setState({
              checked: !this.state.checked
            })
          }
          checked={this.state.checked}
          style={{ marginBottom: 10, fontSize: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 50,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    color: "black",
    paddingHorizontal: 10
  },
  textIn: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    color: "black",
    paddingHorizontal: 10,
    opacity: 0.3
  }
});
