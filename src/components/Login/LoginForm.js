import React from 'react';
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity,
    TextInput,
    StatusBar
} from 'react-native';



export default class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.onDone = this.onDone.bind(this)
    }

    onDone() {
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <View style={StyleSheet.container}>
                <TextInput 
                    placeholder="username or email"
                    autoCapitalize = 'none'
                    autoCorrect={false}
                    returnKeyType='next'
                    keyboardType='email-address'
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={(name) => this.setState({name})}
                />
                <TextInput 
                    placeholder="password"
                    autoCapitalize = 'none'
                    secureTextEntry={true}
                    returnKeyType='go'
                    ref={(input) => this.passwordInput = input}
                    style={styles.input}
                    onChangeText={(password) => this.setState({password})}
                />

                 <TouchableOpacity
                    style={styles.buttonContainer} 
                    onPress={onDone=this.onDone.bind(this)}
                >
                    <Text style={styles.buttonText}> Login </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 50,
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 15,
        color: 'black',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#74b9ff',
        paddingVertical: 15,
        marginBottom: 20,
        marginLeft: 50,
        marginRight: 50,
        borderWidth: 0,
        borderColor: 'transparent',
        borderRadius: 12
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    }
})