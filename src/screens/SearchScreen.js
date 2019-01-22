import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import av from "../images/av.jpg";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [
        {
          missing: "2",
          level: "medium",
          dateH: "6pm 24.01",
          adress: "os.Kurdwanow 24"
        },
        {
          missing: "5",
          level: "easy",
          dateH: "8pm 26.01",
          adress: "ul. Narzymskiego 10"
        },
        {
          missing: "1",
          level: "hard",
          dateH: "6pm 22.01",
          adress: "os.Kazimierzowskie 30"
        },
        {
          missing: "3",
          level: "Pro",
          dateH: "8pm 27.01",
          adress: "os.Dywizjonu 303"
        },
        {
          missing: "6",
          level: "easy",
          dateH: "4pm 24.01",
          adress: "os. Na wzgórzach 32"
        }
      ],
      error: null
    };

    this.arrayholder = [
      {
        missing: "2",
        level: "medium",
        dateH: "6pm 24.01",
        adress: "os.Kurdwanow 24"
      },
      {
        missing: "5",
        level: "easy",
        dateH: "8pm 26.01",
        adress: "ul. Narzymskiego 10"
      },
      {
        missing: "1",
        level: "hard",
        dateH: "6pm 22.01",
        adress: "os.Kazimierzowskie 30"
      },
      {
        missing: "3",
        level: "Pro",
        dateH: "8pm 27.01",
        adress: "os.Dywizjonu 303"
      },
      {
        missing: "6",
        level: "easy",
        dateH: "4pm 24.01",
        adress: "os. Na wzgórzach 32"
      }
    ];
  }

  /* componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false
        });

        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };*/

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.level.toUpperCase()}   
      ${item.adress.toUpperCase()} ${item.dateH.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
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
    return (
      <List
        containerStyle={{
          borderTopWidth: 0,
          borderBottomWidth: 0
        }}
      >
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              roundAvatar
              title={`missing: ${item.missing} <place: ${item.adress} when: ${
                item.dateH
              }`}
              subtitle={`diffculty: ${item.level}`}
              avatar={av}
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.level}
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
