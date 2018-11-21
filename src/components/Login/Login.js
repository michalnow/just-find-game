import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    StatusBar,
    Linking,
    Text,
} from 'react-native'; 
import LoginForm from './LoginForm'

export default class Login extends React.Component{
  render() {
    return (
      <View style={styles.container}>
      <StatusBar 
         backgroundColor='#74b9ff'
         barStyle='light-content'
       />
        <View style={styles.logoContainer}>
            <Image 
            style={styles.logo}
            source={require('../../images/logo.png')} /> 
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
        <View style={styles.logoContainer}>
          <Text style={{color: 'blue' ,textAlign: 'center'}}
              onPress={() => Linking.openURL('http://google.com')}>
             Dont't have account ? Click here to registry.
          </Text>
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
    logoContainer: {
        alignItems: 'center',
        flexGrow: 2,
        justifyContent: 'center'
    },
    logo:{
      width:200,
      height: 100,
    }

})