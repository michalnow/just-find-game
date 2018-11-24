import React from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    StatusBar,
    Linking,
    Text,
} from 'react-native'; 

export default class CloseEventFootball extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image}
                source={require('../../images/football.jpg')} /> 
                
            </View>      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 200,
        height: 300,
        opacity: .1
    }

})