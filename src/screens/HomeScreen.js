import React from 'react';
import { 
    View, 
    StyleSheet, 
    ScrollView,
    Text
} from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import SettingsScreen from './SettingsScreen'


import CloseEventFootball from '../components/CloseEvent/CloseEventFootball'

class HomeScreen extends React.Component{
    static navigationOptions = {
        header: null,
        title: 'Home'
      }
    render() {
        return (
          <View style={styles.container}>
            <ScrollView contentContainerStyle={{justifyContent : 'center'}} style={styles.contentContainer}>
                   <Text>HOME</Text>
            </ScrollView>
            <View style={styles.bottomContainer}>
                  
            </View>              
          </View>
        );
      }
}

export default createMaterialBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    Settings: {
        screen: SettingsScreen
    }    
},
{
    initialRouteName: 'Home',
    order:['Settings',"Home"],
    activeTintColor: '#74b9ff'
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainer: {
        paddingVertical: 20,
    },
    bottomContainer:{
      width:200,
      height: 100,
    }

})