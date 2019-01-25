import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import av from "../images/av.jpg";
import axios from "axios";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      events: [],
      error: null
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.setState({ loading: true });
    axios.get("http://192.168.0.171:8080/api/event/all").then(res => {
      const events = res.data;
      this.setState({ loading: false, events });

      console.log(events);
      this.arrayholder = res.data;
    });
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  searchFilterFunction = text => {
    console.log(this.arrayholder);
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.adress.toUpperCase()} ${item.when.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      events: newData
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.events}
          renderItem={({ item }, key) => (
            <ListItem
              roundAvatar
              title={`adress: ${item.adress} when: ${item.when}`}
              subtitle={` difficulty: ${item.difficulty} missing: ${
                item.missing
              }`}
              avatar={av}
              containerStyle={{ borderBottomWidth: 0 }}
              key={key}
            />
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
