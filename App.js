import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import React from "react";
import RegistrationScreen from "./src/screens/RegistrationScreen";
import EventScreen from "./src/screens/EventScreen";
import YourMatchesScreen from "./src/screens/YourMatchesScreen";
import AddEvent from "./src/screens/AddEvent";

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}
const AppStackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Registration: {
      screen: RegistrationScreen,
      navigationOptions: {
        header: null
      }
    },
    Event: {
      screen: EventScreen,
      navigationOptions: {
        header: null
      }
    },
    Add: {
      screen: AddEvent,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    headerMode: "screen"
  },
  {
    initialRouteName: "Login"
  }
);
