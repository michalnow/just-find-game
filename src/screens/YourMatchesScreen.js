import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import CloseEventFootball from "../components/CloseEvent/CloseEventFootball";
import CloseEventVolleyball from "../components/CloseEvent/CloseEventVolleyball";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
            <CloseEventFootball />
          </ScrollView>
          <Text style={styles.text}>VolleyBall</Text>
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
          </ScrollView>
          <Text style={styles.text}>Baskteball</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: "center"
            }}
            style={styles.contentContainer}
          >
            <Text>You don't basketball matches this week</Text>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

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
  }
});
