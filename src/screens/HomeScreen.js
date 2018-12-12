import React from "react";
import { View, StyleSheet, ScrollView, Text, StatusBar } from "react-native";

import { createMaterialTopTabNavigator } from "react-navigation";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import YourMatchesScreen from "./YourMatchesScreen";
import Icon from "react-native-vector-icons/Ionicons";
import CloseEventFootball from "../components/CloseEvent/CloseEventFootball";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#74b9ff" barStyle="light-content" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center"
          }}
          style={styles.contentContainer}
        >
          <CloseEventFootball />
          <CloseEventFootball />
          <CloseEventFootball />
          <CloseEventFootball />
          <CloseEventFootball />
          <CloseEventFootball />
          <CloseEventFootball />
          <CloseEventFootball />
          <CloseEventFootball />
          <CloseEventFootball />
        </ScrollView>
        <View style={styles.bottomContainer} />
      </View>
    );
  }
}

export default createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: <Text style={{ fontSize: 13 }}>Home</Text>,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-home" color={tintColor} size={20} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: <Text style={{ fontSize: 13 }}>Search</Text>,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-search" color={tintColor} size={20} />
        )
      }
    },
    YourMatches: {
      screen: YourMatchesScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: <Text style={{ fontSize: 13 }}>Matches</Text>,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-football" color={tintColor} size={20} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
        tabBarLabel: <Text style={{ fontSize: 13 }}>Profile</Text>,
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-contact" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    activeTintColor: "#74b9ff",
    tabBarPosition: "bottom",
    shifting: true,
    tabBarOptions: {
      activeTintColor: "#74b9ff",
      inactiveTintColor: "transparent",
      style: {
        backgroundColor: "transparent"
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  contentContainer: {
    paddingVertical: 20
  },
  bottomContainer: {
    width: 200,
    height: 100
  }
});
