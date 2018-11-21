import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    StatusBar
} from 'react-native';

export default class secondScreen extends React.Component{
    static navigationOptions = {
        header: null,
        title: 'Login'
      }
    render() {
        return (
          <View>
              <Text>ELO</Text>
          </View>
        );
      }
}