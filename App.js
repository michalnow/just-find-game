import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'



const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
}
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
}
    }
  },
  {
    headerMode: 'screen'
  },
  {
    initialRouteName: 'Home'
  }
);

export default createAppContainer(MainNavigator);
