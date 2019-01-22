import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";

import { createMaterialTopTabNavigator } from "react-navigation";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from "./SearchScreen";
import YourMatchesScreen from "./YourMatchesScreen";
import Icon from "react-native-vector-icons/Ionicons";
import CloseEventFootball from "../components/CloseEvent/CloseEventFootball";
import CloseEventVolleyball from "../components/CloseEvent/CloseEventVolleyball";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#74b9ff" barStyle="light-content" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
          style={styles.contentContainer}
        >
          <Text style={styles.text}>Football</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "center"
            }}
            style={styles.contentContainer}
          >
            <TouchableOpacity onPress={() => navigate("Event")}>
              <CloseEventFootball />
            </TouchableOpacity>
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
          <Text style={styles.text}>Volleyball</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "center"
            }}
            style={styles.contentContainer}
          >
            <CloseEventVolleyball />
            <CloseEventVolleyball />
            <CloseEventVolleyball />
            <CloseEventVolleyball />
            <CloseEventVolleyball />
            <CloseEventVolleyball />
            <CloseEventVolleyball />
            <CloseEventVolleyball />
          </ScrollView>
          <Text style={styles.text}>Basketball</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "center"
            }}
            style={styles.contentContainerBot}
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
        </ScrollView>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigate("Home")}
        >
          <Text style={styles.buttonText}> Add </Text>
        </TouchableOpacity>
        {/* <View style={styles.bottomContainer} /> */}
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
    paddingVertical: 10,
    marginBottom: 10
  },
  contentContainerBot: {
    paddingVertical: 20,
    marginBottom: 35
  },
  bottomContainer: {
    width: 200,
    height: 80
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonContainer: {
    backgroundColor: "#74b9ff",
    paddingVertical: 15,
    marginBottom: 5,
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
