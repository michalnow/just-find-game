import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import t from "tcomb-form-native";
import axios from "axios";

const Form = t.form.Form;

const missNum = t.refinement(t.Number, n => {
  return n > 0;
});

const Event = t.struct({
  address: t.String,
  when: t.String,
  type: t.String,
  difficulty: t.String,
  missing: missNum,
  description: t.maybe(t.String)
});

const options = {
  fields: {
    address: {
      error: "Without adress how you can find people to play ?"
    },
    when: {
      error: "When others should come ?"
    },
    type: {
      error:
        "You should tell others what type of play, you're going to organize"
    },
    missing: {
      error: "Inform others how many people are missing"
    }
  }
};

export default class AddEvent extends Component {
  constructor() {
    super();
  }

  handleSubmit = event => {
    event.preventDefault();

    const eventObj = this.refs.form.getValue();
    if (eventObj) {
      // if validation fails, value will be null
      console.log(eventObj);
    }

    console.log(eventObj);

    axios({
      headers: {
        "Content-Type": "application/json; charset=utf8"
      },
      method: "POST",
      url: `http://192.168.0.171:8080/api/event`,
      data: eventObj
    })
      .then(res => {
        console.log(eventObj);
        console.log(res);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center"
          }}
          style={styles.container}
        >
          <Form ref="form" type={Event} options={options} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "white"
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
