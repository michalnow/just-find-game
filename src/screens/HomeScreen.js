import React from 'react';
import { 
    View, 
    StyleSheet, 
    ScrollView,
    Text,
    StatusBar
} from 'react-native';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createMaterialTopTabNavigator} from 'react-navigation'

import SettingsScreen from './SettingsScreen'
import Icon from 'react-native-vector-icons/Ionicons'


import CloseEventFootball from '../components/CloseEvent/CloseEventFootball'


class HomeScreen extends React.Component{
    static navigationOptions = {
        header: null
      }
    render() {
        return (
          <View style={styles.container}>
            <StatusBar 
                backgroundColor='#74b9ff'
                barStyle='light-content'
            />
            <ScrollView contentContainerStyle={{justifyContent : 'center'}} style={styles.contentContainer}>
                   <Text>HOME</Text>
            </ScrollView>
            <View style={styles.bottomContainer}>
                  
            </View>              
          </View>
        );
      }
}

export default createMaterialTopTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor}) => (
                <Icon name="md-home" color={tintColor} size={20} />
            )
        }
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: {
            header: null,
            tabBarLabel: 'Settings',
            tabBarIcon:({tintColor}) => (
                <Icon name="md-settings" color={tintColor} size={20} />
            )
        }
    }    
},
{
    initialRouteName: 'Home',
    activeTintColor: '#74b9ff',
    tabBarPosition: 'bottom',
    shifting: true,
    tabBarOptions: {
        activeTintColor: '#74b9ff',
        inactiveTintColor: 'transparent',
        style: {
            backgroundColor: 'transparent'
        },
        indicatorStyle: {
            height: 0
        },
        showIcon: true
    }

  

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