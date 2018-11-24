import React from 'react';
import { 
    View, 
    StyleSheet, 
    ScrollView,
    Text
} from 'react-native';

import CloseEventFootball from '../components/CloseEvent/CloseEventFootball'

export default class HomeScreen extends React.Component{
    static navigationOptions = {
        header: null,
        title: 'Login'
      }
    render() {
        return (
          <View style={styles.container}>
            <ScrollView contentContainerStyle={{justifyContent : 'center'}} style={styles.contentContainer}>
                   <CloseEventFootball />
                   <CloseEventFootball />
                   <CloseEventFootball />
                   <CloseEventFootball />
                   <CloseEventFootball />
                   <CloseEventFootball />
            </ScrollView>
            <View style={styles.bottomContainer}>
                  
            </View>
            
              
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        paddingVertical: 20,
    },
    bottomContainer:{
      width:200,
      height: 100,
    }

})